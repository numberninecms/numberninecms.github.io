---
prev: /developers/howto/user-management/create-a-built-in-role.md
next: /developers/reference/events.md
---

# Extend the registration form

Your app might require some extra fields to the registration form.

Thanks to the `RegistrationFormBuilderEvent` event, you can intercept the form builder and customize it as you wish.

## Retrieve the form builder

Let's create an event subscriber: `src/EventSubscriber/RegistrationFormBuilderEventSubscriber.php`.

```php
namespace App\EventSubscriber;

use NumberNine\Event\RegistrationFormBuilderEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

final class RegistrationFormBuilderEventSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            RegistrationFormBuilderEvent::class => 'build',
        ];
    }

    public function build(RegistrationFormBuilderEvent $event): void
    {
        $event->getBuilder()
            ->add('accountType', ChoiceType::class, [
                'mapped' => false,
                'choices' => [
                    'Free trial' => 'free_trial',
                    'Pro' => 'pro',
                ],
            ])
        ;
    }
}
```

## Override the template

Then you'll need to override the registration form template, as [everything can be overriden](/developers/architecture/theming.md).

Create a file named `src/Component/Account/RegistrationForm/template.html.twig` and put this content inside:

```twig
{{ form_start(form) }}
    {{ form_row(form.accountType) }} {# <- this is what we override #}
    {{ form_row(form.username) }}
    {{ form_row(form.email) }}
    {{ form_row(form.plainPassword) }}

    <p class="text-gray-500 mb-5">
        <small>
            {% trans with {'%path%': N9_path(PAGE_FOR_PRIVACY)} %}Your personal data will be used to support your experience throughout this website,
            to manage access to your account, and for other purposes described in our <a href="%path%">privacy policy</a>.{% endtrans %}
        </small>
    </p>

    <button class="btn btn-color-primary">{{ 'Register'|trans }}</button>
{{ form_end(form) }}
```

Here you go.

The form now looks like this:

![Overriden registration form](/images/screenshots/howto_extend_registration_form.jpg)

## Handle form submission

When the user clicks `Register`, a new `User` entity is created, and the user logged in. But our new `accountType` field is useless.

Now, create a new event subscriber that will intercept the `RegistrationFormSuccessEvent` event: `src/EventSubscriber/RegistrationFormSuccessEventSubscriber.php`.

```php
namespace App\EventSubscriber;

use NumberNine\Event\RegistrationFormSuccessEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

final class RegistrationFormSuccessEventSubscriber implements EventSubscriberInterface
{
    public function __construct(
        // inject any service you need
    ) {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            RegistrationFormSuccessEvent::class => 'process',
        ];
    }

    public function process(RegistrationFormSuccessEvent $event): void
    {
        $user = $event->getUser();
        $form = $event->getForm();
        $response = $event->getResponse();

        $accountType = $form['accountType']->getData();

        // Do what you need here, and override the response if needed.
    }
}
```

::: warning
If you change something in the `$user` entity and persist it, you'll need to reauthenticate. To authenticate the user, inject `NumberNine\Security\UserAuthenticator` service and retrieve the new response:

```php
$response = $this->authenticator->authenticateUser($user);
$event->setReponse($response);
```
:::

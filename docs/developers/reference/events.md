---
prev: /developers/howto/user-management/create-a-built-in-role.md
---

# Events

NumberNine dispatches lots of events to let you hook into the default behavior and
modify it to your needs.

Events are objects containing data that you can change.

To intercept these events, simply create a service implementing Symfony's `EventSubscriberInterface`.

As an example:

```php
namespace App\EventSubscriber;

use NumberNine\Event\HeadEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

final class HeadEventSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            HeadEvent::class => 'alterHeadEvent',
        ];
    }

    public function alterHeadEvent(HeadEvent $event): void
    {
        // do what you need here
    }
}
```

## Theme events

### HeadEvent

`HeadEvent` is dispatched when the theme calls the Twig function `N9_head()`.

Although you could directly modify `base.html.twig` to your needs, it defeats extensibility.
Thanks to this event, plugins or themes can add whatever they need in the head section of
the page.

NumberNine itself hooks into `HeadEvent` and dispatches other events, as seen below.

### HeadTitleEvent

`HeadTitleEvent` contains the title of the page.

### HeadStylesheetsEvent

`HeadStylesheetsEvent` contains a list of rendered HTML style tags.

### HeadThemeCustomStylesEvent

`HeadThemeCustomStylesEvent` contains a CSS dynamic sheet that is rendered after all included sheets.
This is useful to let the user override some properties.

### HeaderScriptsEvent

`HeadThemeCustomStylesEvent` contains a list of rendered HTML script tags.

### FooterEvent

`FooterEvent` is dispatched when the theme calls the Twig function `N9_footer()`.

## Form events

### LoginPathsEvent

`LoginPathsEvent` contains the list of pages that host a login form. This is used by the login authenticator
to know if it's supposed to handle login on your page.

### RegistrationFormBuilderEvent

`RegistrationFormBuilderEvent` contains the registration form builder so you can modify the registration
behavior.

### RegistrationFormSuccessEvent
`RegistrationFormSuccessEvent` is dispatched when the registration is successful and the user logged in.
NumberNine's default behavior is to listen to this even then notify the user by email.

### HiddenCustomFieldsEvent
`HiddenCustomFieldsEvent` allows you to hide custom fields in the content entity edition form. It's useful
if you store some data in custom fields that you don't want the user to know about, or if these custom fields
have a dedicated panel or card. As an example, a page template is stored as `page_template` custom field,
but shown to the user as a card with a `select` form element. As the user should not have access to this
custom field to modify it freely, it's hidden using this event.


## Registration events

### AreasRegistrationEvent

`AreasRegistrationEvent` lets you add areas to your theme. If you want to know more about areas, please
[read this page](/developers/architecture/theming.md#areas).

### CapabilitiesListEvent

`CapabilitiesListEvent` contains the full list of capabilities. To add a new capability, follow
[this guide](/developers/howto/user-management/create-a-capability.md).

### ContentTypeRegistrationEvent

`ContentTypeRegistrationEvent` contains content types that will be used in your app. To register new
content types, follow [this guide](/developers/howto/content/create-a-content-type.md).

### ImageSizesEvent

`ImageSizesEvent` contains the list of the thumbnails sizes that need to be generated. You can add new
sizes and they will be automatically generated when you regenerate the thumbnails.

### RouteRegistrationEvent

`RouteRegistrationEvent` contains the list of registered routes. Listening to this event enables you
to create dynamic routes.


## General events

### ComponentProcessParametersEvent

`ComponentProcessParametersEvent` is useful if you need to alter the content of a
[component](/developers/architecture/theming.md#components)'s parameters just before it's get rendered with Twig.

### ContentEntityShowForwardEvent

`ContentEntityShowForwardEvent` contains the response that should render the current entity. You can alter
this response by forwarding it to another controller. Use `ForwardRequestTrait` to ease forwarding.

### CurrentContentEntityEvent

`CurrentContentEntityEvent` is dispatched before the rendering of the page. In a service or shortcode,
listen to this event to know what you're dealing with.

### CurrentRequestTermEvent

`CurrentRequestTermEvent` is dispatched on term index pages before the rendering of the page. In a service
or shortcode, listen to this event to know what you're dealing with.

### MainLoopQueryEvent

`MainLoopQueryEvent` contains the query builder of the current page query for a given content type. Listen
to this event if you need to add or alter criterias.

### PaginatorEvent

`PaginatorEvent` contains the paginator of the current page. Useful if you need it, for example in a shortcode.

### ShortcodeProcessParametersEvent

`ShortcodeProcessParametersEvent` is useful if you need to alter the content of a
[shortcode](/developers/architecture/theming.md#shortcodes)'s parameters just before it's get rendered with Twig.

### TemplateToRenderEvent

`TemplateToRenderEvent` contains the current Twig template about to be rendered. You can change the template to
render depending on your needs. As an example, NumberNine alters the template if it detects that the `My account`
is about to be rendered.

### UpdateContentEntityEvent

`UpdateContentEntityEvent` is dispatched just before a content entity is about to be saved in database from the
admin panel. Use it to apply extra modifications.


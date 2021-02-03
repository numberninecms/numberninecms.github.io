---
description: 'Create a content type'
sidebar: 'docs'
prev: '/docs/howto/theming/create-a-shortcode/'
next: '/docs/howto/user-management/create-a-capability/'
---

# Create a content type

To understand what are content types, [read this page](/docs/architecture/content-types/).

## Define your needs

The first thing to consider is: do you need a new Doctrine entity class?
It really depends if you need more fields that can't be covered by the JSON custom fields.

As an example, we'll want to create a portfolio with photo galleries, but we also want our blog
with standard articles, unrelated to the galleries.

In this case, our gallery can be a simple `[gallery]` shortcode placed inside the editor:
no need to create an entity as we already have everything.

So we need to create:

* A page named `Portfolio` which will be our paginated galleries archive
* A content type `photo_gallery`

## Register a new content type

To register our new content type, create a new file `src/EventSubscriber/ContentTypeRegistrationEventSubscriber.php`:

```php
namespace App\EventSubscriber;

use NumberNine\Entity\Post;
use NumberNine\Event\ContentTypeRegistrationEvent;
use NumberNine\Model\Content\ContentType;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

final class ContentTypeRegistrationEventSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            ContentTypeRegistrationEvent::class => 'register'
        ];
    }

    public function register(ContentTypeRegistrationEvent $event): void
    {
        $event->addContentType(
            new ContentType(
                [
                    'name' => 'photo_gallery',
                    'entity_class_name' => Post::class,
                    'permalink' => '/photo-gallery/{slug}',
                    'icon' => 'mdi-folder-multiple-image',
                ]
            )
        );
    }
}
```

## Assign capabilities to roles

When you register a new content type, some capababilities are automatically generated.

To be able to edit a page, you'll have to go to the administration panel under `Users > Roles` and
assign them to your roles. In our example, they're the ones that end by `_photo_galleries`.

## Create a template


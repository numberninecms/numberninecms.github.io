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

## Create the template for a single entity

By default, the template used by our new content type is `content/single.html.twig`.

Let's make a specific template. Create a file in `templates/theme/photo_gallery/single.html.twig`:

```twig
{% extends N9_base_template() %}

{% block body %}
<div class="container standard-container">
    <main class="page-main">
        <h1 class="text-5xl font-thin mb-5">{{ entity.title }}</h1>
        <div>This photo gallery was created on {{ entity.createdAt | date }}</div>
        <div>{{ entity.content }}</div>
    </main>
</div>
{% endblock %}
```

**Done!** All photo galleries will now be displayed using this template.

You can even override this template for a particular gallery by creating:
* `templates/theme/photo_gallery/single_your-gallery-slug.html.twig`
* `templates/theme/photo_gallery/single_125.html.twig` (change `125` with the ID)

## Create the template of the index page

Now we need an index page listing all our galleries, just like a blog feed.

It will have a `page` content type but will a specific template.

First, let's create the template. Our template will be a list of entities, so it have to be a `index.html.twig` file
for NumberNine to know it needs a paginated collection.

Create a file `templates/theme/photo_gallery/index.html.twig`:

```twig
{% extends N9_base_template() %}

{% block body %}
<div class="container standard-container">
    <div class="grid grid-cols-4 gap-5 w-full">
        <main class="blog-main col-span-3">
            {% for photo_gallery in entities %}
                <a href="{{ N9_entity_url(photo_gallery) }}">
                    <h2 class="text-xl font-bold mb-5">{{ photo_gallery.title }}</h2>
                </a>
            {% endfor %}
            {{ N9_shortcode('[pagination]') }}
        </main>
        <aside class="blog-sidebar">
            {{ N9_area('blog_sidebar') }}
        </aside>
    </div>
</div>
{% endblock %}
```

You're almost done. In the administration panel, click `Pages > Add new` then go the the Classic Editor.

On the right sidebar, choose from the template list "Photo galleries index page" that now appears as your
template exists. Set status to `Publish` and save the page.

**Done!** Visit your page to see the paginated list of galleries.

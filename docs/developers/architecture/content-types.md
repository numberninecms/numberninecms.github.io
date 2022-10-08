---
prev: /developers/architecture/theming.md
next: /developers/howto/theming/create-a-component.md
---

# Content types

## Introduction

Most CMS give the opportunity to the developer to create content types as a way to extend the
editing possibilities.

A **content entity** is a Doctrine entity class, to which is assigned an URL, and therefore a template.

A **content type** is describing the kind of template and admin interface that will be used. It's not
necessarily a separate entity class.

As an example, **`page`** and **`post`** are two **content types**, but both correspond to the same
`NumberNine\Entity\Post` entity. Their small differences don't require to add more columns in the database
to handle specific use cases. Therefore they are **the same content entity**.

## Architecture

Unlike traditional CMS software, **NumberNine isn't built on a [EAV architecture](https://en.wikipedia.org/wiki/Entity%E2%80%93attribute%E2%80%93value_model)**.
While EAV is great for extensibility, its biggest downside is that you'll quickly grow a huge amount of
database requests if not handled correctly.

Instead, NumberNine uses a **combination of relational model and JSON fields**, thanks to MySQL new features.
This allows to store extra data in any particular entity while keeping the database requests to a minimum
level, and a **high performance** output. Also, this **greatly simplifies the querying process** using Doctrine.

All content entities inherit from `NumberNine\Entity\ContentEntity`.

## Built-in content types

Let's dive into the details of built-in content types and how to create new ones.

NumberNine comes with several built-in content types:
* [Pages](#pages)
* [Posts](#posts)
* [Blocks](#blocks)
* [Media files](#media-files)

### Pages

The content type `page` is used for the pages that are not part of any timeline. For instance, most
websites will have `About us`, `FAQ`, `Contact`, `Legal`, `Privacy`, etc. These are pages.

The default template for page is full width, so doesn't have a sidebar.

It doesn't make sense to have an index page listing all existing pages.

An object with `page` content type is based on `NumberNine\Entity\Post` entity.

<a href="/images/screenshots/frontend_single_page.jpg" target="_blank" title="Frontend single page">
  View an example of a page...
</a>

### Posts

Unlike `page`, the content type `post` is a typical blogging type. It represents a post which is part
of a feed. By default, posts are featured in the blog, which is a paginated view of posts archives.

An object with `post` content type is based on `NumberNine\Entity\Post` entity.

<a href="/images/screenshots/frontend_single_post.jpg" target="_blank" title="Frontend single post">
  View an example of a post...
</a>

### Blocks

Blocks are pages without template. They're not meant to be accessed on their own, but instead they
can be included by the user in any other content, like a page or a post, using a shortcode.

This is very useful when pages share a portion of text, so it can be edited only once.

An object with `block` content type is based on `NumberNine\Entity\Post` entity.

### Media files

All data uploaded in the media library is transformed into an object with `media_file` content type.

An object with `media_file` content type is based on `NumberNine\Entity\MediaFile` entity, which
stores additional columns like the path of the file, the different sizes of the generated thumbnails,
EXIF data, etc.

## Taxonomies

To each content type, you can assign one or many taxonomies. A **taxonomy** is a "classification of something", such
as a category, a tag, a color, an animal species.

A taxonomy is then composed of **terms**, such as _Travel_, _Food_, _Lifestyle_ for a `category` taxonomy, or
_green_, _blue_, _red_ for a `color` taxonomy.

[Learn how to create and use taxonomies...](/developers/howto/content/create-a-taxonomy.md)

## In the administration panel

You'll access these content types on the left menu of the administration panel. Media files are handled differently
inside the media library.

![Content Entities Index Page](/images/screenshots/admin_contententity_index.jpg)

## Add more content types

You can also define your own content types with a few lines of code.

[Learn how to create and use custom content types...](/developers/howto/content/create-a-content-type.md)

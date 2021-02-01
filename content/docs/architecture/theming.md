---
description: 'Theming'
sidebar: 'docs'
prev: '/docs/architecture/user-management/'
---

# Theming

A NumberNine theme is a Symfony bundle that handles rendering of the website.
Unless you choose another theme or build your own, the default theme is `ChapterOne`.

Every template is overridable in your own `/templates` directory.

## ChapterOne

_**Note: ChapterOne is still under active development. Features below may not be all implemented yet.**_

ChapterOne is a full featured theme for NumberNine that features the following:

* TailwindCSS
* Responsive design
* Hundreds of pre-designed blocks editable in the page builder
* Configurable base colors
* Several page templates (full width, no header, left sidebar, right sidebar, etc.)

## Page templates

Page templates are layouts for your index pages or entity pages.

An entity page is a page that will render a specific entity, for example a blog post, a page,
a product, a portfolio gallery, an architecture project.

An entity page can have many templates, based on its [content type]().

Here's how NumberNine knows which template to choose, sorted by highest priority to lowest.  
Note that your `/templates/` directory has **greater priority** than theme's templates. This way
you can override any theme's template.

* `content_type_name/single.custom_template.html.twig`

  You can assign a custom template to your page in administration panel. In this case, this
  template will have the highest priority above all others.

* `content_type_name/single_slug-of-your-entity.html.twig`

  The slug of an entity is created from its title.

* `content_type_name/single_214.html.twig`

  This template will be selected if your entity ID is 214.

* `content/single.html.twig`
  
  A generic template that all content types fallback to.
  

In the above examples, `content_type_name` can be `post`, `page`, `product` or any other content type that you create.

## Components

A component is a **micro-controller** to which you'll **delegate the rendering of a region of your page**.
It's similar to including another template in your Twig template, but with **PHP logic** in between.

This feature is aimed to help developers to write better code by splitting what could be a huge controller into
many little controllers who handle one concern at a time.

You don't have to use components if you don't want to.

[Learn how to create and use a component...](/docs/howto/theming/create-a-component/)

## Shortcodes

Also known as BBcodes, shortcodes are widely used in CMS softwares like WordPress or Drupal.

While the purpose of a component is purely developer-oriented, the shortcode is purely user-oriented.
They are meant to give the opportunity to the end user, who doesn't know how to code, to customize
its website pages with dynamic components represented by a text string.

As an example, a user could type the following text in the page editor:

```
What a great day today in Paris.
[weather location="Paris"]
```

The part `[weather location="Paris"]` is a shortcode, named `weather` with one parameter `location` whose
value is `Paris`. When the page renders, shortcodes are interpreted and obviously not presented to the visitors
like this, but rendered with a dedicated template.

Now what's interesting in NumberNine is that shortcodes are, just like components, **isolated micro-controllers
running as services**.

## Page builder


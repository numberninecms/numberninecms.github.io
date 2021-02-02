---
description: 'Create a shortcode'
sidebar: 'docs'
prev: '/docs/howto/theming/create-a-component/'
---

# Create a shortcode

To understand what are shortcodes, [read this section](/docs/architecture/theming/#shortcodes).

## Configure the path where to store shortcodes

In your `config/packages/numbernine.yaml` file, configure the path where to store shortcodes.
By default it's `src/Shortcode/`, if this path suits you then skip this step.

```yaml
numbernine:
    shortcodes_path: 'src/My/Path/To/Shortcodes/'
```

## Using CLI

Run this command in your terminal:
```
docker-compose exec php bin/console numbernine:make:shortcode
```

You'll be asked several questions. For demonstration purpose, we'll use default values in the
following steps.

## File structure

After answering all the questions, you'll get 3 new files:

* `src/Shortcode/TurtleShortcode.php`
  
  This is the controller of the shortcode template.

* `src/Shortcode/TurtleShortcode/template.html.twig`

  This is the template that will be rendered to the final user.

* `src/Shortcode/TurtleShortcode/template.vue.twig`

  This is the template used in the page builder. It should be as close as the html template, although
  it's not always easy or possible.

## Render a shortcode from Twig

To render the shortcode, use this Twig function:

```twig
{{ N9_shortcode('[turtle title="My custom title"]') }}
```

If you don't specify the parameters, the shortcode defaults values will be used instead.

Note that this function doesn't necessarily take only one shortcode. You can pass it a full text with any
number of shortcodes, even nested shortcodes, and it will render everything:

```twig
{{ N9_shortcode(
    'This is some text.' ~
    '[turtle title="My custom title"]' ~
    'And some more text.'
) }}
```
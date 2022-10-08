---
prev: /developers/howto/theming/create-a-component.md
next: /developers/howto/content/create-a-content-type.md
---

# Create a shortcode

To understand what are shortcodes, [read this section](/developers/architecture/theming.md#shortcodes).

## Configuration

In your `config/packages/numbernine.yaml` file, configure the path where to store shortcodes.
By default it's `src/Shortcode/`, if this path suits you then skip this step.

```yaml
numbernine:
    shortcodes_path: 'src/My/Path/To/Shortcodes/'
```

## Using CLI

Run this command in your terminal:
```bash:no-line-numbers
docker compose exec php bin/console numbernine:make:shortcode
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

::: tip
This function doesn't necessarily take only one shortcode. You can pass it a full text with any
number of shortcodes, even nested shortcodes, and it will render everything:

```twig
{{ N9_shortcode(
    'This is some text.' ~
    '[turtle title="My custom title"]' ~
    'And some more text.'
) }}
```
:::

## The shortcode class

### Overview

Have a look at the whole class in its minimal form.

Every shortcode must implement `configureParameters()` and `processParameters()` methods from `ShortcodeInterface`.

Editable shortcodes, those who are available in the page builder, must implement `buildPageBuilderForm()` from `EditableShortcodeInterface`.

```php
#[Shortcode(name:"turtle", label:"Turtle", icon:"mdi-turtle")]
final class TurtleShortcode implements
    ShortcodeInterface,
    EditableShortcodeInterface
{
    public function configureParameters(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'title' => 'Welcome to the Turtle Age Show',
            'age' => 40,
        ]);
    }

    public function processParameters(array $parameters): array
    {
        return [
            'title' => $parameters['title'],
            'age' => $parameters['age'],
        ];
    }

    public function buildPageBuilderForm(PageBuilderFormBuilderInterface $builder): void
    {
        $builder
            ->add('title')
            ->add('age', SliderControl::class)
        ;
    }
}
```

### Shortcode attribute

Every shortcode must have the `#[Shortcode]` attribute to specify the name that the
end-user will use. In our example, we want the shortcode to be called with `[turtle]`,
therefore the name we'll give is `turtle`.

The `label` parameter defines the name that will appear in page builder, along with
the `icon` parameter.

You can look for icons on one of these websites:

* [https://fontawesome.com/icons](https://fontawesome.com/icons)
* [https://materialdesignicons.com/](https://materialdesignicons.com/) (prefix them with `mdi-`)

### Configure parameters

You can add as many parameters as you want to your shortcode.
To do so, add them in the `configureParameters()` method:

```php
public function configureParameters(OptionsResolver $resolver): void
{
    $resolver->setDefaults([
        'my_parameter' => 'Default value',
    ]);
}
```

### Send parameters to the Twig template

You can send parameters to Twig that are completely different from the shortcode parameters.
This allow for complex operations just like you would do in a traditional controller.

For example, you could inject `FormFactoryInterface` and create a form, then handling its submission
by listening to `RequestEvent::class`.

```php
public function processParameters(array $parameters): array
{
    return [
        'twig_variable' => $parameters['my_parameter'],
        'form' => $this->getForm()->createView(),
    ];
}
```

### Twig template

To stay with our TurtleShortcode example, here's what the template look like for final rendering:

```twig
<h3>{{ title }}</h3>
<p>The turtle is {{ age }} years-old.</p>
```


## Editable shortcodes

### Page builder demonstration

NumberNine admin features a page builder that will interpret your shortcodes and present them
to the end-user with a user friendly graphic interface.

As an example, here's what our TurtleShortcode looks like in the page builder:

![Custom Shortcode Turtle Builder Demo](/images/screenshots/howto_shortcode_turtle_builder.gif)

This is made possible with the other template: `TurtleShortcode/template.vue.html`.
This template is a portion of a Vue component, so it's using Vue syntax.

You're only given access to the template of the component and not the script, which is automated.

::: tip NOTE
You don't have to recompile the javascript assets to make it work. It's compiled on-the-fly
while loading the page builder.
:::

### Considerations

* Editable shortcodes must implement `EditableShortcodeInterface`
* Templates must have only one root element
* Don't use two root elements with `v-if` and `v-else`
* Shortcode parameters are available in the `parameters` Vue variable
* Computed variables generated by some page builder controls are available in the `computed` Vue variable

### Vue template

To avoid conflicting Twig and Vue syntax, embed Vue code into `{% verbatim %}...{% endverbatim %}` tag.

```twig
{% verbatim %}
<div>
    <h3>{{ parameters.title }}</h3>
    <p>The turtle is {{ parameters.age }} years-old.</p>
</div>
{% endverbatim %}
```

### Shortcode viewer

You can at any time convert your page builder component to a text shortcode by selecting _**Show shortcode**_
in the component context menu.

Look at the example below:

![Custom Shortcode Viewer](/images/screenshots/howto_shortcode_viewer.gif)


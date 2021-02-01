---
description: 'Create a component'
sidebar: 'docs'
---

# Create a component

To understand what are components, [read this section](/docs/architecture/theming/#components).

## Configure the path where to store components

In your `config/packages/numbernine.yaml` file, configure the path where to store components.
By default it's `src/Component/`, if this path suits you then skip this step.

```yaml
numbernine:
    components_path: 'src/My/Path/To/Components/'
```

## Using CLI

Run this command in your terminal:
```
docker-compose exec php bin/console numbernine:make:component
```

You'll be asked for a component name, enter the name you want.
You can create subfolders, for example `Post/PostAuthor`.

## File structure

A new folder is created with two files:

* `YourComponent/YourComponent.php`

  This is the controller of the component template.

* `YourComponent/template.html.php`

  This is the template.

## Render a component from Twig

To render the component, use this Twig function:

```twig
{{ N9_component('YourComponent') }}
```

## Inject variables in a component

You can inject some variables from the parent template into your component:

```twig
{{ N9_component('YourComponent', {example: 'string variable'}) }}
```

To catch it, your component need to implement the corresponding setter:

```php
final class YourComponent implements ComponentInterface
{
    private string $example;
    
    public function setExample(string $example): void
    {
        $this->example = $example;
    }

    // ...
}
```

## Expose variables to the component's template

Every component must implement `getTemplateParameters()` which returns an array of exposed
variables to the template.

```php
final class YourComponent implements ComponentInterface
{
    // ...

    public function getTemplateParameters(): array
    {
        return 
            'example' => $this->example,
        ];
    }
}
```

The Twig template can now use this variable:

```twig
<p>Displaying custom variable: {{ example }}.</p>
```

## Injecting a service in your component

Every component is a service. This means you can use dependency injection like with any other service.

```php
final class YourComponent implements ComponentInterface
{
    public function __construct(
        EventDispatcherInterface $eventDispatcher
    ) {
        // ...
    }
}
```

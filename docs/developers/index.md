---
next: /developers/who-is-it-for.md
---

# Introduction

NumberNine is a full-featured CMS built with Symfony.
It fills the gaps with the Symfony ecosystem which lacks **super fast development** for small to medium scale projects.

Although small projects using NumberNine would need little to no code, you will need to code if want to extend it for your specific business needs.

If you don't know how to use Symfony, it's recommended that you [learn the framework](https://symfony.com/doc/current/index.html) if you want a better
development experience with NumberNine.

Otherwise, you should be comfortable at least with knowing the following programming concepts:
* MVC
* Routing
* Dependency injection
* Event-driven programming
* ORM

## Get started

Please see [installation](/developers/installation.md) page for instructions on creating a new project.

## Why another CMS

There seems to be no other free CMS that does what NumberNine does the way it does it.

Some forget the end-users and simple things can become a nightmare to accomplish.
Some forget the developers and build a whole new framework that needs to be learnt.
Some aren't **free, open-source and self-hosted**.

As end-users, we don't want to configure things with YAML, XML or any kind of configuration file.
We want **plug-and-play** software. NumberNine is just that. Ready to use, with the best technology in its core.

As developers, we don't want to learn a specific framework just to understand how to code a plugin, a theme or whatever.
We know **Symfony**, that's all we need. NumberNine is nothing more than that.

## It's Symfony after all

NumberNine comes in the form of a set of Symfony bundles and libraries.

Although it takes control of some key aspects of the framework such as the security layer, your directory structure
don't include code that isn't yours. NumberNine gives you an empty `/src` directory for you to work in.

You can still use Symfony the way you're used too. If you need a custom route, custom controller, whatever you want,
take over and let it be Symfony.

[Learn more about how NumberNine complements Symfony...](/developers/architecture/symfony.md)

## No configuration

Using NumberNine's installer, you won't have anything to configure.
No YAML or PHP file to edit. Just launch your website, and you're good to go.

What's more? NumberNine don't mess with Symfony configuration files.
It automatically configures everything for you. If you need to change a setting, override it
in your app YAML files, it's Symfony after all!

## User management

Like any CMS on the market, NumberNine features an extended user management system.
It natively handles login, registration, roles and capabilities.

[Learn more about user management...](/developers/architecture/user-management.md)

## Shortcodes and components as services

Extend your theme with business logic by creating new shortcodes.

In NumberNine, shortcodes are represented by text in the content of the page by this syntax:
`[my_custom_shortcode]`.
In your code, it's just a service class, where you can inject any dependency like you're used to.

[Learn more about shortcodes and components...](/developers/architecture/theming.md#components)

## Block presets

NumberNine uses a "everything is a shortcode" architecture, or more exactly "everything can be a shortcode".
In addition, you can create preconfigured templates of small parts of your website to reuse anywhere.
For instance, you can create several preconfigured headers from which your client can choose.

## Theme overriding

Any part of a theme is overridable in your `/src` directory, be it twig templates or shortcodes classes.
This allows you to create very quickly child themes to give a unique feel to your project.

[Learn more about theming...](/developers/architecture/theming.md)

## Event-driven lifecycle

Thanks to Symfony's `EventDispatcher`, NumberNine is a piece of cake to extend. Intercept events and change
their contents to adapt the software to your business needs.

## Publish your own business entities

While creating your business entities, keep in mind you can extend NumberNine built-in publishing entities.
Any entity that need to be displayed as its own can take advantage of NumberNine features, including
its awesome page builder.

[Learn more about content types...](/developers/architecture/content-types.md)

## Page builder

With end-users in mind, NumberNine provides a page-builder which is easily extensible.
Any custom shortcode you build will be injected into the page builder.

[Learn more about creating shortcodes...](/developers/howto/theming/create-a-shortcode.md)

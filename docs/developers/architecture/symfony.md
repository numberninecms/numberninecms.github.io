---
prev: /developers/docker.md
next: /developers/architecture/user-management.md
---

# Symfony 5.4+

## Vanilla project

To be able to upgrade NumberNine easily, it's nothing more than a Symfony bundle.
That means that your app will be a project based on `symfony/website-skeleton` with
a **clean folder structure** to start with.

NumberNine automatically configures everything in the background, without altering your
own configuration files. You can at anytime **override any setting** like you usually do
with Symfony.

Symfony's documentation is 100% valid for NumberNine, although you don't need to touch
the security config unless you have a very specific need for it. NumberNine already
creates the user management layer so you don't have to go through all steps.

## Event dispatcher

NumberNine makes extensive use of Symfony's event dispatcher to allow extending its features
from your own code without having to modify the core code.

You'll be able to add or modify user capabilities, route templates, custom post types, and much more.

## Micro-controllers

In a classic Symfony application, a page is rendered with a single controller and a single template.
It's fine, but hardly reusable.

In NumberNine, you can create **components** and **shortcodes** that will handle a small region of
your page with an isolated controller and a specific template for this region, with virtually no
performance impact.

[Learn more about theming...](/developers/architecture/theming.md)


## Custom routes

You don't have to code your app "the NumberNine way", as there's no "NumberNine way". You're
free to code like you usually would code with Symfony, creating pages aside from the CMS and
using your own Symfony routes.

## Easy upgrades

Upgrades are done with `composer update`.
If there's a new version of any of NumberNine's packages, your project will be upgraded.

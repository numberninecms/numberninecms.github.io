---
description: ''
sidebar: 'docs'
prev: '/docs/screenshots/'
---

# Installation

_**Note:** for now there's only a demo project with fixture data as NumberNine is still in development. This will be improved._

## Option 1: starting a new project

### Create the project

To create a new project with NumberNine, simply run:

```bash
composer create-project numberninecms/demo:dev-develop my_project
```

### Launch installation

Go to your new project root and run:

```bash
make install
```

An installation wizard will ask you details of your database and create everything for you.

### Run the server

Now launch the local server and visit your website.

```bash
make serve
```

You're done.

Demo user login: admin<br/>
Demo user password: password

## Option 2: adding NumberNine to an existing Symfony project


### Required packages
_**Note:** the Symfony recipe is not available yet. When it is, this section will be simplified._

To add NumberNine to an existing Symfony project:

```bash
composer require numberninecms/cms:dev-develop numberninecms/chapterone:dev-develop numberninecms/faker:dev-develop
```

Symfony Flex should automatically add the bundles to your `bundles.php`.

### Routing
_**Note:** the Symfony recipe is not available yet. When it is, this section will be simplified._

Now create a file in `config/routes/numbernine.yaml`, and put these lines inside:

```yaml
numbernine:
  resource: '@NumberNineBundle/Resources/config/routing.yaml'
```

### Database
**WARNING! Backup your existing database beforehand in case something goes wrong!**

Now run:

```bash
php bin/console numberine:install
```

Finally, create NumberNine tables into your database and insert demo content:

```bash
php bin/console make:migration --no-interaction
php bin/console doctrine:migrations:migrate --no-interaction
php bin/console doctrine:fixtures:load --no-interaction
```

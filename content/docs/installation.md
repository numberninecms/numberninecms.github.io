---
description: ''
sidebar: 'docs'
prev: '/docs/screenshots/'
---

# Installation

NumberNine CMS is still in active development, therefore the installation steps are subject to change.

## Option 1: starting a new project

### Install the files
_**Note:** for now there's only a demo project with fixture data as NumberNine CMS is still in development. This will be improved._

To create a new project with NumberNine CMS, simply run:

```bash
composer create-project numberninecms/demo my_project
```

### Database
_**Note:** an installation wizard will be created later to simplify this section._

Then, create a `.env.local` file at the root of your project. Configure your database:

1. change `db_user`, `db_password` according to your server configuration
2. set `db_name` to the name you wish, you don't need to create the database as it will be created automatically

```ini
DATABASE_URL=mysql://db_user:db_password@localhost:3306/db_name?serverVersion=5.7
```

Then in your project root, run this to create and populate the database with initial data:

```bash
php bin/console doctrine:database:drop --if-exists --force
php bin/console doctrine:database:create --if-not-exists
php bin/console doctrine:schema:update --force
php bin/console doctrine:fixtures:load --no-interaction
```

## Option 2: adding NumberNine CMS to an existing Symfony project


### Required packages
_**Note:** the Symfony recipe is not available yet. When it is, this section will be simplified._

To add NumberNine CMS to an existing Symfony project:

```bash
composer require numberninecms/cms numberninecms/chapterone numberninecms/faker
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
_**Note:** an installation wizard will be created later to simplify this section._

**WARNING! Backup your existing database beforehand in case something goes wrong!**

Then, create a `.env.local` file at the root of your project. Configure your database:

1. change `db_user`, `db_password` according to your server configuration
2. set `db_name` to your existing database

```ini
DATABASE_URL=mysql://db_user:db_password@localhost:3306/db_name?serverVersion=5.7
```

Finally, create NumberNine CMS tables into your database and insert demo content:
```bash
php bin/console doctrine:schema:update --force
php bin/console doctrine:fixtures:load --no-interaction
```

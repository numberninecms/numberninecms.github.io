---
description: 'Installation instructions'
sidebar: 'docs'
prev: '/docs/screenshots/'
next: '/docs/first-steps/'
---

# Installation

_**Note:** for now there's only a demo project with fixture data as NumberNine is still in development. This will be improved._

## Docker one-liner installation (recommended)

To install NumberNine, you need only two things on your host:
* PHP 7.4
* Docker

You **don't need** to be familiar with Docker. Everything is taken care of for you.
Just [download and install it](https://www.docker.com/products/docker-desktop).


To create a new project, simply replace `my_project` by the name of your project and run:

```bash
curl -s https://raw.githubusercontent.com/numberninecms/numbernine/master/installer | bash -s my_project --full-install
```

Wait a couple of minutes. Done. Now visit <a href="https://localhost/" target="_blank">https://localhost/</a>.

If port 443 is unavailable, the installation process will automatically assign a free port to your app.


## Windows / Linux / WSL / macOS manual installation

**Requirements to install NumberNine:**

* [MySQL 8.0](https://www.mysql.com/downloads/) or above
* [Composer 2](https://getcomposer.org/download/)
* [Symfony executable](https://symfony.com/download)

### Create the project

To create a new project with NumberNine, simply run:

```bash
symfony new my_project --full
composer config extra.symfony.allow-contrib true
SYMFONY_ENDPOINT=https://flex.symfony.com/r/github.com/symfony/recipes-contrib/1049 \
    composer req numberninecms/numbernine
```

### Launch installation

Go to your new project root and run:

```bash
bin/console numbernine:install
bin/console doctrine:database:create
bin/console doctrine:migrations:diff
bin/console doctrine:migrations:migrate
bin/console doctrine:fixtures:load
```

### Run the server

Now launch the local server and visit your website.

```bash
symfony local:server:ca:install
symfony serve -d
```

You're done. Visit https://localhost:8080/ or the given URL if different.

---
description: 'Installation instructions'
sidebar: 'docs'
prev: '/docs/screenshots/'
next: '/docs/first-steps/'
---

# Installation

_**Note:** for now there's only a demo project with fixture data as NumberNine is still in development. This will be improved._

## Docker one-liner installation (recommended)

To install NumberNine, you need only Docker to be installed on your host.

You **don't need** to be familiar with Docker. Everything is taken care of for you.
Just [download and install it](https://www.docker.com/products/docker-desktop).


To create a new project, simply replace `myproject` by the name of your project and run:

```bash
docker run --rm --pull=always -t -e HOST_PWD=$PWD \
    -v $PWD:/srv/app -v /var/run/docker.sock:/var/run/docker.sock \
    numberninecms/installer myproject
```

Wait a couple of minutes. Done! Now visit <a href="https://myproject.localhost/" target="_blank">https://myproject.localhost/</a>.

If port 443 is unavailable, the installation process will automatically assign a free port to your app.


## Windows / Linux / WSL / macOS manual installation

**Requirements to install NumberNine:**

* [PHP 7.4](https://www.php.net/downloads.php) or above
* [MySQL 8.0](https://www.mysql.com/downloads/) or above
* [Composer 2](https://getcomposer.org/download/)
* [Symfony executable](https://symfony.com/download)

### Create the project

To create a new project with NumberNine, run the following commands:

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

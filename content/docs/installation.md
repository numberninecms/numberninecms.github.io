---
description: 'Installation instructions'
sidebar: 'docs'
prev: '/docs/screenshots/'
---

# Installation

_**Note:** for now there's only a demo project with fixture data as NumberNine is still in development. This will be improved._

## Docker (recommended)

You don't need to be familiar with Docker. Everything is taken care of for you.
Just [download and install it](https://www.docker.com/products/docker-desktop).

### Create the project

To create a new project, simply replace `my_project` by the name of your project and run:

```bash
docker run --rm -it -u '1000:1000' -v $PWD:/app numberninecms/php:7.4-fpm-dev \
    composer create-project --ignore-platform-reqs --no-scripts \
    numberninecms/demo:dev-develop my_project
```

### Build containers and install

Go to your new project root and run:

```bash
make docker-install
```

Done. Now visit <a href="https://localhost/" target="_blank">https://localhost/</a>.

If you want another domain or port, run:

```bash
SERVER_NAME=mydomain.wip NGINX_PORT=8080 docker-compose up
```

## Windows / Linux / WSL installation

**Requirements to install NumberNine:**

* [MySQL 8.0](https://www.mysql.com/downloads/) or above
* [Redis](https://redis.io/download) and `redis` PHP extension ([Windows version](https://pecl.php.net/package/redis))
* [Composer 2](https://getcomposer.org/download/)
* [Symfony executable](https://symfony.com/download)
* `make` ([Windows version](http://gnuwin32.sourceforge.net/packages/make.htm))

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

You're done. Visit https://localhost:8080/ or the given URL if different.


## Quick start

Either login by clicking the top right "Login/Register" link, or by accessing `/admin/`.

Demo admin login: **admin**<br/>
Demo admin password: **password**

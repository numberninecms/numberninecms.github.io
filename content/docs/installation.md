---
description: ''
sidebar: 'docs'
prev: '/docs/screenshots/'
---

# Installation

_**Note:** for now there's only a demo project with fixture data as NumberNine is still in development. This will be improved._

**Requirements to install NumberNine:**
* [Composer 2](https://getcomposer.org/download/)
* [Symfony executable](https://symfony.com/download)
* make ([Windows version](http://gnuwin32.sourceforge.net/packages/make.htm))


## Docker (recommended)

To use Docker with NumberNine you need to install `composer`, `make` and `yarn` on your host (WSL, Ubuntu, MacOS, Windows...) as Docker will only serve your application. Files stay on your host.

### Create the project

To create a new project with NumberNine, simply run:

```bash
composer create-project numberninecms/demo:dev-develop my_project
```

### Build containers and install

Go to your new project root and run:

```bash
make docker-install
```

Done. Now visit <a href="http://localhost/" target="_blank">http://localhost/</a>.

If you want another domain or port, run:

```bash
SERVER_NAME=mydomain.wip NGINX_PORT=8080 docker-compose up
```

## Windows / Linux / WSL installation

**To install on your host, here are some additional requirements:**

* MySQL 8.0 or above
* Redis

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

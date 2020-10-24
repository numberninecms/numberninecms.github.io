---
description: ''
sidebar: 'docs'
prev: '/docs/screenshots/'
---

# Installation

_**Note:** for now there's only a demo project with fixture data as NumberNine is still in development. This will be improved._

Requirements to install NumberNine:
* [Composer](https://getcomposer.org/download/)
* [Symfony executable](https://symfony.com/download)
* make ([Windows version](http://gnuwin32.sourceforge.net/packages/make.htm))

## Starting a new project

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


## Quick start

Either login by clicking the top right "Login/Register" link, or by accessing `/admin/`.

Demo admin login: **admin**<br/>
Demo admin password: **password**

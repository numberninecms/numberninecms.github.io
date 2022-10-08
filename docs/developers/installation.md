---
prev: /developers/screenshots.md
next: /developers/first-steps.md
---

# Installation

## Docker one-liner installation (recommended)

To install NumberNine, you need only Docker to be installed on your host.

You **don't need** to be familiar with Docker. Everything is taken care of for you.
Just [download and install it](https://www.docker.com/products/docker-desktop).


To create a new project, simply replace `myproject` by the name of your project and run:

```bash:no-line-numbers
docker run --rm --pull=always -t -e HOST_PWD="$PWD" \
    -v "$PWD":/srv/app -v /var/run/docker.sock:/var/run/docker.sock \
    numberninecms/installer myproject
```

Wait a couple of minutes. Done! Now visit [https://myproject.localhost/](https://myproject.localhost/).

If port 443 is unavailable, the installation process will automatically assign a free port to your app.


## Windows / Linux / WSL / macOS manual installation

**Requirements to install NumberNine:**

* [PHP 8.1](https://www.php.net/downloads.php) or above, with `intl`, `gd`, `exif`, `sysvsem` extensions (`redis` too if you want to use redis)
* [MySQL 8.0](https://www.mysql.com/downloads/) or above
* [Composer 2](https://getcomposer.org/download/)
* [Symfony executable](https://symfony.com/download)

### Create the project

To create a new project with NumberNine, run the following commands:

```bash:no-line-numbers
symfony new myproject --full
cd myproject
composer config extra.symfony.allow-contrib true
composer req numberninecms/numbernine
```

### Launch installation

Go to your new project root and run:

```bash:no-line-numbers
bin/console assets:install public --symlink
bin/console numbernine:install
bin/console doctrine:database:create
bin/console doctrine:migrations:diff
bin/console doctrine:migrations:migrate
bin/console doctrine:fixtures:load
```

### Run the server

Now launch the local server and visit your website.

```bash:no-line-numbers
symfony local:server:ca:install
symfony serve -d
```

You're done. Visit [https://localhost:8080/](https://localhost:8080/) or the given URL if different.


### Optional: Redis extension

Assuming you've got Redis installed, run these commands:

```bash:no-line-numbers
composer req numberninecms/redis
bin/console numbernine:install:redis
```

Answer the questions, then clear your Symfony cache:

```bash:no-line-numbers
bin/console cache:clear
```

Done! Your Symfony cache and sessions will now be handled through Redis.

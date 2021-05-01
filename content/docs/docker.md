---
description: 'Docker services'
sidebar: 'docs'
prev: '/docs/first-steps/'
next: '/docs/architecture/symfony/'
---

# Docker services

NumberNine's default installation relies on Docker to create a fully operational Docker development environment.

If you're not already familiar with Docker, see it as a kind of WAMP, XAMPP, MAMP, Laragon or any bundled development tool.
Although you shouldn't need too much of Docker knowledge to work on your NumberNine project, it may come handy when
troubleshooting. See below some command examples that should get you started quickly.

This is the list of the installed services.

## PHP

The PHP container is loaded with some useful extensions and development tools.

* PHP 8.0
* APCu
* Xdebug 3
* Composer 2
* GNU Make
* OPcache
* Cachetool (clear OPcache and ACPu from CLI)
* Blackfire probe

Connect to the container using this command:
```
docker-compose exec php bash
```

You'll see a bash prompt inside which you can run Symfony or Cachetool commands. Type `exit` to return to your terminal session.

Alternatively, if you just want to run a single command, use this syntax:
```
docker-compose exec php [here the Linux command you want to run]
```
For example:
```
docker-compose exec php bin/console list
docker-compose exec php composer update
docker-compose exec php cachetool opcache:status
```

## Nginx

Nginx is running with a SSL connection on localhost.
A self-signed certificate is created during installation.

## MySQL

NumberNine is specifically designed to run on MySQL, taking advantage of the JSON features.
Although it should work fine on MariaDB or SQLite, it hasn't been tested and it's not recommended to change.

MySQL is running in version 8.

## Blackfire

To make Blackfire work, you need to register an account on [blackfire.io](https://blackfire.io).

Once your account is created, create 4 environment variables in your `~/.bashrc` file with the
values found in [your account settings](https://blackfire.io/my/settings/credentials).

```bash
export BLACKFIRE_CLIENT_ID=yourkey
export BLACKFIRE_CLIENT_TOKEN=yourkey
export BLACKFIRE_SERVER_ID=yourkey
export BLACKFIRE_SERVER_TOKEN=yourkey
```

Modify `docker-compose.yml` to add this key under `blackfire` service (leave the tildes):
```yaml
    blackfire:
        # ...
        environment:
            BLACKFIRE_CLIENT_ID: ~
            BLACKFIRE_CLIENT_TOKEN: ~
            BLACKFIRE_SERVER_ID: ~
            BLACKFIRE_SERVER_TOKEN: ~
```

Finally, [install the Chrome or Firefox extension](https://blackfire.io/docs/profiling-cookbooks/profiling-http-via-browser)
and you're ready to profile your website.

## Redis

Symfony sessions and app cache is stored in a Redis database. If you need to clear the Redis cache, run this command:
```
docker-compose exec redis redis-cli flushall
```

## Maildev

As a mail catcher, NumberNine is bundled with Maildev which is a joy to use.
By default, the mailbox interface will be running on port [http://localhost:8010/](http://localhost:8010/)
unless you change the port in `docker-compose.yml`.

Every mail sent by NumberNine will appear in your Maildev inbox.

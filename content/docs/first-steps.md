---
description: 'First steps'
sidebar: 'docs'
prev: '/docs/installation/'
next: '/docs/docker/'
---

# First steps

_**Note:** we're assuming you're using Docker. If you don't, remove _`docker-compose exec php`_ from the command lines._

## Create an admin user

In your terminal, run the following command:
```
docker-compose exec php bin/console numbernine:user:create --admin
```

## Connect to the admin dashboard

Go to `/admin` of your website and login with your newly created user.


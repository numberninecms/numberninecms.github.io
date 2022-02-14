---
prev: /developers/installation.md
next: /developers/docker.md
---

# First steps

_**Note:** we're assuming you're using Docker. If you don't, remove _`docker compose exec php`_ from the command lines._

## Create an admin user

In your terminal, run the following command:
```
docker compose exec php bin/console numbernine:user:create --admin
```

## Create default pages

You might want to create the default pages `My account` and `Privacy` so any user can login without accessing the admin panel.
In your terminal, run the following command **(replace `admin` by the username of the Administrator user previously created)**:
```
docker compose exec php bin/console numbernine:make:default-pages --username=admin
```

## Connect to the admin dashboard

Go to `/admin` of your website and login with your newly created user.


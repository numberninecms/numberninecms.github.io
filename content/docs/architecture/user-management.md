---
description: 'User management'
sidebar: 'docs'
prev: '/docs/architecture/symfony/'
next: '/docs/architecture/theming/'
---

# User management

## Roles and capabilities

Roles in NumberNine are slightly different than they are in Symfony.

Traditionally, Symfony defines user roles as simple strings like `ROLE_USER` or `ROLE_ADMIN`
that give very little flexibility on permissions.

NumberNine comes with 6 built-in roles:

* `Administrator`
* `Editor`
* `Author`
* `Contributor`
* `Subscriber`
* `Banned`

A set of permissions is assigned to each role, such as who can read a page, who can access admin,
who can edit a post, etc.

In the admin panel under `Users > Roles`, you can assign or remove permissions to each role:

<a href="/screenshots/admin_users_roles.jpg" target="_blank" title="NumberNine Admin user roles">
  <img src="/screenshots/small/admin_users_roles.jpg" alt="NumberNine Admin user roles">
</a>

<br>

To create a new role, enter the name of the role you want to create and click the `+` button to create it.
It will appear in a new column, you can then assign the permissions you want.

Only user created roles can be removed.

## Grant access to a page using permission

In your controller which extends `Symfony\Bundle\FrameworkBundle\Controller\AbstractController`,
add a line such as:

```php
$this->denyAccessUnlessGranted(Capabilities::READ, $entity);
```

`Capabilities` class groups all built-in capabilities.

## Add a custom capability

[Learn how to create a new capability...](/docs/howto/user-management/create-a-capability/)

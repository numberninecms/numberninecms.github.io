---
prev: /developers/howto/user-management/create-a-capability.md
next: /developers/reference/events.md
---

# Create a built-in role

Built-in roles are bundled with your app, theme or plugin. They are not managed through the administration interface, therefore not deleteable like custom roles created by the administrator.

The only thing to do is to create new `UserRole` fixtures.

Create a class in `src/DataFixtures/UserRoleFixtures.php` file.

```php
namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use NumberNine\Entity\UserRole;
use NumberNine\Security\Capabilities;
use NumberNine\Security\CapabilityGenerator;

final class UserRoleFixtures extends Fixture implements FixtureGroupInterface
{
    public function __construct(private CapabilityGenerator $capabilityGenerator)
    {
    }

    public function load(ObjectManager $manager): void
    {
        $teacher = (new UserRole())
            ->setName('Teacher')
            ->setLocked(true) // Locked roles can't be removed in the admin interface
            ->setCapabilities(
                [
                    // Choose the capabilities you want to be enabled by default.
                    // Add your custom capabilities, or remove some you don't want.
                    //
                    // Below are the complete Administrator capabilities
                    Capabilities::READ,
                    Capabilities::ACCESS_ADMIN,
                    Capabilities::UPLOAD_FILES,
                    Capabilities::MANAGE_CATEGORIES,
                    Capabilities::MODERATE_COMMENTS,
                    Capabilities::MANAGE_OPTIONS,
                    Capabilities::LIST_USERS,
                    Capabilities::PROMOTE_USERS,
                    Capabilities::REMOVE_USERS,
                    Capabilities::EDIT_USERS,
                    Capabilities::ADD_USERS,
                    Capabilities::CREATE_USERS,
                    Capabilities::DELETE_USERS,
                    Capabilities::MANAGE_ROLES,
                    Capabilities::CUSTOMIZE,
                    ...$this->capabilityGenerator->generateMappedEditorCapabilities('post'),
                    ...$this->capabilityGenerator->generateMappedEditorCapabilities('page'),
                    ...$this->capabilityGenerator->generateMappedEditorCapabilities('block'),
                    ...$this->capabilityGenerator->generateMappedEditorCapabilities('media_file'),
                ]
            )
        ;

        // add as many roles as you need here

        // and persist them all in database
        $manager->persist($teacher);
        $manager->flush();
    }

    public static function getGroups(): array
    {
        return ['app'];
    }
}
```

The new roles will be automatically created at project installation.

To manually load them on an existing project, run the command below.

```bash
docker compose exec php bin/console doctrine:fixtures:load --append --group=app
```

If you're not using Docker, strip the `docker compose exec php` part.

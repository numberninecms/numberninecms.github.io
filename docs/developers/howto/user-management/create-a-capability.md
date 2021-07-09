---
prev: /developers/howto/content/create-a-content-type.md
next: /developers/reference/events.md
---

# Create a capability

Create a class in `src/EventSubscriber/CapabilitiesListEventSubscriber.php` file.

```php
namespace App\EventSubscriber;

use NumberNine\Event\CapabilitiesListEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

final class CapabilitiesListEventSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            CapabilitiesListEvent::class => 'addCapabilities',
        ];
    }

    public function addCapabilities(CapabilitiesListEvent $event): void
    {
        $event->addCapability('my_first_custom_capability');
        $event->addCapability('another_custom_capability');
    }
}
```

Assign it to the roles you want. Then in your controller:

```php
$this->denyAccessUnlessGranted('my_first_custom_capability');
```

---
prev: /developers/index.md
next: /developers/screenshots.md
---

# Features

## For end-users

### Media management

* Reactive interface (no page refresh)
* Infinite scroll through media files
* Dropzone for file upload
* Automatic upload on drop or manual upload
* Sortable files before upload (manual mode)
* Client-side resize of images before upload
* High quality image downscaling algorithm
* Bulk deletion of files
* Media viewer with fast navigation
* Image editing tools
* Multiple image sizes to choose from

### User management

* Users creation
* Roles creation
* Assign capabilities to roles
* Assign roles to users

### Content management

* Create posts, pages and blocks
* Create categories and tags
* Rich text editing with integrated media library
* SEO edition
* Custom fields
* Templates to choose from
* Featured image
* Shortcodes
* Revisions history
* Page builder
  * Add content with pre-designed blocks
  * Design block presets
  * Switch between desktop, tablet or smartphone view
  * See modifications in real-time
  * Edit any page, post, block or areas (header, footer, sidebar, etc.)

### Menus management

* Create menus with infinite arborescence
* Use existing content to attach to menu or create free links

### Site management

* Choose the homepage and blog page
* Permalinks edition
* Email sender configuration
* Theme chooser
* Customize the site identity


## For developers

### Technology

* Built with Symfony 5, Stimulus and Vue 3
* Automatic creation of a full-featured Docker development environment

### Usage

* One-line installer
* No configuration (everything is pre-configured, overridable)

### Architecture

* No EAV
* Custom fields as JSON objects
* Split the view in many controllers with components
* Components and shortcodes as services
* Extensibility through events
* High performance with Redis caching

### Content

* Create new content types with existing entities (no SQL change)
* Create new content entities with new SQL fields
* Create new image sizes
* Easily integrate custom business logic into shortcodes
* Easily create editable components in the page builder

### Theming

* Twig theming
* Override any theme file in the main app
* Create custom themes as Symfony bundles
* Create different page templates using Frontmatter blocks in Twig files
* Define areas such as header, footer, sidebar, that can be edited in the page builder
* Default theme designed with TailwindCSS

### Security

* Built-in login, registration and password resetting logic
* Create custom capabilities

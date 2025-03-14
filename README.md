# Payload CMS JSX Fill

By annotating files with `/** @jsxImportSource @jsxfill/payloadcms */`, you can switch to a different JSX resolver.
With that you can use JSX for create plain JS objects, in this case this is `Field`s of PayloadCMS.

## Usage

### Creating a Global

```tsx
/** @jsxImportSource @jsxfill/payloadcms */

import { Meta } from "../components/meta"

const Landing = (
  <global slug="landing">
    <collapsible label="Shared Settings" admin={{ initCollapsed: true }}>
      <Meta />
    </collapsible>
    <tabs label="Pages">
      <tab name="home" label="Home">
        <Meta />
      </tab>
    </tabs>
  </global>
)

export default Landing
```

### Creating a Component

```tsx
/** @jsxImportSource @jsxfill/payloadcms */

export function Meta() {
  return (
    <group name="meta">
      <group name="seo">
        <text name="site_name" />
        <text name="title" />
        <textarea name="description" minLength={40} maxLength={160} />
        <select name="keywords" options={[]} />
      </group>
      <group name="social">
        <text name="title" />
        <text name="description" />
        <upload name="image" relationTo="media" />
      </group>
    </group>
  )
}
```

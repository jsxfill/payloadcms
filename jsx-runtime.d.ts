import { CollectionConfig, Field, GlobalConfig, Tab, TabsField } from "payload"

type FormatAttribute<F> = Omit<F, "type"> | { fields?: Field | Field[] }

declare namespace JSX {
  type Element = Field & GlobalConfig & CollectionConfig

  type ElementTypeConstructor = (props: never) => Element
  type ElementType = string | Element | ElementTypeConstructor


  interface ElementChildrenAttribute { fields: {} }

  interface ElementAttributesProperty { props: {} }

  type FieldMap = { [F in Field as F["type"]]: FormatAttribute<F> }

  interface IntrinsicElements extends FieldMap {
    global: FormatAttribute<GlobalConfig>
    collection: FormatAttribute<CollectionConfig>

    tab: FormatAttribute<Tab>
    tabs: Omit<TabsField, "type" | "tabs"> & { fields?: Field | Field[] }
  }
}

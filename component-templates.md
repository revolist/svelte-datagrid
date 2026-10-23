# Component content templates

Call `useTemplates()` during component initialization. It captures the
normal Svelte context map and registers owner cleanup. The helper reuses the
existing `SvelteTemplateConstructor` and reactive-props implementation.

```svelte
<script lang="ts">
  import { useTemplates } from '@revolist/svelte-datagrid';
  import Card from './Card.svelte';
  const templates = useTemplates();
  const cardContent = templates.template<MyCardContext>(Card);
</script>
```

No outlet is needed. Components receive a `context` prop; optional
`{ props: context => ({ item: context.card }) }` maps existing props. Updates
replace props, including deleting omitted props. Context providers should expose
reactive objects/stores for updates, following normal Svelte semantics.

Use Core `asCellTemplate(definition, { key: p => p.model.id })` for cells,
`masterRow.template` for master details, `customization.cardContent` for Kanban,
and `gantt.visuals.taskBarContent` for Gantt labels. Offscreen content unmounts;
keep durable state in app data. `dispose()` releases owned instances. Product
controls and default exports remain unchanged.

Existing `Template`, `SvelteTemplateConstructor` and editor APIs remain supported.
New helpers require the new Core exports; release Core before dependent products.

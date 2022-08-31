
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let uuid = undefined;
export let filterItems = undefined;
export let filterTypes = undefined;
export let filterNames = undefined;
export let filterEntities = undefined;
export let filterCaptions = undefined;
export let disableDynamicFiltering = undefined;

export const show = (...args) => __ref.show(...args);
export const getChanges = (...args) => __ref.getChanges(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('filterItems', filterItems);
$: if (__mounted) setProp('filterTypes', filterTypes);
$: if (__mounted) setProp('filterNames', filterNames);
$: if (__mounted) setProp('filterEntities', filterEntities);
$: if (__mounted) setProp('filterCaptions', filterCaptions);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-filter-panel 
  uuid={uuid}
  disable-dynamic-filtering={disableDynamicFiltering}
  on:filterChange={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-filter-panel>
  
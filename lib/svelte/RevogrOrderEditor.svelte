
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let parent = undefined;
export let dimensionRow = undefined;
export let dimensionCol = undefined;
export let dataStore = undefined;

export const dragStart = (...args) => __ref.dragStart(...args);
export const endOrder = (...args) => __ref.endOrder(...args);
export const clearOrder = (...args) => __ref.clearOrder(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('parent', parent);
$: if (__mounted) setProp('dimensionRow', dimensionRow);
$: if (__mounted) setProp('dimensionCol', dimensionCol);
$: if (__mounted) setProp('dataStore', dataStore);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-order-editor 
  
  on:rowdragstartinit={onEvent}
  on:rowdragendinit={onEvent}
  on:rowdragmoveinit={onEvent}
  on:rowdragmousemove={onEvent}
  on:rowdropinit={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-order-editor>
  
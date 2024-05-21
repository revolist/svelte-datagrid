
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let colType;
export let rowType;
export let selectionStore;
export let dimensionRow;
export let dimensionCol;
export let dataStore;
export let colData;
export let focusTemplate = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('selectionStore', selectionStore);
$: if (__mounted) setProp('dimensionRow', dimensionRow);
$: if (__mounted) setProp('dimensionCol', dimensionCol);
$: if (__mounted) setProp('dataStore', dataStore);
$: if (__mounted) setProp('colData', colData);
$: if (__mounted) setProp('focusTemplate', focusTemplate);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-focus 
  col-type={colType}
  row-type={rowType}
  on:beforefocusrender={onEvent}
  on:beforescrollintoview={onEvent}
  on:afterfocus={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-focus>
  
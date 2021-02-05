
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let readonly = undefined;
export let range = undefined;
export let canDrag = undefined;
export let rowClass = undefined;
export let rowSelectionStore = undefined;
export let viewportRow = undefined;
export let viewportCol = undefined;
export let dimensionRow = undefined;
export let colData = undefined;
export let dataStore = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('rowSelectionStore', rowSelectionStore);
$: if (__mounted) setProp('viewportRow', viewportRow);
$: if (__mounted) setProp('viewportCol', viewportCol);
$: if (__mounted) setProp('dimensionRow', dimensionRow);
$: if (__mounted) setProp('colData', colData);
$: if (__mounted) setProp('dataStore', dataStore);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-data 
  readonly={readonly}
  range={range}
  can-drag={canDrag}
  row-class={rowClass}
  on:dragStartCell={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-data>
  
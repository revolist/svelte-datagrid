
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let readonly = undefined;
export let range = undefined;
export let canDrag = undefined;
export let useClipboard = undefined;
export let selectionStore = undefined;
export let dimensionRow = undefined;
export let dimensionCol = undefined;
export let dataStore = undefined;
export let colData = undefined;
export let lastCell = undefined;
export let editors = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('selectionStore', selectionStore);
$: if (__mounted) setProp('dimensionRow', dimensionRow);
$: if (__mounted) setProp('dimensionCol', dimensionCol);
$: if (__mounted) setProp('dataStore', dataStore);
$: if (__mounted) setProp('colData', colData);
$: if (__mounted) setProp('lastCell', lastCell);
$: if (__mounted) setProp('editors', editors);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-overlay-selection 
  readonly={readonly}
  range={range}
  can-drag={canDrag}
  use-clipboard={useClipboard}
  on:internalCopy={onEvent}
  on:internalPaste={onEvent}
  on:internalCellEdit={onEvent}
  on:internalFocusCell={onEvent}
  on:setEdit={onEvent}
  on:setRange={onEvent}
  on:setTempRange={onEvent}
  on:focusCell={onEvent}
  on:internalSelectionChanged={onEvent}
  on:internalRangeDataApply={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-overlay-selection>
  
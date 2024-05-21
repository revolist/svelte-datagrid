
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let readonly = undefined;
export let range = undefined;
export let rowClass = undefined;
export let additionalData = undefined;
export let rowSelectionStore;
export let viewportRow;
export let viewportCol;
export let dimensionRow;
export let colData = undefined;
export let dataStore;
export let type;
export let colType;
export let jobsBeforeRender = undefined;

export const updateCell = (...args) => __ref.updateCell(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('rowSelectionStore', rowSelectionStore);
$: if (__mounted) setProp('viewportRow', viewportRow);
$: if (__mounted) setProp('viewportCol', viewportCol);
$: if (__mounted) setProp('dimensionRow', dimensionRow);
$: if (__mounted) setProp('colData', colData);
$: if (__mounted) setProp('dataStore', dataStore);
$: if (__mounted) setProp('jobsBeforeRender', jobsBeforeRender);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-data 
  readonly={readonly}
  range={range}
  row-class={rowClass}
  additional-data={additionalData}
  type={type}
  col-type={colType}
  on:beforerowrender={onEvent}
  on:afterrender={onEvent}
  on:beforecellrender={onEvent}
  on:dragstartcell={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-data>
  
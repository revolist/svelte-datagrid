
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let columnStores = undefined;
export let rowStores = undefined;
export let dimensions = undefined;
export let viewports = undefined;
export let editors = undefined;
export let rowClass = undefined;
export let uuid = undefined;
export let useClipboard = undefined;
export let resize = undefined;
export let readonly = undefined;
export let range = undefined;
export let rowHeaders = undefined;
export let columnFilter = undefined;

export const scrollToCoordinate = (...args) => __ref.scrollToCoordinate(...args);
export const clearFocus = (...args) => __ref.clearFocus(...args);
export const setEdit = (...args) => __ref.setEdit(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('columnStores', columnStores);
$: if (__mounted) setProp('rowStores', rowStores);
$: if (__mounted) setProp('dimensions', dimensions);
$: if (__mounted) setProp('viewports', viewports);
$: if (__mounted) setProp('editors', editors);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-viewport 
  row-class={rowClass}
  uuid={uuid}
  use-clipboard={useClipboard}
  resize={resize}
  readonly={readonly}
  range={range}
  row-headers={rowHeaders}
  column-filter={columnFilter}
  on:setDimensionSize={onEvent}
  on:setViewportCoordinate={onEvent}
  on:setViewportSize={onEvent}
  on:initialRowDragStart={onEvent}
  on:beforeEditStart={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-viewport>
  

<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let viewportCol = undefined;
export let dimensionCol = undefined;
export let selectionStore = undefined;
export let groups = undefined;
export let groupingDepth = undefined;
export let readonly = undefined;
export let canResize = undefined;
export let resizeHandler = undefined;
export let colData = undefined;
export let columnFilter = undefined;
export let type;
export let additionalData = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('viewportCol', viewportCol);
$: if (__mounted) setProp('dimensionCol', dimensionCol);
$: if (__mounted) setProp('selectionStore', selectionStore);
$: if (__mounted) setProp('groups', groups);
$: if (__mounted) setProp('resizeHandler', resizeHandler);
$: if (__mounted) setProp('colData', colData);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-header 
  grouping-depth={groupingDepth}
  readonly={readonly}
  can-resize={canResize}
  column-filter={columnFilter}
  type={type}
  additional-data={additionalData}
  on:beforeheaderclick={onEvent}
  on:headerresize={onEvent}
  on:beforeheaderresize={onEvent}
  on:headerdblclick={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-header>
  

<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let viewportCol = undefined;
export let dimensionCol = undefined;
export let selectionStore = undefined;
export let parent = undefined;
export let groups = undefined;
export let groupingDepth = undefined;
export let canResize = undefined;
export let colData = undefined;
export let columnFilter = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('viewportCol', viewportCol);
$: if (__mounted) setProp('dimensionCol', dimensionCol);
$: if (__mounted) setProp('selectionStore', selectionStore);
$: if (__mounted) setProp('groups', groups);
$: if (__mounted) setProp('colData', colData);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-header 
  parent={parent}
  grouping-depth={groupingDepth}
  can-resize={canResize}
  column-filter={columnFilter}
  on:initialHeaderClick={onEvent}
  on:headerResize={onEvent}
  on:headerDblClick={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-header>
  
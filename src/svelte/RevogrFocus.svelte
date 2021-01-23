
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let selectionStore = undefined;
export let dimensionRow = undefined;
export let dimensionCol = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('selectionStore', selectionStore);
$: if (__mounted) setProp('dimensionRow', dimensionRow);
$: if (__mounted) setProp('dimensionCol', dimensionCol);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-focus 
  
  
  bind:this={__ref}
>
  <slot></slot>
</revogr-focus>
  
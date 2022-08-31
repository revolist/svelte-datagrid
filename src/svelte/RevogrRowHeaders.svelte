
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let height = undefined;
export let dataPorts = undefined;
export let headerProp = undefined;
export let uiid = undefined;
export let resize = undefined;
export let rowHeaderColumn = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('dataPorts', dataPorts);
$: if (__mounted) setProp('headerProp', headerProp);
$: if (__mounted) setProp('rowHeaderColumn', rowHeaderColumn);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-row-headers 
  height={height}
  uiid={uiid}
  resize={resize}
  on:scrollViewport={onEvent}
  on:elementToScroll={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-row-headers>
  
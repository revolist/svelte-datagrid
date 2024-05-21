
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let height = undefined;
export let dataPorts = undefined;
export let headerProp = undefined;
export let rowClass = undefined;
export let resize = undefined;
export let rowHeaderColumn = undefined;
export let additionalData = undefined;
export let jobsBeforeRender = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('dataPorts', dataPorts);
$: if (__mounted) setProp('headerProp', headerProp);
$: if (__mounted) setProp('rowHeaderColumn', rowHeaderColumn);
$: if (__mounted) setProp('jobsBeforeRender', jobsBeforeRender);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-row-headers 
  height={height}
  row-class={rowClass}
  resize={resize}
  additional-data={additionalData}
  on:scrollview={onEvent}
  on:ref={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-row-headers>
  
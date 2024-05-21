
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let dimension = undefined;
export let viewportStore;
export let dimensionStore;

export const setScroll = (...args) => __ref.setScroll(...args);
export const changeScroll = (...args) => __ref.changeScroll(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('viewportStore', viewportStore);
$: if (__mounted) setProp('dimensionStore', dimensionStore);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-scroll-virtual 
  dimension={dimension}
  on:scrollvirtual={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-scroll-virtual>
  
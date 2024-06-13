
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let rowHeader = undefined;
export let contentWidth = undefined;
export let contentHeight = undefined;
export let colType;

export const setScroll = (...args) => __ref.setScroll(...args);
export const changeScroll = (...args) => __ref.changeScroll(...args);
export const applyScroll = (...args) => __ref.applyScroll(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-viewport-scroll 
  row-header={rowHeader}
  content-width={contentWidth}
  content-height={contentHeight}
  col-type={colType}
  on:scrollviewport={onEvent}
  on:resizeviewport={onEvent}
  on:scrollchange={onEvent}
  on:scrollviewportsilent={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-viewport-scroll>
  

<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let contentWidth = undefined;
export let contentHeight = undefined;

export const setScroll = (...args) => __ref.setScroll(...args);
export const changeScroll = (...args) => __ref.changeScroll(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-viewport-scroll 
  content-width={contentWidth}
  content-height={contentHeight}
  on:scrollViewport={onEvent}
  on:resizeViewport={onEvent}
  on:scrollchange={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-viewport-scroll>
  
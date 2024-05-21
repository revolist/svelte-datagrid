
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let readonly = undefined;

export const doCopy = (...args) => __ref.doCopy(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-clipboard 
  readonly={readonly}
  on:beforepaste={onEvent}
  on:beforepasteapply={onEvent}
  on:pasteregion={onEvent}
  on:afterpasteapply={onEvent}
  on:beforecut={onEvent}
  on:clearregion={onEvent}
  on:beforecopy={onEvent}
  on:beforecopyapply={onEvent}
  on:copyregion={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-clipboard>
  
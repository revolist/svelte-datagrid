
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let editCell = undefined;
export let column = undefined;
export let editor = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('editCell', editCell);
$: if (__mounted) setProp('column', column);
$: if (__mounted) setProp('editor', editor);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-edit 
  
  on:cellEdit={onEvent}
  on:closeEdit={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-edit>
  
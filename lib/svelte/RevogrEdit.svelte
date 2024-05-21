
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let editCell = undefined;
export let column = undefined;
export let editor = undefined;
export let saveOnClose = undefined;
export let additionalData = undefined;

export const cancelChanges = (...args) => __ref.cancelChanges(...args);
export const beforeDisconnect = (...args) => __ref.beforeDisconnect(...args);

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
  save-on-close={saveOnClose}
  additional-data={additionalData}
  on:celledit={onEvent}
  on:closeedit={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-edit>
  
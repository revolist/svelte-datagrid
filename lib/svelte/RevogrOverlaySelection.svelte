
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let readonly = undefined;
export let range = undefined;
export let canDrag = undefined;
export let useClipboard = undefined;
export let selectionStore = undefined;
export let dimensionRow = undefined;
export let dimensionCol = undefined;
export let dataStore = undefined;
export let colData = undefined;
export let lastCell = undefined;
export let editors = undefined;
export let applyChangesOnClose = undefined;
export let additionalData = undefined;
export let isMobileDevice = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('selectionStore', selectionStore);
$: if (__mounted) setProp('dimensionRow', dimensionRow);
$: if (__mounted) setProp('dimensionCol', dimensionCol);
$: if (__mounted) setProp('dataStore', dataStore);
$: if (__mounted) setProp('colData', colData);
$: if (__mounted) setProp('lastCell', lastCell);
$: if (__mounted) setProp('editors', editors);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revogr-overlay-selection 
  readonly={readonly}
  range={range}
  can-drag={canDrag}
  use-clipboard={useClipboard}
  apply-changes-on-close={applyChangesOnClose}
  additional-data={additionalData}
  is-mobile-device={isMobileDevice}
  on:beforecopyregion={onEvent}
  on:beforepasteregion={onEvent}
  on:celleditapply={onEvent}
  on:beforecellfocusinit={onEvent}
  on:setedit={onEvent}
  on:beforeapplyrange={onEvent}
  on:beforesetrange={onEvent}
  on:beforeeditrender={onEvent}
  on:setrange={onEvent}
  on:selectall={onEvent}
  on:canceledit={onEvent}
  on:settemprange={onEvent}
  on:applyfocus={onEvent}
  on:focuscell={onEvent}
  on:beforerangedataapply={onEvent}
  on:selectionchangeinit={onEvent}
  on:beforerangecopyapply={onEvent}
  on:rangeeditapply={onEvent}
  on:clipboardrangecopy={onEvent}
  on:clipboardrangepaste={onEvent}
  on:beforekeydown={onEvent}
  on:beforekeyup={onEvent}
  on:beforecellsave={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revogr-overlay-selection>
  

<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let rowHeaders = undefined;
export let frameSize = undefined;
export let rowSize = undefined;
export let colSize = undefined;
export let range = undefined;
export let readonly = undefined;
export let resize = undefined;
export let canFocus = undefined;
export let useClipboard = undefined;
export let columns = undefined;
export let source = undefined;
export let pinnedTopSource = undefined;
export let pinnedBottomSource = undefined;
export let rowDefinitions = undefined;
export let editors = undefined;
export let plugins = undefined;
export let columnTypes = undefined;
export let theme = undefined;
export let rowClass = undefined;
export let autoSizeColumn = undefined;
export let filter = undefined;
export let canMoveColumns = undefined;
export let trimmedRows = undefined;
export let exporting = undefined;
export let grouping = undefined;
export let stretch = undefined;

export const refresh = (...args) => __ref.refresh(...args);
export const scrollToRow = (...args) => __ref.scrollToRow(...args);
export const scrollToColumnIndex = (...args) => __ref.scrollToColumnIndex(...args);
export const scrollToColumnProp = (...args) => __ref.scrollToColumnProp(...args);
export const updateColumns = (...args) => __ref.updateColumns(...args);
export const addTrimmed = (...args) => __ref.addTrimmed(...args);
export const scrollToCoordinate = (...args) => __ref.scrollToCoordinate(...args);
export const setCellEdit = (...args) => __ref.setCellEdit(...args);
export const registerVNode = (...args) => __ref.registerVNode(...args);
export const getSource = (...args) => __ref.getSource(...args);
export const getVisibleSource = (...args) => __ref.getVisibleSource(...args);
export const getSourceStore = (...args) => __ref.getSourceStore(...args);
export const getColumnStore = (...args) => __ref.getColumnStore(...args);
export const updateColumnSorting = (...args) => __ref.updateColumnSorting(...args);
export const clearSorting = (...args) => __ref.clearSorting(...args);
export const getColumns = (...args) => __ref.getColumns(...args);
export const clearFocus = (...args) => __ref.clearFocus(...args);
export const getPlugins = (...args) => __ref.getPlugins(...args);
export const getFocused = (...args) => __ref.getFocused(...args);
export const getSelectedRange = (...args) => __ref.getSelectedRange(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('columns', columns);
$: if (__mounted) setProp('source', source);
$: if (__mounted) setProp('pinnedTopSource', pinnedTopSource);
$: if (__mounted) setProp('pinnedBottomSource', pinnedBottomSource);
$: if (__mounted) setProp('rowDefinitions', rowDefinitions);
$: if (__mounted) setProp('editors', editors);
$: if (__mounted) setProp('plugins', plugins);
$: if (__mounted) setProp('columnTypes', columnTypes);
$: if (__mounted) setProp('trimmedRows', trimmedRows);
$: if (__mounted) setProp('grouping', grouping);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<revo-grid 
  row-headers={rowHeaders}
  frame-size={frameSize}
  row-size={rowSize}
  col-size={colSize}
  range={range}
  readonly={readonly}
  resize={resize}
  can-focus={canFocus}
  use-clipboard={useClipboard}
  theme={theme}
  row-class={rowClass}
  auto-size-column={autoSizeColumn}
  filter={filter}
  can-move-columns={canMoveColumns}
  exporting={exporting}
  stretch={stretch}
  on:beforeedit={onEvent}
  on:beforerangeedit={onEvent}
  on:afteredit={onEvent}
  on:beforeautofill={onEvent}
  on:beforeaange={onEvent}
  on:afterfocus={onEvent}
  on:roworderchanged={onEvent}
  on:beforesourcesortingapply={onEvent}
  on:beforesortingapply={onEvent}
  on:beforesorting={onEvent}
  on:rowdragstart={onEvent}
  on:headerclick={onEvent}
  on:beforecellfocus={onEvent}
  on:beforefocuslost={onEvent}
  on:beforesourceset={onEvent}
  on:aftersourceset={onEvent}
  on:beforecolumnsset={onEvent}
  on:beforecolumnapplied={onEvent}
  on:aftercolumnsset={onEvent}
  on:beforefilterapply={onEvent}
  on:beforefiltertrimmed={onEvent}
  on:beforetrimmed={onEvent}
  on:aftertrimmed={onEvent}
  on:viewportscroll={onEvent}
  on:beforeexport={onEvent}
  on:beforeeditstart={onEvent}
  on:aftercolumnresize={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revo-grid>
  
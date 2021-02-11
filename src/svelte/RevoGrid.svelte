
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
export let trimmedRows = undefined;
export let exporting = undefined;
export let grouping = undefined;

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
export const getColumns = (...args) => __ref.getColumns(...args);
export const clearFocus = (...args) => __ref.clearFocus(...args);
export const getPlugins = (...args) => __ref.getPlugins(...args);

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
  theme={theme}
  row-class={rowClass}
  auto-size-column={autoSizeColumn}
  filter={filter}
  exporting={exporting}
  on:beforeEdit={onEvent}
  on:beforeRangeEdit={onEvent}
  on:afterEdit={onEvent}
  on:beforeAutofill={onEvent}
  on:beforeRange={onEvent}
  on:rowOrderChanged={onEvent}
  on:beforeSourceSortingApply={onEvent}
  on:beforeSortingApply={onEvent}
  on:beforeSorting={onEvent}
  on:rowDragStart={onEvent}
  on:headerClick={onEvent}
  on:beforeCellFocus={onEvent}
  on:beforeSourceSet={onEvent}
  on:afterSourceSet={onEvent}
  on:beforeColumnsSet={onEvent}
  on:afterColumnsSet={onEvent}
  on:beforeFilterApply={onEvent}
  on:beforeFilterTrimmed={onEvent}
  on:beforeTrimmed={onEvent}
  on:afterTrimmed={onEvent}
  on:viewportScroll={onEvent}
  on:beforeExport={onEvent}
  on:beforeEditStart={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revo-grid>
  
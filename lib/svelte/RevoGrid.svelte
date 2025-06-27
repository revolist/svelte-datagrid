
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
export let applyOnClose = undefined;
export let plugins = undefined;
export let columnTypes = undefined;
export let theme = undefined;
export let rowClass = undefined;
export let autoSizeColumn = undefined;
export let filter = undefined;
export let sorting = undefined;
export let focusTemplate = undefined;
export let canMoveColumns = undefined;
export let trimmedRows = undefined;
export let exporting = undefined;
export let grouping = undefined;
export let stretch = undefined;
export let additionalData = undefined;
export let disableVirtualX = undefined;
export let disableVirtualY = undefined;
export let hideAttribution = undefined;
export let jobsBeforeRender = undefined;
export let registerVNode = undefined;
export let accessible = undefined;
export let rtl = undefined;
export let canDrag = undefined;

export const refresh = (...args) => __ref.refresh(...args);
export const setDataAt = (...args) => __ref.setDataAt(...args);
export const scrollToRow = (...args) => __ref.scrollToRow(...args);
export const scrollToColumnIndex = (...args) => __ref.scrollToColumnIndex(...args);
export const scrollToColumnProp = (...args) => __ref.scrollToColumnProp(...args);
export const updateColumns = (...args) => __ref.updateColumns(...args);
export const addTrimmed = (...args) => __ref.addTrimmed(...args);
export const scrollToCoordinate = (...args) => __ref.scrollToCoordinate(...args);
export const setCellEdit = (...args) => __ref.setCellEdit(...args);
export const setCellsFocus = (...args) => __ref.setCellsFocus(...args);
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
export const getContentSize = (...args) => __ref.getContentSize(...args);
export const getSelectedRange = (...args) => __ref.getSelectedRange(...args);
export const refreshExtraElements = (...args) => __ref.refreshExtraElements(...args);
export const getProviders = (...args) => __ref.getProviders(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



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
  columns={columns}
  source={source}
  pinned-top-source={pinnedTopSource}
  pinned-bottom-source={pinnedBottomSource}
  row-definitions={rowDefinitions}
  editors={editors}
  apply-on-close={applyOnClose}
  plugins={plugins}
  column-types={columnTypes}
  theme={theme}
  row-class={rowClass}
  auto-size-column={autoSizeColumn}
  filter={filter}
  sorting={sorting}
  focus-template={focusTemplate}
  can-move-columns={canMoveColumns}
  trimmed-rows={trimmedRows}
  exporting={exporting}
  grouping={grouping}
  stretch={stretch}
  additional-data={additionalData}
  disable-virtual-x={disableVirtualX}
  disable-virtual-y={disableVirtualY}
  hide-attribution={hideAttribution}
  jobs-before-render={jobsBeforeRender}
  register-v-node={registerVNode}
  accessible={accessible}
  rtl={rtl}
  can-drag={canDrag}
  on:contentsizechanged={onEvent}
  on:beforeedit={onEvent}
  on:beforerangeedit={onEvent}
  on:afteredit={onEvent}
  on:beforeautofill={onEvent}
  on:beforerange={onEvent}
  on:afterfocus={onEvent}
  on:roworderchanged={onEvent}
  on:beforesorting={onEvent}
  on:beforesourcesortingapply={onEvent}
  on:beforesortingapply={onEvent}
  on:rowdragstart={onEvent}
  on:headerclick={onEvent}
  on:beforecellfocus={onEvent}
  on:beforefocuslost={onEvent}
  on:beforesourceset={onEvent}
  on:beforeanysource={onEvent}
  on:aftersourceset={onEvent}
  on:afteranysource={onEvent}
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
  on:beforerowdefinition={onEvent}
  on:filterconfigchanged={onEvent}
  on:sortingconfigchanged={onEvent}
  on:rowheaderschanged={onEvent}
  on:beforegridrender={onEvent}
  on:aftergridrender={onEvent}
  on:aftergridinit={onEvent}
  on:additionaldatachanged={onEvent}
  on:afterthemechanged={onEvent}
  on:created={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</revo-grid>
  
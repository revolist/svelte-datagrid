/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import type { Components, JSX } from '@revolist/revogrid';


interface RevoGridProps {
  
  /** Excel like functionality.
Show row numbers.
Also can be used for custom row header render if object provided. */
  rowHeaders?: Components.RevoGrid["rowHeaders"]
  
  /** Defines how many rows/columns should be rendered outside visible area. */
  frameSize?: Components.RevoGrid["frameSize"]
  
  /** Indicates default rgRow size.
By default 0, means theme package size will be applied

Alternatively you can use `rowSize` to reset viewport */
  rowSize?: Components.RevoGrid["rowSize"]
  
  /** Indicates default column size. */
  colSize?: Components.RevoGrid["colSize"]
  
  /** When true, user can range selection. */
  range?: Components.RevoGrid["range"]
  
  /** When true, grid in read only mode. */
  readonly?: Components.RevoGrid["readonly"]
  
  /** When true, columns are resizable. */
  resize?: Components.RevoGrid["resize"]
  
  /** When true cell focus appear. */
  canFocus?: Components.RevoGrid["canFocus"]
  
  /** When true enable clipboard. */
  useClipboard?: Components.RevoGrid["useClipboard"]
  
  /** Columns - defines an array of grid columns.
Can be column or grouped column. */
  columns?: Components.RevoGrid["columns"]
  
  /** Source - defines main data source.
Can be an Object or 2 dimensional array([][]);
Keys/indexes referenced from columns Prop. */
  source?: Components.RevoGrid["source"]
  
  /** Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source. */
  pinnedTopSource?: Components.RevoGrid["pinnedTopSource"]
  
  /** Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source. */
  pinnedBottomSource?: Components.RevoGrid["pinnedBottomSource"]
  
  /** Custom row properies to be applied. See `RowDefinition` for more info. */
  rowDefinitions?: Components.RevoGrid["rowDefinitions"]
  
  /** Custom editors register. */
  editors?: Components.RevoGrid["editors"]
  
  /** Apply changes in editor when closed except 'Escape' cases.
If custom editor in use method getValue required.
Check interfaces.d.ts `EditorBase` for more info. */
  applyOnClose?: Components.RevoGrid["applyOnClose"]
  
  /** Custom grid plugins. Can be added or removed at runtime.
Every plugin should be inherited from BasePlugin class.

For more details check [Plugin guide](https://rv-grid.com/guide/plugin/) */
  plugins?: Components.RevoGrid["plugins"]
  
  /** Column Types Format.
Every type represent multiple column properties.
Types will be merged but can be replaced with column properties.
Types were made as separate objects to be reusable per multiple columns. */
  columnTypes?: Components.RevoGrid["columnTypes"]
  
  /** Theme name. */
  theme?: Components.RevoGrid["theme"]
  
  /** Row class property mapping.
Map custom classes to rows from row object data.
Define this property in rgRow object and this will be mapped as rgRow class. */
  rowClass?: Components.RevoGrid["rowClass"]
  
  /** Autosize config.
Enables columns autoSize.
For more details check `autoSizeColumn` plugin.
By default disabled, hence operation is not performance efficient.
`true` to enable with default params (double header separator click for autosize).
Or define config. See `AutoSizeColumnConfig` for more details. */
  autoSizeColumn?: Components.RevoGrid["autoSizeColumn"]
  
  /** Enables filter plugin.
Can be boolean.
Or can be filter collection See `FilterCollection` for more info. */
  filter?: Components.RevoGrid["filter"]
  
  /** Alternative way to set sorting.
`{columns: [{prop: 'name', order: 'asc'}]}`
Use SortingPlugin to get current sorting state */
  sorting?: Components.RevoGrid["sorting"]
  
  /** Apply changes typed in editor on editor close except Escape cases.
If custom editor in use method `getValue` required.
Check `interfaces.d.ts` `EditorBase` for more info. */
  focusTemplate?: Components.RevoGrid["focusTemplate"]
  
  /** Enable column move plugin. */
  canMoveColumns?: Components.RevoGrid["canMoveColumns"]
  
  /** Trimmed rows.
Functionality which allows to hide rows from main data set.
`trimmedRows` are physical `rgRow` indexes to hide. */
  trimmedRows?: Components.RevoGrid["trimmedRows"]
  
  /** Enable export plugin. */
  exporting?: Components.RevoGrid["exporting"]
  
  /** Group rows based on this property.
Define properties to be groped by grouping plugin See `GroupingOptions`. */
  grouping?: Components.RevoGrid["grouping"]
  
  /** Stretch strategy for columns by `StretchColumn` plugin.
For example if there are more space on the right last column size would be increased. */
  stretch?: Components.RevoGrid["stretch"]
  
  /** Additional data to be passed to plugins, renders or editors.
For example if you need to pass Vue component instance. */
  additionalData?: Components.RevoGrid["additionalData"]
  
  /** Disable lazy rendering mode for the `X axis`.
Use when not many columns present and you don't need rerenader cells during scroll.
Can be used for initial rendering performance improvement. */
  disableVirtualX?: Components.RevoGrid["disableVirtualX"]
  
  /** Disable lazy rendering mode for the `Y axis`.
Use when not many rows present and you don't need rerenader cells during scroll.
Can be used for initial rendering performance improvement. */
  disableVirtualY?: Components.RevoGrid["disableVirtualY"]
  
  /** Please only hide the attribution if you are subscribed to Pro version */
  hideAttribution?: Components.RevoGrid["hideAttribution"]
  
  /** Prevent rendering until job is done.
Can be used for initial rendering performance improvement.
When several plugins require initial rendering this will prevent double initial rendering. */
  jobsBeforeRender?: Components.RevoGrid["jobsBeforeRender"]
  
  /** Register new virtual node inside of grid.
Used for additional items creation such as plugin elements.
Should be set before grid render inside of plugins.
Can return VNode result of h() function or a function that returns VNode.
Function can be used for performance improvement and additional renders. */
  registerVNode?: Components.RevoGrid["registerVNode"]
  
  /** Enable accessibility. If disabled, the grid will not be accessible. */
  accessible?: Components.RevoGrid["accessible"]
  
  /** Enable right-to-left (RTL) mode. When enabled, columns will be displayed from right to left. */
  rtl?: Components.RevoGrid["rtl"]
  
  /** Disable native drag&drop plugin. */
  canDrag?: Components.RevoGrid["canDrag"]
}

interface RevoGridEvents {
  
  /** New content size has been applied. The size excludes the header.
Currently, the event responsible for applying the new content size does not provide the actual size.
To retrieve the actual content size, you can utilize the `getContentSize` function after the event has been triggered. */
  contentsizechanged: Parameters<JSX.RevoGrid["onContentsizechanged"]>[0]
  
  /** Before the data is edited.
To prevent the default behavior of editing data and use your own implementation, call `e.preventDefault()`.
To override the edit result with your own value, set the `e.val` property to your desired value. */
  beforeedit: Parameters<JSX.RevoGrid["onBeforeedit"]>[0]
  
  /** Before applying range data, specifically when a range selection occurs.
To customize the data and prevent the default edit data from being set, you can call `e.preventDefault()`. */
  beforerangeedit: Parameters<JSX.RevoGrid["onBeforerangeedit"]>[0]
  
  /** After data applied or range changed. */
  afteredit: Parameters<JSX.RevoGrid["onAfteredit"]>[0]
  
  /** Before autofill is applied.
To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`. */
  beforeautofill: Parameters<JSX.RevoGrid["onBeforeautofill"]>[0]
  
  /** Before autofill is applied. Runs before beforeautofill event.
Use e.preventDefault() to prevent range. */
  beforerange: Parameters<JSX.RevoGrid["onBeforerange"]>[0]
  
  /** After focus render finished.
Can be used to access a focus element through `event.target`.
This is just a duplicate of `afterfocus` from `revogr-focus.tsx`. */
  afterfocus: Parameters<JSX.RevoGrid["onAfterfocus"]>[0]
  
  /** Before the order of `rgRow` is applied.
To prevent the default behavior of changing the order of `rgRow`, you can call `e.preventDefault()`. */
  roworderchanged: Parameters<JSX.RevoGrid["onRoworderchanged"]>[0]
  
  /** By `SortingPlugin`
<br>Triggered immediately after header click.
<br>First in sorting event sequence. Ff this event stops no other event called.
<br>Use `e.preventDefault()` to prevent sorting. */
  beforesorting: Parameters<JSX.RevoGrid["onBeforesorting"]>[0]
  
  /** By `SortingPlugin`
<br>Same as `beforesorting` but triggered after `beforeanysource` (when source is changed).
<br>Use `e.preventDefault()` to prevent sorting data change. */
  beforesourcesortingapply: Parameters<JSX.RevoGrid["onBeforesourcesortingapply"]>[0]
  
  /** By `SortingPlugin`
<br> After `beforesorting`
<br>Triggered after column data updated with new sorting order.
<br>Use `e.preventDefault()` to prevent sorting data change. */
  beforesortingapply: Parameters<JSX.RevoGrid["onBeforesortingapply"]>[0]
  
  /** This event is triggered when the row order change is started.
To prevent the default behavior of changing the row order, you can call `e.preventDefault()`.
To change the item name at the start of the row order change, you can set `e.text` to the desired new name. */
  rowdragstart: Parameters<JSX.RevoGrid["onRowdragstart"]>[0]
  
  /** On header click. */
  headerclick: Parameters<JSX.RevoGrid["onHeaderclick"]>[0]
  
  /** Before the cell focus is changed.
To prevent the default behavior of changing the cell focus, you can call `e.preventDefault()`. */
  beforecellfocus: Parameters<JSX.RevoGrid["onBeforecellfocus"]>[0]
  
  /** Before the grid focus is lost.
To prevent the default behavior of changing the cell focus, you can call `e.preventDefault()`. */
  beforefocuslost: Parameters<JSX.RevoGrid["onBeforefocuslost"]>[0]
  
  /** Before main source/rows data apply.
You can override data source here */
  beforesourceset: Parameters<JSX.RevoGrid["onBeforesourceset"]>[0]
  
  /** Before data apply on any source type. Can be source from pinned and main viewport.
You can override data source here */
  beforeanysource: Parameters<JSX.RevoGrid["onBeforeanysource"]>[0]
  
  /** After main source/rows updated */
  aftersourceset: Parameters<JSX.RevoGrid["onAftersourceset"]>[0]
  
  /** Emitted after each source update, whether from the pinned or main viewport.
Useful for tracking all changes originating from sources in both the pinned and main viewports. */
  afteranysource: Parameters<JSX.RevoGrid["onAfteranysource"]>[0]
  
  /** Emitted before a column update is applied.
Listeners can use this event to perform any necessary actions or modifications before the column update is finalized. */
  beforecolumnsset: Parameters<JSX.RevoGrid["onBeforecolumnsset"]>[0]
  
  /** Emitted before a column update is applied, after the column set is gathered and the viewport is updated.
Useful for performing actions or modifications before the final application of the column update. */
  beforecolumnapplied: Parameters<JSX.RevoGrid["onBeforecolumnapplied"]>[0]
  
  /** Column updated */
  aftercolumnsset: Parameters<JSX.RevoGrid["onAftercolumnsset"]>[0]
  
  /** Emitted before applying a filter to the data source.
Use e.preventDefault() to prevent cell focus change.
Modify if you need to change filters. */
  beforefilterapply: Parameters<JSX.RevoGrid["onBeforefilterapply"]>[0]
  
  /** Emitted before applying a filter to the data source.
Use e.preventDefault() to prevent the default behavior of trimming values and applying the filter.
Modify the `collection` property if you want to change the filters.
Modify the `itemsToFilter` property if you want to filter the indexes for trimming. */
  beforefiltertrimmed: Parameters<JSX.RevoGrid["onBeforefiltertrimmed"]>[0]
  
  /** Emitted before trimming values.
Use e.preventDefault() to prevent the default behavior of trimming values.
Modify the `trimmed` property if you want to filter the indexes for trimming. */
  beforetrimmed: Parameters<JSX.RevoGrid["onBeforetrimmed"]>[0]
  
  /** Emitted after trimmed values have been applied.
Useful for notifying when trimming of values has taken place. */
  aftertrimmed: Parameters<JSX.RevoGrid["onAftertrimmed"]>[0]
  
  /** Emitted when the viewport is scrolled.
Useful for tracking viewport scrolling events. */
  viewportscroll: Parameters<JSX.RevoGrid["onViewportscroll"]>[0]
  
  /** Before export
Use e.preventDefault() to prevent export
Replace data in Event in case you want to modify it in export */
  beforeexport: Parameters<JSX.RevoGrid["onBeforeexport"]>[0]
  
  /** Emitted before editing starts.
Use e.preventDefault() to prevent the default edit behavior. */
  beforeeditstart: Parameters<JSX.RevoGrid["onBeforeeditstart"]>[0]
  
  /** Emitted after column resizing.
Useful for retrieving the resized columns. */
  aftercolumnresize: Parameters<JSX.RevoGrid["onAftercolumnresize"]>[0]
  
  /** Emitted before the row definition is applied.
Useful for modifying or preventing the default row definition behavior. */
  beforerowdefinition: Parameters<JSX.RevoGrid["onBeforerowdefinition"]>[0]
  
  /** Emitted when the filter configuration is changed */
  filterconfigchanged: Parameters<JSX.RevoGrid["onFilterconfigchanged"]>[0]
  
  /** Emitted when the sorting configuration is changed
SortingPlugin subsribed to this event */
  sortingconfigchanged: Parameters<JSX.RevoGrid["onSortingconfigchanged"]>[0]
  
  /** Emmited when the row headers are changed. */
  rowheaderschanged: Parameters<JSX.RevoGrid["onRowheaderschanged"]>[0]
  
  /** Emmited before the grid is rendered. */
  beforegridrender: Parameters<JSX.RevoGrid["onBeforegridrender"]>[0]
  
  /** Emmited after the grid is rendered. */
  aftergridrender: Parameters<JSX.RevoGrid["onAftergridrender"]>[0]
  
  /** Emmited after the grid is initialized. Connected to the DOM. */
  aftergridinit: Parameters<JSX.RevoGrid["onAftergridinit"]>[0]
  
  /** Emmited after the additional data is changed */
  additionaldatachanged: Parameters<JSX.RevoGrid["onAdditionaldatachanged"]>[0]
  
  /** Emmited after the theme is changed */
  afterthemechanged: Parameters<JSX.RevoGrid["onAfterthemechanged"]>[0]
  
  /** Emmited after grid created */
  created: Parameters<JSX.RevoGrid["onCreated"]>[0]
}

interface RevoGridSlots {
  default: any
}
  
import 'svelte/internal/disclose-version';
import 'svelte/internal/flags/legacy';
import * as $ from 'svelte/internal/client';
import { createEventDispatcher, onMount } from 'svelte';

var root = $.from_html(`<revo-grid><!></revo-grid>`, 2);

export default function RevoGrid($$anchor, $$props) {
	$.push($$props, false);

	let __ref = $.mutable_source();
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let rowHeaders = $.prop($$props, 'rowHeaders', 8, undefined);
	let frameSize = $.prop($$props, 'frameSize', 8, undefined);
	let rowSize = $.prop($$props, 'rowSize', 8, undefined);
	let colSize = $.prop($$props, 'colSize', 8, undefined);
	let range = $.prop($$props, 'range', 8, undefined);
	let readonly = $.prop($$props, 'readonly', 8, undefined);
	let resize = $.prop($$props, 'resize', 8, undefined);
	let canFocus = $.prop($$props, 'canFocus', 8, undefined);
	let useClipboard = $.prop($$props, 'useClipboard', 8, undefined);
	let columns = $.prop($$props, 'columns', 8, undefined);
	let source = $.prop($$props, 'source', 8, undefined);
	let pinnedTopSource = $.prop($$props, 'pinnedTopSource', 8, undefined);
	let pinnedBottomSource = $.prop($$props, 'pinnedBottomSource', 8, undefined);
	let rowDefinitions = $.prop($$props, 'rowDefinitions', 8, undefined);
	let editors = $.prop($$props, 'editors', 8, undefined);
	let applyOnClose = $.prop($$props, 'applyOnClose', 8, undefined);
	let plugins = $.prop($$props, 'plugins', 8, undefined);
	let columnTypes = $.prop($$props, 'columnTypes', 8, undefined);
	let theme = $.prop($$props, 'theme', 8, undefined);
	let rowClass = $.prop($$props, 'rowClass', 8, undefined);
	let autoSizeColumn = $.prop($$props, 'autoSizeColumn', 8, undefined);
	let filter = $.prop($$props, 'filter', 8, undefined);
	let sorting = $.prop($$props, 'sorting', 8, undefined);
	let focusTemplate = $.prop($$props, 'focusTemplate', 8, undefined);
	let canMoveColumns = $.prop($$props, 'canMoveColumns', 8, undefined);
	let trimmedRows = $.prop($$props, 'trimmedRows', 8, undefined);
	let exporting = $.prop($$props, 'exporting', 8, undefined);
	let grouping = $.prop($$props, 'grouping', 8, undefined);
	let stretch = $.prop($$props, 'stretch', 8, undefined);
	let additionalData = $.prop($$props, 'additionalData', 8, undefined);
	let disableVirtualX = $.prop($$props, 'disableVirtualX', 8, undefined);
	let disableVirtualY = $.prop($$props, 'disableVirtualY', 8, undefined);
	let hideAttribution = $.prop($$props, 'hideAttribution', 8, undefined);
	let jobsBeforeRender = $.prop($$props, 'jobsBeforeRender', 8, undefined);
	let registerVNode = $.prop($$props, 'registerVNode', 8, undefined);
	let accessible = $.prop($$props, 'accessible', 8, undefined);
	let rtl = $.prop($$props, 'rtl', 8, undefined);
	let canDrag = $.prop($$props, 'canDrag', 8, undefined);
	const refresh = (...args) => $.get(__ref).refresh(...args);
	const setDataAt = (...args) => $.get(__ref).setDataAt(...args);
	const scrollToRow = (...args) => $.get(__ref).scrollToRow(...args);
	const scrollToColumnIndex = (...args) => $.get(__ref).scrollToColumnIndex(...args);
	const scrollToColumnProp = (...args) => $.get(__ref).scrollToColumnProp(...args);
	const updateColumns = (...args) => $.get(__ref).updateColumns(...args);
	const addTrimmed = (...args) => $.get(__ref).addTrimmed(...args);
	const scrollToCoordinate = (...args) => $.get(__ref).scrollToCoordinate(...args);
	const setCellEdit = (...args) => $.get(__ref).setCellEdit(...args);
	const setCellsFocus = (...args) => $.get(__ref).setCellsFocus(...args);
	const getSource = (...args) => $.get(__ref).getSource(...args);
	const getVisibleSource = (...args) => $.get(__ref).getVisibleSource(...args);
	const getSourceStore = (...args) => $.get(__ref).getSourceStore(...args);
	const getColumnStore = (...args) => $.get(__ref).getColumnStore(...args);
	const updateColumnSorting = (...args) => $.get(__ref).updateColumnSorting(...args);
	const clearSorting = (...args) => $.get(__ref).clearSorting(...args);
	const getColumns = (...args) => $.get(__ref).getColumns(...args);
	const clearFocus = (...args) => $.get(__ref).clearFocus(...args);
	const getPlugins = (...args) => $.get(__ref).getPlugins(...args);
	const getFocused = (...args) => $.get(__ref).getFocused(...args);
	const getContentSize = (...args) => $.get(__ref).getContentSize(...args);
	const getSelectedRange = (...args) => $.get(__ref).getSelectedRange(...args);
	const refreshExtraElements = (...args) => $.get(__ref).refreshExtraElements(...args);
	const getProviders = (...args) => $.get(__ref).getProviders(...args);
	const getWebComponent = () => $.get(__ref);

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if ($.get(__ref)) $.mutate(__ref, $.get(__ref)[prop] = value);
	};

	const onEvent = (e) => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	var $$exports = {
		refresh,
		setDataAt,
		scrollToRow,
		scrollToColumnIndex,
		scrollToColumnProp,
		updateColumns,
		addTrimmed,
		scrollToCoordinate,
		setCellEdit,
		setCellsFocus,
		getSource,
		getVisibleSource,
		getSourceStore,
		getColumnStore,
		updateColumnSorting,
		clearSorting,
		getColumns,
		clearFocus,
		getPlugins,
		getFocused,
		getContentSize,
		getSelectedRange,
		refreshExtraElements,
		getProviders,
		getWebComponent
	};

	$.init();

	var revo_grid = root();

	$.template_effect(() => $.set_custom_element_data(revo_grid, 'row-headers', rowHeaders()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'frame-size', frameSize()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'row-size', rowSize()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'col-size', colSize()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'range', range()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'readonly', readonly()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'resize', resize()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'can-focus', canFocus()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'use-clipboard', useClipboard()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'columns', columns()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'source', source()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'pinned-top-source', pinnedTopSource()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'pinned-bottom-source', pinnedBottomSource()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'row-definitions', rowDefinitions()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'editors', editors()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'apply-on-close', applyOnClose()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'plugins', plugins()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'column-types', columnTypes()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'theme', theme()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'row-class', rowClass()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'auto-size-column', autoSizeColumn()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'filter', filter()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'sorting', sorting()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'focus-template', focusTemplate()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'can-move-columns', canMoveColumns()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'trimmed-rows', trimmedRows()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'exporting', exporting()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'grouping', grouping()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'stretch', stretch()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'additional-data', additionalData()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'disable-virtual-x', disableVirtualX()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'disable-virtual-y', disableVirtualY()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'hide-attribution', hideAttribution()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'jobs-before-render', jobsBeforeRender()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'register-v-node', registerVNode()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'accessible', accessible()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'rtl', rtl()));
	$.template_effect(() => $.set_custom_element_data(revo_grid, 'can-drag', canDrag()));

	var node = $.child(revo_grid);

	$.slot(node, $$props, 'default', {}, null);
	$.reset(revo_grid);
	$.bind_this(revo_grid, ($$value) => $.set(__ref, $$value), () => $.get(__ref));
	$.event('contentsizechanged', revo_grid, onEvent);
	$.event('beforeedit', revo_grid, onEvent);
	$.event('beforerangeedit', revo_grid, onEvent);
	$.event('afteredit', revo_grid, onEvent);
	$.event('beforeautofill', revo_grid, onEvent);
	$.event('beforerange', revo_grid, onEvent);
	$.event('afterfocus', revo_grid, onEvent);
	$.event('roworderchanged', revo_grid, onEvent);
	$.event('beforesorting', revo_grid, onEvent);
	$.event('beforesourcesortingapply', revo_grid, onEvent);
	$.event('beforesortingapply', revo_grid, onEvent);
	$.event('rowdragstart', revo_grid, onEvent);
	$.event('headerclick', revo_grid, onEvent);
	$.event('beforecellfocus', revo_grid, onEvent);
	$.event('beforefocuslost', revo_grid, onEvent);
	$.event('beforesourceset', revo_grid, onEvent);
	$.event('beforeanysource', revo_grid, onEvent);
	$.event('aftersourceset', revo_grid, onEvent);
	$.event('afteranysource', revo_grid, onEvent);
	$.event('beforecolumnsset', revo_grid, onEvent);
	$.event('beforecolumnapplied', revo_grid, onEvent);
	$.event('aftercolumnsset', revo_grid, onEvent);
	$.event('beforefilterapply', revo_grid, onEvent);
	$.event('beforefiltertrimmed', revo_grid, onEvent);
	$.event('beforetrimmed', revo_grid, onEvent);
	$.event('aftertrimmed', revo_grid, onEvent);
	$.event('viewportscroll', revo_grid, onEvent);
	$.event('beforeexport', revo_grid, onEvent);
	$.event('beforeeditstart', revo_grid, onEvent);
	$.event('aftercolumnresize', revo_grid, onEvent);
	$.event('beforerowdefinition', revo_grid, onEvent);
	$.event('filterconfigchanged', revo_grid, onEvent);
	$.event('sortingconfigchanged', revo_grid, onEvent);
	$.event('rowheaderschanged', revo_grid, onEvent);
	$.event('beforegridrender', revo_grid, onEvent);
	$.event('aftergridrender', revo_grid, onEvent);
	$.event('aftergridinit', revo_grid, onEvent);
	$.event('additionaldatachanged', revo_grid, onEvent);
	$.event('afterthemechanged', revo_grid, onEvent);
	$.event('created', revo_grid, onEvent);
	$.append($$anchor, revo_grid);
	$.bind_prop($$props, 'refresh', refresh);
	$.bind_prop($$props, 'setDataAt', setDataAt);
	$.bind_prop($$props, 'scrollToRow', scrollToRow);
	$.bind_prop($$props, 'scrollToColumnIndex', scrollToColumnIndex);
	$.bind_prop($$props, 'scrollToColumnProp', scrollToColumnProp);
	$.bind_prop($$props, 'updateColumns', updateColumns);
	$.bind_prop($$props, 'addTrimmed', addTrimmed);
	$.bind_prop($$props, 'scrollToCoordinate', scrollToCoordinate);
	$.bind_prop($$props, 'setCellEdit', setCellEdit);
	$.bind_prop($$props, 'setCellsFocus', setCellsFocus);
	$.bind_prop($$props, 'getSource', getSource);
	$.bind_prop($$props, 'getVisibleSource', getVisibleSource);
	$.bind_prop($$props, 'getSourceStore', getSourceStore);
	$.bind_prop($$props, 'getColumnStore', getColumnStore);
	$.bind_prop($$props, 'updateColumnSorting', updateColumnSorting);
	$.bind_prop($$props, 'clearSorting', clearSorting);
	$.bind_prop($$props, 'getColumns', getColumns);
	$.bind_prop($$props, 'clearFocus', clearFocus);
	$.bind_prop($$props, 'getPlugins', getPlugins);
	$.bind_prop($$props, 'getFocused', getFocused);
	$.bind_prop($$props, 'getContentSize', getContentSize);
	$.bind_prop($$props, 'getSelectedRange', getSelectedRange);
	$.bind_prop($$props, 'refreshExtraElements', refreshExtraElements);
	$.bind_prop($$props, 'getProviders', getProviders);
	$.bind_prop($$props, 'getWebComponent', getWebComponent);

	return $.pop($$exports);
}
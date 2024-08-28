/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


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
  
  /** Custom grid plugins.
Has to be predefined during first grid init.
Every plugin should be inherited from BasePlugin. */
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
Should be set before grid render inside of plugins. */
  registerVNode?: Components.RevoGrid["registerVNode"]
  
  /** Enable accessibility. If disabled, the grid will not be accessible. */
  accessible?: Components.RevoGrid["accessible"]
}

interface RevoGridEvents {
  
  /** New content size has been applied. The size excludes the header.
Currently, the event responsible for applying the new content size does not provide the actual size.
To retrieve the actual content size, you can utilize the `getContentSize` function after the event has been triggered. */
  contentsizechanged: Parameters<JSX.RevoGrid["onContentsizechanged"]>[0]
  
  /** This event is triggered before the data is edited.
To prevent the default behavior of editing data and use your own implementation, call `e.preventDefault()`.
To override the edit result with your own value, set the `e.val` property to your desired value. */
  beforeedit: Parameters<JSX.RevoGrid["onBeforeedit"]>[0]
  
  /** This event is triggered before applying range data, specifically when a range selection occurs.
To customize the data and prevent the default edit data from being set, you can call `e.preventDefault()`. */
  beforerangeedit: Parameters<JSX.RevoGrid["onBeforerangeedit"]>[0]
  
  /** Triggered after data applied or range changed. */
  afteredit: Parameters<JSX.RevoGrid["onAfteredit"]>[0]
  
  /** This event is triggered before autofill is applied.
To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`. */
  beforeautofill: Parameters<JSX.RevoGrid["onBeforeautofill"]>[0]
  
  /** Triggered before range applied.
Use e.preventDefault() to prevent range. */
  beforerange: Parameters<JSX.RevoGrid["onBeforerange"]>[0]
  
  /** Triggered after focus render finished.
Can be used to access a focus element through `event.target`.
This is just a duplicate of `afterfocus` from `revogr-focus.tsx`. */
  afterfocus: Parameters<JSX.RevoGrid["onAfterfocus"]>[0]
  
  /** This event is triggered before the order of `rgRow` is applied.
To prevent the default behavior of changing the order of `rgRow`, you can call `e.preventDefault()`. */
  roworderchanged: Parameters<JSX.RevoGrid["onRoworderchanged"]>[0]
  
  /** Triggered by sorting.plugin.ts
Before sorting apply.
Use e.preventDefault() to prevent sorting data change. */
  beforesortingapply: Parameters<JSX.RevoGrid["onBeforesortingapply"]>[0]
  
  /** Triggered by sorting.plugin.ts
Before sorting event.
Initial sorting triggered, if this event stops no other event called.
Use e.preventDefault() to prevent sorting. */
  beforesorting: Parameters<JSX.RevoGrid["onBeforesorting"]>[0]
  
  /** This event is triggered when the row order change is started.
To prevent the default behavior of changing the row order, you can call `e.preventDefault()`.
To change the item name at the start of the row order change, you can set `e.text` to the desired new name. */
  rowdragstart: Parameters<JSX.RevoGrid["onRowdragstart"]>[0]
  
  /** On header click. */
  headerclick: Parameters<JSX.RevoGrid["onHeaderclick"]>[0]
  
  /** This event is triggered before the cell focus is changed.
To prevent the default behavior of changing the cell focus, you can call `e.preventDefault()`. */
  beforecellfocus: Parameters<JSX.RevoGrid["onBeforecellfocus"]>[0]
  
  /** This event is triggered before the grid focus is lost.
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
Modify the */
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
  
  /** Emmited when the row headers are changed. */
  rowheaderschanged: Parameters<JSX.RevoGrid["onRowheaderschanged"]>[0]
  
  /** Emmited before the grid is rendered. */
  beforegridrender: Parameters<JSX.RevoGrid["onBeforegridrender"]>[0]
  
  /** Emmited after the grid is initialized. Connected to the DOM. */
  aftergridinit: Parameters<JSX.RevoGrid["onAftergridinit"]>[0]
  
  /** Emmited after the additional data is changed */
  additionaldatachanged: Parameters<JSX.RevoGrid["onAdditionaldatachanged"]>[0]
  
  /** Emmited after the theme is changed */
  afterthemechanged: Parameters<JSX.RevoGrid["onAfterthemechanged"]>[0]
}

interface RevoGridSlots {
  default: any
}
  
/* generated by Svelte v4.2.19 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	get_all_dirty_from_scope,
	get_slot_changes,
	init,
	insert,
	listen,
	run_all,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import "svelte/internal/disclose-version";
import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let revo_grid;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[62].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[61], null);

	return {
		c() {
			revo_grid = element("revo-grid");
			if (default_slot) default_slot.c();
			set_custom_element_data(revo_grid, "row-headers", /*rowHeaders*/ ctx[0]);
			set_custom_element_data(revo_grid, "frame-size", /*frameSize*/ ctx[1]);
			set_custom_element_data(revo_grid, "row-size", /*rowSize*/ ctx[2]);
			set_custom_element_data(revo_grid, "col-size", /*colSize*/ ctx[3]);
			set_custom_element_data(revo_grid, "range", /*range*/ ctx[4]);
			set_custom_element_data(revo_grid, "readonly", /*readonly*/ ctx[5]);
			set_custom_element_data(revo_grid, "resize", /*resize*/ ctx[6]);
			set_custom_element_data(revo_grid, "can-focus", /*canFocus*/ ctx[7]);
			set_custom_element_data(revo_grid, "use-clipboard", /*useClipboard*/ ctx[8]);
			set_custom_element_data(revo_grid, "apply-on-close", /*applyOnClose*/ ctx[9]);
			set_custom_element_data(revo_grid, "theme", /*theme*/ ctx[10]);
			set_custom_element_data(revo_grid, "row-class", /*rowClass*/ ctx[11]);
			set_custom_element_data(revo_grid, "auto-size-column", /*autoSizeColumn*/ ctx[12]);
			set_custom_element_data(revo_grid, "filter", /*filter*/ ctx[13]);
			set_custom_element_data(revo_grid, "can-move-columns", /*canMoveColumns*/ ctx[14]);
			set_custom_element_data(revo_grid, "exporting", /*exporting*/ ctx[15]);
			set_custom_element_data(revo_grid, "stretch", /*stretch*/ ctx[16]);
			set_custom_element_data(revo_grid, "additional-data", /*additionalData*/ ctx[17]);
			set_custom_element_data(revo_grid, "disable-virtual-x", /*disableVirtualX*/ ctx[18]);
			set_custom_element_data(revo_grid, "disable-virtual-y", /*disableVirtualY*/ ctx[19]);
			set_custom_element_data(revo_grid, "hide-attribution", /*hideAttribution*/ ctx[20]);
			set_custom_element_data(revo_grid, "accessible", /*accessible*/ ctx[21]);
		},
		m(target, anchor) {
			insert(target, revo_grid, anchor);

			if (default_slot) {
				default_slot.m(revo_grid, null);
			}

			/*revo_grid_binding*/ ctx[63](revo_grid);
			current = true;

			if (!mounted) {
				dispose = [
					listen(revo_grid, "contentsizechanged", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforeedit", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforerangeedit", /*onEvent*/ ctx[23]),
					listen(revo_grid, "afteredit", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforeautofill", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforerange", /*onEvent*/ ctx[23]),
					listen(revo_grid, "afterfocus", /*onEvent*/ ctx[23]),
					listen(revo_grid, "roworderchanged", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforesortingapply", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforesorting", /*onEvent*/ ctx[23]),
					listen(revo_grid, "rowdragstart", /*onEvent*/ ctx[23]),
					listen(revo_grid, "headerclick", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforecellfocus", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforefocuslost", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforesourceset", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforeanysource", /*onEvent*/ ctx[23]),
					listen(revo_grid, "aftersourceset", /*onEvent*/ ctx[23]),
					listen(revo_grid, "afteranysource", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforecolumnsset", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforecolumnapplied", /*onEvent*/ ctx[23]),
					listen(revo_grid, "aftercolumnsset", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforefilterapply", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforefiltertrimmed", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforetrimmed", /*onEvent*/ ctx[23]),
					listen(revo_grid, "aftertrimmed", /*onEvent*/ ctx[23]),
					listen(revo_grid, "viewportscroll", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforeexport", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforeeditstart", /*onEvent*/ ctx[23]),
					listen(revo_grid, "aftercolumnresize", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforerowdefinition", /*onEvent*/ ctx[23]),
					listen(revo_grid, "filterconfigchanged", /*onEvent*/ ctx[23]),
					listen(revo_grid, "rowheaderschanged", /*onEvent*/ ctx[23]),
					listen(revo_grid, "beforegridrender", /*onEvent*/ ctx[23]),
					listen(revo_grid, "aftergridinit", /*onEvent*/ ctx[23]),
					listen(revo_grid, "additionaldatachanged", /*onEvent*/ ctx[23]),
					listen(revo_grid, "afterthemechanged", /*onEvent*/ ctx[23])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty[1] & /*$$scope*/ 1073741824)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[61],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[61])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[61], dirty, null),
						null
					);
				}
			}

			if (!current || dirty[0] & /*rowHeaders*/ 1) {
				set_custom_element_data(revo_grid, "row-headers", /*rowHeaders*/ ctx[0]);
			}

			if (!current || dirty[0] & /*frameSize*/ 2) {
				set_custom_element_data(revo_grid, "frame-size", /*frameSize*/ ctx[1]);
			}

			if (!current || dirty[0] & /*rowSize*/ 4) {
				set_custom_element_data(revo_grid, "row-size", /*rowSize*/ ctx[2]);
			}

			if (!current || dirty[0] & /*colSize*/ 8) {
				set_custom_element_data(revo_grid, "col-size", /*colSize*/ ctx[3]);
			}

			if (!current || dirty[0] & /*range*/ 16) {
				set_custom_element_data(revo_grid, "range", /*range*/ ctx[4]);
			}

			if (!current || dirty[0] & /*readonly*/ 32) {
				set_custom_element_data(revo_grid, "readonly", /*readonly*/ ctx[5]);
			}

			if (!current || dirty[0] & /*resize*/ 64) {
				set_custom_element_data(revo_grid, "resize", /*resize*/ ctx[6]);
			}

			if (!current || dirty[0] & /*canFocus*/ 128) {
				set_custom_element_data(revo_grid, "can-focus", /*canFocus*/ ctx[7]);
			}

			if (!current || dirty[0] & /*useClipboard*/ 256) {
				set_custom_element_data(revo_grid, "use-clipboard", /*useClipboard*/ ctx[8]);
			}

			if (!current || dirty[0] & /*applyOnClose*/ 512) {
				set_custom_element_data(revo_grid, "apply-on-close", /*applyOnClose*/ ctx[9]);
			}

			if (!current || dirty[0] & /*theme*/ 1024) {
				set_custom_element_data(revo_grid, "theme", /*theme*/ ctx[10]);
			}

			if (!current || dirty[0] & /*rowClass*/ 2048) {
				set_custom_element_data(revo_grid, "row-class", /*rowClass*/ ctx[11]);
			}

			if (!current || dirty[0] & /*autoSizeColumn*/ 4096) {
				set_custom_element_data(revo_grid, "auto-size-column", /*autoSizeColumn*/ ctx[12]);
			}

			if (!current || dirty[0] & /*filter*/ 8192) {
				set_custom_element_data(revo_grid, "filter", /*filter*/ ctx[13]);
			}

			if (!current || dirty[0] & /*canMoveColumns*/ 16384) {
				set_custom_element_data(revo_grid, "can-move-columns", /*canMoveColumns*/ ctx[14]);
			}

			if (!current || dirty[0] & /*exporting*/ 32768) {
				set_custom_element_data(revo_grid, "exporting", /*exporting*/ ctx[15]);
			}

			if (!current || dirty[0] & /*stretch*/ 65536) {
				set_custom_element_data(revo_grid, "stretch", /*stretch*/ ctx[16]);
			}

			if (!current || dirty[0] & /*additionalData*/ 131072) {
				set_custom_element_data(revo_grid, "additional-data", /*additionalData*/ ctx[17]);
			}

			if (!current || dirty[0] & /*disableVirtualX*/ 262144) {
				set_custom_element_data(revo_grid, "disable-virtual-x", /*disableVirtualX*/ ctx[18]);
			}

			if (!current || dirty[0] & /*disableVirtualY*/ 524288) {
				set_custom_element_data(revo_grid, "disable-virtual-y", /*disableVirtualY*/ ctx[19]);
			}

			if (!current || dirty[0] & /*hideAttribution*/ 1048576) {
				set_custom_element_data(revo_grid, "hide-attribution", /*hideAttribution*/ ctx[20]);
			}

			if (!current || dirty[0] & /*accessible*/ 2097152) {
				set_custom_element_data(revo_grid, "accessible", /*accessible*/ ctx[21]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(revo_grid);
			}

			if (default_slot) default_slot.d(detaching);
			/*revo_grid_binding*/ ctx[63](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { rowHeaders = undefined } = $$props;
	let { frameSize = undefined } = $$props;
	let { rowSize = undefined } = $$props;
	let { colSize = undefined } = $$props;
	let { range = undefined } = $$props;
	let { readonly = undefined } = $$props;
	let { resize = undefined } = $$props;
	let { canFocus = undefined } = $$props;
	let { useClipboard = undefined } = $$props;
	let { columns = undefined } = $$props;
	let { source = undefined } = $$props;
	let { pinnedTopSource = undefined } = $$props;
	let { pinnedBottomSource = undefined } = $$props;
	let { rowDefinitions = undefined } = $$props;
	let { editors = undefined } = $$props;
	let { applyOnClose = undefined } = $$props;
	let { plugins = undefined } = $$props;
	let { columnTypes = undefined } = $$props;
	let { theme = undefined } = $$props;
	let { rowClass = undefined } = $$props;
	let { autoSizeColumn = undefined } = $$props;
	let { filter = undefined } = $$props;
	let { focusTemplate = undefined } = $$props;
	let { canMoveColumns = undefined } = $$props;
	let { trimmedRows = undefined } = $$props;
	let { exporting = undefined } = $$props;
	let { grouping = undefined } = $$props;
	let { stretch = undefined } = $$props;
	let { additionalData = undefined } = $$props;
	let { disableVirtualX = undefined } = $$props;
	let { disableVirtualY = undefined } = $$props;
	let { hideAttribution = undefined } = $$props;
	let { jobsBeforeRender = undefined } = $$props;
	let { registerVNode = undefined } = $$props;
	let { accessible = undefined } = $$props;
	const refresh = (...args) => __ref.refresh(...args);
	const setDataAt = (...args) => __ref.setDataAt(...args);
	const scrollToRow = (...args) => __ref.scrollToRow(...args);
	const scrollToColumnIndex = (...args) => __ref.scrollToColumnIndex(...args);
	const scrollToColumnProp = (...args) => __ref.scrollToColumnProp(...args);
	const updateColumns = (...args) => __ref.updateColumns(...args);
	const addTrimmed = (...args) => __ref.addTrimmed(...args);
	const scrollToCoordinate = (...args) => __ref.scrollToCoordinate(...args);
	const setCellEdit = (...args) => __ref.setCellEdit(...args);
	const setCellsFocus = (...args) => __ref.setCellsFocus(...args);
	const getSource = (...args) => __ref.getSource(...args);
	const getVisibleSource = (...args) => __ref.getVisibleSource(...args);
	const getSourceStore = (...args) => __ref.getSourceStore(...args);
	const getColumnStore = (...args) => __ref.getColumnStore(...args);
	const updateColumnSorting = (...args) => __ref.updateColumnSorting(...args);
	const clearSorting = (...args) => __ref.clearSorting(...args);
	const getColumns = (...args) => __ref.getColumns(...args);
	const clearFocus = (...args) => __ref.clearFocus(...args);
	const getPlugins = (...args) => __ref.getPlugins(...args);
	const getFocused = (...args) => __ref.getFocused(...args);
	const getContentSize = (...args) => __ref.getContentSize(...args);
	const getSelectedRange = (...args) => __ref.getSelectedRange(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(60, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(22, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function revo_grid_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(22, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('rowHeaders' in $$props) $$invalidate(0, rowHeaders = $$props.rowHeaders);
		if ('frameSize' in $$props) $$invalidate(1, frameSize = $$props.frameSize);
		if ('rowSize' in $$props) $$invalidate(2, rowSize = $$props.rowSize);
		if ('colSize' in $$props) $$invalidate(3, colSize = $$props.colSize);
		if ('range' in $$props) $$invalidate(4, range = $$props.range);
		if ('readonly' in $$props) $$invalidate(5, readonly = $$props.readonly);
		if ('resize' in $$props) $$invalidate(6, resize = $$props.resize);
		if ('canFocus' in $$props) $$invalidate(7, canFocus = $$props.canFocus);
		if ('useClipboard' in $$props) $$invalidate(8, useClipboard = $$props.useClipboard);
		if ('columns' in $$props) $$invalidate(24, columns = $$props.columns);
		if ('source' in $$props) $$invalidate(25, source = $$props.source);
		if ('pinnedTopSource' in $$props) $$invalidate(26, pinnedTopSource = $$props.pinnedTopSource);
		if ('pinnedBottomSource' in $$props) $$invalidate(27, pinnedBottomSource = $$props.pinnedBottomSource);
		if ('rowDefinitions' in $$props) $$invalidate(28, rowDefinitions = $$props.rowDefinitions);
		if ('editors' in $$props) $$invalidate(29, editors = $$props.editors);
		if ('applyOnClose' in $$props) $$invalidate(9, applyOnClose = $$props.applyOnClose);
		if ('plugins' in $$props) $$invalidate(30, plugins = $$props.plugins);
		if ('columnTypes' in $$props) $$invalidate(31, columnTypes = $$props.columnTypes);
		if ('theme' in $$props) $$invalidate(10, theme = $$props.theme);
		if ('rowClass' in $$props) $$invalidate(11, rowClass = $$props.rowClass);
		if ('autoSizeColumn' in $$props) $$invalidate(12, autoSizeColumn = $$props.autoSizeColumn);
		if ('filter' in $$props) $$invalidate(13, filter = $$props.filter);
		if ('focusTemplate' in $$props) $$invalidate(32, focusTemplate = $$props.focusTemplate);
		if ('canMoveColumns' in $$props) $$invalidate(14, canMoveColumns = $$props.canMoveColumns);
		if ('trimmedRows' in $$props) $$invalidate(33, trimmedRows = $$props.trimmedRows);
		if ('exporting' in $$props) $$invalidate(15, exporting = $$props.exporting);
		if ('grouping' in $$props) $$invalidate(34, grouping = $$props.grouping);
		if ('stretch' in $$props) $$invalidate(16, stretch = $$props.stretch);
		if ('additionalData' in $$props) $$invalidate(17, additionalData = $$props.additionalData);
		if ('disableVirtualX' in $$props) $$invalidate(18, disableVirtualX = $$props.disableVirtualX);
		if ('disableVirtualY' in $$props) $$invalidate(19, disableVirtualY = $$props.disableVirtualY);
		if ('hideAttribution' in $$props) $$invalidate(20, hideAttribution = $$props.hideAttribution);
		if ('jobsBeforeRender' in $$props) $$invalidate(35, jobsBeforeRender = $$props.jobsBeforeRender);
		if ('registerVNode' in $$props) $$invalidate(36, registerVNode = $$props.registerVNode);
		if ('accessible' in $$props) $$invalidate(21, accessible = $$props.accessible);
		if ('$$scope' in $$props) $$invalidate(61, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*columns*/ 16777216 | $$self.$$.dirty[1] & /*__mounted*/ 536870912) {
			$: if (__mounted) setProp('columns', columns);
		}

		if ($$self.$$.dirty[0] & /*source*/ 33554432 | $$self.$$.dirty[1] & /*__mounted*/ 536870912) {
			$: if (__mounted) setProp('source', source);
		}

		if ($$self.$$.dirty[0] & /*pinnedTopSource*/ 67108864 | $$self.$$.dirty[1] & /*__mounted*/ 536870912) {
			$: if (__mounted) setProp('pinnedTopSource', pinnedTopSource);
		}

		if ($$self.$$.dirty[0] & /*pinnedBottomSource*/ 134217728 | $$self.$$.dirty[1] & /*__mounted*/ 536870912) {
			$: if (__mounted) setProp('pinnedBottomSource', pinnedBottomSource);
		}

		if ($$self.$$.dirty[0] & /*rowDefinitions*/ 268435456 | $$self.$$.dirty[1] & /*__mounted*/ 536870912) {
			$: if (__mounted) setProp('rowDefinitions', rowDefinitions);
		}

		if ($$self.$$.dirty[0] & /*editors*/ 536870912 | $$self.$$.dirty[1] & /*__mounted*/ 536870912) {
			$: if (__mounted) setProp('editors', editors);
		}

		if ($$self.$$.dirty[0] & /*plugins*/ 1073741824 | $$self.$$.dirty[1] & /*__mounted*/ 536870912) {
			$: if (__mounted) setProp('plugins', plugins);
		}

		if ($$self.$$.dirty[1] & /*__mounted, columnTypes*/ 536870913) {
			$: if (__mounted) setProp('columnTypes', columnTypes);
		}

		if ($$self.$$.dirty[1] & /*__mounted, focusTemplate*/ 536870914) {
			$: if (__mounted) setProp('focusTemplate', focusTemplate);
		}

		if ($$self.$$.dirty[1] & /*__mounted, trimmedRows*/ 536870916) {
			$: if (__mounted) setProp('trimmedRows', trimmedRows);
		}

		if ($$self.$$.dirty[1] & /*__mounted, grouping*/ 536870920) {
			$: if (__mounted) setProp('grouping', grouping);
		}

		if ($$self.$$.dirty[1] & /*__mounted, jobsBeforeRender*/ 536870928) {
			$: if (__mounted) setProp('jobsBeforeRender', jobsBeforeRender);
		}

		if ($$self.$$.dirty[1] & /*__mounted, registerVNode*/ 536870944) {
			$: if (__mounted) setProp('registerVNode', registerVNode);
		}
	};

	return [
		rowHeaders,
		frameSize,
		rowSize,
		colSize,
		range,
		readonly,
		resize,
		canFocus,
		useClipboard,
		applyOnClose,
		theme,
		rowClass,
		autoSizeColumn,
		filter,
		canMoveColumns,
		exporting,
		stretch,
		additionalData,
		disableVirtualX,
		disableVirtualY,
		hideAttribution,
		accessible,
		__ref,
		onEvent,
		columns,
		source,
		pinnedTopSource,
		pinnedBottomSource,
		rowDefinitions,
		editors,
		plugins,
		columnTypes,
		focusTemplate,
		trimmedRows,
		grouping,
		jobsBeforeRender,
		registerVNode,
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
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		revo_grid_binding
	];
}

class RevoGrid extends SvelteComponent {
  $$prop_def: RevoGridProps;
  $$events_def: RevoGridEvents;
  $$slot_def: RevoGridSlots;

  $on<K extends keyof RevoGridEvents>(type: K, callback: (e: RevoGridEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RevoGridProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{
				rowHeaders: 0,
				frameSize: 1,
				rowSize: 2,
				colSize: 3,
				range: 4,
				readonly: 5,
				resize: 6,
				canFocus: 7,
				useClipboard: 8,
				columns: 24,
				source: 25,
				pinnedTopSource: 26,
				pinnedBottomSource: 27,
				rowDefinitions: 28,
				editors: 29,
				applyOnClose: 9,
				plugins: 30,
				columnTypes: 31,
				theme: 10,
				rowClass: 11,
				autoSizeColumn: 12,
				filter: 13,
				focusTemplate: 32,
				canMoveColumns: 14,
				trimmedRows: 33,
				exporting: 15,
				grouping: 34,
				stretch: 16,
				additionalData: 17,
				disableVirtualX: 18,
				disableVirtualY: 19,
				hideAttribution: 20,
				jobsBeforeRender: 35,
				registerVNode: 36,
				accessible: 21,
				refresh: 37,
				setDataAt: 38,
				scrollToRow: 39,
				scrollToColumnIndex: 40,
				scrollToColumnProp: 41,
				updateColumns: 42,
				addTrimmed: 43,
				scrollToCoordinate: 44,
				setCellEdit: 45,
				setCellsFocus: 46,
				getSource: 47,
				getVisibleSource: 48,
				getSourceStore: 49,
				getColumnStore: 50,
				updateColumnSorting: 51,
				clearSorting: 52,
				getColumns: 53,
				clearFocus: 54,
				getPlugins: 55,
				getFocused: 56,
				getContentSize: 57,
				getSelectedRange: 58,
				getWebComponent: 59
			},
			null,
			[-1, -1, -1]
		);
	}

	
  /** Refreshes data viewport.
Can be specific part as rgRow or pinned rgRow or 'all' by default. */
 get refresh(): Components.RevoGrid["refresh"] {
		return this.$$.ctx[37];
	}

	
  /** Sets data at specified cell.
Useful for performance optimization.
No viewport update will be triggered. */
 get setDataAt(): Components.RevoGrid["setDataAt"] {
		return this.$$.ctx[38];
	}

	
  /** Scrolls viewport to specified row by index. */
 get scrollToRow(): Components.RevoGrid["scrollToRow"] {
		return this.$$.ctx[39];
	}

	
  /** Scrolls viewport to specified column by index. */
 get scrollToColumnIndex(): Components.RevoGrid["scrollToColumnIndex"] {
		return this.$$.ctx[40];
	}

	
  /** Scrolls viewport to specified column by prop */
 get scrollToColumnProp(): Components.RevoGrid["scrollToColumnProp"] {
		return this.$$.ctx[41];
	}

	
  /** Update columns */
 get updateColumns(): Components.RevoGrid["updateColumns"] {
		return this.$$.ctx[42];
	}

	
  /** Add trimmed by type */
 get addTrimmed(): Components.RevoGrid["addTrimmed"] {
		return this.$$.ctx[43];
	}

	
  /** Scrolls view port to coordinate */
 get scrollToCoordinate(): Components.RevoGrid["scrollToCoordinate"] {
		return this.$$.ctx[44];
	}

	
  /** Open editor for cell. */
 get setCellEdit(): Components.RevoGrid["setCellEdit"] {
		return this.$$.ctx[45];
	}

	
  /** Set focus range. */
 get setCellsFocus(): Components.RevoGrid["setCellsFocus"] {
		return this.$$.ctx[46];
	}

	
  /** Get data from source */
 get getSource(): Components.RevoGrid["getSource"] {
		return this.$$.ctx[47];
	}

	
  /** Get data from visible part of source
Trimmed/filtered rows will be excluded */
 get getVisibleSource(): Components.RevoGrid["getVisibleSource"] {
		return this.$$.ctx[48];
	}

	
  /** Provides access to rows internal store observer
Can be used for plugin support */
 get getSourceStore(): Components.RevoGrid["getSourceStore"] {
		return this.$$.ctx[49];
	}

	
  /** Provides access to column internal store observer
Can be used for plugin support */
 get getColumnStore(): Components.RevoGrid["getColumnStore"] {
		return this.$$.ctx[50];
	}

	
  /** Update column sorting */
 get updateColumnSorting(): Components.RevoGrid["updateColumnSorting"] {
		return this.$$.ctx[51];
	}

	
  /** Clears column sorting */
 get clearSorting(): Components.RevoGrid["clearSorting"] {
		return this.$$.ctx[52];
	}

	
  /** Receive all columns in data source */
 get getColumns(): Components.RevoGrid["getColumns"] {
		return this.$$.ctx[53];
	}

	
  /** Clear current grid focus. Grid has no longer focus on it. */
 get clearFocus(): Components.RevoGrid["clearFocus"] {
		return this.$$.ctx[54];
	}

	
  /** Get all active plugins instances */
 get getPlugins(): Components.RevoGrid["getPlugins"] {
		return this.$$.ctx[55];
	}

	
  /** Get the currently focused cell. */
 get getFocused(): Components.RevoGrid["getFocused"] {
		return this.$$.ctx[56];
	}

	
  /** Get size of content
Including all pinned data */
 get getContentSize(): Components.RevoGrid["getContentSize"] {
		return this.$$.ctx[57];
	}

	
  /** Get the currently selected Range. */
 get getSelectedRange(): Components.RevoGrid["getSelectedRange"] {
		return this.$$.ctx[58];
	}

	get getWebComponent(): HTMLRevoGridElement | undefined {
		return this.$$.ctx[59];
	}
}

export default RevoGrid;
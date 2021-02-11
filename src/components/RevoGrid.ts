/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


interface RevoGridProps {
  
  /** Excel like show row indexe per row */
  rowHeaders?: Components.RevoGrid["rowHeaders"]
  
  /** Defines how many rows/columns should be rendered outside visible area. */
  frameSize?: Components.RevoGrid["frameSize"]
  
  /** Indicates default row size.
By default 0, means theme package size will be applied */
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
  
  /** Columns - defines an array of grid columns.
Can be column or grouped column. */
  columns?: Components.RevoGrid["columns"]
  
  /** Source - defines main data source.
Can be an Object or 2 dimensional array([][]);
Keys/indexes referenced from columns Prop */
  source?: Components.RevoGrid["source"]
  
  /** Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source. */
  pinnedTopSource?: Components.RevoGrid["pinnedTopSource"]
  
  /** Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source. */
  pinnedBottomSource?: Components.RevoGrid["pinnedBottomSource"]
  
  /** Row properies applied */
  rowDefinitions?: Components.RevoGrid["rowDefinitions"]
  
  /** Custom editors register */
  editors?: Components.RevoGrid["editors"]
  
  /** Custom grid plugins
Has to be predefined during first grid init
Every plugin should be inherited from BasePlugin */
  plugins?: Components.RevoGrid["plugins"]
  
  /** Types
Every type represent multiple column properties
Types will be merged but can be replaced with column properties */
  columnTypes?: Components.RevoGrid["columnTypes"]
  
  /** Theme name */
  theme?: Components.RevoGrid["theme"]
  
  /** Row class property
Define this property in row object and this will be mapped as row class */
  rowClass?: Components.RevoGrid["rowClass"]
  
  /** Autosize config
Enable columns autoSize, for more details check @autoSizeColumn plugin
By default disabled, hence operation is not resource efficient
true to enable with default params (double header separator click for autosize)
or provide config */
  autoSizeColumn?: Components.RevoGrid["autoSizeColumn"]
  
  /** Enables filter plugin
Can be boolean
Can be filter collection */
  filter?: Components.RevoGrid["filter"]
  
  /** Trimmed rows
Functionality which allows to hide rows from main data set */
  trimmedRows?: Components.RevoGrid["trimmedRows"]
  
  /** Enables export plugin
Can be boolean
Can be export options */
  exporting?: Components.RevoGrid["exporting"]
  
  /** Group models by provided properties
Define properties to be groped by */
  grouping?: Components.RevoGrid["grouping"]
}

interface RevoGridEvents {
  
  /** Before edit event.
Triggered before edit data applied.
Use e.preventDefault() to prevent edit data set and use you own.
Use e.val = {your value} to replace edit result with your own. */
  beforeEdit: Parameters<JSX.RevoGrid["onBeforeEdit"]>[0]
  
  /** Before range edit event.
Triggered before range data applied, when range selection happened.
Use e.preventDefault() to prevent edit data set and use you own. */
  beforeRangeEdit: Parameters<JSX.RevoGrid["onBeforeRangeEdit"]>[0]
  
  /** After edit.
Triggered when after data applied or Range changeged. */
  afterEdit: Parameters<JSX.RevoGrid["onAfterEdit"]>[0]
  
  /** Before autofill.
Triggered before autofill applied.
Use e.preventDefault() to prevent edit data apply. */
  beforeAutofill: Parameters<JSX.RevoGrid["onBeforeAutofill"]>[0]
  
  /** Before range apply.
Triggered before range applied.
Use e.preventDefault() to prevent range. */
  beforeRange: Parameters<JSX.RevoGrid["onBeforeRange"]>[0]
  
  /** Before row order apply.
Use e.preventDefault() to prevent row order change. */
  rowOrderChanged: Parameters<JSX.RevoGrid["onRowOrderChanged"]>[0]
  
  /** Before source update sorting apply.
Use this event if you intended to prevent sorting on data update.
Use e.preventDefault() to prevent sorting data change during rows source update. */
  beforeSourceSortingApply: Parameters<JSX.RevoGrid["onBeforeSourceSortingApply"]>[0]
  
  /** Before sorting apply.
Use e.preventDefault() to prevent sorting data change. */
  beforeSortingApply: Parameters<JSX.RevoGrid["onBeforeSortingApply"]>[0]
  
  /** Before sorting event.
Initial sorting triggered, if this event stops no other event called.
Use e.preventDefault() to prevent sorting. */
  beforeSorting: Parameters<JSX.RevoGrid["onBeforeSorting"]>[0]
  
  /** Row order change started.
Use e.preventDefault() to prevent row order change.
Use e.text = 'new name' to change item name on start. */
  rowDragStart: Parameters<JSX.RevoGrid["onRowDragStart"]>[0]
  
  /** On header click. */
  headerClick: Parameters<JSX.RevoGrid["onHeaderClick"]>[0]
  
  /** Before cell focus changed.
Use e.preventDefault() to prevent cell focus change. */
  beforeCellFocus: Parameters<JSX.RevoGrid["onBeforeCellFocus"]>[0]
  
  /** Before data apply.
You can override data source here */
  beforeSourceSet: Parameters<JSX.RevoGrid["onBeforeSourceSet"]>[0]
  
  /** After rows updated */
  afterSourceSet: Parameters<JSX.RevoGrid["onAfterSourceSet"]>[0]
  
  /** Before column update */
  beforeColumnsSet: Parameters<JSX.RevoGrid["onBeforeColumnsSet"]>[0]
  
  /** Column updated */
  afterColumnsSet: Parameters<JSX.RevoGrid["onAfterColumnsSet"]>[0]
  
  /** Before filter applied to data source
Use e.preventDefault() to prevent cell focus change
Update @collection if you wish to change filters */
  beforeFilterApply: Parameters<JSX.RevoGrid["onBeforeFilterApply"]>[0]
  
  /** Before filter trimmed values
Use e.preventDefault() to prevent value trimming and filter apply
Update @collection if you wish to change filters
Update @itemsToFilter if you wish to filter indexes of trimming */
  beforeFilterTrimmed: Parameters<JSX.RevoGrid["onBeforeFilterTrimmed"]>[0]
  
  /** Before trimmed values
Use e.preventDefault() to prevent value trimming
Update @trimmed if you wish to filter indexes of trimming */
  beforeTrimmed: Parameters<JSX.RevoGrid["onBeforeTrimmed"]>[0]
  
  /** Notify trimmed applied */
  afterTrimmed: Parameters<JSX.RevoGrid["onAfterTrimmed"]>[0]
  
  /** Triggered when view port scrolled */
  viewportScroll: Parameters<JSX.RevoGrid["onViewportScroll"]>[0]
  
  /** Before export
Use e.preventDefault() to prevent export
Replace data in Event in case you want to modify it in export */
  beforeExport: Parameters<JSX.RevoGrid["onBeforeExport"]>[0]
  
  /** Before edit started
Use e.preventDefault() to prevent edit */
  beforeEditStart: Parameters<JSX.RevoGrid["onBeforeEditStart"]>[0]
}

interface RevoGridSlots {
  default: any
}
  
/* generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	listen,
	run_all,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let revo_grid;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[45].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[44], null);

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
			set_custom_element_data(revo_grid, "theme", /*theme*/ ctx[8]);
			set_custom_element_data(revo_grid, "row-class", /*rowClass*/ ctx[9]);
			set_custom_element_data(revo_grid, "auto-size-column", /*autoSizeColumn*/ ctx[10]);
			set_custom_element_data(revo_grid, "filter", /*filter*/ ctx[11]);
			set_custom_element_data(revo_grid, "exporting", /*exporting*/ ctx[12]);
		},
		m(target, anchor) {
			insert(target, revo_grid, anchor);

			if (default_slot) {
				default_slot.m(revo_grid, null);
			}

			/*revo_grid_binding*/ ctx[46](revo_grid);
			current = true;

			if (!mounted) {
				dispose = [
					listen(revo_grid, "beforeEdit", /*onEvent*/ ctx[14]),
					listen(revo_grid, "beforeRangeEdit", /*onEvent*/ ctx[14]),
					listen(revo_grid, "afterEdit", /*onEvent*/ ctx[14]),
					listen(revo_grid, "beforeAutofill", /*onEvent*/ ctx[14]),
					listen(revo_grid, "beforeRange", /*onEvent*/ ctx[14]),
					listen(revo_grid, "rowOrderChanged", /*onEvent*/ ctx[14]),
					listen(revo_grid, "beforeSourceSortingApply", /*onEvent*/ ctx[14]),
					listen(revo_grid, "beforeSortingApply", /*onEvent*/ ctx[14]),
					listen(revo_grid, "beforeSorting", /*onEvent*/ ctx[14]),
					listen(revo_grid, "rowDragStart", /*onEvent*/ ctx[14]),
					listen(revo_grid, "headerClick", /*onEvent*/ ctx[14]),
					listen(revo_grid, "beforeCellFocus", /*onEvent*/ ctx[14]),
					listen(revo_grid, "beforeSourceSet", /*onEvent*/ ctx[14]),
					listen(revo_grid, "afterSourceSet", /*onEvent*/ ctx[14]),
					listen(revo_grid, "beforeColumnsSet", /*onEvent*/ ctx[14]),
					listen(revo_grid, "afterColumnsSet", /*onEvent*/ ctx[14]),
					listen(revo_grid, "beforeFilterApply", /*onEvent*/ ctx[14]),
					listen(revo_grid, "beforeFilterTrimmed", /*onEvent*/ ctx[14]),
					listen(revo_grid, "beforeTrimmed", /*onEvent*/ ctx[14]),
					listen(revo_grid, "afterTrimmed", /*onEvent*/ ctx[14]),
					listen(revo_grid, "viewportScroll", /*onEvent*/ ctx[14]),
					listen(revo_grid, "beforeExport", /*onEvent*/ ctx[14]),
					listen(revo_grid, "beforeEditStart", /*onEvent*/ ctx[14])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty[1] & /*$$scope*/ 8192) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[44], dirty, null, null);
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

			if (!current || dirty[0] & /*theme*/ 256) {
				set_custom_element_data(revo_grid, "theme", /*theme*/ ctx[8]);
			}

			if (!current || dirty[0] & /*rowClass*/ 512) {
				set_custom_element_data(revo_grid, "row-class", /*rowClass*/ ctx[9]);
			}

			if (!current || dirty[0] & /*autoSizeColumn*/ 1024) {
				set_custom_element_data(revo_grid, "auto-size-column", /*autoSizeColumn*/ ctx[10]);
			}

			if (!current || dirty[0] & /*filter*/ 2048) {
				set_custom_element_data(revo_grid, "filter", /*filter*/ ctx[11]);
			}

			if (!current || dirty[0] & /*exporting*/ 4096) {
				set_custom_element_data(revo_grid, "exporting", /*exporting*/ ctx[12]);
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
			if (detaching) detach(revo_grid);
			if (default_slot) default_slot.d(detaching);
			/*revo_grid_binding*/ ctx[46](null);
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
	let { columns = undefined } = $$props;
	let { source = undefined } = $$props;
	let { pinnedTopSource = undefined } = $$props;
	let { pinnedBottomSource = undefined } = $$props;
	let { rowDefinitions = undefined } = $$props;
	let { editors = undefined } = $$props;
	let { plugins = undefined } = $$props;
	let { columnTypes = undefined } = $$props;
	let { theme = undefined } = $$props;
	let { rowClass = undefined } = $$props;
	let { autoSizeColumn = undefined } = $$props;
	let { filter = undefined } = $$props;
	let { trimmedRows = undefined } = $$props;
	let { exporting = undefined } = $$props;
	let { grouping = undefined } = $$props;
	const refresh = (...args) => __ref.refresh(...args);
	const scrollToRow = (...args) => __ref.scrollToRow(...args);
	const scrollToColumnIndex = (...args) => __ref.scrollToColumnIndex(...args);
	const scrollToColumnProp = (...args) => __ref.scrollToColumnProp(...args);
	const updateColumns = (...args) => __ref.updateColumns(...args);
	const addTrimmed = (...args) => __ref.addTrimmed(...args);
	const scrollToCoordinate = (...args) => __ref.scrollToCoordinate(...args);
	const setCellEdit = (...args) => __ref.setCellEdit(...args);
	const registerVNode = (...args) => __ref.registerVNode(...args);
	const getSource = (...args) => __ref.getSource(...args);
	const getVisibleSource = (...args) => __ref.getVisibleSource(...args);
	const getSourceStore = (...args) => __ref.getSourceStore(...args);
	const getColumnStore = (...args) => __ref.getColumnStore(...args);
	const updateColumnSorting = (...args) => __ref.updateColumnSorting(...args);
	const getColumns = (...args) => __ref.getColumns(...args);
	const clearFocus = (...args) => __ref.clearFocus(...args);
	const getPlugins = (...args) => __ref.getPlugins(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(43, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(13, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function revo_grid_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(13, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("rowHeaders" in $$props) $$invalidate(0, rowHeaders = $$props.rowHeaders);
		if ("frameSize" in $$props) $$invalidate(1, frameSize = $$props.frameSize);
		if ("rowSize" in $$props) $$invalidate(2, rowSize = $$props.rowSize);
		if ("colSize" in $$props) $$invalidate(3, colSize = $$props.colSize);
		if ("range" in $$props) $$invalidate(4, range = $$props.range);
		if ("readonly" in $$props) $$invalidate(5, readonly = $$props.readonly);
		if ("resize" in $$props) $$invalidate(6, resize = $$props.resize);
		if ("canFocus" in $$props) $$invalidate(7, canFocus = $$props.canFocus);
		if ("columns" in $$props) $$invalidate(15, columns = $$props.columns);
		if ("source" in $$props) $$invalidate(16, source = $$props.source);
		if ("pinnedTopSource" in $$props) $$invalidate(17, pinnedTopSource = $$props.pinnedTopSource);
		if ("pinnedBottomSource" in $$props) $$invalidate(18, pinnedBottomSource = $$props.pinnedBottomSource);
		if ("rowDefinitions" in $$props) $$invalidate(19, rowDefinitions = $$props.rowDefinitions);
		if ("editors" in $$props) $$invalidate(20, editors = $$props.editors);
		if ("plugins" in $$props) $$invalidate(21, plugins = $$props.plugins);
		if ("columnTypes" in $$props) $$invalidate(22, columnTypes = $$props.columnTypes);
		if ("theme" in $$props) $$invalidate(8, theme = $$props.theme);
		if ("rowClass" in $$props) $$invalidate(9, rowClass = $$props.rowClass);
		if ("autoSizeColumn" in $$props) $$invalidate(10, autoSizeColumn = $$props.autoSizeColumn);
		if ("filter" in $$props) $$invalidate(11, filter = $$props.filter);
		if ("trimmedRows" in $$props) $$invalidate(23, trimmedRows = $$props.trimmedRows);
		if ("exporting" in $$props) $$invalidate(12, exporting = $$props.exporting);
		if ("grouping" in $$props) $$invalidate(24, grouping = $$props.grouping);
		if ("$$scope" in $$props) $$invalidate(44, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*columns*/ 32768 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
			$: if (__mounted) setProp("columns", columns);
		}

		if ($$self.$$.dirty[0] & /*source*/ 65536 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
			$: if (__mounted) setProp("source", source);
		}

		if ($$self.$$.dirty[0] & /*pinnedTopSource*/ 131072 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
			$: if (__mounted) setProp("pinnedTopSource", pinnedTopSource);
		}

		if ($$self.$$.dirty[0] & /*pinnedBottomSource*/ 262144 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
			$: if (__mounted) setProp("pinnedBottomSource", pinnedBottomSource);
		}

		if ($$self.$$.dirty[0] & /*rowDefinitions*/ 524288 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
			$: if (__mounted) setProp("rowDefinitions", rowDefinitions);
		}

		if ($$self.$$.dirty[0] & /*editors*/ 1048576 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
			$: if (__mounted) setProp("editors", editors);
		}

		if ($$self.$$.dirty[0] & /*plugins*/ 2097152 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
			$: if (__mounted) setProp("plugins", plugins);
		}

		if ($$self.$$.dirty[0] & /*columnTypes*/ 4194304 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
			$: if (__mounted) setProp("columnTypes", columnTypes);
		}

		if ($$self.$$.dirty[0] & /*trimmedRows*/ 8388608 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
			$: if (__mounted) setProp("trimmedRows", trimmedRows);
		}

		if ($$self.$$.dirty[0] & /*grouping*/ 16777216 | $$self.$$.dirty[1] & /*__mounted*/ 4096) {
			$: if (__mounted) setProp("grouping", grouping);
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
		theme,
		rowClass,
		autoSizeColumn,
		filter,
		exporting,
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
		trimmedRows,
		grouping,
		refresh,
		scrollToRow,
		scrollToColumnIndex,
		scrollToColumnProp,
		updateColumns,
		addTrimmed,
		scrollToCoordinate,
		setCellEdit,
		registerVNode,
		getSource,
		getVisibleSource,
		getSourceStore,
		getColumnStore,
		updateColumnSorting,
		getColumns,
		clearFocus,
		getPlugins,
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
				columns: 15,
				source: 16,
				pinnedTopSource: 17,
				pinnedBottomSource: 18,
				rowDefinitions: 19,
				editors: 20,
				plugins: 21,
				columnTypes: 22,
				theme: 8,
				rowClass: 9,
				autoSizeColumn: 10,
				filter: 11,
				trimmedRows: 23,
				exporting: 12,
				grouping: 24,
				refresh: 25,
				scrollToRow: 26,
				scrollToColumnIndex: 27,
				scrollToColumnProp: 28,
				updateColumns: 29,
				addTrimmed: 30,
				scrollToCoordinate: 31,
				setCellEdit: 32,
				registerVNode: 33,
				getSource: 34,
				getVisibleSource: 35,
				getSourceStore: 36,
				getColumnStore: 37,
				updateColumnSorting: 38,
				getColumns: 39,
				clearFocus: 40,
				getPlugins: 41,
				getWebComponent: 42
			},
			[-1, -1]
		);
	}

	
  /** Refreshes data viewport.
Can be specific part as row or pinned row or 'all' by default. */
 get refresh(): Components.RevoGrid["refresh"] {
		return this.$$.ctx[25];
	}

	
  /** Scrolls view port to specified row index */
 get scrollToRow(): Components.RevoGrid["scrollToRow"] {
		return this.$$.ctx[26];
	}

	
  /** Scrolls view port to specified column index */
 get scrollToColumnIndex(): Components.RevoGrid["scrollToColumnIndex"] {
		return this.$$.ctx[27];
	}

	
  /** Scrolls view port to specified column prop */
 get scrollToColumnProp(): Components.RevoGrid["scrollToColumnProp"] {
		return this.$$.ctx[28];
	}

	
  /** Update columns */
 get updateColumns(): Components.RevoGrid["updateColumns"] {
		return this.$$.ctx[29];
	}

	
  /** Add trimmed by type */
 get addTrimmed(): Components.RevoGrid["addTrimmed"] {
		return this.$$.ctx[30];
	}

	
  /** Scrolls view port to coordinate */
 get scrollToCoordinate(): Components.RevoGrid["scrollToCoordinate"] {
		return this.$$.ctx[31];
	}

	
  /** Bring cell to edit mode */
 get setCellEdit(): Components.RevoGrid["setCellEdit"] {
		return this.$$.ctx[32];
	}

	
  /** Register new virtual node inside of grid
Used for additional items creation such as plugin elements */
 get registerVNode(): Components.RevoGrid["registerVNode"] {
		return this.$$.ctx[33];
	}

	
  /** Get data from source */
 get getSource(): Components.RevoGrid["getSource"] {
		return this.$$.ctx[34];
	}

	
  /** Get data from visible part of source
Trimmed/filtered rows will be excluded */
 get getVisibleSource(): Components.RevoGrid["getVisibleSource"] {
		return this.$$.ctx[35];
	}

	
  /** Provides access to rows internal store observer
Can be used for plugin support */
 get getSourceStore(): Components.RevoGrid["getSourceStore"] {
		return this.$$.ctx[36];
	}

	
  /** Provides access to column internal store observer
Can be used for plugin support */
 get getColumnStore(): Components.RevoGrid["getColumnStore"] {
		return this.$$.ctx[37];
	}

	
  /** Update column sorting */
 get updateColumnSorting(): Components.RevoGrid["updateColumnSorting"] {
		return this.$$.ctx[38];
	}

	
  /** Receive all columns in data source */
 get getColumns(): Components.RevoGrid["getColumns"] {
		return this.$$.ctx[39];
	}

	
  /** Clear current grid focus */
 get clearFocus(): Components.RevoGrid["clearFocus"] {
		return this.$$.ctx[40];
	}

	
  /** Get all active plugins instances */
 get getPlugins(): Components.RevoGrid["getPlugins"] {
		return this.$$.ctx[41];
	}

	get getWebComponent(): HTMLRevoGridElement | undefined {
		return this.$$.ctx[42];
	}
}

export default RevoGrid;
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


interface RevoGridProps {
  
  /** Excel like show rgRow indexe per rgRow */
  rowHeaders?: Components.RevoGrid["rowHeaders"]
  
  /** Defines how many rows/columns should be rendered outside visible area. */
  frameSize?: Components.RevoGrid["frameSize"]
  
  /** Indicates default rgRow size.
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
  
  /** When true enable clipboard. */
  useClipboard?: Components.RevoGrid["useClipboard"]
  
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
Define this property in rgRow object and this will be mapped as rgRow class */
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
  beforeedit: Parameters<JSX.RevoGrid["onBeforeedit"]>[0]
  
  /** Before range edit event.
Triggered before range data applied, when range selection happened.
Use e.preventDefault() to prevent edit data set and use you own. */
  beforerangeedit: Parameters<JSX.RevoGrid["onBeforerangeedit"]>[0]
  
  /** After edit.
Triggered when after data applied or Range changeged. */
  afteredit: Parameters<JSX.RevoGrid["onAfteredit"]>[0]
  
  /** Before autofill.
Triggered before autofill applied.
Use e.preventDefault() to prevent edit data apply. */
  beforeautofill: Parameters<JSX.RevoGrid["onBeforeautofill"]>[0]
  
  /** Before range apply.
Triggered before range applied.
Use e.preventDefault() to prevent range. */
  beforeaange: Parameters<JSX.RevoGrid["onBeforeaange"]>[0]
  
  /** Before rgRow order apply.
Use e.preventDefault() to prevent rgRow order change. */
  roworderchanged: Parameters<JSX.RevoGrid["onRoworderchanged"]>[0]
  
  /** Before source update sorting apply.
Use this event if you intended to prevent sorting on data update.
Use e.preventDefault() to prevent sorting data change during rows source update. */
  beforesourcesortingapply: Parameters<JSX.RevoGrid["onBeforesourcesortingapply"]>[0]
  
  /** Before sorting apply.
Use e.preventDefault() to prevent sorting data change. */
  beforesortingapply: Parameters<JSX.RevoGrid["onBeforesortingapply"]>[0]
  
  /** Before sorting event.
Initial sorting triggered, if this event stops no other event called.
Use e.preventDefault() to prevent sorting. */
  beforesorting: Parameters<JSX.RevoGrid["onBeforesorting"]>[0]
  
  /** Row order change started.
Use e.preventDefault() to prevent rgRow order change.
Use e.text = 'new name' to change item name on start. */
  rowdragstart: Parameters<JSX.RevoGrid["onRowdragstart"]>[0]
  
  /** On header click. */
  headerclick: Parameters<JSX.RevoGrid["onHeaderclick"]>[0]
  
  /** Before cell focus changed.
Use e.preventDefault() to prevent cell focus change. */
  beforecellfocus: Parameters<JSX.RevoGrid["onBeforecellfocus"]>[0]
  
  /** Before grid focus lost happened.
Use e.preventDefault() to prevent cell focus change. */
  beforefocuslost: Parameters<JSX.RevoGrid["onBeforefocuslost"]>[0]
  
  /** Before data apply.
You can override data source here */
  beforesourceset: Parameters<JSX.RevoGrid["onBeforesourceset"]>[0]
  
  /** After rows updated */
  aftersourceset: Parameters<JSX.RevoGrid["onAftersourceset"]>[0]
  
  /** Before column update */
  beforecolumnsset: Parameters<JSX.RevoGrid["onBeforecolumnsset"]>[0]
  
  /** Column updated */
  aftercolumnsset: Parameters<JSX.RevoGrid["onAftercolumnsset"]>[0]
  
  /** Before filter applied to data source
Use e.preventDefault() to prevent cell focus change
Update @collection if you wish to change filters */
  beforefilterapply: Parameters<JSX.RevoGrid["onBeforefilterapply"]>[0]
  
  /** Before filter trimmed values
Use e.preventDefault() to prevent value trimming and filter apply
Update @collection if you wish to change filters
Update @itemsToFilter if you wish to filter indexes of trimming */
  beforefiltertrimmed: Parameters<JSX.RevoGrid["onBeforefiltertrimmed"]>[0]
  
  /** Before trimmed values
Use e.preventDefault() to prevent value trimming
Update @trimmed if you wish to filter indexes of trimming */
  beforetrimmed: Parameters<JSX.RevoGrid["onBeforetrimmed"]>[0]
  
  /** Notify trimmed applied */
  aftertrimmed: Parameters<JSX.RevoGrid["onAftertrimmed"]>[0]
  
  /** Triggered when view port scrolled */
  viewportscroll: Parameters<JSX.RevoGrid["onViewportscroll"]>[0]
  
  /** Before export
Use e.preventDefault() to prevent export
Replace data in Event in case you want to modify it in export */
  beforeexport: Parameters<JSX.RevoGrid["onBeforeexport"]>[0]
  
  /** Before edit started
Use e.preventDefault() to prevent edit */
  beforeeditstart: Parameters<JSX.RevoGrid["onBeforeeditstart"]>[0]
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
	const default_slot_template = /*#slots*/ ctx[47].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[46], null);

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
			set_custom_element_data(revo_grid, "theme", /*theme*/ ctx[9]);
			set_custom_element_data(revo_grid, "row-class", /*rowClass*/ ctx[10]);
			set_custom_element_data(revo_grid, "auto-size-column", /*autoSizeColumn*/ ctx[11]);
			set_custom_element_data(revo_grid, "filter", /*filter*/ ctx[12]);
			set_custom_element_data(revo_grid, "exporting", /*exporting*/ ctx[13]);
		},
		m(target, anchor) {
			insert(target, revo_grid, anchor);

			if (default_slot) {
				default_slot.m(revo_grid, null);
			}

			/*revo_grid_binding*/ ctx[48](revo_grid);
			current = true;

			if (!mounted) {
				dispose = [
					listen(revo_grid, "beforeedit", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforerangeedit", /*onEvent*/ ctx[15]),
					listen(revo_grid, "afteredit", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforeautofill", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforeaange", /*onEvent*/ ctx[15]),
					listen(revo_grid, "roworderchanged", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforesourcesortingapply", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforesortingapply", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforesorting", /*onEvent*/ ctx[15]),
					listen(revo_grid, "rowdragstart", /*onEvent*/ ctx[15]),
					listen(revo_grid, "headerclick", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforecellfocus", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforefocuslost", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforesourceset", /*onEvent*/ ctx[15]),
					listen(revo_grid, "aftersourceset", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforecolumnsset", /*onEvent*/ ctx[15]),
					listen(revo_grid, "aftercolumnsset", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforefilterapply", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforefiltertrimmed", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforetrimmed", /*onEvent*/ ctx[15]),
					listen(revo_grid, "aftertrimmed", /*onEvent*/ ctx[15]),
					listen(revo_grid, "viewportscroll", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforeexport", /*onEvent*/ ctx[15]),
					listen(revo_grid, "beforeeditstart", /*onEvent*/ ctx[15])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty[1] & /*$$scope*/ 32768) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[46], dirty, null, null);
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

			if (!current || dirty[0] & /*theme*/ 512) {
				set_custom_element_data(revo_grid, "theme", /*theme*/ ctx[9]);
			}

			if (!current || dirty[0] & /*rowClass*/ 1024) {
				set_custom_element_data(revo_grid, "row-class", /*rowClass*/ ctx[10]);
			}

			if (!current || dirty[0] & /*autoSizeColumn*/ 2048) {
				set_custom_element_data(revo_grid, "auto-size-column", /*autoSizeColumn*/ ctx[11]);
			}

			if (!current || dirty[0] & /*filter*/ 4096) {
				set_custom_element_data(revo_grid, "filter", /*filter*/ ctx[12]);
			}

			if (!current || dirty[0] & /*exporting*/ 8192) {
				set_custom_element_data(revo_grid, "exporting", /*exporting*/ ctx[13]);
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
			/*revo_grid_binding*/ ctx[48](null);
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
	const getFocused = (...args) => __ref.getFocused(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(45, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(14, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function revo_grid_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(14, __ref);
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
		if ("useClipboard" in $$props) $$invalidate(8, useClipboard = $$props.useClipboard);
		if ("columns" in $$props) $$invalidate(16, columns = $$props.columns);
		if ("source" in $$props) $$invalidate(17, source = $$props.source);
		if ("pinnedTopSource" in $$props) $$invalidate(18, pinnedTopSource = $$props.pinnedTopSource);
		if ("pinnedBottomSource" in $$props) $$invalidate(19, pinnedBottomSource = $$props.pinnedBottomSource);
		if ("rowDefinitions" in $$props) $$invalidate(20, rowDefinitions = $$props.rowDefinitions);
		if ("editors" in $$props) $$invalidate(21, editors = $$props.editors);
		if ("plugins" in $$props) $$invalidate(22, plugins = $$props.plugins);
		if ("columnTypes" in $$props) $$invalidate(23, columnTypes = $$props.columnTypes);
		if ("theme" in $$props) $$invalidate(9, theme = $$props.theme);
		if ("rowClass" in $$props) $$invalidate(10, rowClass = $$props.rowClass);
		if ("autoSizeColumn" in $$props) $$invalidate(11, autoSizeColumn = $$props.autoSizeColumn);
		if ("filter" in $$props) $$invalidate(12, filter = $$props.filter);
		if ("trimmedRows" in $$props) $$invalidate(24, trimmedRows = $$props.trimmedRows);
		if ("exporting" in $$props) $$invalidate(13, exporting = $$props.exporting);
		if ("grouping" in $$props) $$invalidate(25, grouping = $$props.grouping);
		if ("$$scope" in $$props) $$invalidate(46, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*columns*/ 65536 | $$self.$$.dirty[1] & /*__mounted*/ 16384) {
			$: if (__mounted) setProp("columns", columns);
		}

		if ($$self.$$.dirty[0] & /*source*/ 131072 | $$self.$$.dirty[1] & /*__mounted*/ 16384) {
			$: if (__mounted) setProp("source", source);
		}

		if ($$self.$$.dirty[0] & /*pinnedTopSource*/ 262144 | $$self.$$.dirty[1] & /*__mounted*/ 16384) {
			$: if (__mounted) setProp("pinnedTopSource", pinnedTopSource);
		}

		if ($$self.$$.dirty[0] & /*pinnedBottomSource*/ 524288 | $$self.$$.dirty[1] & /*__mounted*/ 16384) {
			$: if (__mounted) setProp("pinnedBottomSource", pinnedBottomSource);
		}

		if ($$self.$$.dirty[0] & /*rowDefinitions*/ 1048576 | $$self.$$.dirty[1] & /*__mounted*/ 16384) {
			$: if (__mounted) setProp("rowDefinitions", rowDefinitions);
		}

		if ($$self.$$.dirty[0] & /*editors*/ 2097152 | $$self.$$.dirty[1] & /*__mounted*/ 16384) {
			$: if (__mounted) setProp("editors", editors);
		}

		if ($$self.$$.dirty[0] & /*plugins*/ 4194304 | $$self.$$.dirty[1] & /*__mounted*/ 16384) {
			$: if (__mounted) setProp("plugins", plugins);
		}

		if ($$self.$$.dirty[0] & /*columnTypes*/ 8388608 | $$self.$$.dirty[1] & /*__mounted*/ 16384) {
			$: if (__mounted) setProp("columnTypes", columnTypes);
		}

		if ($$self.$$.dirty[0] & /*trimmedRows*/ 16777216 | $$self.$$.dirty[1] & /*__mounted*/ 16384) {
			$: if (__mounted) setProp("trimmedRows", trimmedRows);
		}

		if ($$self.$$.dirty[0] & /*grouping*/ 33554432 | $$self.$$.dirty[1] & /*__mounted*/ 16384) {
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
		useClipboard,
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
		getFocused,
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
				columns: 16,
				source: 17,
				pinnedTopSource: 18,
				pinnedBottomSource: 19,
				rowDefinitions: 20,
				editors: 21,
				plugins: 22,
				columnTypes: 23,
				theme: 9,
				rowClass: 10,
				autoSizeColumn: 11,
				filter: 12,
				trimmedRows: 24,
				exporting: 13,
				grouping: 25,
				refresh: 26,
				scrollToRow: 27,
				scrollToColumnIndex: 28,
				scrollToColumnProp: 29,
				updateColumns: 30,
				addTrimmed: 31,
				scrollToCoordinate: 32,
				setCellEdit: 33,
				registerVNode: 34,
				getSource: 35,
				getVisibleSource: 36,
				getSourceStore: 37,
				getColumnStore: 38,
				updateColumnSorting: 39,
				getColumns: 40,
				clearFocus: 41,
				getPlugins: 42,
				getFocused: 43,
				getWebComponent: 44
			},
			[-1, -1]
		);
	}

	
  /** Refreshes data viewport.
Can be specific part as rgRow or pinned rgRow or 'all' by default. */
 get refresh(): Components.RevoGrid["refresh"] {
		return this.$$.ctx[26];
	}

	
  /** Scrolls view port to specified rgRow index */
 get scrollToRow(): Components.RevoGrid["scrollToRow"] {
		return this.$$.ctx[27];
	}

	
  /** Scrolls view port to specified column index */
 get scrollToColumnIndex(): Components.RevoGrid["scrollToColumnIndex"] {
		return this.$$.ctx[28];
	}

	
  /** Scrolls view port to specified column prop */
 get scrollToColumnProp(): Components.RevoGrid["scrollToColumnProp"] {
		return this.$$.ctx[29];
	}

	
  /** Update columns */
 get updateColumns(): Components.RevoGrid["updateColumns"] {
		return this.$$.ctx[30];
	}

	
  /** Add trimmed by type */
 get addTrimmed(): Components.RevoGrid["addTrimmed"] {
		return this.$$.ctx[31];
	}

	
  /** Scrolls view port to coordinate */
 get scrollToCoordinate(): Components.RevoGrid["scrollToCoordinate"] {
		return this.$$.ctx[32];
	}

	
  /** Bring cell to edit mode */
 get setCellEdit(): Components.RevoGrid["setCellEdit"] {
		return this.$$.ctx[33];
	}

	
  /** Register new virtual node inside of grid
Used for additional items creation such as plugin elements */
 get registerVNode(): Components.RevoGrid["registerVNode"] {
		return this.$$.ctx[34];
	}

	
  /** Get data from source */
 get getSource(): Components.RevoGrid["getSource"] {
		return this.$$.ctx[35];
	}

	
  /** Get data from visible part of source
Trimmed/filtered rows will be excluded */
 get getVisibleSource(): Components.RevoGrid["getVisibleSource"] {
		return this.$$.ctx[36];
	}

	
  /** Provides access to rows internal store observer
Can be used for plugin support */
 get getSourceStore(): Components.RevoGrid["getSourceStore"] {
		return this.$$.ctx[37];
	}

	
  /** Provides access to column internal store observer
Can be used for plugin support */
 get getColumnStore(): Components.RevoGrid["getColumnStore"] {
		return this.$$.ctx[38];
	}

	
  /** Update column sorting */
 get updateColumnSorting(): Components.RevoGrid["updateColumnSorting"] {
		return this.$$.ctx[39];
	}

	
  /** Receive all columns in data source */
 get getColumns(): Components.RevoGrid["getColumns"] {
		return this.$$.ctx[40];
	}

	
  /** Clear current grid focus */
 get clearFocus(): Components.RevoGrid["clearFocus"] {
		return this.$$.ctx[41];
	}

	
  /** Get all active plugins instances */
 get getPlugins(): Components.RevoGrid["getPlugins"] {
		return this.$$.ctx[42];
	}

	
  /** Get all active plugins instances */
 get getFocused(): Components.RevoGrid["getFocused"] {
		return this.$$.ctx[43];
	}

	get getWebComponent(): HTMLRevoGridElement | undefined {
		return this.$$.ctx[44];
	}
}

export default RevoGrid;
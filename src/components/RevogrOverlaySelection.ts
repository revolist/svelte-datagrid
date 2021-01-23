/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


interface RevogrOverlaySelectionProps {
  
  /**  */
  readonly?: Components.RevogrOverlaySelection["readonly"]
  
  /**  */
  range?: Components.RevogrOverlaySelection["range"]
  
  /**  */
  canDrag?: Components.RevogrOverlaySelection["canDrag"]
  
  /** Dynamic stores */
  selectionStore?: Components.RevogrOverlaySelection["selectionStore"]
  
  /**  */
  dimensionRow?: Components.RevogrOverlaySelection["dimensionRow"]
  
  /**  */
  dimensionCol?: Components.RevogrOverlaySelection["dimensionCol"]
  
  /** Static stores, not expected to change during component lifetime */
  dataStore?: Components.RevogrOverlaySelection["dataStore"]
  
  /**  */
  colData?: Components.RevogrOverlaySelection["colData"]
  
  /** Last cell position */
  lastCell?: Components.RevogrOverlaySelection["lastCell"]
  
  /** Custom editors register */
  editors?: Components.RevogrOverlaySelection["editors"]
}

interface RevogrOverlaySelectionEvents {
  
  /**  */
  internalCopy: Parameters<JSX.RevogrOverlaySelection["onInternalCopy"]>[0]
  
  /**  */
  internalPaste: Parameters<JSX.RevogrOverlaySelection["onInternalPaste"]>[0]
  
  /**  */
  internalCellEdit: Parameters<JSX.RevogrOverlaySelection["onInternalCellEdit"]>[0]
  
  /**  */
  internalFocusCell: Parameters<JSX.RevogrOverlaySelection["onInternalFocusCell"]>[0]
  
  /**  */
  setEdit: Parameters<JSX.RevogrOverlaySelection["onSetEdit"]>[0]
  
  /**  */
  setRange: Parameters<JSX.RevogrOverlaySelection["onSetRange"]>[0]
  
  /**  */
  setTempRange: Parameters<JSX.RevogrOverlaySelection["onSetTempRange"]>[0]
  
  /**  */
  focusCell: Parameters<JSX.RevogrOverlaySelection["onFocusCell"]>[0]
  
  /**  */
  unregister: Parameters<JSX.RevogrOverlaySelection["onUnregister"]>[0]
  
  /** Selection range changed */
  internalSelectionChanged: Parameters<JSX.RevogrOverlaySelection["onInternalSelectionChanged"]>[0]
  
  /** Range data apply */
  internalRangeDataApply: Parameters<JSX.RevogrOverlaySelection["onInternalRangeDataApply"]>[0]
}

interface RevogrOverlaySelectionSlots {
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
	let revogr_overlay_selection;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[15].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[14], null);

	return {
		c() {
			revogr_overlay_selection = element("revogr-overlay-selection");
			if (default_slot) default_slot.c();
			set_custom_element_data(revogr_overlay_selection, "readonly", /*readonly*/ ctx[0]);
			set_custom_element_data(revogr_overlay_selection, "range", /*range*/ ctx[1]);
			set_custom_element_data(revogr_overlay_selection, "can-drag", /*canDrag*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, revogr_overlay_selection, anchor);

			if (default_slot) {
				default_slot.m(revogr_overlay_selection, null);
			}

			/*revogr_overlay_selection_binding*/ ctx[16](revogr_overlay_selection);
			current = true;

			if (!mounted) {
				dispose = [
					listen(revogr_overlay_selection, "internalCopy", /*onEvent*/ ctx[4]),
					listen(revogr_overlay_selection, "internalPaste", /*onEvent*/ ctx[4]),
					listen(revogr_overlay_selection, "internalCellEdit", /*onEvent*/ ctx[4]),
					listen(revogr_overlay_selection, "internalFocusCell", /*onEvent*/ ctx[4]),
					listen(revogr_overlay_selection, "setEdit", /*onEvent*/ ctx[4]),
					listen(revogr_overlay_selection, "setRange", /*onEvent*/ ctx[4]),
					listen(revogr_overlay_selection, "setTempRange", /*onEvent*/ ctx[4]),
					listen(revogr_overlay_selection, "focusCell", /*onEvent*/ ctx[4]),
					listen(revogr_overlay_selection, "unregister", /*onEvent*/ ctx[4]),
					listen(revogr_overlay_selection, "internalSelectionChanged", /*onEvent*/ ctx[4]),
					listen(revogr_overlay_selection, "internalRangeDataApply", /*onEvent*/ ctx[4])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 16384) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[14], dirty, null, null);
				}
			}

			if (!current || dirty & /*readonly*/ 1) {
				set_custom_element_data(revogr_overlay_selection, "readonly", /*readonly*/ ctx[0]);
			}

			if (!current || dirty & /*range*/ 2) {
				set_custom_element_data(revogr_overlay_selection, "range", /*range*/ ctx[1]);
			}

			if (!current || dirty & /*canDrag*/ 4) {
				set_custom_element_data(revogr_overlay_selection, "can-drag", /*canDrag*/ ctx[2]);
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
			if (detaching) detach(revogr_overlay_selection);
			if (default_slot) default_slot.d(detaching);
			/*revogr_overlay_selection_binding*/ ctx[16](null);
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
	let { readonly = undefined } = $$props;
	let { range = undefined } = $$props;
	let { canDrag = undefined } = $$props;
	let { selectionStore = undefined } = $$props;
	let { dimensionRow = undefined } = $$props;
	let { dimensionCol = undefined } = $$props;
	let { dataStore = undefined } = $$props;
	let { colData = undefined } = $$props;
	let { lastCell = undefined } = $$props;
	let { editors = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(13, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(3, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function revogr_overlay_selection_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("readonly" in $$props) $$invalidate(0, readonly = $$props.readonly);
		if ("range" in $$props) $$invalidate(1, range = $$props.range);
		if ("canDrag" in $$props) $$invalidate(2, canDrag = $$props.canDrag);
		if ("selectionStore" in $$props) $$invalidate(5, selectionStore = $$props.selectionStore);
		if ("dimensionRow" in $$props) $$invalidate(6, dimensionRow = $$props.dimensionRow);
		if ("dimensionCol" in $$props) $$invalidate(7, dimensionCol = $$props.dimensionCol);
		if ("dataStore" in $$props) $$invalidate(8, dataStore = $$props.dataStore);
		if ("colData" in $$props) $$invalidate(9, colData = $$props.colData);
		if ("lastCell" in $$props) $$invalidate(10, lastCell = $$props.lastCell);
		if ("editors" in $$props) $$invalidate(11, editors = $$props.editors);
		if ("$$scope" in $$props) $$invalidate(14, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, selectionStore*/ 8224) {
			$: if (__mounted) setProp("selectionStore", selectionStore);
		}

		if ($$self.$$.dirty & /*__mounted, dimensionRow*/ 8256) {
			$: if (__mounted) setProp("dimensionRow", dimensionRow);
		}

		if ($$self.$$.dirty & /*__mounted, dimensionCol*/ 8320) {
			$: if (__mounted) setProp("dimensionCol", dimensionCol);
		}

		if ($$self.$$.dirty & /*__mounted, dataStore*/ 8448) {
			$: if (__mounted) setProp("dataStore", dataStore);
		}

		if ($$self.$$.dirty & /*__mounted, colData*/ 8704) {
			$: if (__mounted) setProp("colData", colData);
		}

		if ($$self.$$.dirty & /*__mounted, lastCell*/ 9216) {
			$: if (__mounted) setProp("lastCell", lastCell);
		}

		if ($$self.$$.dirty & /*__mounted, editors*/ 10240) {
			$: if (__mounted) setProp("editors", editors);
		}
	};

	return [
		readonly,
		range,
		canDrag,
		__ref,
		onEvent,
		selectionStore,
		dimensionRow,
		dimensionCol,
		dataStore,
		colData,
		lastCell,
		editors,
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		revogr_overlay_selection_binding
	];
}

class RevogrOverlaySelection extends SvelteComponent {
  $$prop_def: RevogrOverlaySelectionProps;
  $$events_def: RevogrOverlaySelectionEvents;
  $$slot_def: RevogrOverlaySelectionSlots;

  $on<K extends keyof RevogrOverlaySelectionEvents>(type: K, callback: (e: RevogrOverlaySelectionEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RevogrOverlaySelectionProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			readonly: 0,
			range: 1,
			canDrag: 2,
			selectionStore: 5,
			dimensionRow: 6,
			dimensionCol: 7,
			dataStore: 8,
			colData: 9,
			lastCell: 10,
			editors: 11,
			getWebComponent: 12
		});
	}

	get getWebComponent(): HTMLRevogrOverlaySelectionElement | undefined {
		return this.$$.ctx[12];
	}
}

export default RevogrOverlaySelection;
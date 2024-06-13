/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


interface RevogrOverlaySelectionProps {
  
  /** Readonly mode. */
  readonly?: Components.RevogrOverlaySelection["readonly"]
  
  /** Range selection allowed. */
  range?: Components.RevogrOverlaySelection["range"]
  
  /** Enable revogr-order-editor component (read more in revogr-order-editor component).
Allows D&D. */
  canDrag?: Components.RevogrOverlaySelection["canDrag"]
  
  /** Enable revogr-clipboard component (read more in revogr-clipboard component).
Allows copy/paste. */
  useClipboard?: Components.RevogrOverlaySelection["useClipboard"]
  
  /** Selection, range, focus. */
  selectionStore?: Components.RevogrOverlaySelection["selectionStore"]
  
  /** Dimension settings Y. */
  dimensionRow?: Components.RevogrOverlaySelection["dimensionRow"]
  
  /** Dimension settings X. */
  dimensionCol?: Components.RevogrOverlaySelection["dimensionCol"]
  
  /** Row data store. */
  dataStore?: Components.RevogrOverlaySelection["dataStore"]
  
  /** Column data store. */
  colData?: Components.RevogrOverlaySelection["colData"]
  
  /** Last cell position. */
  lastCell?: Components.RevogrOverlaySelection["lastCell"]
  
  /** Custom editors register. */
  editors?: Components.RevogrOverlaySelection["editors"]
  
  /** If true applys changes when cell closes if not Escape. */
  applyChangesOnClose?: Components.RevogrOverlaySelection["applyChangesOnClose"]
  
  /** Additional data to pass to renderer. */
  additionalData?: Components.RevogrOverlaySelection["additionalData"]
  
  /** Is mobile view mode. */
  isMobileDevice?: Components.RevogrOverlaySelection["isMobileDevice"]
}

interface RevogrOverlaySelectionEvents {
  
  /** Before clipboard copy happened. Validate data before copy.
To prevent the default behavior of editing data and use your own implementation, call `e.preventDefault()`. */
  beforecopyregion: Parameters<JSX.RevogrOverlaySelection["onBeforecopyregion"]>[0]
  
  /** Before region paste happened. */
  beforepasteregion: Parameters<JSX.RevogrOverlaySelection["onBeforepasteregion"]>[0]
  
  /** Cell edit apply to the data source.
Triggers datasource edit on the root level. */
  celleditapply: Parameters<JSX.RevogrOverlaySelection["onCelleditapply"]>[0]
  
  /** Before cell focus. */
  beforecellfocusinit: Parameters<JSX.RevogrOverlaySelection["onBeforecellfocusinit"]>[0]
  
  /** Set edit cell. */
  setedit: Parameters<JSX.RevogrOverlaySelection["onSetedit"]>[0]
  
  /** Before range applied. */
  beforeapplyrange: Parameters<JSX.RevogrOverlaySelection["onBeforeapplyrange"]>[0]
  
  /** Before range selection applied. */
  beforesetrange: Parameters<JSX.RevogrOverlaySelection["onBeforesetrange"]>[0]
  
  /** Before editor render. */
  beforeeditrender: Parameters<JSX.RevogrOverlaySelection["onBeforeeditrender"]>[0]
  
  /** Set range. */
  setrange: Parameters<JSX.RevogrOverlaySelection["onSetrange"]>[0]
  
  /** Select all. */
  selectall: Parameters<JSX.RevogrOverlaySelection["onSelectall"]>[0]
  
  /** Used for editors support when editor close requested. */
  canceledit: Parameters<JSX.RevogrOverlaySelection["onCanceledit"]>[0]
  
  /** Set temp range area during autofill. */
  settemprange: Parameters<JSX.RevogrOverlaySelection["onSettemprange"]>[0]
  
  /** Before cell get focused.
To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`. */
  applyfocus: Parameters<JSX.RevogrOverlaySelection["onApplyfocus"]>[0]
  
  /** Cell get focused.
To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`. */
  focuscell: Parameters<JSX.RevogrOverlaySelection["onFocuscell"]>[0]
  
  /** Range data apply. */
  beforerangedataapply: Parameters<JSX.RevogrOverlaySelection["onBeforerangedataapply"]>[0]
  
  /** Selection range changed. */
  selectionchangeinit: Parameters<JSX.RevogrOverlaySelection["onSelectionchangeinit"]>[0]
  
  /** Before range copy. */
  beforerangecopyapply: Parameters<JSX.RevogrOverlaySelection["onBeforerangecopyapply"]>[0]
  
  /** Range data apply.
Triggers datasource edit on the root level. */
  rangeeditapply: Parameters<JSX.RevogrOverlaySelection["onRangeeditapply"]>[0]
  
  /** Range copy. */
  clipboardrangecopy: Parameters<JSX.RevogrOverlaySelection["onClipboardrangecopy"]>[0]
  
  /**  */
  clipboardrangepaste: Parameters<JSX.RevogrOverlaySelection["onClipboardrangepaste"]>[0]
  
  /** Before key up event proxy, used to prevent key up trigger.
If you have some custom behaviour event, use this event to check if it wasn't processed by internal logic.
Call preventDefault(). */
  beforekeydown: Parameters<JSX.RevogrOverlaySelection["onBeforekeydown"]>[0]
  
  /** Before key down event proxy, used to prevent key down trigger.
If you have some custom behaviour event, use this event to check if it wasn't processed by internal logic.
Call preventDefault(). */
  beforekeyup: Parameters<JSX.RevogrOverlaySelection["onBeforekeyup"]>[0]
  
  /** Runs before cell save.
Can be used to override or cancel original save. */
  beforecellsave: Parameters<JSX.RevogrOverlaySelection["onBeforecellsave"]>[0]
}

interface RevogrOverlaySelectionSlots {
  default: any
}
  
/* generated by Svelte v4.2.18 */
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
	let revogr_overlay_selection;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[19].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[18], null);

	return {
		c() {
			revogr_overlay_selection = element("revogr-overlay-selection");
			if (default_slot) default_slot.c();
			set_custom_element_data(revogr_overlay_selection, "readonly", /*readonly*/ ctx[0]);
			set_custom_element_data(revogr_overlay_selection, "range", /*range*/ ctx[1]);
			set_custom_element_data(revogr_overlay_selection, "can-drag", /*canDrag*/ ctx[2]);
			set_custom_element_data(revogr_overlay_selection, "use-clipboard", /*useClipboard*/ ctx[3]);
			set_custom_element_data(revogr_overlay_selection, "apply-changes-on-close", /*applyChangesOnClose*/ ctx[4]);
			set_custom_element_data(revogr_overlay_selection, "additional-data", /*additionalData*/ ctx[5]);
			set_custom_element_data(revogr_overlay_selection, "is-mobile-device", /*isMobileDevice*/ ctx[6]);
		},
		m(target, anchor) {
			insert(target, revogr_overlay_selection, anchor);

			if (default_slot) {
				default_slot.m(revogr_overlay_selection, null);
			}

			/*revogr_overlay_selection_binding*/ ctx[20](revogr_overlay_selection);
			current = true;

			if (!mounted) {
				dispose = [
					listen(revogr_overlay_selection, "beforecopyregion", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "beforepasteregion", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "celleditapply", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "beforecellfocusinit", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "setedit", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "beforeapplyrange", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "beforesetrange", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "beforeeditrender", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "setrange", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "selectall", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "canceledit", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "settemprange", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "applyfocus", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "focuscell", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "beforerangedataapply", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "selectionchangeinit", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "beforerangecopyapply", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "rangeeditapply", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "clipboardrangecopy", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "clipboardrangepaste", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "beforekeydown", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "beforekeyup", /*onEvent*/ ctx[8]),
					listen(revogr_overlay_selection, "beforecellsave", /*onEvent*/ ctx[8])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 262144)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[18],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[18])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[18], dirty, null),
						null
					);
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

			if (!current || dirty & /*useClipboard*/ 8) {
				set_custom_element_data(revogr_overlay_selection, "use-clipboard", /*useClipboard*/ ctx[3]);
			}

			if (!current || dirty & /*applyChangesOnClose*/ 16) {
				set_custom_element_data(revogr_overlay_selection, "apply-changes-on-close", /*applyChangesOnClose*/ ctx[4]);
			}

			if (!current || dirty & /*additionalData*/ 32) {
				set_custom_element_data(revogr_overlay_selection, "additional-data", /*additionalData*/ ctx[5]);
			}

			if (!current || dirty & /*isMobileDevice*/ 64) {
				set_custom_element_data(revogr_overlay_selection, "is-mobile-device", /*isMobileDevice*/ ctx[6]);
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
				detach(revogr_overlay_selection);
			}

			if (default_slot) default_slot.d(detaching);
			/*revogr_overlay_selection_binding*/ ctx[20](null);
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
	let { useClipboard = undefined } = $$props;
	let { selectionStore = undefined } = $$props;
	let { dimensionRow = undefined } = $$props;
	let { dimensionCol = undefined } = $$props;
	let { dataStore = undefined } = $$props;
	let { colData = undefined } = $$props;
	let { lastCell = undefined } = $$props;
	let { editors = undefined } = $$props;
	let { applyChangesOnClose = undefined } = $$props;
	let { additionalData = undefined } = $$props;
	let { isMobileDevice = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(17, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(7, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function revogr_overlay_selection_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(7, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('readonly' in $$props) $$invalidate(0, readonly = $$props.readonly);
		if ('range' in $$props) $$invalidate(1, range = $$props.range);
		if ('canDrag' in $$props) $$invalidate(2, canDrag = $$props.canDrag);
		if ('useClipboard' in $$props) $$invalidate(3, useClipboard = $$props.useClipboard);
		if ('selectionStore' in $$props) $$invalidate(9, selectionStore = $$props.selectionStore);
		if ('dimensionRow' in $$props) $$invalidate(10, dimensionRow = $$props.dimensionRow);
		if ('dimensionCol' in $$props) $$invalidate(11, dimensionCol = $$props.dimensionCol);
		if ('dataStore' in $$props) $$invalidate(12, dataStore = $$props.dataStore);
		if ('colData' in $$props) $$invalidate(13, colData = $$props.colData);
		if ('lastCell' in $$props) $$invalidate(14, lastCell = $$props.lastCell);
		if ('editors' in $$props) $$invalidate(15, editors = $$props.editors);
		if ('applyChangesOnClose' in $$props) $$invalidate(4, applyChangesOnClose = $$props.applyChangesOnClose);
		if ('additionalData' in $$props) $$invalidate(5, additionalData = $$props.additionalData);
		if ('isMobileDevice' in $$props) $$invalidate(6, isMobileDevice = $$props.isMobileDevice);
		if ('$$scope' in $$props) $$invalidate(18, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, selectionStore*/ 131584) {
			$: if (__mounted) setProp('selectionStore', selectionStore);
		}

		if ($$self.$$.dirty & /*__mounted, dimensionRow*/ 132096) {
			$: if (__mounted) setProp('dimensionRow', dimensionRow);
		}

		if ($$self.$$.dirty & /*__mounted, dimensionCol*/ 133120) {
			$: if (__mounted) setProp('dimensionCol', dimensionCol);
		}

		if ($$self.$$.dirty & /*__mounted, dataStore*/ 135168) {
			$: if (__mounted) setProp('dataStore', dataStore);
		}

		if ($$self.$$.dirty & /*__mounted, colData*/ 139264) {
			$: if (__mounted) setProp('colData', colData);
		}

		if ($$self.$$.dirty & /*__mounted, lastCell*/ 147456) {
			$: if (__mounted) setProp('lastCell', lastCell);
		}

		if ($$self.$$.dirty & /*__mounted, editors*/ 163840) {
			$: if (__mounted) setProp('editors', editors);
		}
	};

	return [
		readonly,
		range,
		canDrag,
		useClipboard,
		applyChangesOnClose,
		additionalData,
		isMobileDevice,
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
			useClipboard: 3,
			selectionStore: 9,
			dimensionRow: 10,
			dimensionCol: 11,
			dataStore: 12,
			colData: 13,
			lastCell: 14,
			editors: 15,
			applyChangesOnClose: 4,
			additionalData: 5,
			isMobileDevice: 6,
			getWebComponent: 16
		});
	}

	get getWebComponent(): HTMLRevogrOverlaySelectionElement | undefined {
		return this.$$.ctx[16];
	}
}

export default RevogrOverlaySelection;
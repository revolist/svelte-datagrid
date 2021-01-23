/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


interface RevogrFocusProps {
  
  /** Dynamic stores */
  selectionStore?: Components.RevogrFocus["selectionStore"]
  
  /**  */
  dimensionRow?: Components.RevogrFocus["dimensionRow"]
  
  /**  */
  dimensionCol?: Components.RevogrFocus["dimensionCol"]
}

interface RevogrFocusEvents {
  
}

interface RevogrFocusSlots {
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
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let revogr_focus;
	let current;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			revogr_focus = element("revogr-focus");
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			insert(target, revogr_focus, anchor);

			if (default_slot) {
				default_slot.m(revogr_focus, null);
			}

			/*revogr_focus_binding*/ ctx[8](revogr_focus);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
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
			if (detaching) detach(revogr_focus);
			if (default_slot) default_slot.d(detaching);
			/*revogr_focus_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { selectionStore = undefined } = $$props;
	let { dimensionRow = undefined } = $$props;
	let { dimensionCol = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(5, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(0, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function revogr_focus_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(0, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("selectionStore" in $$props) $$invalidate(1, selectionStore = $$props.selectionStore);
		if ("dimensionRow" in $$props) $$invalidate(2, dimensionRow = $$props.dimensionRow);
		if ("dimensionCol" in $$props) $$invalidate(3, dimensionCol = $$props.dimensionCol);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, selectionStore*/ 34) {
			$: if (__mounted) setProp("selectionStore", selectionStore);
		}

		if ($$self.$$.dirty & /*__mounted, dimensionRow*/ 36) {
			$: if (__mounted) setProp("dimensionRow", dimensionRow);
		}

		if ($$self.$$.dirty & /*__mounted, dimensionCol*/ 40) {
			$: if (__mounted) setProp("dimensionCol", dimensionCol);
		}
	};

	return [
		__ref,
		selectionStore,
		dimensionRow,
		dimensionCol,
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		revogr_focus_binding
	];
}

class RevogrFocus extends SvelteComponent {
  $$prop_def: RevogrFocusProps;
  $$events_def: RevogrFocusEvents;
  $$slot_def: RevogrFocusSlots;

  $on<K extends keyof RevogrFocusEvents>(type: K, callback: (e: RevogrFocusEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RevogrFocusProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			selectionStore: 1,
			dimensionRow: 2,
			dimensionCol: 3,
			getWebComponent: 4
		});
	}

	get getWebComponent(): HTMLRevogrFocusElement | undefined {
		return this.$$.ctx[4];
	}
}

export default RevogrFocus;
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


interface RevogrScrollVirtualProps {
  
  /**  */
  dimension?: Components.RevogrScrollVirtual["dimension"]
  
  /**  */
  viewportStore?: Components.RevogrScrollVirtual["viewportStore"]
  
  /**  */
  dimensionStore?: Components.RevogrScrollVirtual["dimensionStore"]
}

interface RevogrScrollVirtualEvents {
  
  /**  */
  scrollVirtual: Parameters<JSX.RevogrScrollVirtual["onScrollVirtual"]>[0]
}

interface RevogrScrollVirtualSlots {
  default: any
}
  
/* generated by Svelte v3.49.0 */
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
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let revogr_scroll_virtual;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[10].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);

	return {
		c() {
			revogr_scroll_virtual = element("revogr-scroll-virtual");
			if (default_slot) default_slot.c();
			set_custom_element_data(revogr_scroll_virtual, "dimension", /*dimension*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, revogr_scroll_virtual, anchor);

			if (default_slot) {
				default_slot.m(revogr_scroll_virtual, null);
			}

			/*revogr_scroll_virtual_binding*/ ctx[11](revogr_scroll_virtual);
			current = true;

			if (!mounted) {
				dispose = listen(revogr_scroll_virtual, "scrollVirtual", /*onEvent*/ ctx[2]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 512)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[9],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[9])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[9], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*dimension*/ 1) {
				set_custom_element_data(revogr_scroll_virtual, "dimension", /*dimension*/ ctx[0]);
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
			if (detaching) detach(revogr_scroll_virtual);
			if (default_slot) default_slot.d(detaching);
			/*revogr_scroll_virtual_binding*/ ctx[11](null);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { dimension = undefined } = $$props;
	let { viewportStore = undefined } = $$props;
	let { dimensionStore = undefined } = $$props;
	const setScroll = (...args) => __ref.setScroll(...args);
	const changeScroll = (...args) => __ref.changeScroll(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(8, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(1, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function revogr_scroll_virtual_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(1, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('dimension' in $$props) $$invalidate(0, dimension = $$props.dimension);
		if ('viewportStore' in $$props) $$invalidate(3, viewportStore = $$props.viewportStore);
		if ('dimensionStore' in $$props) $$invalidate(4, dimensionStore = $$props.dimensionStore);
		if ('$$scope' in $$props) $$invalidate(9, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, viewportStore*/ 264) {
			$: if (__mounted) setProp('viewportStore', viewportStore);
		}

		if ($$self.$$.dirty & /*__mounted, dimensionStore*/ 272) {
			$: if (__mounted) setProp('dimensionStore', dimensionStore);
		}
	};

	return [
		dimension,
		__ref,
		onEvent,
		viewportStore,
		dimensionStore,
		setScroll,
		changeScroll,
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		revogr_scroll_virtual_binding
	];
}

class RevogrScrollVirtual extends SvelteComponent {
  $$prop_def: RevogrScrollVirtualProps;
  $$events_def: RevogrScrollVirtualEvents;
  $$slot_def: RevogrScrollVirtualSlots;

  $on<K extends keyof RevogrScrollVirtualEvents>(type: K, callback: (e: RevogrScrollVirtualEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RevogrScrollVirtualProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			dimension: 0,
			viewportStore: 3,
			dimensionStore: 4,
			setScroll: 5,
			changeScroll: 6,
			getWebComponent: 7
		});
	}

	
  /**  */
 get setScroll(): Components.RevogrScrollVirtual["setScroll"] {
		return this.$$.ctx[5];
	}

	
  /**  */
 get changeScroll(): Components.RevogrScrollVirtual["changeScroll"] {
		return this.$$.ctx[6];
	}

	get getWebComponent(): HTMLRevogrScrollVirtualElement | undefined {
		return this.$$.ctx[7];
	}
}

export default RevogrScrollVirtual;
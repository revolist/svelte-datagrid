/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


interface RevogrViewportScrollProps {
  
  /** Enable row header */
  rowHeader?: Components.RevogrViewportScroll["rowHeader"]
  
  /** Width of inner content */
  contentWidth?: Components.RevogrViewportScroll["contentWidth"]
  
  /** Height of inner content */
  contentHeight?: Components.RevogrViewportScroll["contentHeight"]
}

interface RevogrViewportScrollEvents {
  
  /** Before scroll event */
  scrollviewport: Parameters<JSX.RevogrViewportScroll["onScrollviewport"]>[0]
  
  /** Viewport resize */
  resizeviewport: Parameters<JSX.RevogrViewportScroll["onResizeviewport"]>[0]
  
  /** Triggered on scroll change, can be used to get information about scroll visibility */
  scrollchange: Parameters<JSX.RevogrViewportScroll["onScrollchange"]>[0]
  
  /** Silently scroll to coordinate
Made to align negative coordinates for mobile devices */
  scrollviewportsilent: Parameters<JSX.RevogrViewportScroll["onScrollviewportsilent"]>[0]
}

interface RevogrViewportScrollSlots {
  default: any
}
  
/* generated by Svelte v4.2.15 */
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
	let revogr_viewport_scroll;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[10].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);

	return {
		c() {
			revogr_viewport_scroll = element("revogr-viewport-scroll");
			if (default_slot) default_slot.c();
			set_custom_element_data(revogr_viewport_scroll, "row-header", /*rowHeader*/ ctx[0]);
			set_custom_element_data(revogr_viewport_scroll, "content-width", /*contentWidth*/ ctx[1]);
			set_custom_element_data(revogr_viewport_scroll, "content-height", /*contentHeight*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, revogr_viewport_scroll, anchor);

			if (default_slot) {
				default_slot.m(revogr_viewport_scroll, null);
			}

			/*revogr_viewport_scroll_binding*/ ctx[11](revogr_viewport_scroll);
			current = true;

			if (!mounted) {
				dispose = [
					listen(revogr_viewport_scroll, "scrollviewport", /*onEvent*/ ctx[4]),
					listen(revogr_viewport_scroll, "resizeviewport", /*onEvent*/ ctx[4]),
					listen(revogr_viewport_scroll, "scrollchange", /*onEvent*/ ctx[4]),
					listen(revogr_viewport_scroll, "scrollviewportsilent", /*onEvent*/ ctx[4])
				];

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

			if (!current || dirty & /*rowHeader*/ 1) {
				set_custom_element_data(revogr_viewport_scroll, "row-header", /*rowHeader*/ ctx[0]);
			}

			if (!current || dirty & /*contentWidth*/ 2) {
				set_custom_element_data(revogr_viewport_scroll, "content-width", /*contentWidth*/ ctx[1]);
			}

			if (!current || dirty & /*contentHeight*/ 4) {
				set_custom_element_data(revogr_viewport_scroll, "content-height", /*contentHeight*/ ctx[2]);
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
				detach(revogr_viewport_scroll);
			}

			if (default_slot) default_slot.d(detaching);
			/*revogr_viewport_scroll_binding*/ ctx[11](null);
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
	let { rowHeader = undefined } = $$props;
	let { contentWidth = undefined } = $$props;
	let { contentHeight = undefined } = $$props;
	const setScroll = (...args) => __ref.setScroll(...args);
	const changeScroll = (...args) => __ref.changeScroll(...args);
	const applyScroll = (...args) => __ref.applyScroll(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(3, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function revogr_viewport_scroll_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('rowHeader' in $$props) $$invalidate(0, rowHeader = $$props.rowHeader);
		if ('contentWidth' in $$props) $$invalidate(1, contentWidth = $$props.contentWidth);
		if ('contentHeight' in $$props) $$invalidate(2, contentHeight = $$props.contentHeight);
		if ('$$scope' in $$props) $$invalidate(9, $$scope = $$props.$$scope);
	};

	return [
		rowHeader,
		contentWidth,
		contentHeight,
		__ref,
		onEvent,
		setScroll,
		changeScroll,
		applyScroll,
		getWebComponent,
		$$scope,
		slots,
		revogr_viewport_scroll_binding
	];
}

class RevogrViewportScroll extends SvelteComponent {
  $$prop_def: RevogrViewportScrollProps;
  $$events_def: RevogrViewportScrollEvents;
  $$slot_def: RevogrViewportScrollSlots;

  $on<K extends keyof RevogrViewportScrollEvents>(type: K, callback: (e: RevogrViewportScrollEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RevogrViewportScrollProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			rowHeader: 0,
			contentWidth: 1,
			contentHeight: 2,
			setScroll: 5,
			changeScroll: 6,
			applyScroll: 7,
			getWebComponent: 8
		});
	}

	
  /**  */
 get setScroll(): Components.RevogrViewportScroll["setScroll"] {
		return this.$$.ctx[5];
	}

	
  /** update on delta in case we don't know existing position or external change */
 get changeScroll(): Components.RevogrViewportScroll["changeScroll"] {
		return this.$$.ctx[6];
	}

	
  /** Extra layer for scroll event monitoring, where MouseWheel event is not passing
We need to trigger scroll event in case there is no mousewheel event */
 get applyScroll(): Components.RevogrViewportScroll["applyScroll"] {
		return this.$$.ctx[7];
	}

	get getWebComponent(): HTMLRevogrViewportScrollElement | undefined {
		return this.$$.ctx[8];
	}
}

export default RevogrViewportScroll;
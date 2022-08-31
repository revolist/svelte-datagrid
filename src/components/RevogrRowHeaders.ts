/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


interface RevogrRowHeadersProps {
  
  /**  */
  height?: Components.RevogrRowHeaders["height"]
  
  /**  */
  dataPorts?: Components.RevogrRowHeaders["dataPorts"]
  
  /**  */
  headerProp?: Components.RevogrRowHeaders["headerProp"]
  
  /**  */
  uiid?: Components.RevogrRowHeaders["uiid"]
  
  /**  */
  resize?: Components.RevogrRowHeaders["resize"]
  
  /**  */
  rowHeaderColumn?: Components.RevogrRowHeaders["rowHeaderColumn"]
}

interface RevogrRowHeadersEvents {
  
  /**  */
  scrollViewport: Parameters<JSX.RevogrRowHeaders["onScrollViewport"]>[0]
  
  /**  */
  elementToScroll: Parameters<JSX.RevogrRowHeaders["onElementToScroll"]>[0]
}

interface RevogrRowHeadersSlots {
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
	run_all,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let revogr_row_headers;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

	return {
		c() {
			revogr_row_headers = element("revogr-row-headers");
			if (default_slot) default_slot.c();
			set_custom_element_data(revogr_row_headers, "height", /*height*/ ctx[0]);
			set_custom_element_data(revogr_row_headers, "uiid", /*uiid*/ ctx[1]);
			set_custom_element_data(revogr_row_headers, "resize", /*resize*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, revogr_row_headers, anchor);

			if (default_slot) {
				default_slot.m(revogr_row_headers, null);
			}

			/*revogr_row_headers_binding*/ ctx[12](revogr_row_headers);
			current = true;

			if (!mounted) {
				dispose = [
					listen(revogr_row_headers, "scrollViewport", /*onEvent*/ ctx[4]),
					listen(revogr_row_headers, "elementToScroll", /*onEvent*/ ctx[4])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[10], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*height*/ 1) {
				set_custom_element_data(revogr_row_headers, "height", /*height*/ ctx[0]);
			}

			if (!current || dirty & /*uiid*/ 2) {
				set_custom_element_data(revogr_row_headers, "uiid", /*uiid*/ ctx[1]);
			}

			if (!current || dirty & /*resize*/ 4) {
				set_custom_element_data(revogr_row_headers, "resize", /*resize*/ ctx[2]);
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
			if (detaching) detach(revogr_row_headers);
			if (default_slot) default_slot.d(detaching);
			/*revogr_row_headers_binding*/ ctx[12](null);
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
	let { height = undefined } = $$props;
	let { dataPorts = undefined } = $$props;
	let { headerProp = undefined } = $$props;
	let { uiid = undefined } = $$props;
	let { resize = undefined } = $$props;
	let { rowHeaderColumn = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(9, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(3, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function revogr_row_headers_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('height' in $$props) $$invalidate(0, height = $$props.height);
		if ('dataPorts' in $$props) $$invalidate(5, dataPorts = $$props.dataPorts);
		if ('headerProp' in $$props) $$invalidate(6, headerProp = $$props.headerProp);
		if ('uiid' in $$props) $$invalidate(1, uiid = $$props.uiid);
		if ('resize' in $$props) $$invalidate(2, resize = $$props.resize);
		if ('rowHeaderColumn' in $$props) $$invalidate(7, rowHeaderColumn = $$props.rowHeaderColumn);
		if ('$$scope' in $$props) $$invalidate(10, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, dataPorts*/ 544) {
			$: if (__mounted) setProp('dataPorts', dataPorts);
		}

		if ($$self.$$.dirty & /*__mounted, headerProp*/ 576) {
			$: if (__mounted) setProp('headerProp', headerProp);
		}

		if ($$self.$$.dirty & /*__mounted, rowHeaderColumn*/ 640) {
			$: if (__mounted) setProp('rowHeaderColumn', rowHeaderColumn);
		}
	};

	return [
		height,
		uiid,
		resize,
		__ref,
		onEvent,
		dataPorts,
		headerProp,
		rowHeaderColumn,
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		revogr_row_headers_binding
	];
}

class RevogrRowHeaders extends SvelteComponent {
  $$prop_def: RevogrRowHeadersProps;
  $$events_def: RevogrRowHeadersEvents;
  $$slot_def: RevogrRowHeadersSlots;

  $on<K extends keyof RevogrRowHeadersEvents>(type: K, callback: (e: RevogrRowHeadersEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RevogrRowHeadersProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			height: 0,
			dataPorts: 5,
			headerProp: 6,
			uiid: 1,
			resize: 2,
			rowHeaderColumn: 7,
			getWebComponent: 8
		});
	}

	get getWebComponent(): HTMLRevogrRowHeadersElement | undefined {
		return this.$$.ctx[8];
	}
}

export default RevogrRowHeaders;
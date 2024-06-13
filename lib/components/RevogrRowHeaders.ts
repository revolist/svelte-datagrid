/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


interface RevogrRowHeadersProps {
  
  /** Header height to setup row headers */
  height?: Components.RevogrRowHeaders["height"]
  
  /** Viewport data */
  dataPorts?: Components.RevogrRowHeaders["dataPorts"]
  
  /** Header props */
  headerProp?: Components.RevogrRowHeaders["headerProp"]
  
  /** Row class */
  rowClass?: Components.RevogrRowHeaders["rowClass"]
  
  /** Enable resize */
  resize?: Components.RevogrRowHeaders["resize"]
  
  /** Row header column */
  rowHeaderColumn?: Components.RevogrRowHeaders["rowHeaderColumn"]
  
  /** Additional data to pass to renderer */
  additionalData?: Components.RevogrRowHeaders["additionalData"]
  
  /** Prevent rendering until job is done.
Can be used for initial rendering performance improvement.
When several plugins require initial rendering this will prevent double initial rendering. */
  jobsBeforeRender?: Components.RevogrRowHeaders["jobsBeforeRender"]
}

interface RevogrRowHeadersEvents {
  
  /** Scroll viewport */
  scrollview: Parameters<JSX.RevogrRowHeaders["onScrollview"]>[0]
  
  /** Register element to scroll */
  ref: Parameters<JSX.RevogrRowHeaders["onRef"]>[0]
}

interface RevogrRowHeadersSlots {
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
	let revogr_row_headers;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[13].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[12], null);

	return {
		c() {
			revogr_row_headers = element("revogr-row-headers");
			if (default_slot) default_slot.c();
			set_custom_element_data(revogr_row_headers, "height", /*height*/ ctx[0]);
			set_custom_element_data(revogr_row_headers, "row-class", /*rowClass*/ ctx[1]);
			set_custom_element_data(revogr_row_headers, "resize", /*resize*/ ctx[2]);
			set_custom_element_data(revogr_row_headers, "additional-data", /*additionalData*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, revogr_row_headers, anchor);

			if (default_slot) {
				default_slot.m(revogr_row_headers, null);
			}

			/*revogr_row_headers_binding*/ ctx[14](revogr_row_headers);
			current = true;

			if (!mounted) {
				dispose = [
					listen(revogr_row_headers, "scrollview", /*onEvent*/ ctx[5]),
					listen(revogr_row_headers, "ref", /*onEvent*/ ctx[5])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4096)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[12],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[12])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[12], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*height*/ 1) {
				set_custom_element_data(revogr_row_headers, "height", /*height*/ ctx[0]);
			}

			if (!current || dirty & /*rowClass*/ 2) {
				set_custom_element_data(revogr_row_headers, "row-class", /*rowClass*/ ctx[1]);
			}

			if (!current || dirty & /*resize*/ 4) {
				set_custom_element_data(revogr_row_headers, "resize", /*resize*/ ctx[2]);
			}

			if (!current || dirty & /*additionalData*/ 8) {
				set_custom_element_data(revogr_row_headers, "additional-data", /*additionalData*/ ctx[3]);
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
				detach(revogr_row_headers);
			}

			if (default_slot) default_slot.d(detaching);
			/*revogr_row_headers_binding*/ ctx[14](null);
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
	let { rowClass = undefined } = $$props;
	let { resize = undefined } = $$props;
	let { rowHeaderColumn = undefined } = $$props;
	let { additionalData = undefined } = $$props;
	let { jobsBeforeRender = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(11, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(4, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function revogr_row_headers_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('height' in $$props) $$invalidate(0, height = $$props.height);
		if ('dataPorts' in $$props) $$invalidate(6, dataPorts = $$props.dataPorts);
		if ('headerProp' in $$props) $$invalidate(7, headerProp = $$props.headerProp);
		if ('rowClass' in $$props) $$invalidate(1, rowClass = $$props.rowClass);
		if ('resize' in $$props) $$invalidate(2, resize = $$props.resize);
		if ('rowHeaderColumn' in $$props) $$invalidate(8, rowHeaderColumn = $$props.rowHeaderColumn);
		if ('additionalData' in $$props) $$invalidate(3, additionalData = $$props.additionalData);
		if ('jobsBeforeRender' in $$props) $$invalidate(9, jobsBeforeRender = $$props.jobsBeforeRender);
		if ('$$scope' in $$props) $$invalidate(12, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, dataPorts*/ 2112) {
			$: if (__mounted) setProp('dataPorts', dataPorts);
		}

		if ($$self.$$.dirty & /*__mounted, headerProp*/ 2176) {
			$: if (__mounted) setProp('headerProp', headerProp);
		}

		if ($$self.$$.dirty & /*__mounted, rowHeaderColumn*/ 2304) {
			$: if (__mounted) setProp('rowHeaderColumn', rowHeaderColumn);
		}

		if ($$self.$$.dirty & /*__mounted, jobsBeforeRender*/ 2560) {
			$: if (__mounted) setProp('jobsBeforeRender', jobsBeforeRender);
		}
	};

	return [
		height,
		rowClass,
		resize,
		additionalData,
		__ref,
		onEvent,
		dataPorts,
		headerProp,
		rowHeaderColumn,
		jobsBeforeRender,
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
			dataPorts: 6,
			headerProp: 7,
			rowClass: 1,
			resize: 2,
			rowHeaderColumn: 8,
			additionalData: 3,
			jobsBeforeRender: 9,
			getWebComponent: 10
		});
	}

	get getWebComponent(): HTMLRevogrRowHeadersElement | undefined {
		return this.$$.ctx[10];
	}
}

export default RevogrRowHeaders;
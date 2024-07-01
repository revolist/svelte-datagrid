/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


interface VnodeHtmlProps {
  
  /**  */
  redraw?: Components.VnodeHtml["redraw"]
}

interface VnodeHtmlEvents {
  
  /**  */
  html: Parameters<JSX.VnodeHtml["onHtml"]>[0]
}

interface VnodeHtmlSlots {
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
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import "svelte/internal/disclose-version";
import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let vnode_html;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			vnode_html = element("vnode-html");
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			insert(target, vnode_html, anchor);

			if (default_slot) {
				default_slot.m(vnode_html, null);
			}

			/*vnode_html_binding*/ ctx[7](vnode_html);
			current = true;

			if (!mounted) {
				dispose = listen(vnode_html, "html", /*onEvent*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[5],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
						null
					);
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
			if (detaching) {
				detach(vnode_html);
			}

			if (default_slot) default_slot.d(detaching);
			/*vnode_html_binding*/ ctx[7](null);
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
	let { redraw = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(4, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(0, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function vnode_html_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(0, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('redraw' in $$props) $$invalidate(2, redraw = $$props.redraw);
		if ('$$scope' in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, redraw*/ 20) {
			$: if (__mounted) setProp('redraw', redraw);
		}
	};

	return [
		__ref,
		onEvent,
		redraw,
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		vnode_html_binding
	];
}

class VnodeHtml extends SvelteComponent {
  $$prop_def: VnodeHtmlProps;
  $$events_def: VnodeHtmlEvents;
  $$slot_def: VnodeHtmlSlots;

  $on<K extends keyof VnodeHtmlEvents>(type: K, callback: (e: VnodeHtmlEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VnodeHtmlProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { redraw: 2, getWebComponent: 3 });
	}

	get getWebComponent(): HTMLVnodeHtmlElement | undefined {
		return this.$$.ctx[3];
	}
}

export default VnodeHtml;
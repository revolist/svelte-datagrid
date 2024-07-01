/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


interface RevogrEditProps {
  
  /** Cell to edit data. */
  editCell?: Components.RevogrEdit["editCell"]
  
  /** Column data for editor. */
  column?: Components.RevogrEdit["column"]
  
  /** Custom editors register */
  editor?: Components.RevogrEdit["editor"]
  
  /** Save on editor close. Defines if data should be saved on editor close. */
  saveOnClose?: Components.RevogrEdit["saveOnClose"]
  
  /** Additional data to pass to renderer */
  additionalData?: Components.RevogrEdit["additionalData"]
}

interface RevogrEditEvents {
  
  /** Cell edit event */
  celledit: Parameters<JSX.RevogrEdit["onCelledit"]>[0]
  
  /** Close editor event
pass true if requires focus next */
  closeedit: Parameters<JSX.RevogrEdit["onCloseedit"]>[0]
}

interface RevogrEditSlots {
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
	let revogr_edit;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[12].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

	return {
		c() {
			revogr_edit = element("revogr-edit");
			if (default_slot) default_slot.c();
			set_custom_element_data(revogr_edit, "save-on-close", /*saveOnClose*/ ctx[0]);
			set_custom_element_data(revogr_edit, "additional-data", /*additionalData*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, revogr_edit, anchor);

			if (default_slot) {
				default_slot.m(revogr_edit, null);
			}

			/*revogr_edit_binding*/ ctx[13](revogr_edit);
			current = true;

			if (!mounted) {
				dispose = [
					listen(revogr_edit, "celledit", /*onEvent*/ ctx[3]),
					listen(revogr_edit, "closeedit", /*onEvent*/ ctx[3])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 2048)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[11],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[11])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[11], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*saveOnClose*/ 1) {
				set_custom_element_data(revogr_edit, "save-on-close", /*saveOnClose*/ ctx[0]);
			}

			if (!current || dirty & /*additionalData*/ 2) {
				set_custom_element_data(revogr_edit, "additional-data", /*additionalData*/ ctx[1]);
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
				detach(revogr_edit);
			}

			if (default_slot) default_slot.d(detaching);
			/*revogr_edit_binding*/ ctx[13](null);
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
	let { editCell = undefined } = $$props;
	let { column = undefined } = $$props;
	let { editor = undefined } = $$props;
	let { saveOnClose = undefined } = $$props;
	let { additionalData = undefined } = $$props;
	const cancelChanges = (...args) => __ref.cancelChanges(...args);
	const beforeDisconnect = (...args) => __ref.beforeDisconnect(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(10, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(2, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function revogr_edit_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('editCell' in $$props) $$invalidate(4, editCell = $$props.editCell);
		if ('column' in $$props) $$invalidate(5, column = $$props.column);
		if ('editor' in $$props) $$invalidate(6, editor = $$props.editor);
		if ('saveOnClose' in $$props) $$invalidate(0, saveOnClose = $$props.saveOnClose);
		if ('additionalData' in $$props) $$invalidate(1, additionalData = $$props.additionalData);
		if ('$$scope' in $$props) $$invalidate(11, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, editCell*/ 1040) {
			$: if (__mounted) setProp('editCell', editCell);
		}

		if ($$self.$$.dirty & /*__mounted, column*/ 1056) {
			$: if (__mounted) setProp('column', column);
		}

		if ($$self.$$.dirty & /*__mounted, editor*/ 1088) {
			$: if (__mounted) setProp('editor', editor);
		}
	};

	return [
		saveOnClose,
		additionalData,
		__ref,
		onEvent,
		editCell,
		column,
		editor,
		cancelChanges,
		beforeDisconnect,
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		revogr_edit_binding
	];
}

class RevogrEdit extends SvelteComponent {
  $$prop_def: RevogrEditProps;
  $$events_def: RevogrEditEvents;
  $$slot_def: RevogrEditSlots;

  $on<K extends keyof RevogrEditEvents>(type: K, callback: (e: RevogrEditEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RevogrEditProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			editCell: 4,
			column: 5,
			editor: 6,
			saveOnClose: 0,
			additionalData: 1,
			cancelChanges: 7,
			beforeDisconnect: 8,
			getWebComponent: 9
		});
	}

	
  /** Cancel pending changes flag. Editor will be closed without autosave. */
 get cancelChanges(): Components.RevogrEdit["cancelChanges"] {
		return this.$$.ctx[7];
	}

	
  /** Before editor got disconnected.
Can be triggered multiple times before actual disconnect. */
 get beforeDisconnect(): Components.RevogrEdit["beforeDisconnect"] {
		return this.$$.ctx[8];
	}

	get getWebComponent(): HTMLRevogrEditElement | undefined {
		return this.$$.ctx[9];
	}
}

export default RevogrEdit;
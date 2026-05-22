import type { ColumnDataSchemaModel, EditorCtr } from '@revolist/revogrid';
import type { Component } from 'svelte';
import { type EditorType, SvelteEditorAdapter } from './editor.adapter';

export { SvelteEditorAdapter, type EditorType } from './editor.adapter';

/**
 * Create an editor constructor from a Svelte component.
 */
export const Editor = (EditorComponent: Component<EditorType>): EditorCtr => {
  return function (
    column: ColumnDataSchemaModel,
    save: (value: any, preventFocus?: boolean) => void,
    close: (focusNext?: boolean) => void,
  ) {
    return new SvelteEditorAdapter(EditorComponent, column, save, close);
  };
};

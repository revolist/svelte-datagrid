import type {
  ColumnDataSchemaModel,
  EditCell,
  EditorBase,
  HyperFunc,
  VNode,
} from '@revolist/revogrid';
import type { Component } from 'svelte';
import {
  SvelteTemplateConstructor,
  type RenderedComponent,
  type SvelteElement,
} from './renderer';

export type EditorType = Partial<EditCell> & {
  column: ColumnDataSchemaModel;
  save: (value: any, preventFocus?: boolean) => void;
  close: (focusNext?: boolean) => void;
  [key: string]: any;
};

export class SvelteEditorAdapter implements EditorBase {
  public element: SvelteElement | null = null;
  public editCell?: EditCell;
  private renderedComponent: RenderedComponent<EditorType> | null = null;

  constructor(
    private EditorComponent: Component<EditorType>,
    public column: ColumnDataSchemaModel,
    private save: (value: any, preventFocus?: boolean) => void,
    private close: (focusNext?: boolean) => void,
  ) {}

  beforeUpdate() {
    this.renderedComponent?.instance.beforeUpdate?.();
  }

  beforeDisconnect() {
    this.renderedComponent?.instance.beforeDisconnect?.();
  }

  beforeAutoSave(value?: any) {
    return this.renderedComponent?.instance.beforeAutoSave?.(value) ?? false;
  }

  componentDidRender() {
    this.renderedComponent?.instance.componentDidRender?.();
  }

  disconnectedCallback() {
    this.renderedComponent?.destroy();
    this.renderedComponent = null;
  }

  getValue() {
    return this.renderedComponent?.instance.getValue?.();
  }

  render(h: HyperFunc<VNode>) {
    return h('span', {
      key: `${this.column.prop}-${this.editCell?.rowIndex || 0}`,
      ref: (el: SvelteElement | null) => {
        const editorData: EditorType = {
          ...this.editCell,
          column: this.column,
          save: this.save,
          close: this.close,
        };

        this.renderedComponent = SvelteTemplateConstructor(
          el,
          this.EditorComponent,
          editorData,
          this.renderedComponent,
        );
      },
    });
  }
}

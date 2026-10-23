import type {
  CellTemplateProp,
  ColumnDataSchemaModel,
  ColumnTemplateProp,
  HyperFunc,
  VNode,
} from '@revolist/revogrid';
import { flushSync, getAllContexts, mount, unmount, type Component } from 'svelte';
import { createReactiveProps, type ReactiveProps } from './reactive-props.svelte';

export type SvelteCellProps = CellTemplateProp & {
  addition?: any;
  [key: string]: any;
};

export interface SvelteElement extends HTMLElement {
  _svelteTemplate?: RenderedComponent<any>;
}

export interface RenderedComponent<T extends Record<string, any>> {
  component: Component<T>;
  instance: Record<string, any>;
  props: ReactiveProps<T>;
  update: (newProps: T) => void;
  destroy: () => void;
}

function getCurrentContext() {
  try {
    return getAllContexts();
  } catch {
    return undefined;
  }
}

export function SvelteTemplateConstructor<T extends Record<string, any>>(
  el: SvelteElement | null,
  SvelteComponent: Component<T>,
  initialProps: T,
  lastEl: RenderedComponent<T> | null = null,
  context = getCurrentContext(),
): RenderedComponent<T> | null {
  if (!el) {
    lastEl?.destroy();
    return null;
  }

  if (el._svelteTemplate?.component === SvelteComponent) {
    el._svelteTemplate.update(initialProps);
    return el._svelteTemplate;
  }

  el._svelteTemplate?.destroy();

  const reactiveProps = createReactiveProps(initialProps);
  const instance = mount(SvelteComponent, {
    target: el,
    props: reactiveProps.props,
    context,
  });

  const rendered: RenderedComponent<T> = {
    component: SvelteComponent,
    instance,
    props: reactiveProps,
    update(newProps: T) {
      reactiveProps.update(newProps);
      flushSync();
    },
    destroy() {
      void unmount(instance);
      el._svelteTemplate = undefined;
    },
  };

  el._svelteTemplate = rendered;
  flushSync();

  return rendered;
}

/**
 * Render a Svelte component in a RevoGrid column cell template.
 */
export const Template = <TProps extends Record<string, any> = SvelteCellProps, C = CellTemplateProp | ColumnDataSchemaModel | ColumnTemplateProp>(
  SvelteComponent: Component<TProps>,
  customProps?: Partial<TProps>,
  options?: { props?: (context: C) => Record<string, any>; key?: (context: C) => string | number },
  context = getCurrentContext(),
) => {

  return (
    h: HyperFunc<VNode>,
    p: C,
    addition?: any,
  ) => {
    const props = (options?.props ? options.props(p) : { ...customProps, ...p, addition }) as TProps;
    const key = options?.key?.(p) ?? `${(p as any).prop}-${(p as any).rowIndex || 0}`;
    let lastEl: RenderedComponent<TProps> | null = null;

    return h('span', {
      key,
      ref: (el: SvelteElement | null) => {
        lastEl = SvelteTemplateConstructor(
          el,
          SvelteComponent,
          props,
          lastEl,
          context,
        );
      },
    });
  };
};

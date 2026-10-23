import { getAllContexts, onDestroy, type Component } from 'svelte';
import type { ComponentTemplate } from '@revolist/revogrid';
import { SvelteTemplateConstructor } from './renderer';

export interface SvelteTemplateOwner {
  template<C>(component: Component<any>, options?: {
    props?: (context: C) => Record<string, any>;
  }): ComponentTemplate<C>;
  dispose(): void;
}

/** Call during component initialization to capture the normal Svelte context. */
export function useTemplates(): SvelteTemplateOwner {
  const context = getAllContexts();
  const destroyers = new Set<() => void>();
  let disposed = false;
  const owner: SvelteTemplateOwner = {
    template<C>(component: Component<any>, options?: { props?: (context: C) => Record<string, any> }): ComponentTemplate<C> {
      const props = (value: C) => options?.props ? options.props(value) : { context: value };
      return {
        kind: 'revo-component-template',
        mount(host, value) {
          if (disposed) throw new Error('Cannot mount a template from a disposed Svelte template owner.');
          const instance = SvelteTemplateConstructor(host, component, props(value), null, context)!;
          let destroyed = false;
          const destroy = () => {
            if (destroyed) return;
            destroyed = true;
            destroyers.delete(destroy);
            instance.destroy();
          };
          destroyers.add(destroy);
          return {
            update(next) { if (!destroyed && !disposed) instance.update(props(next)); },
            destroy,
          };
        },
      };
    },
    dispose() { disposed = true; for (const destroy of destroyers) destroy(); },
  };
  onDestroy(owner.dispose);
  return owner;
}

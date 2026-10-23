import { getAllContexts, type Component } from 'svelte';
import { Template } from './renderer';

/** Bind the existing template factory for use on any content surface. */
export function useTemplates() {
  const context = getAllContexts();
  return {
    template<C>(component: Component<any>, options?: Parameters<typeof Template<any, C>>[2]) {
      const adapted = { ...options, props: options?.props ?? ((context: C) => ({ context })) };
      return Template<any, C>(component, undefined, adapted, context);
    },
  };
}

export type SvelteTemplateOwner = ReturnType<typeof useTemplates>;

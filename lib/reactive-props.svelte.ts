export type ReactiveProps<T extends Record<string, any>> = {
  props: T;
  update: (nextProps: T) => void;
};

export function createReactiveProps<T extends Record<string, any>>(
  initialProps: T,
): ReactiveProps<T> {
  const props = $state({ ...initialProps }) as T;

  return {
    props,
    update(nextProps: T) {
      for (const key of Object.keys(props)) {
        if (!(key in nextProps)) {
          delete props[key];
        }
      }
      Object.assign(props, nextProps);
    },
  };
}

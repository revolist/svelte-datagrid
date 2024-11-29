import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({ rollupTypes: true, include: ['lib'] }), svelte()],
  build: {
    copyPublicDir: false,
    minify: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'), // Library entry file
      name: 'SvelteDatagrid',
    },
    rollupOptions: {
      input: {
        main: 'lib/index.ts',
      },
      external: [
        /^svelte($|\/)/,
        /node_modules/,
        /^@revolist\/revogrid(\/.*)?$/,
      ],
    },
  },
  // resolve: {
  //   alias: {
  //     '@revolist/svelte-datagrid': resolve(__dirname, './lib'),
  //   },
  // },
  server: {
    open: '/demo/index.html',
  }
});

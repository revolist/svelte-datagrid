import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), dts({ include: ['lib'] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/revogrid.ts'), // Library entry file
      name: 'SvelteDatagrid',
    },
    rollupOptions: {
      input: {
        main: 'lib/revogrid.ts',
      },
      external: [
        'svelte',
        /node_modules/,
        /^@revolist\/revogrid(\/.*)?$/,
      ],
      output: {
        exports: 'named',
        globals: {
          '@revolist/revogrid': 'Revogrid',
          '@revolist/revogrid/loader': 'RevogridLoader',
        },
      },
    },
  },
  server: {
    open: '/src/index.html',
  },
});

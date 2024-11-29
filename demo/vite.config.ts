import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],

  resolve: {
    alias: {
      '@revolist/svelte-datagrid': resolve(__dirname, '../lib'),
    },
  },
})

import { defineConfig } from 'vite'
import Path from 'path'
import Vue from '@vitejs/plugin-vue'
import EsLint from 'vite-plugin-eslint'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
  server: {
    port: 3001
  },
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, './src/store'),
      '@@': Path.resolve(__dirname, './src/components'),
      '@': Path.resolve(__dirname, './src'),
    }
  },
  plugins: [
    Vue(),
    EsLint({
      fix: true,
      include: '**/*.+(vue|js|jsx|ts|tsx)',
      exclude: ['**/node_modules/**', 'dist/**']
    }),
    Pages({
      dirs: 'src/pages'
    }),
    Layouts()
  ]
})

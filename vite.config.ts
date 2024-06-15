import { defineConfig } from 'vite'
import { patchCssModules } from 'vite-css-modules'
import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
      react(),
      patchCssModules(),
      svgr()
  ],
  server: {
    open: true
  },
  build: {
    target: 'esnext'
  }
})

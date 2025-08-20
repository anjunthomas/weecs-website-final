import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    manifest: 'manifest.json',
    outDir: '../../backend/core/static/react',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.jsx'),
        gallery: resolve(__dirname, 'src/gallery-entry.jsx'),
      },
    },
  },
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [
    tanstackRouter({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    mode === 'analyze' &&
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
        filename: 'dist/stats.html',
      }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true,
    },
  },
  build: {
    target: 'es2022',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('react-dom') || id.includes('react/')) return 'react'
          if (id.includes('@tanstack/react-router')) return 'router'
          if (id.includes('@tanstack/react-query')) return 'query'
          return undefined
        },
      },
    },
  },
}))

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config
export default defineConfig({
  plugins: [react()],
  build: {
    // Keep the heavy 3D libraries in their own chunk so they can be
    // lazy-loaded and never block first paint of the marketing copy.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('three') || id.includes('@react-three')) return 'three'
          if (id.includes('gsap')) return 'gsap'
        },
      },
    },
  },
})

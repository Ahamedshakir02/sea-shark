import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps the built site working from any folder or host
export default defineConfig({
  plugins: [react()],
  base: './',
})

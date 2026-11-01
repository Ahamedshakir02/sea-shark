import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Pages use real URLs (/services, /about), so assets load from the site root
export default defineConfig({
  plugins: [react()],
  base: '/',
})

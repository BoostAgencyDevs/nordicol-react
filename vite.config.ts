import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Configuración para PWA
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Configuración para desarrollo
  server: {
    port: 5173,
    host: true,
  },
})

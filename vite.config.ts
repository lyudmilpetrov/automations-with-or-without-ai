import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite uses BROWSER when opening the development URL.
process.env.BROWSER =
  process.platform === 'win32'
    ? 'msedge'
    : process.platform === 'darwin'
      ? 'Microsoft Edge'
      : 'microsoft-edge'

// https://vite.dev/config/
export default defineConfig({
  base: '/automations-with-or-without-ai/',
  plugins: [react()],
  server: {
    open: true,
  },
  preview: {
    open: false,
  },
})

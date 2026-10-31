import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/automations-with-or-without-ai/',
  plugins: [react()],
})

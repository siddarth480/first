import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- MUST IMPORT

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- MUST EXECUTE
  ],
})
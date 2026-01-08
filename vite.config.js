import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // 👈 Tailwind v4 Vite plugin
  ],
  base: './',        // 👈 keep this if you deploy to a subfolder / cPanel
})

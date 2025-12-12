import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // WAJIB: Tambahkan base ini sesuai nama repository GitHub kamu
  base: '/Prak06-ruangekspresi-2400016079/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
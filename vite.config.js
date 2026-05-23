import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/zadanie-5/',
  plugins: [tailwindcss()],
})
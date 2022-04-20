import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { svgBuilder } from './src/plugins/svgBuilder'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    svgBuilder('./src/icons/')
  ]
})

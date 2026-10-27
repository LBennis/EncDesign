import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      // Provide the two glyphs the supplied theme imports without the full icon set.
      '@fluentui/react-icons': fileURLToPath(new URL('./src/vendor/fluentui-icons-shim.jsx', import.meta.url))
    }
  }
})

import react from '@vitejs/plugin-react'
import { BuildOptions, defineConfig } from 'vite'

const isProd = process.env.NODE_ENV?.trim() === 'production'

const buildConfig = (): BuildOptions => {
  if (!isProd) return {}

  return {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'swipe-vendor': ['swiper']
        }
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: buildConfig()
})

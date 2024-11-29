import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/recibos-psi/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        chunkSizeWarningLimit: 1000,
        manualChunks(id) {
          if (id.includes('node_modules/lodash')) {
            return 'vendor_lodash';
          }
          if (id.includes('node_modules/react-dom')) {
            return 'vendor_react-dom';
          }
        },
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
     port: 3001,
    proxy: {
      '/forms': 'https://dev.api.gateway.tva.thetaskforge.co', // Adjust the API path accordingly
    }
  }
})

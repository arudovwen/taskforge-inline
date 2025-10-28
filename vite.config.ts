import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // Optimize build for production
  build: {
    target: 'esnext',               // Use the latest JavaScript features
    minify: 'esbuild',              // Use esbuild for faster and more efficient minification
    cssCodeSplit: true,             // Split CSS into separate files for smaller, faster loads
    sourcemap: false,               // Disable sourcemaps for production (can be enabled for debugging)
    chunkSizeWarningLimit: 500,     // Increase chunk size warning limit for large libraries
    rollupOptions: {
      output: {
        // Customize output file names to prevent potential name clashes in different environments
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
      },
      external: ['react', 'react-dom'],  // Mark React as external to avoid bundling it in the final output
    },
  },

  // Enable dependency pre-bundling for faster startup time in dev mode
  optimizeDeps: {
    include: ['react', 'react-dom'],  // Include react and react-dom for faster dependency optimization in dev
  },

  // Use a custom port for development server if needed
  server: {
    port: 3001,                      // Change the dev server port to 3000 (or any other port you prefer)
    open: true,                      // Open the browser automatically when the dev server starts
  
},

  // Enable environment variables to fine-tune your app’s behavior during build and dev
  define: {
    'process.env.NODE_ENV': '"production"', // For example, you can change environment variables for production
  },
})

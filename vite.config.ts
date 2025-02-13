import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: './', // Ensures Vite starts from the correct root
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ensures correct module resolution
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      external: ['/assets/index-*.js'], // Prevents asset resolution issues
    },
    assetsInlineLimit: 0, // Ensures assets are generated properly
    outDir: 'dist', // Ensures built files go to the right directory
  },
});

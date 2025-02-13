import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

build: {
  rollupOptions: {
    external: ['/assets/index-*.js'], // Prevents asset resolution issues
  },
  assetsInlineLimit: 0, // Ensures assets are generated properly
}

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';  // Node's path module, with @types/node installed

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Use path.resolve for alias
    },
  },
});

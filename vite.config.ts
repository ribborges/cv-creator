import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext'
  },
  esbuild: {
    target: 'esnext',
    supported: {
      'top-level-await': true
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext"
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})

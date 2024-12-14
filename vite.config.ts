import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: './',  // Use relative paths for assets
  publicDir: 'public', // Explicitly set public directory
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          const ext = name.split('.').pop() || '';
          let extType = 'asset';

          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            extType = 'img';
          } else if (/wav|mp3/i.test(ext)) {
            extType = 'audio';
          }

          return `assets/${extType}/[name]-[hash][extname]`;
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


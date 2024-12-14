import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: '/',  // Use absolute paths for assets
  publicDir: 'public', // Explicitly set public directory
  build: {
    assetsDir: '',  // Keep assets in root of dist
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const ext = assetInfo.name.split('.').pop() || '';
          const dir = ext.match(/png|jpe?g|gif|svg|ico/i) ? 'images' :
                     ext.match(/mp3|wav/i) ? 'sounds' : 'assets';
          return `${dir}/[name][extname]`;  // Preserve original names
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


import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: 'src/index.ts', 
      name: 'ludi-web3-ui',
      formats: ['es', 'cjs'], // Support both ES modules and CommonJS
    },
    rollupOptions: {
      external: ['react'],
    },
  },
})
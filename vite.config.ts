import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    // host: '127.0.0.1',
    // port: 7001,
    proxy: {
      '/user': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true
      },
      '/api': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')},
      }
    }
  }
});

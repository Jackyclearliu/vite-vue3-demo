import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './',
  server: {
    host: 'localhost',
    port: 8088,
    open: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/common/common.scss";`  //引用公共样式
      }
    }
  }
})

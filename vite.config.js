import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import importElementPlus from 'vite-plugin-element-plus'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  vue(),
  importElementPlus(),
  ElementPlus({
    importStyle: 'css',
    useSource: true
  }),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  ]
})

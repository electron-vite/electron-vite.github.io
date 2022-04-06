import { resolve } from 'path'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import ViteRestart from 'vite-plugin-restart'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, '.vitepress/theme')}/`,
    },
  },
  plugins: [
    Components({
      dirs: [
        '.vitepress/theme/components',
      ],
      extensions: ['vue', 'ts'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: true,
    }),
    WindiCSS(),
    ViteRestart({
      restart: '.vitepress/config/*.*',
    }),
  ],
  optimizeDeps: {
    include: [
    ],
  },
})

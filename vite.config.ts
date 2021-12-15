import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSvgIcons from 'vite-plugin-svg-icons';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    viteSvgIcons({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),]
})

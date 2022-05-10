import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import windiCSS from 'vite-plugin-windicss';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [vue(), windiCSS(), Components(), Pages()],
});

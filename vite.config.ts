import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	base: "",
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
			imports: ['vue', 'vue-router', 'pinia'],
		}),
		Components({
			resolvers: [
				ElementPlusResolver(
					{
						importStyle: "sass",
						// directives: true,
					}
				)],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/assets/styles/element/index.scss" as *;`,
			},
		},
	},
})

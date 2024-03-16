import { Ref, reactive, computed } from '@vue/reactivity';
import { ComponentCustomProperties } from 'vue';

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		// 将 ref、reactive 和 computed 等添加到 this 上的可选属性
		$refs: Record<string, any>;
		[key: string]: any;
	}
}

// 声明全局可用的 Vue refs 和 reactive API 类型
declare global {
	const ref: typeof Ref;
	const reactive: typeof reactive;
	const computed: typeof computed;
}

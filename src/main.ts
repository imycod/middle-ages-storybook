import {createApp} from 'vue'
import {TroisJSVuePlugin} from 'troisjs';
import './assets/styles/style.scss'
import App from './App.vue'
import router from "@/routers"
import pinia from "@/stores";

createApp(App).use(router).use(pinia).use(TroisJSVuePlugin).mount('#app')

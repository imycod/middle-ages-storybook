import {createApp} from 'vue'
import './assets/styles/style.scss'
import App from './App.vue'
import router from "@/routers"
import pinia from "@/stores";

createApp(App).use(router).use(pinia).mount('#app')

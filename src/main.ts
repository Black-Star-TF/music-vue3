import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
// import('normalize.css')
import('./style/index.scss')
createApp(App).use(router).mount('#app')

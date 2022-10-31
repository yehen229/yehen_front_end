import { createApp } from 'vue'
import store from '@/stores/index'

import App from './App.vue'
import router from './router'

const app = createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

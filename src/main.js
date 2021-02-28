import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Harlem from '@harlem/core'
import router from './router/router.js'
createApp(App).use(router).use(Harlem).mount('#app')

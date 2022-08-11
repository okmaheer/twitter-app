import { createApp } from 'vue'
import App from './App.vue'
import { createRouter } from './router'
// import store from './store'
import Notifications from '@kyvg/vue3-notification'
import './assets/fontawesome-free/css/all.min.css'
import './assets/css/tailwind.css'
import { createPinia } from 'pinia'

createApp(App).use(createPinia())
// .use(store)
.use(Notifications)
.use(createRouter(App)).mount('#app')

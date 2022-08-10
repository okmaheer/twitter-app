import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import './assets/fontawesome-free/css/all.min.css'
import './assets/css/tailwind.css'
import { createPinia } from 'pinia'

createApp(App).use(createPinia())
// .use(store)
.use(router).mount('#app')

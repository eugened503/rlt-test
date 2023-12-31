import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import App from './App.vue'
import './main.scss'

const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App).use(pinia).mount('#app')

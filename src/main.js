import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate) // adding pinia plugin to our vue application


app.use(router)  // adding router to our vue application
app.use(pinia)   // adding pinia to our vue application


app.mount('#app')  // mounting our vue application to the DOM

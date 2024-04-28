import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)

app.config.ignoredElements = [/^ion-/]

app.mount('#app')

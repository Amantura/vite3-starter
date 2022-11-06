import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Router from '@/router'
import App from '@/App.vue'
import '@/assets/css/app.css'
import '@/assets/css/tailwind.css'
import '@/assets/fonts/sfpro/stylesheet.css'

const app = createApp(App)
app.use(Router)
app.use(createPinia())
app.mount('#app')

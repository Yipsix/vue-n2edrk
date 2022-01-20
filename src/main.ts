import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import { makeServer } from '@/mocks/server'

if (process.env.NODE_ENV === 'development') {
    makeServer();
}

createApp(App).use(Quasar).use(router).mount('#app')

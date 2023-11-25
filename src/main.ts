import 'element-plus/dist/index.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'
import {i18n} from "@/locales/lang";


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(i18n)

app.mount('#app')

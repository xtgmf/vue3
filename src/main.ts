// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入mitt
import mitt from "mitt"
const emitter = mitt()

const app = createApp(App)

app.use(createPinia())
app.use(router)
//挂到全局
app.config.globalProperties.$emitter = emitter
app.mount('#app')

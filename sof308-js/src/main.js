// import './assets/main.css'
// thêm thư viện boostrap vào dự án vue của mình
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')

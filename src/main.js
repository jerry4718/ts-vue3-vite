import { createApp } from 'vue'
import App from './components/App/App.vue'
import {router} from "./routes/router";
import './index.css'

createApp(App)
    .use(router)
    .mount('#app')

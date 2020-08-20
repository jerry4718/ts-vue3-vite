import { createApp } from 'vue'
import App from './components/App/App.vue'
import './index.css'
import {router} from "./routes/router";

createApp(App)
    .use(router)
    .mount('#app')

// import './assets/main.css'
import MagicCursor from 'vue-magic-cursor'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('MagicCursor', MagicCursor)
app.mount('#app')

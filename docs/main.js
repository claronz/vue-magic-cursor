import { createApp } from 'vue'
import DocsApp from './DocsApp.vue'
import MagicCursor from '@/components/MagicCursor.vue'
import '@/assets/main.css' // Import styles if they exist

const app = createApp(DocsApp)
app.component('MagicCursor', MagicCursor)
app.mount('#app') 
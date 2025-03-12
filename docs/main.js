import { createApp } from 'vue'
import DocsApp from './DocsApp.vue'
import '../src/assets/main.css' // Import styles if they exist

// Import the library itself to showcase it
import MagicCursor from '../src/index.js'

const app = createApp(DocsApp)
app.use(MagicCursor) // Use your library in the docs
app.mount('#app') 
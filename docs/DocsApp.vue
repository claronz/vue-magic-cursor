<script setup>
import App from '@docs/pages/Demo.vue';
</script>

<template>
  <div class="docs-container">
    <header class="docs-header">
      <h1>Vue Magic Cursor</h1>
      <p>A beautiful cursor effect library for Vue 3</p>
      <div class="docs-links">
        <a href="https://github.com/yourusername/vue-magic-cursor" target="_blank">GitHub</a>
        <a href="#installation">Installation</a>
        <a href="#usage">Usage</a>
        <a href="#examples">Examples</a>
      </div>
    </header>

    <section id="installation" class="docs-section">
      <h2>Installation</h2>
      <pre><code>npm install vue-magic-cursor</code></pre>
    </section>

    <section id="usage" class="docs-section">
      <h2>Usage</h2>
      <pre><code>import { createApp } from 'vue'
import App from './App.vue'
import MagicCursor from 'vue-magic-cursor'
import 'vue-magic-cursor/style.css'

const app = createApp(App)
app.use(MagicCursor)
app.mount('#app')</code></pre>
    </section>

    <section id="examples" class="docs-section">
      <h2>Examples</h2>
      <App />
    </section>

    <footer class="docs-footer">
      <p>© 2023 Vue Magic Cursor. MIT License.</p>
    </footer>
  </div>
</template>

<style scoped>
.docs-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
}

.docs-header {
  text-align: center;
  margin-bottom: 3rem;
}

.docs-header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.docs-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.docs-links a {
  color: #ff6b81;
  text-decoration: none;
  font-weight: bold;
}

.docs-section {
  margin-bottom: 3rem;
}

.docs-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
}

pre {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}

code {
  font-family: monospace;
}

.docs-footer {
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  color: #666;
}
</style> 
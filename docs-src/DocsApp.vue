<template>
  <div>
    <MagicCursor
      :cursor-velocity="cursorVelocity"
      :follower-velocity="followerVelocity"
      :idle-timing="idleTiming"
      :show-cursor="showCursor"
      :show-follower="showFollower"
    >
      <template
        v-if="customCursor"
        #default="{ isStopped, isHover }"
      >
        <div
          class="custom-cursor-dot"
          :class="{
            'custom-cursor-dot--hover': isHover,
            'custom-cursor-dot--stopped': isStopped
          }"
        />
      </template>
      <template
        v-if="customCursor"
       #follower="{ isStopped, isHover }"
      >
        <div class="custom-cursor-follower-container">
          <div
            class="custom-cursor-follower"
            :class="{
              'custom-cursor-follower--hover': isHover,
              'custom-cursor-follower--stopped': isStopped
            }"
          >Custom Element</div>        
        </div>
      </template>
    </MagicCursor>
    <div class="docs-container">
      <header class="docs-header">
        <h1>Vue Magic Cursor</h1>
        <p>A beautiful cursor effect library for Vue 3</p>
        <div class="docs-links">
          <a href="https://github.com/claronz/vue-magic-cursor" target="_blank">GitHub</a>
          <a href="#installation">Installation</a>
          <a href="#usage">Usage</a>
          <a href="#configuration">Configuration</a>
        </div>
      </header>
  
      <section id="installation" class="docs-section">
        <h2>Installation</h2>
        <pre><code>npm install vue-magic-cursor</code></pre>
      </section>
  
      <section id="usage" class="docs-section">
        <h2>Usage</h2>
        <pre><code><CodeSnippet /></code></pre>
      </section>

      <section id="configuration" class="docs-section">
        <h2>Configuration</h2>
        <div class="config-controls">
          <div class="control-group">
            <label class="range-control-label">
              <span>Cursor Velocity</span>
              <div class="range-control">
                <input 
                  type="range" 
                  v-model="cursorVelocity" 
                  min="0.1" 
                  max="1" 
                  step="0.1"
                >
                <span class="value">{{ cursorVelocity }}</span>
              </div>
            </label>
          </div>

          <div class="control-group">
            <label class="range-control-label">
              <span>Follower Velocity</span>
              <div class="range-control">
                <input 
                  type="range" 
                  v-model="followerVelocity" 
                  min="0.1" 
                  max="1" 
                  step="0.1"
                >
                <span class="value">{{ followerVelocity }}</span>
              </div>
            </label>
          </div>

          <div class="control-group">
            <label>
              <span>Idle Timing (ms)</span>
              <input 
                type="number" 
                v-model="idleTiming" 
                min="500" 
                max="5000" 
                step="100"
              >
            </label>
          </div>

          <div class="control-group switches">
            <label>
              <span>Show Cursor</span>
              <input 
                type="checkbox" 
                v-model="showCursor"
              >
            </label>

            <label>
              <span>Show Follower</span>
              <input 
                type="checkbox" 
                v-model="showFollower"
              >
            </label>

            <label>
              <span>Use Custom Cursor</span>
              <input 
                type="checkbox" 
                v-model="customCursor"
              >
            </label>
          </div>
        </div>
      </section>
  
      <footer class="docs-footer">
        <p>© 2025 Vue Magic Cursor. MIT License.</p>
      </footer>
    </div>
  </div>
</template>

<script src="./js/docs-app.js"></script>

<style scoped lang="scss">
.docs-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
  font-family: 'Arial', sans-serif;
}

.docs-header {
  text-align: center;
  margin-bottom: 48px;
  h1 {
    font-size: 48px;
    margin-bottom: 8px;
    color: #333;
  }
}

.docs-links {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 24px;
  a {
    color: #ff6b81;
    text-decoration: none;
    font-weight: bold;
  }
}

.docs-section {
  margin-bottom: 48px;
  h2 {
    font-size: 32px;
    margin-bottom: 24px;
    color: #333;
  }
}

pre {
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
}

code {
  font-family: monospace;
  font-size: 16px;
}

.docs-footer {
  text-align: center;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #eee;
  color: #666;
}

.config-controls {
  background: #f8f8f8;
  padding: 32px;
  border-radius: 8px;
  margin-bottom: 32px;

  .control-group {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }

    label {
      display: flex;
      align-items: center;
      gap: 16px;
      &.range-control-label {
        flex-wrap: wrap;
      }
      span {
        min-width: 150px;
        font-weight: 500;
      }

      .value {
        min-width: auto;
        color: #666;
      }
    }

    .range-control {
      display: flex;
      flex: 1;
      gap: 8px;
    }

    &.switches {
      display: flex;
      gap: 32px;
      flex-wrap: wrap;

      label {
        input[type="checkbox"] {
          width: 20px;
          height: 20px;
        }
        span {
          min-width: 100px;
        }
      }
    }
  }

  input[type="range"] {
    flex: 1;
  }

  input[type="number"] {
    width: 100px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  select {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-width: 150px;
  }

  .custom-cursor-input {
    margin-top: 16px;
    width: 100%;

    textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-family: monospace;
      resize: vertical;
    }
  }
}

.custom-cursor-dot {
  width: 8px;
  height: 8px;
  background: #ff6b81;
  border-radius: 50%;
  box-shadow: 0 0 10px 5px rgba(255, 107, 129, 0.5);
  transition: box-shadow 0.3s ease;
  &--hover {
    box-shadow: 0 0 15px 15px rgba(255, 107, 129, 0.5);
  }
  &--stopped {
    box-shadow: none;
  }
}
.custom-cursor-follower-container {

}
.custom-cursor-follower {
  white-space: nowrap;
  position: absolute;
  right: -120px;
  top: 15px;
  padding: 8px;
  background: #ff6b81;
  opacity: 0.5;
  color: #fff;
  border-radius: 8px;
  font-family: "Arial", sans-serif;
  transition: opacity 0.3s ease;
  &--hover {
    opacity: 1;
  }
  &--stopped {
    opacity: 0.2;
  }
}
</style> 
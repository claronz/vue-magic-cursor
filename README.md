# vue-magic-cursor

a customizable animated cursor for VueJS
**[Demo Github Page](https://claronz.github.io/vue-magic-cursor/)**

## How to use
### Install package
    npm install vue-magic-cursor

### Import and Setup
You can use MagicCursor either as a plugin (globally) or as a component (locally).

#### Option 1: Use as a Plugin (Global)
```javascript
import MagicCursor from 'vue-magic-cursor'
import 'vue-magic-cursor/style.css' // optional feel free to add your own styling

const app = createApp(App)
app.use(MagicCursor)
app.mount('#app')
```

#### Option 2: Use as a Component (Local)
```javascript
import { MagicCursor } from 'vue-magic-cursor'
import 'vue-magic-cursor/style.css' // optional feel free to add your own styling

export default {
  components: {
    MagicCursor
  }
}
```

### Use in Template
```vue
<template>
  <div>
    <MagicCursor />
  </div>
</template>
```

## Configurations
### Custom cursor
The `MagicCursor` component provides a scoped slot with the following props:

- **isStopped**: A boolean indicating whether the cursor is stopped.
- **isHover**: A boolean indicating whether the cursor is hovering over an element.

You may use those values for hover effects, idle effects, etc.

```vue
<MagicCursor>
  <template v-slot:default="{ isStopped, isHover }">
    <div>
      <!-- custom cursor here -->
    </div>
  </template>
  <template #follower
    v-slot:follower="{ isStopped, isHover }"
  >
    <!-- Custom cursor follower here -->
  </template>
</MagicCursor>
```

### Props

The `MagicCursor` component accepts the following props:

| Prop Name         | Type    | Default Value | Description                                                                 |
|-------------------|---------|---------------|-----------------------------------------------------------------------------|
| `cursorVelocity`  | Number  | `0.3`         | The velocity of the cursor movement.                                        |
| `followerVelocity`| Number  | `0.1`         | The velocity of the follower movement.                                      |
| `idleTiming`      | Number  | `1500`        | The time in milliseconds before the cursor is considered idle.              |
| `showFollower`    | Boolean | `true`        | Whether to show the follower cursor.                                        |
| `showCursor`      | Boolean | `true`        | Whether to show the main cursor.                                            |
| `elementsToHover` | Array   | `['a', 'button:not([disabled])', 'input:not([disabled])']` | The elements that trigger hover state. |

### Example Usage

```vue
<template>
  <MagicCursor
    :cursor-velocity="0.5"
    :follower-velocity="0.2"
    :idle-timing="2000"
    :show-follower="true"
    :show-cursor="true"
    :elements-to-hover="['a', 'button', 'input']"
  />
</template>

<script>
import MagicCursor from 'vue-magic-cursor';

export default {
  components: {
    MagicCursor
  }
};
</script>
```
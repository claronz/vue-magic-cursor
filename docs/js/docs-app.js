import { ref } from 'vue'
import CodeSnippet from '@docs/components/CodeSnippet.vue'

export default {
  name: 'DocsApp',
  components: {
    CodeSnippet
  },
  setup() {
    // Configuration controls
    const cursorVelocity = ref(0.3)
    const followerVelocity = ref(0.1)
    const idleTiming = ref(1500)
    const showCursor = ref(true)
    const showFollower = ref(true)
    const customCursor = ref(false)

    return {
      cursorVelocity,
      followerVelocity,
      idleTiming,
      showCursor,
      showFollower,
      customCursor
    }
  }
}
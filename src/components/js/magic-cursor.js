export default {
  name: 'MagicCursor',
  props: {
    cursorVelocity: { type: Number, default: 0.3 },
    followerVelocity: { type: Number, default: 0.1 },
    hideTiming: { type: Number, default: 1500 },
    showFollower: { type: Boolean, default: true },
    showCursor: { type: Boolean, default: true },
    elementsToHover: { type: Array, default: () => ['a', 'button', 'input'] },
    hoverThrottle: { type: Number, default: 500 }
  },
  data () {
    return {
      playing: false,
      idleTimerId: null,
      throttleTimerId: null,
      isStopped: false,
      isHover: false,
      // 
      cursorMouseX: 0,
      cursorMouseY: 0,
      followerMouseX: 0,
      followerMouseY: 0,
      // cursor position
      cursorXPos: 0,
      cursorYPos: 0,
      followerXPos: 0,
      followerYPos: 0,
      
    }
  },
  methods: {
    hoverEnterHandler () {
      this.isHover = true
    },
    hoverLeaveHandler () {
      this.isHover = false
    },
    detectHoverHandler () {
      if (this.elementsToHover.length) {
        const nodes = document.querySelectorAll(this.elementsToHover.join(', '));
        // node effect on hover
        nodes.forEach((node) => {
          // on mouse over set custom class
          node.addEventListener('mouseover', this.hoverEnterHandler)
          // on mouse leave remove custom class
          node.addEventListener('mouseleave', this.hoverLeaveHandler)
        });
      }
    },
    attachHoverHandler () {
      this.throttleTimerId = setInterval(this.detectHoverHandler, this.hoverThrottle);
    },
    attachCursor () {
      const parentComponent = this.$parent.$el
      parentComponent.addEventListener('mousemove', this.moveCursor)
      requestAnimationFrame(this.render)
    },
    moveCursor (e) {
      this.playing = true
      this.isStopped = false
      const clientX = e.clientX;
      const clientY = e.clientY;
      
      if (this.showCursor) {
        const cursor = this.$refs.cursor
        const cursorWidth = cursor.offsetWidth / 2
        const cursorHeight = cursor.offsetHeight / 2
        
        this.cursorMouseX = clientX - cursorWidth;
        this.cursorMouseY = clientY - cursorHeight;
      }
      if (this.showFollower) {
        const follower = this.$refs.follower
        const followerWidth = follower.offsetWidth / 2 
        const followerHeight = follower.offsetHeight / 2
        
        this.followerMouseX = clientX - followerWidth;
        this.followerMouseY = clientY - followerHeight;
      }
      this.hideCursor()
    },
    hideCursor() {
      clearTimeout(this.idleTimerId)
      this.idleTimerId = setTimeout(this.mouseStopHandler, this.hideTiming)
    },
    mouseStopHandler() {
      this.isStopped = true
      this.playing = false
    },
    render () {
      const cursor = this.$refs.cursor
      const follower = this.$refs.follower

      // if cursor enabled
      if (this.showCursor) {
        this.cursorXPos += ((this.cursorMouseX - this.cursorXPos) * this.cursorVelocity)
        this.cursorYPos += ((this.cursorMouseY - this.cursorYPos) * this.cursorVelocity)
        cursor.style.transform = 'translate3d(' + this.cursorXPos + 'px,' + this.cursorYPos + 'px, 0)';
      }

      // if cursor follower enabled
      if (this.showFollower) {
        this.followerXPos += ((this.followerMouseX - this.followerXPos) * this.followerVelocity);
        this.followerYPos += ((this.followerMouseY - this.followerYPos) * this.followerVelocity);
        follower.style.transform = 'translate3d(' + this.followerXPos + 'px,' + this.followerYPos + 'px, 0)';
      }



      requestAnimationFrame(this.render);
    }
  },
  mounted () {
    this.attachCursor()
    this.attachHoverHandler()
  },
  beforeUnmount () {
    clearInterval(this.throttleTimerId)
  }
}
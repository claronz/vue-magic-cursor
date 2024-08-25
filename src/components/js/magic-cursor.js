export default {
  name: 'MagicCursor',
  props: {
    cursorVelocity: { type: Number, default: 0.3 },
    followerVelocity: { type: Number, default: 0.1 },
    idleTiming: { type: Number, default: 1500 },
    showFollower: { type: Boolean, default: true },
    showCursor: { type: Boolean, default: true },
    // elementsToHover: { type: Array, default: () => ['a[href]', 'button:not([disabled])', 'button:not([disabled])'] },
    elementsToHover: { type: Array, default: () => ['a', 'button:not([disabled])', 'input:not([disabled])'] },
    hoverThrottle: { type: Number, default: 500 },
    hoverOutWaitTime: { type: Number, default: 500 }
  },
  data () {
    return {
      parentComponent: null,
      playing: false,
      idleTimerId: null,
      animationId: null,
      throttleTimerId: null,
      isStopped: true,
      isHover: false,
      isDetached: true,
      hoverOutWaitTimerId: null,
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
        const nodes = this.parentComponent.querySelectorAll(this.elementsToHover.join(', '));
        nodes.forEach((node) => {
          node.addEventListener('mouseover', this.hoverEnterHandler)
          node.addEventListener('mouseleave', this.hoverLeaveHandler)
        });
      }
    },
    attachHoverHandler () {
      this.throttleTimerId = setInterval(this.detectHoverHandler, this.hoverThrottle);
    },
    attachCursor () {
      // cancel cursor detach if it is in the process of detaching
      clearTimeout(this.hoverOutWaitTimerId)
      // attach listener to hoverable elements
      this.attachHoverHandler()
      this.parentComponent.addEventListener('mousemove', this.moveCursor)
      this.isDetached && requestAnimationFrame(this.render)
      this.isDetached = false

    },
    detachCursor () {
      this.hoverOutWaitTimerId = setTimeout(() => {
        this.isDetached = true
        clearInterval(this.throttleTimerId)
        cancelAnimationFrame(this.animationId)

        // remove event listener from hoverable elements
        if (this.elementsToHover.length) {
          const nodes = this.parentComponent.querySelectorAll(this.elementsToHover.join(', '));
          nodes.forEach((node) => {
            node.removeEventListener('mouseover', this.hoverEnterHandler)
            node.removeEventListener('mouseleave', this.hoverLeaveHandler)
          });
        }
      }, this.idleTiming);
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
      this.idleTimerId = setTimeout(this.mouseStopHandler, this.idleTiming)
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

      this.animationId = requestAnimationFrame(this.render);
    }
  },
  mounted () {
    this.parentComponent = this.$parent.$el
    this.$parent.$el.addEventListener('mouseenter', this.attachCursor)
    this.$parent.$el.addEventListener('mouseleave', this.detachCursor)
    window.cancelAnimation = () => {
      cancelAnimationFrame(this.animationId)
    }
  },
  beforeUnmount () {
    this.detachCursor()
  }
}
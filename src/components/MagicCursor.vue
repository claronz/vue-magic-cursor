<template>
  <div class="cursor" ref="cursor" v-if="showCursor">
    <slot :is-hover="isHover" :is-stopped="isStopped">
      <div class="cursor__pointer"></div>
    </slot>
  </div>
  <div class="cursor cursor--follower" ref="follower" v-if="showFollower">
    <slot :is-hover="isHover" name="follower" :is-stopped="isStopped">
      <div class="cursor__follower"></div>
    </slot>
  </div>
</template>

<script src="./js/magic-cursor.js"></script>

<style lang="scss" scoped>
  .cursor {
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    transform: translate(-50%, -50%);
    left: 0;
    top: 0;
    &--follower {
      z-index: 9998;
    }
    &__pointer {
      width: 5px;
      height: 5px;
      background-color: #777;
      border-radius: 50%;
    }
    &__follower {
      z-index: 9998;
      width: 40px;
      height: 40px;
      border: solid 1px #333;
      background: transparent;
      border-radius: 50%;
    }
  }
</style>
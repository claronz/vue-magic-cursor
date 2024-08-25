<template>
  <div
    v-if="showCursor"
    ref="cursor"
    class="cursor"
    :class="{ 'cursor--detached': isDetached }"
  >
    <slot :is-hover="isHover" :is-stopped="isStopped">
      <div
        class="cursor__pointer"
        :class="{
          'cursor__pointer--hover': isHover,
          'cursor__pointer--stopped': isStopped
        }"
      ></div>
    </slot>
  </div>
  <div
    v-if="showFollower"
    ref="follower"
    class="cursor cursor--follower"
    :class="{ 'cursor--detached': isDetached }"
  >
    <slot :is-hover="isHover" name="follower" :is-stopped="isStopped">
      <div
        class="cursor__follower"
        :class="{
          'cursor__follower--hover': isHover,
          'cursor__follower--stopped': isStopped
        }"
      ></div>
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
    transition: opacity 0.2s;
    &--detached {
      opacity: 0;
    }
    &--follower {
      z-index: 9998;
    }
    &__pointer {
      width: 5px;
      height: 5px;
      background-color: #777;
      border-radius: 50%;
      transition: all 0.3s;
    }
    &__follower {
      z-index: 9998;
      width: 40px;
      height: 40px;
      border: solid 1px #333;
      background: transparent;
      border-radius: 50%;
      transition: all 0.3s;
      &--hover{
        transform: scale(1.5);
      }
      &--stopped {
        opacity: 0;
      }
    }
  }
</style>
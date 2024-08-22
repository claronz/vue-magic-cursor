<script setup>
  import MagicCursor from '@/components/MagicCursor.vue'
</script>

<template>
  <main>
    <MagicCursor :hide-timing="500">
      <template v-slot:default="{ isStopped, isHover }">
        <div
          :class="{
            'cursor-box': true,
            moving: !isStopped,
            hover: isHover
          }"
        >
        </div>
      </template>
      <template #follower>
        <div class="cursor-box-child"></div>
      </template>
    </MagicCursor>
  </main>
</template>
<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
</style>
<style lang="scss" scoped>
  main {
    width: 100%;
    height: 100vh;
  }
  main,a,button,input{
    cursor: none;
  }
  .cursor-box {
    height: 10px;
    width: 10px;
    background: red;
    position: relative;
    z-index: 9999;
    transition: all 0.3s;
    border-radius: 50%;
    &.moving {
      background: cyan;
    }
    &.hover {
      background: yellow;
    }
  }
  .cursor-box-child {
    height: 20px;
    width: 20px;
    background: blue;
    position: relative;
    z-index: 9998;
    border-radius: 50%;
  }
</style>

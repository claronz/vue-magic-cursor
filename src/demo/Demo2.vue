<script setup>
  import MagicCursor from '@/components/MagicCursor.vue'
</script>

<template>
  <main class="demo2">
    <div class="demo-title">
      Custom Cursor
    </div>
    <MagicCursor>
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
<style lang="scss" scoped>
.demo2 {
  display: flex;
  align-items: center;
  justify-content: center;
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
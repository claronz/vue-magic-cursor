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
        <div class="cursor-box-child">
          custom element
        </div>
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
  background: rgb(205, 255, 26);
  transition: all 0.3s;
  border-radius: 50%;
  &.moving {
    background: rgb(255, 196, 0);
  }
  &.hover {
    background: yellow;
  }
}

.cursor-box-child {
  padding: 5px 10px;
  position: relative;
  top: 20px;
  background: #00aaf8;
  border-radius: 10px;
  font-size: 12px;
  color: white;
}
</style>
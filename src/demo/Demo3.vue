<script setup>
  import MagicCursor from '@/components/MagicCursor.vue'

  const options = {
    elementsToHover: ['button:not([disabled])', '.hoverable']
  }
</script>

<template>
  <main class="demo3">
    <div class="demo-title">
      Hover Elements
    </div>
    <div class="button-container">
      <button>Button</button>
      <button disabled>Disabled Button<span>Not hoverable</span></button>
      <div class="hoverable">this element has hover effect</div>
    </div>
    <MagicCursor v-bind="options"/>
  </main>
</template>

<style lang="scss" scoped>
  button {
    padding: 5px 20px;
    height: 50px;
    background: #ff5b9a;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    span {
      display: block;
      font-size: 10px;
    }
  }
  .demo3 {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .button-container {
      padding: 15px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 10px;
    }
    .hoverable {
      padding: 5px 10px;
      border-radius: 5px;
      color: #ccc;
      // background: #00aaf8;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      &[disabled] {
        opacity: 0.4;
      }
    }
  }
</style>


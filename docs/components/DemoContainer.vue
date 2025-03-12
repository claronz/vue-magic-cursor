<template>
  <div class="demo-container">
    <slot class="demo-content">
  
    </slot>
  </div>
</template>

<style lang="scss" scoped>
  .demo-container {
    height: 300px;
    width: 100%;
    border-radius: 8px;
    border: solid 2px #ccc;
    background: #fcfcfc;
  }

  .demo-content {
    height: 100%;
  }
</style>
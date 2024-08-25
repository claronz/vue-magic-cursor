<script setup>
  import DemoContainer from '@/demo/DemoContainer.vue';
  import Demo1 from '@/demo/Demo1.vue';
  import Demo2 from '@/demo/Demo2.vue';
  import Demo3 from '@/demo/Demo3.vue';
</script>

<template>
  <main class="demo-page">
    <DemoContainer class="demo">
      <Demo1/>
    </DemoContainer>
    <DemoContainer class="demo">
      <Demo2 />
    </DemoContainer>
    <DemoContainer class="demo">
      <Demo3 />
    </DemoContainer>
  </main>
</template>
<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
  main {
    height: 100%;
  }
  main,a,button,input{
    cursor: none !important;
  }
  .demo-title {
    font-size: 24px;
    color: #333;
  }
</style>
<style lang="scss" scoped>
  .demo-page {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    .demo {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>


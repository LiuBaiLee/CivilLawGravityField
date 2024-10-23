<template>
  <div class="body">
    <!-- 扭蛋机本体 -->
    <EggBox></EggBox>
  </div>
</template>

<script>
import EggBox from '@/components/Egg/EggBox.vue'
export default {
  name: 'eggIndex',
  components: {
    EggBox
  }
}
</script>

<style scoped>
  /* 背景 */
  .body {
    width: 100%;
    height: 100vh;
    background-image: url(./images/eggBg.png);
  }
</style>

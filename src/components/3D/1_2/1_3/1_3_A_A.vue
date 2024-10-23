<template>
  <div class="box">
    <communication id="communication" :screenplayContent="screenplayContent"></communication>
  </div>
</template>

<script>
import communication from '@/components/3D/communication.vue'
export default {
  components: { communication },
  data() {
    return {
      
      screenplayContent: `
          接着，王女士向你索求赔偿，你会：
      `
    }
  },
  mounted() {
        setTimeout(() => {
          
          const data = {
            caseToArouter: 'case1_4_A_A_A',
            caseToBrouter: 'case1_4_A_A_B',
            but1: 'A、接受要求，和平解决',
            but2: 'B、认为王女士要求不合理，不接受'
          }

          this.$bus.$emit('chooseNext',data)
        }, 3000);
  }
}
</script>

<style scoped>
    .box{
        width: 100vw;
        height: 100vh;
        background-image: url('@/assets/1_3_A_A.jpg');
    }
</style>
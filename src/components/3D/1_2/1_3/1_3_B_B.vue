<template>
  <div class="box">
    <communication id="communication" :screenplayContent="screenplayContent"></communication>
  </div>
</template>
<script>
import communication from '@/components/3D/communication.vue'
export default {
    components:{communication},
    data() {
      return {
        // 剧情内容
        screenplayContent:`你认为王女士要求不合理，不接受，至此，你有两种选择：`
      }
    },
    mounted() {
      //三秒后出现选择框 
      setTimeout(() => {
        // 传入AB选项路由路径名字(case...)
        const data = {
          caseToArouter: 'case1_4_B_B_A',
          caseToBrouter: 'case1_4_B_B_B',
          but1: 'A、请律师进行诉讼',
          but2: 'B、与王女士协商沟通，和平解决'
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
        background-image: url();
    }
</style>
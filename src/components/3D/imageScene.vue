<template>
  <div class="box">
    <communication class="container" id="communication" :screenplayContent="screenplayContent"></communication>
  </div>
</template>
<script>
import communication from '@/components/3D/communication.vue'
export default {
    components:{communication},
    data() {
      return {
        // 剧情内容
        screenplayContent:``
      }
    },
    mounted() {
      //三秒后出现选择框 
      setTimeout(() => {
        // 传入AB选项路由路径名字(case...)
        const data = {
          caseToArouter: 'case',
          caseToBrouter: 'case',
          but1: '',
          but2: ''
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
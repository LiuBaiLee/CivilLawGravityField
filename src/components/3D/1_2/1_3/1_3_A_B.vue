<template>
  <div class="box">
    <video  @ended="chooseNext" autoplay muted>
        <source src="@/assets/1_3_A_B.mp4" type="video/mp4">
    </video>
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
        screenplayContent:`过了不久,警察上门来找你,	根据监控与目击证人确认是你实施的违法行为，王女士要求你赔偿精神损失费（具体金额），此时你会：	`
      }
    },
    methods: {
    // 视频结束放出选项
    chooseNext(){
        const data = {
            caseToArouter: 'case1_4_A_B_A',
            caseToBrouter: 'case1_4_A_B_B',
            but1: 'A、请律师进行诉讼',
            but2: 'B、与王女士协商沟通，和平解决'
        }
        
        this.$bus.$emit('chooseNext',data)
      }
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
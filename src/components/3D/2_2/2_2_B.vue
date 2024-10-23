<template>
    <div class="box">
        <communication id="communication" :screenplayContent='this.screenplayContent'></communication>
    </div>
</template>

<script>
// 引入对话框
import communication from '@/components/3D/communication.vue'
export default {
    data() {
        return {
            screenplayContent:`
                见死不救的行为被陈二春记录了下来并发布到了短视频平台，舆论的浪潮将你推到了风口浪尖，网络的重拳狠狠砸到了你的身上。此时你发现陈二春已经侵犯了你的名誉权与肖像权，此时你决定：
            `
        }
    },
    components: {
        communication
    },
    mounted() {
      //三秒后出现选择框 
      setTimeout(() => {
        // 传入AB选项路由路径名字(case...)
        const data = {
            caseToArouter: 'case2_3_B_A',
            caseToBrouter: 'case2_3_B_B',
            but1: 'A.起诉陈二春，夺回自己的颜面！', 
            but2: 'B.不起诉，就这样吧...'
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
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('@/assets/2_2_B.jpg');
    }
</style>
<template>
    <div>
        <video  @ended="chooseNext" autoplay muted>
            <source src="@/assets/2_3_A_A.mp4" type="video/mp4">
        </video>
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
            你匆匆垫付了200元医药费后，就去与女朋友约会了。过了几天，徐老太的儿子潘辉联系到你，原来徐老太的伤情出人意料的严重，她的胫骨骨折，即使有医保卡，也要花费两万多元才能置换人造胫骨。潘辉认为是你撞的徐老太，要求你承担徐老太的所有费用，你会：
            `
        }
    },
    components: {
        communication
    },
    methods: {
        // 视频结束放出选项
        chooseNext(){
            const data = {
              caseToArouter: 'case2_4_A_A_A',
              caseToBrouter: 'case2_4_A_A_B',
              but1: 'A.	避免麻烦说自己会承担全部',
              but2: 'B.	据理力争，拒绝承担，并寻找当时的目击证人陈二春'
            }
            
            this.$bus.$emit('chooseNext',data)
        }
    },
}
</script>

<style>
    *{
        padding: 0px;
        margin: 0px;
    }
    communication{
        position: absolute;
    }
    video{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        object-fit: cover; /* 确保视频内容覆盖整个区域 */
    }
</style>



<template>
    <div>
        <video  @ended="chooseNext" autoplay muted>
            <source src="@/assets/2_2_A.mp4" type="video/mp4">
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
                你跑过去并小心翼翼把徐老太扶了起来，并叫来了救护车陪同徐老太前往了医院。因为你还有事情，这时候医生和你说，需要先交200的医药费，否则要等到家属到达才可以，这时候你会选择：
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
                caseToArouter: 'case2_3_A_A',
                caseToBrouter: 'case2_3_A_B',
                but1: 'A.给',
                but2: 'B.不给'
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
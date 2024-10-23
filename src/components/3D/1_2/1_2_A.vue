<template>
    <div>
        <video  @ended="chooseNext" autoplay muted>
            <source src="@/assets/1_2_A.mp4" type="video/mp4">
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
            下楼后，你发现你扔的垃圾吓到了路过的王女士，此时，你会：
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
                caseToArouter: 'case1_3_A_A',
                caseToBrouter: 'case1_3_A_B',
                but1: 'A、主动承认错误',
                but2: 'B、假装无事发生离开'
            }
            
            this.$bus.$emit('chooseNext',data)
        }
    },
}
</script>

<style scoped>
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
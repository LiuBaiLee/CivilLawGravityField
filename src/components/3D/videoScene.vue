<template>
    <div>
        <video  @ended="chooseNext" autoplay muted>
            <source src="../../../../src/assets/1_2.mp4" type="video/mp4">
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
                caseToArouter: 'case',
                caseToBrouter: 'case',
                but1: '', 
                but2: ''
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
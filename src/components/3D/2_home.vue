<template>
    <div>
        <video  @ended="chooseNext" autoplay muted>
            <source src="../../assets/2_home.mp4" type="video/mp4">
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
        某年某月某日，家住燕京的徐老太去83路公交车站乘坐公交车，徐老太走得很慢，她不赶时间，所以也没太注意自己的脚下。没过多久，一辆83路公交车晃晃悠悠地从远方驶来，徐老太看车子来了，不自觉往前面走了几步。
        在徐老太的旁边，有一个叫作陈二春的老头（本案唯一目击证人）陈二春在等车的时候有些走神，等他被一声痛苦的呻吟拉回现实的时候，看到的就是四脚朝天躺在地上的徐老太。此时，准备和女友约会的你刚好从83号公交车上下来，你听到了徐老太的呼喊，你回头望去发现徐老太摔倒了，你会选择：
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
                caseToArouter: 'case2_2_A',
                caseToBrouter: 'case2_2_B',
                but1: 'A.扶',
                but2: 'B.不扶'
            }
            setTimeout(() => {
                this.$bus.$emit('chooseNext',data)
            }, 2000);
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
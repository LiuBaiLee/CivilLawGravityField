<template>
  <endding :enddingContent="enddingContent"></endding>
</template>

<script>
import endding from '@/components/3D/endding.vue'
export default {
    components:{endding},
    data() {
        return {
            enddingContent:`你对长时间的网络暴力不堪重负，最终患上了抑郁症，跳楼自杀...法律也对你进行网络暴力较严重的人进行了制裁（根据《中华人民共和国民法典》第一千一百九十四条规定，网络用户、网络服务提供者利用网络侵害他人民事权益的，应当承担侵权责任。
比如在网络上对他人进行侮辱、恶意曝光隐私等行为侵犯了他人的名誉权、隐私权等民事权利，受害者有权要求施暴者停止侵害、赔礼道歉、赔偿损失等。）`
        }
    },
}
</script>

<style>

</style>
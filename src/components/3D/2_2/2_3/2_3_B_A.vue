<template>
  <endding :enddingContent="enddingContent"></endding>
</template>

<script>
import endding from '@/components/3D/endding.vue'
export default {
    components:{endding},
    data() {
        return {
            enddingContent:`你将陈二春起诉到了当地的法院，最终法官判定陈二春确实侵犯了你的名誉权与肖像权（名誉权主要涉及社会对个人品德、声望、才能、信用等方面的评价。良好的名誉是一个人重要的社会资源，它能为个人带来诸多好处，如在社交、职业发展等方面获得更多机会和尊重。自然人有权决定是否允许他人使用自己的肖像、有权获得因使用肖像而产生的经济利益等。未经本人同意，不得以营利为目的使用他人肖像。比如，商家未经明星同意将其照片用于广告宣传，就侵犯了明星的肖像权。）法院判决了陈二春赔偿你精神损失费3000元。（维护自己合法权益成就）`
        }
    },
}
</script>

<style>

</style>
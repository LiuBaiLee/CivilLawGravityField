<template>
  <endding :enddingContent="enddingContent"></endding>
</template>

<script>
import endding from '@/components/3D/endding.vue'
export default {
    components:{endding},
    data() {
        return {
            enddingContent:`你找到了当时的目击证人陈二春，但因为当时现场比较混乱，唯一的目击证人陈二春也不能确定你到底有没有撞到徐老太。因为双方各执一词，谁也不愿意退一步，徐老太把你告上了法庭。`
        }
    },
}
</script>

<style>

</style>
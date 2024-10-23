<template>
  <endding :enddingContent="enddingContent"></endding>
</template>

<script>
import endding from '@/components/3D/endding.vue'
export default {
    components:{endding},
    data() {
        return {
            enddingContent:`结果：（你向楼下扔垃圾的行为本身是由过错的，而且该行为使王女士受到惊吓，该后果与你直接扔垃圾的行为存在直接的因关系，需要承担王女士的合理精神损失费。）结束。`
        }
    },
}
</script>

<style>

</style>

<template>
  <endding :enddingContent="enddingContent"></endding>
</template>

<script>
import endding from '@/components/3D/endding.vue'
export default {
    components:{endding},
    data() {
        return {
            enddingContent:`最终是我一个人扛下了所有`
        }
    },
}
</script>

<style>

</style>
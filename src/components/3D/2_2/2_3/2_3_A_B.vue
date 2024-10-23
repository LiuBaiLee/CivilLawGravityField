<template>
  <endding :enddingContent="enddingContent"></endding>
</template>

<script>
import endding from '@/components/3D/endding.vue'
export default {
    components:{endding},
    data() {
        return {
            enddingContent:`等了好一会才等到了徐老太的家属们，但是他们十分感谢你并拿出1万元来感谢你的救命之恩（大团圆结局，达成大团圆成就）`
        }
    },
}
</script>

<style>

</style>
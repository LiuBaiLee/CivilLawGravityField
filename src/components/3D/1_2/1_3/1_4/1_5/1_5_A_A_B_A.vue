<template>
  <endding :enddingContent="enddingContent"></endding>
</template>

<script>
import endding from '@/components/3D/endding.vue'
export default {
    components:{endding},
    data() {
        return {
            enddingContent:`结果：（依据《民法典》规定，从建筑物中抛掷物品造成他人损害的，由侵权人依法承担侵权责任。）结束。`
        }
    },
}
</script>

<style>

</style>
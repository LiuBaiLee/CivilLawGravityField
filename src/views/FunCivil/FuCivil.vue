<template>
  <div class="box">
    <!-- 顶部导航 -->
    <HeadTop></HeadTop>
    <!-- 侧导航 -->
    <SideNav></SideNav>
    <LS></LS>
    <SpecoalEffe></SpecoalEffe>
    <PersonIndex></PersonIndex>
    <CaseIndex></CaseIndex>
    <WeridWord></WeridWord>

    <FooterV></FooterV>
  </div>
</template>

<script>
import WeridWord from '@/components/FunCivil/WeridWord.vue'
import PersonIndex from '@/components/FunCivil/PersonIndex.vue'
import LS from '@/components/FunCivil/LS.vue'
import SpecoalEffe from '@/components/FunCivil/SpecoalEffe.vue'
import CaseIndex from '@/components/FunCivil/CaseIndex.vue'
export default {
  name: 'FuCivil',
  components: {
    SpecoalEffe,
    LS,
    PersonIndex,
    CaseIndex,
    WeridWord
  }
}
</script>

<style scoped>
  .box {
    width: 100vw;
    background-image: url(../../assets/bg.png);
  }
</style>

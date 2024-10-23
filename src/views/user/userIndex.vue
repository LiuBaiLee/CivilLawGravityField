<template>
  <div class="body">
    <div class="box">
      <div class="text1 m">我的收藏</div>
      <div class="text2 m">修改昵称</div>
      <div class="text3 m">更换头像</div>
      <div class="text4 m">切换账号</div>
      <div class="text5 m">退出登录</div>
      <div class="text6 m" @click="$router.push('/FuCivil')">退出中心</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'userIndex'
}
</script>

<style scoped>
  .body {
    font-family: '华文中宋';
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/bg.png);
  }
  .box {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(./images/rw.png);
    background-size: cover;
  }
  .m {
    cursor: pointer;
    animation: move 3s linear infinite;
    position: absolute;
    background-image: url(./images/border.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 200px;
    font-size: 19px;
    text-align: center;
    color: #fff;
    transition: all 0.3s;
  }
  .m:hover {
    animation-play-state: paused;
    color: #000;
  }
  @keyframes move {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
  .text1 {
    left: 35vw;
    top: 20vh;
  }
  .text2{
    left: 55vw;
    top:32vh;
  }
  .text3 {
    left: 17vw;
    bottom: 10vh;
}
.text4 {
  bottom: 5vh;
  left: 67vw;
}
.text5 {
  right: 5vw;
  top: 7vh;
}
.text6 {
  right: 10vw;
  bottom: 16vh;
}
</style>
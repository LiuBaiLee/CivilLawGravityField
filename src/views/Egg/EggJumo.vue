<template>
  <div class="body">
    <div class="title">
      <h2>民法大冒险</h2>
    </div>
    <div class="button">
      <div class="bt1 bt" @click="$router.push('/GameSelect')">
        <div class="one iconfont icon-play"></div>
        <div class="two">开始</div>
        <div class="shad"></div>
      </div>
      <div class="bt2 bt" @click="$router.push('/FuCivil')">
        <div class="one iconfont icon-left-arrow"></div>
        <div class="two">退出</div>
        <div class="shad"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EggJump'
}
</script>

<style scoped>
  .body {
    position: relative;
    width: 100vw;
    height: 100vh;
    font-family: '华文行楷';
    background-image: url(./images/gamepg.png);
    background-size: cover;
    background-position: center;
  }
  .title {z-index: 2;
    position: absolute;
    left:10%;
    top: 10vh;
    font-size: 80px;
    color: rgba(0,0,0,0.7);
  }
  h2 {
    font-weight: 600;

  }

  .button {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    left: 20vw;
    bottom: 35vh;
    width: 300px;
    height: 120px;
  }
  .one {
    transition: all 0.8s;
    z-index: 2;
    position: absolute;
    text-align: center;
    line-height: 60px;
    font-size: 28px;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    color: rgba(0,0,0,0.7);
    background-color: rgb(219, 188, 159);
  }
  .bt:hover .one,
  .bt:hover .two{
    color: #000;
  }
  .bt1 {
    cursor: pointer;
    position: relative;
  }
  .bt2 {
    cursor: pointer;
    position: relative;
  }
  .two {
    z-index: 1;
    position: absolute;
    width: 150px;
    height: 50px;
    top: 11px;
    left: 3px;
    border-radius: 40px;
    background-color: rgb(219, 188, 159);
    color: rgba(0,0,0,0.7);
    line-height: 50px;
    padding-left:60px;
    font-size: 28px;
    font-weight: 600;
    transition: all 0.8s;
  }
  .shad {
    position: absolute;
    width: 150px;
    height: 53px;
    background-color:rgba(40,60,70,0.2);
    top: 14px;
    left: -3px;
    border-radius: 35px;
  }
</style>

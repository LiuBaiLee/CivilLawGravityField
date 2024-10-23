<template>
  <div class="body">
    <div class="shell" ref="shell">
    <div class="slide">
      <div class="top">
        <i class="iconfont icon-arrow-up">
          <div class="box"></div>
        </i>
      </div>
      <div class="bottons">
        <div class="botton one">
          <div class="line"></div>
          <span>1</span>
        </div>
        <div class="botton two">
          <div class="line"></div>
          <span>2</span>
        </div>
      </div>
      <div class="bottom">
        <i class="iconfont icon-arrow-down">
          <div class="box"></div>
        </i>
      </div>
    </div>
    <div class="main">
      <h2>民法引力场</h2>
      <div class="shell2">
        <span class="blod"></span>
        <span class="blod"></span>
        <span class="blod"></span>
        <span class="blod"></span>
    </div>
      <div class="banana"></div>
    </div>
    <div class="content">
      <h3>民法引力场</h3>
      <span> 以有趣的方式向你科普民法知识 </span>
      <button @click="$router.push('/home')">GO</button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'JumpIndex',
  mounted () {
    window.addEventListener('wheel', this.whellclass)
  },
  beforeDestroy () {
    window.removeEventListener('wheel', this.whellclass)
  },
  methods: {
    whellclass (event) {
      if (event.wheelDelta > 0) {
        this.$refs.shell.classList.add('up-scroll')
        this.$refs.shell.classList.remove('down-scroll')
      } else if (event.wheelDelta < 0) {
        this.$refs.shell.classList.add('down-scroll')
        this.$refs.shell.classList.remove('up-scroll')
      }
    }
  }
}
</script>

<style scoped>
@keyframes op3 {
    0%{
        opacity: 0;
        transform: translate(0, -30%);
        filter: blur(3px);
    }
    60% {
      opacity: 1;
      transform: translate(0, 5%);
      filter: blur(0px);
    }
    80% {
      opacity: 1;
      transform: translate(0,-3%);
    }
    100%{
        opacity: 1;
        transform: translate(0);
        filter: blur(0);
    }
}
    @keyframes op2 {
    0%{
        opacity: 0;
        transform: translate(0,50px);
    }
    60% {
      opacity: 0.6;
      transform: translate(0, 20px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
    }}
    @keyframes op4 {
    0%{
        opacity: 0;
        transform: translate(0, -95%);
        filter: blur(3px);
    }
    60% {
      opacity: 0.6;
      transform: translate(0, -55%);
      filter: blur(1px);
    }
    100%{
        opacity: 1;
        transform: translate(0,-50%);
        filter: blur(0);
    }
}
    .body {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .shell {
      position: relative;
      width:100vw;
      height: 100vh;
      background: rgb(49, 49, 49);

      box-shadow: 0px 4px 116px 30px rgba(0, 0, 0, 0.25);
      color: #000;
      transition: .2s;
    }

    .slide {
      position: relative;
      left: 30px;
      top: 50%;
      width: 30px;
      transform: translateY(-50%);
      height: 60%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }

    .iconfont {
      font-size: 37px;
      position: relative;
    }

    .box {
      content: '';
      width: 4px;
      height: 100px;
      background: #fff;
      position: absolute;
      display: block;
      left: 50%;
      transform: translateX(-50%);
    }

    .icon-arrow-up .box {
      top: 4px;
    }

    .icon-arrow-down .box {
      bottom: 4px;
    }

    .bottons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 70px;
    }

    .botton {
      width: 18px;
      height: 18px;
      background: #fff;
      border-radius: 50%;
      transition: .3s;
      position: relative;
    }

    .one {
      width: 21px;
      height: 21px;
      background: rgb(49, 49, 49);

      border: 7px solid #fff;
      color: #fff;
    }

    .two span {
      color: #fff;
      opacity: 0;
    }

    .line {
      width: 40px;
      height: 3px;
      background: #fff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 25px;
      border-radius: 10px;
    }

    .two .line {
      background: #fff;
      opacity: 0;
    }

    .botton span {
      position: absolute;
      font-size: 26px;
      top: 50%;
      transform: translateY(-55%);
      left: 70px;
    }

    .main {
      display: flex;
      justify-content: center;
      align-items: center;
      position:absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 650px;
      height: 650px;
    }

    .main h2 {
      animation: op4 1.5s linear;
      position: absolute;
      font: 900 118px '华文中宋';
      letter-spacing: 0.065em;
      z-index: 100;
      color: #eee;
      left: 2%;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      text-shadow: 0 5px 10px rgba(0, 0, 0, 0.5), 0 -2px 1px rgba(0, 0, 0, 0.5);
      transition: .5s;
    }

    .banana {
      position: absolute;
      width: 15vw;
      height: 22vh;
      left: 28vw;
      top: 60vh;
      background-size: contain;
      transition: .5s;
      background-image: url(../../assets/logo.png);
      background-size: cover;
    }

    .content {
      padding-right:30px;
      position: absolute;
      width: 440px;
      height: 130px;
      top: 260px;
      left: 13vw;
      opacity: 0;
      transition: .5s;
      text-shadow: 0 5px 10px rgba(255, 255, 255, 0.2), 0 -2px 1px rgba(255, 255, 255, 0.5);
      color: #000;
    }

    .content h3 {
      font: 700 62px '华文中宋';
      margin-bottom: 35px;

    }

    .content span {
      font: 400 40px '华文中宋';
    }

    button {
      cursor: pointer;
      position: absolute;
      width: 110px;
      height: 46px;
      left: 0%;
      top: 300px;
      border-radius: 12px;
      background-color: #fff;
      border-radius: 10px;
      border: none;
      font-size: 26px;
      color: #000;
      letter-spacing: 3px;
      text-shadow: 0 5px 10px rgba(0, 0, 0, 0.5), 0 -2px 1px rgba(0, 0, 0, 0.5);
      box-shadow:  5px 0 6px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);

    }

    .up-scroll {
      background: rgb(49, 49, 49);

      color: #eee;
    }

    .up-scroll .box {
      background: #fff;
    }

    .up-scroll .one {
      background: rgb(49, 49, 49);

      border: 7px solid #fff;
    }

    .up-scroll .two {
      width: 18px;
      height: 18px;
      background: #fff;
    }

    .up-scroll .one .line {
      opacity: 1;
    }

    .up-scroll .two .line {
      opacity: 0;
    }

    .up-scroll .two span {
      opacity: 0;
    }

    .up-scroll .one span {
      opacity: 1;
    }

    .up-scroll .circle {
      border: 16px solid #fff;
      box-shadow: 0px 0px 30px 20px rgba(255, 255, 255, 0.25) inset, 0px 0px 40px 30px rgba(255, 255, 255, 0.25);

    }

    .up-scroll .banana {
      width: 15vw;
      height: 22vh;
      left: 28vw;
      top: 60vh;
    }

    .up-scroll .main h2 {
      font-size: 118px;
      letter-spacing: 0.065em;
      color: #eee;
    }

    .up-scroll .content {
      opacity: 0;
      top: 260px;
    }

    .down-scroll {
      background-image: url(../../assets/bg.png);

      color: #FFF;
    }

    .down-scroll .box {
      background: #FFF;
    }

    .down-scroll .two {
      background: rgb(152, 153, 155);

      width: 21px;
      height: 21px;
      border: 7px solid #fff;
    }

    .down-scroll .one {
      width: 18px;
      height: 18px;
      background: #fff;
      border: 0;
    }
    .down-scroll .two .line {
      opacity: 1;
    }

    .down-scroll .two span {
      opacity: 1;
    }

    .down-scroll .one span {
      opacity: 0;
    }

    .down-scroll .one .line {
      opacity: 0;
    }
    .down-scroll .main {
      left: 75vw;
    }
    .down-scroll .banana {
      width: 10vw;
      height: 15vh;
      left: -41vw;
      top: 62vh;
    }
    .down-scroll .main h2 {
      font-size: 118px;
      color: #000;
    }

    .down-scroll .content {
      opacity: 1;
      top: 160px;
    }
    .shell2 {
      right: 0;
      translate:all 1.2s;
            display: grid;
          position: relative;
            animation:op3 2s linear, spin infinite 5s linear;
        }
        .blod {
          transition: all 1.2s;
            --boreder-radius:115% 140% 145% 110% / 125% 140% 110% 125%;
            aspect-ratio: 1;
            display: block;
            grid-area: stack;
            background-repeat: no-repeat;
            background-position: center;
            border:80px solid transparent;
            border-radius: var(--boreder-radius,50%);
            mask-image: linear-gradient(transparent,transparent),
            linear-gradient(black,white);
            mask-clip: padding-box,border-box;
            mask-composite: intersect;
            mix-blend-mode: screen;
            height: 680px;
            filter: blur(100px);
        }
        .blod:nth-child(1) {
            background-color: rgb(150,150,150);
            background-image: linear-gradient(rgb(150,150,150),#000,rgb(150,150,150));
            rotate: 30deg;
            scale: 1.03;
        }
        .blod:nth-child(2){

            background-color: #eee;
            background-image: linear-gradient(#eee,#000,#eee);
            rotate: 60deg;
            scale: 0.95;
        }
        .blod:nth-child(3){
            background-color: #000;
            background-image: linear-gradient(#000,#eee,#000);

            rotate: 90deg;
            scale: 0.97;
        }
        .blod:nth-child(4){
            background-color: rgb(30,30,30);
            background-image: linear-gradient(rgb(30,30,30),rgb(50,50,50),rgb(30,30,30));

            rotate: 120deg;
            scale: 1.02;
        }
        @keyframes spin {
            from {
                rotate: 0deg;
            }
            to {
                rotate: 360deg;
            }
        }
</style>

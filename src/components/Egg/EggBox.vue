<template>
  <div class="box">
    <div class="get" @click="$router.push('/GameSelect')">
        <i class="iconfont icon-left-arrow"></i>
      </div>
    <div class="txs2">
      <div class="ts2">
      <div class="r"></div>
        <div class="txt">欢迎进入民法事务所<br>通过扭蛋机决定你要处理的民法事务<br>如不喜欢可以选择再次扭蛋</div>
      </div>
  </div>
      <div class="ballx m"></div>
      <div class="bally m"></div>
    <!-- 扭蛋机本体 -->
    <div class="egg" >
      <!-- ballBox把球包住 -->
      <div class="ballBox" ref="ballBox">
        <!-- 10个球 -->
        <li class="ball ball1"></li>
        <li class="ball ball2"></li>
        <li class="ball ball3"></li>
        <li class="ball ball4"></li>
        <li class="ball ball5"></li>
        <li class="ball ball6"></li>
        <li class="ball ball7"></li>
        <li class="ball ball8"></li>
        <li class="ball ball9"></li>
        <li class="ball ball10"></li>
      </div>
      <!-- 按钮 -->
      <button @click="RequireCase" class="eggBtn" ref="eggBtn"></button>

    </div>

    <!-- 选择弹窗 -->
    <dialog ref="pop" id="pop">
        <div class="animate__animated animate__fadeInUp">
            <h1>主题</h1>
            <h1>{{this.title[this.randomCaseNumb]}}</h1>
            <div class="butbox">
              <button @click="entercase">进入</button>
              <button onclick="pop.close()">重新选择</button>
            </div>
        </div>
    </dialog>
    
  </div>
</template>

<script>
import http from '../http.js'
// import userCenter from '../userCenter.vue'
export default {
  name: 'EggBox',
  data () {
    return {
      // 收藏键是否点亮 1：点亮 2：不点亮
      tuck: 2,
      // 定时器
      time: null,
      time2: null,
      isVisible: false,
      randomCaseNumb: 0,
      title: [
        '第0项',
        '高空抛物',
        '扶?不扶?'
      ]
    }
  },
  components: {
    // userCenter
  },
  mounted () {
    // 按钮
    const btn = this.$refs.eggBtn
    // 蛋
    const ball = this.$refs.ballBox.querySelectorAll('.ball')
    btn.addEventListener('click', () => {
      this.tuck = 2
      btn.disabled = true
      // 开启扭蛋动画
      ball.forEach((item) => {
        item.style.animationPlayState = 'running'
      })
      // 开启定时器设置扭蛋结果3秒后出现
      this.time = setTimeout(() => {
        // 禁用按钮
        btn.disabled = false
        // 关闭动画
        ball.forEach((item) => {
          item.style.animationPlayState = 'paused'
        })
      }, 3000)
    })
  },
  methods: {
    http,
    RequireCase(){
      this.createRandomCase()
      this.$refs.pop.show()
    },
    createRandomCase(){
      // 生成一个介于 min 和 max 之间的随机数
      this.randomCaseNumb = Math.floor(Math.random()*2)+1;
    },
    // 选择剧情
    entercase(){
      this.$router.push({name: `case${this.randomCaseNumb}_home`})
    }
  },
}
</script>

<style scoped>
.box {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(./images/eggbg.png);
  background-size: cover;
}
    /** 弹窗 **/
    #pop{
      margin: auto;
      width: 200px;
      height: 200px;
      margin-top: 250px;
      border: 0px;
      border-radius: 10px; 
      padding: 20px; 

      background: rgba(255, 255, 255, 0.2); /* 背景颜色和透明度 */
      backdrop-filter: blur(10px); /* 背景模糊效果 */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
    }
    #pop h1{
      text-align: center;
    }
    .butbox{
      display: flex;
      justify-content: space-around;
      position: relative;top: 50px;
    }
    .butbox button{
      width: 100px;
      height: 30px;
      border: 1px solid gray;
      background-color: transparent;
    }
    .butbox button::before {
      content: '';
      z-index: -100;
      width: 1%;
      height: 100%;
      position: absolute;
      top: 0;
      background-color: #ff5964;
    }
    .butbox button:nth-child(1)::before {
      left: 0;
    }

    .butbox button:nth-child(2)::before {
      right: 0;
    }

    .butbox button:hover::before {
      animation: filling 0.3s ease-in 0.1s forwards;
    }


    @keyframes filling {
      100% {
        width: 50%;
      }
    }

/* 扭蛋机大盒子 */
    .egg {
      position: absolute;
      top: 58%;
      left: 65%;
      transform: translate(-50%,-50%);
      width: 420px;
      height: 570px;
      background: url(./images/egg.png) no-repeat 50% 50%;
      background-size: cover;
    }
    /* 按钮 */
    .eggBtn {
      cursor: pointer;
      position: absolute;
      border-radius: 30px;
      border: 0;
      bottom: 98px;
      left: 50%;
       transform: translateX(-50%);
      background: url(./images/eggBtn.png) no-repeat 50% 50%;
      background-size: cover;
      width: 70px;
      height: 70px;
    }
    /* 装蛋的盒子 */
    .ballBox {
      position: relative;
      width: 330px;
      height: 330px;
      border-radius: 165px;
      margin: 60px 50px;
    }
    .ball {
      position: absolute;
      box-shadow: inset 0px 10px 12px 3px rgba(255,255,255,0.4),
      inset 0 -10px 8px 3px rgba(0, 0, 0, 0.3);
    }
    @keyframes mode1{
      20% {
        transform: translate(-100px,-70px);
      }
      35% {
        transform: translate(40px,-40px);
      }
      50% {
        transform: translate(-10px,-5px);
      }
      70% {
        transform: translate(40px,-40px);
      }
      90% {
        transform: translate(-100px,-30px);
      }
      100% {
        transform: translate(0,0);
      }
    }
     @keyframes mode2{
      20% {
        transform: translate(-30px,-120px);
      }
      35% {
        transform: translate(-3px,-30px);
      }
      50% {
        transform: translate(4px,-70px);
      }
      70% {
        transform: translate(2px,-10px);
      }
      90% {
        transform: translate(-5px,-60px);
      }
      100% {
        transform: translate(0,0);
      }
    }
    @keyframes mode3{
      30% {
        transform: translate(-170px,-100px);
      }
      50% {
        transform: translate(50px,-60px);
      }
      70% {
        transform: translate(-90px,5px);
      }
      90% {
        transform: translate(10px,-4px);
      }
      100% {
        transform: translate(0,0);
      }
    }
   @keyframes mode4{
      20% {
        transform: translate(-50px,-40px);
      }
      35% {
        transform: translate(40px,-80px);
      }
      50% {
        transform: translate(-50px,-5px);
      }
      70% {
        transform: translate(5px,-40px);
      }
      90% {
        transform: translate(-100px,-30px);
      }
      100% {
        transform: translate(0,0);
      }
    }
    @keyframes mode6{
      15% {
        transform: translate(-30px,-50px);
      }
      35% {
        transform: translate(110px,-40px);
      }
      50% {
        transform: translate(90px,3px);
      }
      70% {
        transform: translate(-50px,10px);
      }
      90% {
        transform: translate(30px,-30px);
      }
      100% {
        transform: translate(0,0);
      }
    }
    @keyframes mode5{
      15% {
        transform: translate(-80px,50px);
      }
      20% {
        transform: translate(-70px,60px);
      }
      30% {
        transform: translate(-80px,40px);
      }
      40% {
        transform: translate(-50px,60px);
      }
      60% {
        transform: translate(-80px,50px);
      }
      80% {
        transform: translate(-70px,60px);
      }
      100% {
        transform: translate(0,0);
      }
    }@keyframes mode7{
      10% {
        transform: translate(30px,10px);
      }
      35% {
        transform: translate(80px,-20px);
      }
      50% {
        transform: translate(20px,10px);
      }
      70% {
        transform: translate(40px,-20px);
      }
      90% {
        transform: translate(10px,10px);
      }
      0% {
        transform: translate(0,0);
      }
    }@keyframes mode8{
      30% {
        transform: translate(80px,-70px);
      }
      50% {
        transform: translate(-10px,-5px);
      }
      70% {
        transform: translate(40px,-40px);
      }
      90% {
        transform: translate(20px,-30px);
      }
      0% {
        transform: translate(0,0);
      }
    }@keyframes mode9{
      10% {
        transform: translate(30px,-20px);
      }
      35% {
        transform: translate(-90px,10px);
      }
      50% {
        transform: translate(-10px,-5px);
      }
      70% {
        transform: translate(30px,-60px);
      }
      90% {
        transform: translate(-100px,10px);
      }
      0% {
        transform: translate(0,0);
      }
    }@keyframes mode10{
      20% {
        transform: translate(-180px,-40px);
      }
      50% {
        transform: translate(-10px,-5px);
      }
      70% {
        transform: translate(10px,-30px);
      }
      90% {
        transform: translate(-30px,5px);
      }
      0% {
        transform: translate(0,0);
      }
    }
    .ball1 {
      animation: mode1 3s linear;
      left: 40%;
      bottom: 10px;
      width: 60px;
      height: 60px;
      border-radius: 30px;
      background-color: rgb(211, 170, 140);
    }
    .ball2 {
      animation: mode2 3s linear;
      position: absolute;
      left: 80px;
      bottom: 15px;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: rgb(246, 191, 155);
    }
    .ball3 {
      animation: mode3 3s linear;
      position: absolute;
      right: 80px;
      bottom: 10px;
      width: 70px;
      height: 70px;
      border-radius: 35px;
      background-color: rgb(248, 192, 119);

    }
    .ball4 {
      animation: mode4 3s linear;
      position: absolute;
      right: 50px;
      bottom: 40px;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background-color: rgb(210, 152, 56);
    }
    .ball5 {
      animation: mode5 3s linear;
      position: absolute;
      right:80px;
      bottom: 70px;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background-color: rgb(241, 164, 113);
    }.ball6 {
      animation: mode6 3s linear;
      position: absolute;
      left: 80px;
      bottom: 50px;
      width: 80px;
      height: 80px;
      border-radius: 40px;
      background-color: rgb(211, 170, 140);

    }
    .ball7 {
      animation: mode7 3s linear;
      position: absolute;
      left: 70px;
      bottom: 30px;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background-color: rgb(236, 133, 107);
    }.ball8 {
      animation: mode8 3s linear;
      position: absolute;
      left: 30px;
      bottom: 50px;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background-color: rgb(194, 86, 53);
    }.ball9 {
      animation: mode9 3s linear;
      position: absolute;
      right: 90px;
      bottom: 30px;
      width: 80px;
      height: 80px;
      border-radius: 40px;
      background-color:rgb(205, 120, 99);
    }.ball10 {
      animation: mode10 3s linear;
      position: absolute;
      right: 20px;
      bottom: 70px;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background-color: rgb(246, 191, 155);
    }
    .ball {
      animation-iteration-count: infinite;
      animation-play-state: paused;
    }
    .get {
  cursor: pointer;
  position: absolute;
  left:  3vw;
  top: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 40px;
  font-size: 26px;
}
.get i {
  box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);
/* color: #fff; */
width: 50px;
height: 50px;
font-size: 30px;
line-height: 50px;
  border-radius: 50%;
  text-align: center;
background-color: rgb(153, 127, 101);
  font-weight: 900;
  color: rgb(219, 188, 159)
}
.txt {
  font-size: 28px;
  text-align: center;
  padding-top: 19px;
}
@keyframes m {
  0% {
    transform: translate(-50%,-50%);
  }
  50%{
    transform: translate(-50%,-44%)
  }
  100% {
    transform: translate(-50%,-50%);
  }
}
.txs2{
  animation: m 2s linear infinite;
  position: absolute;
  top: 45%;
  left: 32%;
  transform: translate(-50%,-50%);
  width: 390px;
  height: 260px;
  border-radius: 20px;
  background-color: rgb(123, 59, 30);
}
.ts2{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 360px;
  height: 230px;
  background-color: rgb(219, 188, 159);
  border-radius: 18px;
  font-family: '华文隶书';
  z-index: 99;
}
.r {
      z-index: 1;
      position: absolute;
      top:-195px;
      left: 50%;
      transform: translateX(-50%);
      width: 250px;
      height: 180px;
      background-image: url(./images/r.png);
      background-size: contain;
      background-repeat: no-repeat;
    }
    .ballx {
      position: absolute;
      right: 22vw;
      bottom: 18.5vh;
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: rgb(123, 62, 33);
      box-shadow: inset 0px 3px 5px rgba(255,255,255,0.4),
      inset 0 -3px 2px 3px rgba(0, 0, 0, 0.3);
    }
    .bally {
      position: absolute;
      right: 19vw;
      bottom: 18.5vh;
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: rgb(205, 120, 99);
      box-shadow: inset 0px 3px 5px rgba(255,255,255,0.4),
      inset 0 -3px 2px 3px rgba(0, 0, 0, 0.3);
    }
</style>

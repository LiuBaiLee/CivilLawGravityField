<template>
  <div id="main">
    <div id="section">
      <div id="drawerboxes">
        <div class="drawerbox active">
          <button class="btn active" ref="bt" @click="slideTo(1)">趣味民法</button>
        </div>
        <div class="drawerbox active">
          <button class="btn active" ref="bt" @click="slideTo(2)">民法典资讯</button>
        </div>
        <div class="drawerbox active">
          <button class="btn active" ref="bt" @click="slideTo(3)">民法大冒险</button>
        </div>
        <div class="drawerbox active">
          <button class="btn active" ref="bt" @click="slideTo(4)">AI民法问答</button>
        </div>
      </div>
    </div>
    <div id="slidesection">
      <div id="slide-bar">
        <div id="bar"></div>
      </div>
      <div id="cardsection">
        <div id="card1" class="card">
          <div class="small-title">民法引力场</div>
          <div class="title" ><span>趣味民法</span><div @click="$router.push('/FuCivil')" class="a iconfont icon-shou1"></div></div>
          <div class="content">欢迎进入“趣味民法”，这里是您获取民法知识视频、案例分析、民法经典人物和趣味抽卡的一站式资源库。我们的目标是为您提供最新、最全面的民法信息，帮助您更好地理解民法，保护您的权利</div>
          <div class="img">
            <img src="./img/sopg1.jpg" alt="">
          </div>
        </div>
        <div id="card2" class="card">

          <div class="small-title">民法引力场</div>
          <div class="title" ><span>民法典资讯</span><div @click="$router.push('/CivilCode')" class="a iconfont icon-shou1"></div></div>
          <div class="content">欢迎进入“民法典资讯”，在这里，本页面将带您走进民法典的世界，我们不仅分享民法典条文，还讲述创建民法典背后的故事及它的前世今生</div>
          <div class="img">
            <img src="./img/sopg2.jpg" alt="">
          </div>
        </div>
        <div id="card3" class="card">
          <div class="small-title">民法引力场</div>
          <div class="title" ><span>民法大冒险</span><div @click="$router.push('/EggJumo')" class="a iconfont icon-shou1"></div></div>
          <div class="content">欢迎进入“民法大冒险”，在这里，民法不再是枯燥的条文，而是一场场引人入胜的冒险。本次冒险中，您将有机会扮演当事人或者法官，您的每一次选择将直接影响结局，亲身体验民法在生活中的影响</div>
          <div class="img">
            <img src="./img/sopg3.jpg" alt="">
          </div>
        </div>
        <div id="card4" class="card">
          <div class="small-title">民法引力场</div>
          <div class="title" ><span>AI民法问答</span><div @click="$router.push('/AIIndex')" class="a iconfont icon-shou1"></div></div>
          <div class="content">欢迎进入“AI民法问答”，如果你存在民法相关问题，AI民法问答将为你快速正确的解答</div>
          <div class="img">
            <img src="./img/sopg4.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
      chosenSlideNumber: 1, // 当前选择的幻灯片编号
      offset: 0, // 幻灯片偏移量
      barOffset: 0 // 导航条偏移量

    }
  },
  methods: {
    slideTo (slideNumber) {
      // 更新偏移量
      const previousSlideNumber = this.chosenSlideNumber
      this.chosenSlideNumber = slideNumber
      this.offset += (this.chosenSlideNumber - previousSlideNumber) * (-100) // 计算幻灯片偏移量
      this.barOffset += (this.chosenSlideNumber - previousSlideNumber) * (100) // 计算导航条偏移量
      this.barSlide(this.barOffset) // 移动导航条
      // 获取所有幻灯片，为每个幻灯片设置偏移量
      const slides = document.querySelectorAll('.card')
      Array.from(slides).forEach(slide => {
        slide.style.transform = `translateY(${this.offset}%)`
      })
    },
    barSlide (barOffset) {
      const bar = document.querySelector('#bar')
      bar.style.transform = `translateY(${barOffset}%)`
    }
  }
}
</script>

<style scoped>
.a:hover {
  color: rgba(0,0,0,0.8);
}
.bgc {
  background-color:rgb(188, 188, 188);
}
.a {
  cursor: pointer;
  width: 72px;
  height: 72px;
  margin-left: 3vw;
  border-radius: 36px;
  background-color: #eee;
  box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 1px 20px rgba(0,0,0,0.3);
  text-align: center;
  line-height: 72px;
  color: rgba(0,0,0,0.3);
  font-size: 30px;
}
@keyframes op {
    0%{
        opacity: 0;
        transform: translate(-100px,0);
        filter: blur(4px);
    }
    60% {
      opacity: 0.6;
      transform: translate(-40px,0);
      filter: blur(1px);
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
        transform: translate(60px,0);
        filter: blur(4px);
    }
    60% {
      opacity: 0.6;
      transform: translate(20px, 0);
      filter: blur(1px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
        filter: blur(0);
    }
}
  #main {
    background-image: url(./img/bg.png);
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

    #section {
      width: 35%;
      height: 100%;
      padding: 20px 0;
      position: relative;
    }
    #drawerboxes {
      animation: op 1s linear;
      margin-left: 10%;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    #drawerboxes::before {
      content: "";
      width: 8px;
      height: 94%;
      position: absolute;
      left: -10px;
      top: 3%;
      z-index: 120;
    }

    .drawerbox {
      height: calc(100% / 5.5);
      width: 70%;
      position: relative;
      z-index: 100;
      transform: translateX(-70%);
      transition: transform .5s ease-in-out;
    }

    .drawerbox.active {
      transform: translateX(0);
    }
    .drawerbox:hover .btn.active{
      background-image: linear-gradient(to right,rgb(188,188,188),rgb(188,188,188));
    }
    .btn {
      width: 100%;
      height: 100%;
      font: 800 30px '';
      background-color: rgb(40,40,40,0.1);
      /* background-color: rgb(175, 190, 255); */
      border: none;
      transition: background-color .5s ease-in-out;
      color: #ffffff00;
    }

    .btn.active {
      background-image: linear-gradient(to right,rgba(188, 188, 188,0.4),rgb(255,255,255));
      background-size: cover;
      color: #000;
    }

    .btn:hover {
      cursor: pointer;
    }
    #slidesection {
      animation: op2 1s linear;
      position: relative;
      height: 100%;
      width: 65%;
      display: flex;
      justify-content: center;
      padding: 0 40px;
      background-size: cover;
      background: linear-gradient(to right bottom,
          rgba(236, 236, 236),
          rgba(255, 255, 255),
          rgba(219, 219, 219));
      backdrop-filter: blur(11px);
    }

    #slide-bar {
      position: absolute;
      top: 10%;
      left: 40px;
      height: 80%;
      width: 1px;
      background-color: rgb(223, 223, 223);
    }

    #bar {
      position: absolute;
      height: calc(100% / 4);
      width: 5px;
      top: 0;
      left: -1.2px;
      background-color: rgba(10,10,10,0.2);
      /* background-color: rgb(175, 190, 255); */
      transition: transform .5s ease-in-out;
    }

    #cardsection {
      height: 100%;
      width: 80%;
      overflow: hidden;
    }

    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      padding: 10% 0;
      color: white;
      font-size: 30px;
      transition: transform .5s ease-in-out;
    }

    .small-title {
      font-size: 30px;
      font-weight: 600;
      padding-bottom: min(5%, 10px);
      color: #000;
      /* color: rgb(70, 100, 180); */
    }

    .title {
      display: flex;
      align-items: center;
      cursor:default;
      position: relative;
      font-size: 80px;
      font-weight: 700;
      padding-bottom: min(20%, 40px);
      color: #000;
      /* color: rgb(70, 100, 180); */
    }
    /* .title::after {
      cursor: pointer;
      position: absolute;
      right: 80px;
      top: -20px;
      content: '点击这里进入哦';
      font-size: 18px;
      width: 150px;
      height: 40px;
      background-color: #fff;
      border-top-left-radius:-10px ;
    } */
    .content {
      font-size: 24px;
      font-weight: 400;
      color: #000;
      /* color: rgb(94, 123, 255); */
      margin-bottom: 30px;
    }

    .img {
      width: 100%;
      height: 400px;
      overflow: hidden;
    }
    .img img {
      object-fit: cover;
      width: 100%;
      height: 400px;
    }
</style>

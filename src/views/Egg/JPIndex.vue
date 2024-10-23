<template>
  <div class="body">
    <div class="get" @click="$router.go(-1)">
        <i class="iconfont icon-left-arrow"></i>
      </div>
    <div class="title">民法碎片</div>
    <div class="shell">
        <ul class="images">
            <li class="img" @click="$router.push(`/JigsaePuzzle?text=0`)">
            <div class="m"></div>
            <div class="text">民法典</div></li>
            <li class="img" @click="$router.push(`/JigsaePuzzle?text=1`)"><div class="m"></div><div class="text">獬豸</div></li>
            <li class="img"  @click="$router.push(`/JigsaePuzzle?text=2`)"><div class="m"></div><div class="text">民法法庭</div></li>
            <li class="img"  @click="$router.push(`/JigsaePuzzle?text=3`)"><div class="m"></div><div class="text">獬豸</div></li>
            <li class="img"  @click="$router.push(`/JigsaePuzzle?text=4`)"><div class="m"></div><div class="text">獬豸</div></li>
        </ul>
        <div class="button">
            <div class="button-left iconfont icon-left-arrow" @click="leftclick"></div>
            <div class="button-right iconfont icon-youjiantou" @click="rightclick"></div>
        </div>
    </div>
    <div class="s">
      <div class="iconfont icon-dianji"></div>
      <span class="word">点击开始游戏</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'JPIndex',
  data () {
    return {
      index: 0,
      time: null
    }
  },
  mounted () {
    // this.timer()
  },
  methods: {
    position () {
      const images = document.querySelector('.images')
      images.style.left = (this.index * -567.5) + 'px'
      console.log(this.index)
    },
    add () {
      if (this.index >= 3) {
        this.index = -1
      } else {
        this.index++
      }
    },
    desc () {
      if (this.index < 0) {
        this.index = 3
      } else {
        this.index--
      }
    },
    // timer () {
    //   this.time = setInterval(() => {
    //     this.index++
    //     this.desc()
    //     this.add()
    //     this.position()
    //   }, 3000)
    // },
    leftclick () {
      this.desc()
      this.position()
      clearInterval(this.time)
      // this.timer()
    },
    rightclick () {
      this.add()
      this.position()
      clearInterval(this.time)
      // this.timer()
    }
  }
}
</script>

<style scoped>
.body{
  background-image: url(./images/bg.jpg);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100vw;
            font-family: '华文隶书';
        }
        .title {
          position: absolute;
          left: 50%;
          top: 10vh;
          transform: translateX(-50%);
          font-size: 40px;
        }
        .shell {
            width: 100%;
            height: 300px;
            position:absolute;
            left: 50%;
            top: 47%;
            transform: translate(-50%,-50%);
            border-radius: 5px;
        }

        .images {
            width: 2570px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            position: absolute;
            align-items: center;
            left: 0;
            transition: .2s;
        }

        .img{
          z-index: 3;
          position: relative;
          cursor: pointer;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background-size: cover;
            background-image: url(./JPimg/pt2.jpg);
            background-position: center;
            background-repeat: no-repeat;
            transition: all 0.8s;
          }
          .img::after {
            content: '';
            position: absolute;
            left: 0;
            top:0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            transition: all 0.8s;
            background-color: rgba(0,0,0,0.2);
          }
          .img:hover::after {
            opacity: 0;
          }
          .img:hover {
            transform: scale(1.1)
          }
        .img:nth-child(1){
          background-image: url(./JPimg/pt1.jpg);
        }
        .img:nth-child(3){
          background-image: url(./images/pj.jpg);
        }
.m {
  z-index: 2;
  position: absolute;
  width: 340px;
  height: 340px;
  top: 50%;
left: 50%;
border-radius: 50%;
transform: translate(-50%,-50%);
border: 20px solid rgba(0,0,0,0.4);
box-shadow: 0 0 50px rgba(0,0,0,0.8);
}
        .button-left,
        .button-right {
            font-size: 50px;
            cursor: pointer;
            cursor: pointer;
            transform: translateY(-50%);
  position: absolute;
  width: 64px;
  height: 64px;
  text-align: center;
  line-height: 53px;
  font-size: 40px;
  border-radius: 50%;
color:rgb(219, 188, 159);
        }
        .button-left{
          left:30vw;
          top: 50%;

        }
        .button-right {
          right: 30vw;
          top:50%;
        }
        .text {
          position: absolute;
          bottom: -80px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 32px;
        }
        .s {
          cursor: default;
          display: flex;
          flex-direction: column;
          position: absolute;
          align-items: center;
          justify-content: space-between;
          bottom: 5vh;
          left: 50%;
          transform: translateX(-50%);
        }
        @keyframes move {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .s .iconfont {
          animation: move 2s linear infinite;
          font-size: 25px;
        }
        .s span {
          font-size: 20px;
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

</style>

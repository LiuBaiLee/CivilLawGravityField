<template>
  <div class="body">
    <div class="title">民法大冒险</div>
    <div class="get" @click="$router.push('/EggJumo')">
        <i class="iconfont icon-left-arrow"></i>
      </div>
        <ul class="images" ref="ul">
            <li class="img imgclick" @click="j(0)">
            <div class="m"></div>
            <div class="m2"></div>
            <div class="text">

            <div class="t">以互动游戏的方式带你学习民法</div><h2>事务所</h2></div></li>
            <li class="img" @click="j(1)"><div class="m"></div><div class="m2"></div><div class="text">

              <div class="t">将民法碎片拼接上去</div><h2>民法碎片</h2></div></li>
            <li class="img" @click="j(2)"><div class="m"></div><div class="m2"></div><div class="text">

              <div class="t">我们正在开发中</div><h2>敬请期待</h2></div></li>
        </ul>
        <div class="bt" @click="jump">
          开始冒险
        </div>
  </div>
</template>

<script>
export default {
  name: 'GameSelect',
  data () {
    return {
      f: 0
    }
  },
  methods: {
    j (index) {
      this.f = index
      const li = this.$refs.ul.querySelectorAll('li')
      li.forEach((item, id) => {
        item.classList.remove('imgclick')
        if (index === id) {
          item.classList.add('imgclick')
        }
      })
    },
    jump () {
      if (this.f === 0) {
        this.$router.push('/egg')
      } else if (this.f === 1) {
        this.$router.push('/JPIndex')
      }
    }
  }
}
</script>

<style scoped>
.body {
  width: 100vw;
  height: 100vh;
  background-image: url(./images/bg.jpg);
  display: flex;
            justify-content: center;
            align-items: center;
            font-family: '华文隶书';
}

        .images {
          padding: 0 150px;
            width: 100vw;
            height: 50vh;
            display: flex;
            justify-content: space-between;
            position: absolute;
            align-items: center;
            left: 0;
            transition: .2s;
        }
        .imgclick {
          transform: translateY(0);
        }
        .img{
          transition: all 0.4s;
          transform: translateY(-15px);
          z-index: 3;
          position: relative;
          cursor: pointer;
            width: 250px;
            height: 250px;
            border-radius: 50%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
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
            background-color: rgba(0,0,0,0.5);
          }
          @keyframes move {
            0% {
              transform: scale(1.1) translate(0,-40px);
            }
            50% {
              transform:  scale(1.1) translate(0,-30px);
            }
            100% {
              transform: scale(1.1) translate(0,-40px);
            }
          }
          .imgclick::after {
            opacity: 0;
          }
          .imgclick .m {
            border: 0;
            box-shadow:0 0 40px rgb(219, 188, 159)
            ;
            width: 100%;
            height: 100%;
          }
          .imgclick {
            animation: move 1.8s infinite linear;
            transform: scale(1.1) ;
          }
        .img:nth-child(1){
          background-image: url(./images/jump1.png);
        }
        .img:nth-child(2){
          background-image: url(./images/jump2.png);
        }
        .img:nth-child(3){
          background-image: url(./images/jump3.png);
        }
        .m2 {
          z-index: -1;
  position: absolute;
  width: 130%;
  height:130%;
  top: 50%;
left: 50%;
border-radius: 50%;
transform: translate(-50%,-50%);
border: 0.5px solid rgba(0,0,0,0.2);
        }
        .m {
  z-index: 2;
  position: absolute;
  width: 106%;
  height:106%;
  top: 50%;
left: 50%;
border-radius: 50%;
transform: translate(-50%,-50%);
border: 0.5px solid rgba(0,0,0,0.2);
}
.title {
          position: absolute;
          left: 50%;
          top: 10vh;
          transform: translateX(-50%);
          font-size: 40px;
        }
        .text {
          z-index: 1;
          position: absolute;
          display: flex;
          justify-content: space-between;
          top: 0;
          right: -120px;
          transform: translateX(-50%);
          font-size: 15px;
          height: 150px;
          width: 60px;
        }
        .t {
          padding-top: 20px;
          font-size: 17px;
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
.bt {
  cursor: pointer;
  position: absolute;
  font-size: 27px;
  left:50%;
  transform: translateX(-50%);
  color: gray;
  bottom: 15vh;
  background-color: rgb(219, 188, 159);
  border: 3px solid rgb(149, 61, 38);
  box-shadow:0 0 5px rgb(149, 61, 38);
  border-radius: 10px;
  padding: 3px 20px;
  transition: all 0.5s;
}
.bt:hover {
  color: #000;
}
</style>

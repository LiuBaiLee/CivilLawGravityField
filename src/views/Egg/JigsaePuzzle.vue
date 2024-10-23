<template>
  <div class="body">
    <div class="drag">
    <div class="drgBox" >
      <img class="images" data-i = 1 :src="pg1" draggable="true" id="block1" @dragstart="drag($event)">
    </div>
    <div class="drgBox">
      <img class="images" data-i = 2 :src="pg2" draggable="true" id="block2" @dragstart="drag($event)" >
    </div>
    <div class="drgBox">
      <img class="images" data-i = 3 :src="pg3" draggable="true" id="block3" @dragstart="drag($event)">
    </div>
    <div class="drgBox">
      <img class="images" data-i = 4 :src="pg4" draggable="true" id="block4" @dragstart="drag($event)" >
    </div>
    <div class="drgBox">
      <img class="images" data-i = 5 :src="pg5" draggable="true" id="block5" @dragstart="drag($event)" >
    </div>
    <div class="drgBox">
      <img class="images" data-i = 6 :src="pg6" draggable="true" id="block6" @dragstart="drag($event)">
    </div>
    <div class="drgBox">
      <img class="images" data-i = 7 :src="pg7" draggable="true" id="block7" @dragstart="drag($event)" >
    </div>
    <div class="drgBox">
      <img class="images" data-i = 8 :src="pg8" draggable="true" id="block8" @dragstart ="drag($event)" >
    </div>
    <div class="drgBox">
      <img class="images" data-i = 9 :src="pg9" draggable="true" id="block9" @dragstart="drag($event)" >
    </div>
  </div>

  <div class="board">
    <div class="dropBox" data-j = 1 @drop="drop($event)" @dragover="allowDrop($event)">
    </div>
    <div class="dropBox" data-j = 2  @drop="drop($event)" @dragover="allowDrop($event)">
    </div>
    <div class="dropBox" data-j = 3  @drop="drop($event)" @dragover="allowDrop($event)">
    </div>
    <div class="dropBox" data-j = 4  @drop="drop($event)" @dragover="allowDrop($event)">
    </div>
    <div class="dropBox" data-j = 5  @drop="drop($event)" @dragover="allowDrop($event)">
    </div>
    <div class="dropBox" data-j = 6  @drop="drop($event)" @dragover="allowDrop($event)">
    </div>
    <div class="dropBox" data-j = 7  @drop="drop($event)" @dragover="allowDrop($event)">
    </div>
    <div class="dropBox" data-j = 8  @drop="drop($event)" @dragover="allowDrop($event)">
    </div>
    <div class="dropBox" data-j = 9  @drop="drop($event)" @dragover="allowDrop($event)">
    </div>
  </div>
  <button class="reset" @click="locat">刷新</button>
  <div class="tsbox2" v-show="m">
    <div class="txs2">
      <div class="ts2">
      <div class="r"></div>
        <div class="txt">欢迎来到民法碎片<br>将拼图移动到对应区域位置<br>无时间限制<br>最后拼图移动错误会失败</div>
        <div class="x iconfont icon-x" @click="m=false"></div>
      </div>
    </div>
  </div>
  <div class="tsbox" v-show="bol">
    <div class="txs">
      <div class="ts">
      <div class="title">
        {{ text }}
      </div>
      <div class="r"></div>
      <div class="nav">
        <div class="a1 iconfont icon-left-arrow" @click="$router.go(-1)"></div>
        <div class="a2 iconfont icon-replay"  @click="locat"></div>
        <div class="a3 iconfont icon-wodexuexi" @click="xuex"></div>
      </div>
    </div>
    </div>
  </div>
  <div class="pbox" ref="pbox">
    <span ref="span" @click="kb" class="iconfont icon-x"></span>
    <div class="ptitle">
      <h2>{{ title }}</h2>
    </div>
    <div class="p">
      <i class="iconfont"></i>
      <div class="word">
        <img :src="pg" alt="" class="wwpg">
        <div class="wordt">{{ text2 }}</div>
      </div>
    </div>
  </div>
  <div class="a3 lo iconfont icon-wodexuexi" @click="xuex"></div>
  <div class="get" @click="$router.go(-1)">
        <i class="iconfont icon-left-arrow"></i>
      </div>
  </div>
</template>

<script>
import imga1 from '@/views/Egg/JPimg/img1.jpg'
import imga2 from '@/views/Egg/JPimg/img2.jpg'
import imga3 from '@/views/Egg/JPimg/img3.jpg'
import imga4 from '@/views/Egg/JPimg/img4.jpg'
import imga5 from '@/views/Egg/JPimg/img5.jpg'
import imga6 from '@/views/Egg/JPimg/img6.jpg'
import imga7 from '@/views/Egg/JPimg/img7.jpg'
import imga8 from '@/views/Egg/JPimg/img8.jpg'
import imga9 from '@/views/Egg/JPimg/img9.jpg'
import imgb1 from '@/views/Egg/JPimg/imgb1.jpg'
import imgb2 from '@/views/Egg/JPimg/imgb2.jpg'
import imgb3 from '@/views/Egg/JPimg/imgb3.jpg'
import imgb4 from '@/views/Egg/JPimg/imgb4.jpg'
import imgb5 from '@/views/Egg/JPimg/imgb5.jpg'
import imgb6 from '@/views/Egg/JPimg/imgb6.jpg'
import imgb7 from '@/views/Egg/JPimg/imgb7.jpg'
import imgb8 from '@/views/Egg/JPimg/imgb8.jpg'
import imgb9 from '@/views/Egg/JPimg/imgb9.jpg'
import imgb from '@/views/Egg/images/p.jpg'
export default {
  name: 'JigsaePuzzle',
  data () {
    return {
      text2: '獬豸是中国古代神话传说中的神兽，体型大者如牛类似麒麟，全身长着浓密黝黑的毛，双目明亮有神，额上通常长一角，俗称独角兽。獬豸拥有很高的智慧，懂人言知人性，能辨曲直，是公正的象征。在中国古代，獬豸被视为执法公正的化身。相传，先秦官员断案折狱，曾用獬豸辨别其中曲直，其中声明最盛者莫过于帝尧时期的刑官皋陶。传说中皋陶曾饲有獬豸，凡遇疑难不决之事，悉着獬豸裁决，均准确无误。獬豸与法律的关系还可以从古代“法”字的结构得到解答，古体的“法”字写作“灋fǎ”，而“廌zhi"即为獬豸，“廌法”二字合为一体，有公正不阿之意；而“灋”左边的三点水，则代表法平如水的意思。獬豸作为中国传统法律的象征，一直受到历朝的推崇。相传在春秋战国时期，楚文王曾获一獬豸，照其形制成冠戴于头上，于是上行下效，獬豸冠在楚国成为时尚。秦代执法御史带着这种冠，汉承秦制也概莫能外。到了东汉时期，皋陶像与獬豸图成了衙门中不可缺少的饰品，而獬豸冠则被冠以“法冠”之名，执法官也因此被称为獬豸，这种习尚一直延续下来。獬豸的形象和象征意义在中国文化中源远流长，它不仅在古代法制监督史上有着非凡的涵义，而且在现代法院门口的装饰中也常常能看到它的身影，代表着法律的公正和威严',
      title: '獬豸',
      pg: imgb,
      m: true,
      bol: false,
      text: '',
      pg1: imga1,
      pg2: imga2,
      pg3: imga3,
      pg4: imga4,
      pg5: imga5,
      pg6: imga6,
      pg7: imga7,
      pg8: imga8,
      pg9: imga9,
      p: true,
      q: true,
      list: [[
        imga1, imga2, imga3, imga4, imga5, imga6, imga7, imga8, imga9
      ], [imgb1, imgb2, imgb3, imgb4, imgb5, imgb6, imgb7, imgb8, imgb9]]
    }
  },
  mounted () {
    const text = this.$route.query.text
    this.pg1 = this.list[text][0]
    this.pg2 = this.list[text][1]
    this.pg3 = this.list[text][2]
    this.pg4 = this.list[text][3]
    this.pg5 = this.list[text][4]
    this.pg6 = this.list[text][5]
    this.pg7 = this.list[text][6]
    this.pg8 = this.list[text][7]
    this.pg9 = this.list[text][8]

    const parent = document.querySelector('.drag')
    const frag = document.createDocumentFragment()
    while (parent.children.length) {
      frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)])
    }
    parent.appendChild(frag)
  },
  methods: {
    kb () {
      const pbox = this.$refs.pbox
      pbox.style.display = 'none'
    },
    xuex () {
      const pbox = this.$refs.pbox
      pbox.style.display = 'flex'
    },
    locat () {
      window.location.reload()
    },
    drag (event) {
      event.dataTransfer.setData('text', event.target.id)
    },
    allowDrop (event) {
      event.preventDefault()
    },
    drop (event) {
      this.p = true

      event.preventDefault()
      const data = event.dataTransfer.getData('text')
      event.target.appendChild(document.getElementById(data))
      const dropBox = document.querySelectorAll('.dropBox')
      dropBox.forEach((item) => {
        if (item.children.length === 0) {
          this.p = false
        }
      })
      if (this.p) {
        this.pd()
        if (this.q) {
          this.text = '通关成功'
          this.bol = true
        } else {
          this.text = '通关失败'
          this.bol = true
        }
      }
    },
    pd () {
      const images = document.querySelectorAll('.images')
      const dropBox = document.querySelectorAll('.dropBox')
      images.forEach((item, index) => {
        if (item.dataset.i !== dropBox[index].dataset.j) {
          this.q = false
        }
      })
    }
  }
}
</script>

<style scoped>
.txt {
  font-size: 15px;

}
.lo {
  box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);
text-align: center;
  position: absolute;
  cursor: pointer;
  left:  10vw;
  background-color: rgb(153, 127, 101);
  left:  10vw;
  top: 15vh;
  font-size: 26px;
  width: 50px;
height: 50px;
font-size: 30px;
border-radius: 50%;
line-height: 50px;
}
.get {
  cursor: pointer;
  position: absolute;
  left:  10vw;
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
}
.tsbox2 {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}
.txt {
  font-size: 28px;
  text-align: center;
  padding-top: 19px;
}
.txs2{
  animation: move 0.8s linear;
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 390px;
  height: 260px;
  border-radius: 20px;
  background-color: rgb(149, 61, 38);
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
.tsbox {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}
.title {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%,0);
  font-size: 40px;

}
.txs{
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 390px;
  height: 260px;
  border-radius: 20px;
  background-color: rgb(149, 61, 38);
}
.ts {
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
@keyframes move{
  from {
    opacity: 0;
    filter: blur(5px);
    /* left: 40%;
    bottom: 60%;
   transform: scale(0.1) translate(-20%,-20%); */
  }
  to{
    opacity: 1;
    filter: blur(0px);
    /* transform: scale(1) translate(-50%,-50%); */
  }
}
.x {
  cursor: pointer;
  position: absolute;
  right: -22px;
  top: -22px;
  width: 44px;
  height: 44px;
  text-align: center;
  line-height: 38px;
  font-size: 18px;
  border: 6px solid rgb(149, 61, 38);
  border-radius: 50%;background-color: rgb(219, 188, 159);
}
.nav {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 30px;
  font-size: 30px;
}
.nav div {
  cursor: pointer;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  font-size: 30px;
  text-align: center;
  line-height: 48px;
   background-color: rgb(219, 188, 159);
  box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);
  border: 5px solid rgb(149, 61, 38);
}
.body {
  background-image: url(./images/bg.jpg);
  position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      width: 100vw;
      gap: 50px;
    }
    .drag {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 320px;
      gap: 10px;
      cursor: grab;
    }
    .drgBox {
      position: relative;
      width: 100px;
      height: 100px;
      background-color: #0003;
    }
    .images {
      position: relative;
      /* background: var(imga1); */
      background-size: cover;
      width: 100%;
      height: 100%;
    }
    .reset {
      cursor: pointer;
    width: 120px;
    height: 50px;
    text-align: center;
    font-size: 30px;
    border-radius: 10px;
    line-height: 50px;
      box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      border: none;
      color: #222;
      font-weight: 500;
      text-transform: uppercase;
  font-family: '华文中宋';
      background-color: rgb(153, 127, 101);
    }
    .board {
      position: relative;
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 10px;
    }
    img {
      width: 100%;
      height: 100%;

    }
    .dropBox {
      position: relative;
      width: 140px;
      height: 140px;
      background: #0003;
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
    .pbox {
      position: relative;
      position: fixed;
      display: none;
      top:0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0,0,0,0.8);
      z-index: 999;
      color: #fff;
    }
    .p {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      height: 60vh;
      width:58vw;
      transform: translate(-50%,-50%);
      left: 50%;
      padding-top: 50px;
      transition: all 0.8s;
      color: #fff;
    }
    .p i {
      display: block;
      position: absolute;
      top:0;
      left: 50%;
      transform: translateX(-50%);
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: 18px;
    }
    .pbox span {
      cursor: pointer;
      position: absolute;
      top: 3vw;
      right: 8vh;
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      text-align: center;
      line-height: 50px;
      font-size: 30px;
    }
    .p .word {
      width: 95%;
      height: 100%;
      font-size: 20px;
      margin: 0 auto;
      display: flex;
    }
    .wordt {
      flex: 1;
      font-size: 26px;
    }
    .ptitle {
      position: absolute;
      top: 12vh;
      left: 50%;
      transform: translateX(-50%);
      font-size: 22px;
    }
    .wwpg {
      display: block;
      margin-right: 30px;
      border-radius: 10px;
      width: 320px;
      height: 230px;
      background-color: #fff;
    }
    .wordt {
      font-size: 14px;
    }
</style>

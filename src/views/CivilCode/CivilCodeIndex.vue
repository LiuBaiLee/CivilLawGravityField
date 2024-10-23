<template>
  <div class="box">
    <!-- 顶部导航 -->
    <HeadTop></HeadTop>
    <!-- 侧导航 -->
    <SideNav></SideNav>
    <!-- 民法典书 -->
    <BookBox></BookBox>
    <!-- 民法典介绍 -->
    <CivilCodeIntro></CivilCodeIntro>
    <div class="mainBox">
      <div class="bgtext2"></div>

      <div class="main" ref="main">

        <i class="iconfont icon-xiangshang" id="up-btn" @click="slideToPrev"></i>
        <i class="iconfont icon-icon_on_the_down" id="down-btn" @click="slideToNext"></i>
        <div id="content">
            <div class="card" v-for="(item,index) in list4" :key="index">
                <img class="cardPg" :src="item.img">
      <div class="bgtext8"></div>

                <div class="card-time">
                    {{item.time}}
                </div>
                <div class="card-passage">
                    <br>
                    {{ item.text }}
                    <br>
                    {{item.gam}}
                </div>
                <div class="detail" @click="$router.push('/CivilCode/TimeAxis')">查看详细</div>
            </div>
        </div>
    </div>
    </div>
    <ManyBook></ManyBook>
    <div class="voiceBox">
      <div class="voice" ref="voice">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="vernacularBox">
      <div class="bgtext3"></div>
      <div class="bgtext4"></div>
      <div class="vernaculartitle" ref="ver">民法大白话</div>
      <div class="vernacular" style="--t:80s" >
        <div>
          <span class="span" v-for="(item,index) in list2" :key="index">{{ item }}</span>
        </div>
        <div>
          <span class="span" v-for="(item,index) in list2" :key="index">{{ item }}</span>
        </div>
      </div>
      <div class="vernacular" style="--t:50s" >
        <div>
          <span class="span" v-for="(item,index) in list2" :key="index">{{ item }}</span>
        </div>
        <div>
          <span class="span" v-for="(item,index) in list2" :key="index">{{ item }}</span>
        </div>
      </div>
      <div class="vernacular" style="--t:90s" >
        <div>
          <span class="span" v-for="(item,index) in list2" :key="index">{{ item }}</span>
        </div>
        <div>
          <span class="span" v-for="(item,index) in list2" :key="index">{{ item }}</span>
        </div>
      </div>
      <div class="vernacular" style="--t:65s">
        <div>
          <span class="span" v-for="(item,index) in list2" :key="index">{{ item }}</span>
        </div>
        <div>
          <span class="span" v-for="(item,index) in list2" :key="index">{{ item }}</span>
        </div>
      </div>
      <div class="seemore" @click="$router.push('/CivilCode/BigVernacular')">查看解释</div>
    </div>
    <FooterV></FooterV>
  </div>

</template>

<script>
import ManyBook from '@/components/CivilCode/ManyBook.vue'
import BookBox from '@/components/CivilCode/BookBox.vue'
import timeBg1 from '@/views/CivilCode/images/timeBg1.jpg'
import timeBg2 from '@/views/CivilCode/images/timeBg2.jpg'
import timeBg3 from '@/views/CivilCode/images/timeBg3.jpg'
import timeBg4 from '@/views/CivilCode/images/timeBg4.jpg'
import CivilCodeIntro from '@/components/CivilCode/CivilCodeIntro.vue'
export default {
  name: 'HomeJumpIndex',
  components: {
    BookBox,
    CivilCodeIntro,
    ManyBook
  },
  data () {
    return {
      sho: true,
      timeBg1,
      timer1: null,
      timer2: null,
      timer3: null,
      list2: ['自然人', '法人', '法定代表人', '债务人', '保证人', '被保证人', '出租人', '承租人', '一致行动人', '委托人', '受托人',
        '善意第三人', '普通合伙人', '有限合伙人', '出票人', '名义股东', '实际出资人',
        '法律', '无民事权利能力人', '利害关系人', '诉讼时效', '除斥期间', '法律行为', '法律行为',
        '附条件', '附期限', '原始取得', '继受取得', '按份共有', '共同共有', '抗辩权', '形成权',
        '可撤销的民事法律行为', '无权代理', '地役权', '相邻权', '同时履行抗辩权',
        '不安抗辩权', '优先购买权', '买卖不破租赁', '提存', '附条件的民事法律行为'],

      offset: 0,
      maxOffset: 0,
      minOffset: -3,
      str: '2020年5月28日,两千多名全国人大代表齐聚北京人民大会堂,表决通过了《中华人民共和国民法典》,这是以习近平同志为核心的党中央推进全面依法治国、推进国家治理体系和治理能力现代化的重大举措,在新中国法治建设史上具有里程碑意义。“不读史无以明志”,今天一起来看看中国民法演变至今的漫漫长路',
      list4: [{
        time: '1954年与1962年', text: '1954年立法起草第一版民法典草案被提上日程 1962年再次被提上议程', gam: '但是由于历史原因，每一次都被迫中止', img: timeBg1
      }, {
        time: '1986年', text: '随着改革开放，民法典草案再次被提上议程', gam: '诞生了《民法通则》,这是新中国历史上第一部正式颁布的民事基本法律,沿用了三十年', img: timeBg2
      }, {
        time: '2017年', text: '十二届全国人大五次会议表决通过作为中国民法典开篇之作的民法总则', gam: '《民法通则》升级为《民法总则》', img: timeBg3
      }, {
        time: '2020年', text: '十三届全国人大三次会议表决通过《中华人民共和国民法典》', gam: '《民法典》自2021年1月1日起施行', img: timeBg4
      }, {
      }]
    }
  },
  mounted () {
    const main = this.$refs.main
    window.addEventListener('scroll', () => {
      if (main.getBoundingClientRect().top < window.innerHeight) {
        main.classList.add('op7')
      } else {
        main.classList.remove('op7')
      }
    })
  },
  methods: {

    ToPrev () {
      // 获取所有卡片元素并存储在数组中
      const slides = Array.from(document.querySelectorAll('.card'))
      // 更新偏移量，取最大值
      this.offset = Math.min(this.maxOffset, this.offset + 1)
      slides.forEach(slide => {
        // 根据偏移量设置卡片垂直偏移效果
        slide.style.transform = `translateX(${this.offset * 100}%)`
      })
    },
    // 向后切换卡片
    ToNext () {
      // 获取所有卡片元素并存储在数组中
      const slides = Array.from(document.querySelectorAll('.card'))
      this.offset = Math.max(this.minOffset, this.offset - 1)
      slides.forEach(slide => {
        slide.style.transform = `translateX(${this.offset * 100}%)`
      })
    },
    // 向前切换卡片
    slideToPrev () {
      // 获取所有卡片元素并存储在数组中
      const slides = Array.from(document.querySelectorAll('.card'))
      // 更新偏移量，取最大值
      this.offset = Math.min(this.maxOffset, this.offset + 1)
      slides.forEach(slide => {
        // 根据偏移量设置卡片垂直偏移效果
        slide.style.transform = `translateY(${this.offset * 100}%)`
      })
    },
    // 向后切换卡片
    slideToNext () {
      // 获取所有卡片元素并存储在数组中
      const slides = Array.from(document.querySelectorAll('.card'))
      this.offset = Math.max(this.minOffset, this.offset - 1)
      slides.forEach(slide => {
        slide.style.transform = `translateY(${this.offset * 100}%)`
      })
    }

  }
}

</script>

<style scoped>
.box {
  font-family: '华文中宋';
  background-image: url(./images/bg.png);
  /* background-image: url(./images/bg1.jpg); */
}
.op7 {
  animation: op7 linear 0.8s forwards;
}
@keyframes op7 {
    0%{
        opacity: 0;
        transform: translate(0, 20%);
        filter: blur(3px);
    }
    60% {
      opacity: 0.6;
      transform: translate(0, 8%);
      filter: blur(1px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
        filter: blur(0);
    }
}
@keyframes op5 {
  0%{
        opacity: 0;
        transform: translate(-50%, -30%);
        filter: blur(3px);
    }
    60% {
      opacity: 0.6;
      transform: translate(-50%, -42%);
      filter: blur(1px);
    }
    100%{
        opacity: 1;
        transform: translate(-50%,-50%);
        filter: blur(0);
    }
}
.op5 {
  animation: op5 1.2s linear forwards;
}
@keyframes op{
  0% {
    opacity: 0;
    transform: translateY(-15%)
  }
  30% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
}
.op {
  animation: op 1.5s linear forwards;
}
.vernacularBox {
  position: relative;
  padding-top: 120px;
  min-height: 100vh;
  width: 100vw;
  background-size: cover;
}
.bgtext4 {
  position: absolute;
  bottom: 5vw;
  left: 8vh;
  width: 320px;
  height: 210px;
  background-image: url(./images/bgtext2.png);
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.3;
}
.bgtext3 {
  position: absolute;
  top: 0;
  right: 1vh;
  width: 340px;
  height: 400px;
  background-image: url(./images/bgtext3.png);
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.3;
}
.vernaculartitle{
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
}
.vernacular {
  margin: 0 auto;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-size: 30px;
  width: 1000px;
  mask-image: linear-gradient(90deg,transparent,#fff 20%,#fff 80%,transparent);
}
.vernacular div {
  white-space: nowrap;
  animation: animate1 var(--t) linear infinite;
}
.vernacular div:nth-child(2){
  animation: animate2 var(--t) linear infinite;
  animation-delay: calc(var(--t)/-2);
}
@keyframes animate1 {
  from{
    transform: translate(100%);
  }
  to {
    transform: translate(-100%);
  }
}
@keyframes animate2 {
  from{
    transform: translate(0);
  }
  to {
    transform: translate(-200%);
  }
}

.vernacular div .span {
  position: relative;
    cursor: pointer;
    display: inline-flex;
    margin: 10px;
    letter-spacing: .2em;
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
  }
  .bgtext2 {
    position: absolute;
    right: 3vw;
    top: 0vh;
    width: 400px;
    height: 240px;
    background-image: url(./images/bgtext4.png);
    background-size: cover;
    opacity: 0.3;
  }
  .seemore {cursor: pointer;
    bottom: 15vh;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 50px;
      line-height: 50px;
      font-size: 30px;
      border-radius: 10px;
      text-align: center;
      box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);
    position: absolute;
    color: rgba(0,0,0,0.5);
    transition: all 0.5s;
  }
  .seemore:hover {
    color: #000;
  }
  .voiceBox {
    width: 100vw;
    height: 100vh;
    padding-top: 20px;
  }

  .voice {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 1100px;
    height: 650px;
    border-radius: 5px;
  }
  .voice div {
    flex: 1;
    height: 650px;
    transition: 4s ease;
    background-size: cover;
  }
  .voice div:nth-child(1){
    background-image: url(./images/timeBg4.jpg);
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  .voice div:nth-child(2) {
    background-image: url(./images/timeBg3.jpg);
  }
  .voice div:nth-child(3){
    background-image: url(./images/2018.jpg);
  }
  .voice div:nth-child(4) {
    background-image: url(./images/2017.jpg);

  }
  .voice div:nth-child(5){
    background-image: url(./images/1978.jpg);

  }
  .voice div:nth-child(6) {
    background-image: url(./images/1962.jpg);
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  .voice div:hover {
    flex: 20;
  }
  .SDBox {
    width: 100vw;
    height: 100vh;
  }
  .mainBox {
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
  }
  @keyframes leftmove {
    0% {
      opacity: 0;
      transform: translateX(-20%)
    }
    30% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
      transform: translateX(0)
    }
  }
  .leftmove {
    animation: leftmove 2s forwards;
  }
  .sumup {
    position: absolute;
    top:60%;
    left: 50%;
    margin: 0 auto;
    width: 58vw;
    border-radius: 10px;
    height: 58vh;
    font-size: 34px;
    box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);
    padding: 30px;
    opacity: 0;
        transform: translate(-50%, -30%);
        filter: blur(3px);
  }
  .xm {
    cursor: pointer;
    position: absolute;
    right: -30px;
    top:20px;
    transform: translate(-50%,-50%);
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: rgba(0,0,0,0.5);
    font-size: 28px;
    transition: all 0.5s;
  }
  .xm:hover {
    color: #000;
  }
.main {
  opacity: 0;
        transform: translate(0, 20%);
        filter: blur(3px);
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
}
.main .iconfont {
  cursor: pointer;
   width: 60px;
  height: 60px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 999;
  font: 400 80px '';
  color: rgba(0,0,0,0.7)
}
#up-btn {
  top: 5%;
}
#down-btn {
  bottom: 5%;
}
#content {
  /* width: 30%; */
  width: 100%;
  height: 100%;
  position: absolute;
  /* left: 15%; */
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  overflow: hidden;
}
@keyframes none {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    display: none;
  }
}
.none {
  animation: none 1s linear forwards;
}
.card {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
  transition: transform .8s ease-in-out;
}
.cardPg {
  display: block;
  position: absolute;
  right:  120px;
  top: 30%;
  width: 32%;
  height: 280px;
  border-radius: 10px;
  box-shadow: 8px 6px 6px hsl(0deg 0% 0% / 0.40);
}
.card-time {
  position: absolute;
  top: 15vh;
  left: 50%;
  transform: translateX(-50%);
  font-size: 40px;
  font-weight: 700;
}
.card-passage {
  text-indent: 2em;
  position: absolute;
  top: 30vh;
  left: 120px;
  width: 40%;
  font-size: 35px;
  font-weight: 300;
}
.detail{
  cursor: pointer;
      position: absolute;
      bottom: 15vh;
      left: 50.5%;
      transform: translateX(-50%);
      font-size: 30px;
      height: 50px;
      border-radius: 10px;
      box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);
      text-align: center;
      line-height: 50px;
      width: 180px;
      transition: all 0.5s;
      color: rgba(0,0,0,0.5);
}
.detail:hover {
  color: #000;
}
.bgtext8{
  position: absolute;
  left: 8vw;
  opacity: 0.5;
  bottom: 0;
  background-image: url(./images/bgtext1.png);
  background-size:contain;
  background-repeat: no-repeat;
  width: 160px;
  height: 220px;
}
</style>

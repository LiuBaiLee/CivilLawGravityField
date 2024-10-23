<template>
  <div class="box">
    <div class="get" @click="$router.go(-1)">
        <i class="iconfont icon-left-arrow"></i>
      </div>
    <SideNav></SideNav>

    <div class="pgb1"></div>
    <div class="pgb2"></div>
    <div class="pgb3"></div>
    <div class="pgb4"></div>
    <div class="pgb5"></div>
    <div class="pgb6"></div>
    <div class="pgb7"></div>
    <div class="pgb8"></div>

    <div class="shell" id="shell">
        <div class="header">
            <h2 class="title">《民法典》的前世今生</h2>
        </div>
        <div class="timeline">
            <div class="item" v-for="(item,index) in list" :key="index">
                <div class="content">
                    <div alt="" class="img" ref="img"><span></span></div>
                    <h2 class="content-title">{{ item.title }}</h2>
                    <p class="content-desc">
                        {{item.text}}
                    </p>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
// import img1 from
export default {
  name: 'TimeAxis',
  data () {
    return {
      list: [{ title: '1954', text: '全国人大常委会组织起草民法，直到1956年12月，完成了包括总则、所有权、债、继承四编在内的第一个草案，共525 条。该草案以1922 年的苏俄民法典为蓝本，各编（除继承编之外）均经过反复讨论，数易其稿，最终却因为反右等政治运动的影响，未获通过。' },
        { title: '1962', text: '全国人大常委会成立民法研究小组，重开编修民法的工作。至当年7月，小组完成了民法草案试拟稿，化四编体例为三编体例，分别是总则、财产所有和财产流转，把亲属、继承、侵权行为排斥在外，而把预算、税收、劳动关系纳入调整范围，其目的在于尽可能消除第一草案中受苏俄民法典影响的部分。由于文革爆发，第二草案仍是无果而终。' },
        { title: '1979-1982', text: '1979年全国人大常委会法制委员会设立民法起草小组，开启新中国民法史上第三次编纂民法典的尝试。小组在三年之间先后草拟了四个草案，至1982年5月完成了民法草案第四稿，包括8 编465 条。但是，由于社会变动迅速，各种条件尚不成熟，全国人大常委会决定暂停起草民法典，将思路切换到单行民事立法的轨道上来' },
        { title: '1986', text: '一个包含156 个条款的民法通则得以出台，其中规定了民法总则的主要制度，并且将分则的内容压缩为权利和责任两部分。这算得上是一部微缩的民法典，它明确提出公民的人身和财产权利受法律保护，为改革开放的进一步深化提供了基本准则，也解决了国家立法的燃眉之急。' },
        { title: '1993-1999', text: '合同法从1993年开始起草，历经六年终于在1999年获得通过。' },
        { title: '1998-2007', text: '物权法从1998年开始起草，经全国人大常委会七次审议，于2007年通过，历时九年。' },
        { title: '2002-2009', text: '侵权责任法从2002年开始起草，于2009年年底通过，历时七年。' },
        { title: '2016', text: '2016年6月，民法总则草案首次提请全国人大常委会审议，标志着民法典编纂工作正式进入立法程序。' },
        { title: '2017', text: '2017年3月，十二届全国人大五次会议通过了《民法总则》，于当年10月1号正式实施，民法典的编纂迈出关键的第一步。' },
        { title: '2018', text: '2018年8月，十三届全国人大常委会第五次会议对民法典各分编草案进行了初次审议，民法典编纂迈出了第二步。此后，全国人大常委会对各分编草案进行了拆分审议，各分编草案均已完成两次审议，其中，人格权编、婚姻家庭编、侵权责任编三个分编草案完成三次审议。' },
        { title: '2019', text: '2019年12月，“完整版”民法典草案全文公布，依次为总则编、物权编、合同编、人格权编、婚姻家庭编、继承编、侵权责任编7编以及附则，共84章，1260个条文，总计10万余字。这也是新中国成立以来条文字数最多的一部法律草案。' },
        { title: '2020', text: '2020年5月28日，十三届全国人大三次会议表决通过了《中华人民共和国民法典》，自2021年1月1日起施行。婚姻法、继承法、民法通则、收养法、担保法、合同法、物权法、侵权责任法、民法总则同时废止,宣告中国迈入“民法典时代”' }
      ]
    }
  },
  mounted () {
    const x = this.$refs.img
    window.addEventListener('scroll', () => {
      x.forEach((item) => {
        const y = item.querySelector('span')
        if (y.getBoundingClientRect().top < window.innerHeight) {
          y.style.opacity = 0
        }
      })
    })
  }
}
</script>

<style scoped>
.pgb1 {
  opacity: 0.6;
  z-index: 999;
  position: absolute;
  right: 5vw;
  top: 18vh;
  width: 400px;
  height: 640px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('../../assets/textbgm.png');
}
.pgb2 {
  opacity: 0.3;
  z-index: 999;
  position: absolute;
  left: 16vw;
  top: 130vh;
  width: 200px;
  height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('../../assets/bgtext1.png');
}
.pgb4 {
  opacity: 0.3;
  z-index: 999;
  position: absolute;
  right: 1vw;
  top: 340vh;
  width:500px;
  height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('../../assets/bgtext3.png');
}
.pgb3 {
  z-index: 999;
  position: absolute;
  right: 5vw;
  top: 190vh;
  width:500px;
  height: 400px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('../../assets/textbgn.png');
}
.pgb5 {
  opacity: 0.3;
  z-index: 999;
  position: absolute;
  left: 20vw;
  top:800vh;
  width:350px;
  height: 250px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('../../assets/bgtext2.png');
}
.box {
  position: relative;
  font-family: "华文中宋";
}
.shell {
            width: 100%;
            background-image: url(./images/bg.png);
            height: 100%;
            position: relative;
            padding: 80px 0;
        }

        .header {
            width: 100%;
            text-align: center;
            margin-bottom: 80px;
            position: relative;
        }

        .title {
            color: #000;
            font-size: 46px;
            font-weight: normal;
            margin: 0;
        }

        .timeline {
            display: flex;
            margin: 0 auto;
            flex-wrap: wrap;
            flex-direction: column;
            max-width: 700px;
            position: relative;
        }

        .content-title {
            font-weight: normal;
            font-size: 55px;
            line-height: 50px;
            margin: 20px 0 0 0;
            padding: 0 10px;
            box-sizing: border-box;
            color: #000;
        }

        .content-desc {
            margin-top: 15px;
            font-size: 20px;
            box-sizing: border-box;
            color: #000;
            line-height: 25px;
        }

        .timeline:before {
            position: absolute;
            left: 50%;
            width: 2px;
            height: 100%;
            margin-left: -1px;
            content: "";
            background: rgba(0,0,0);
        }

        .item {
            padding: 40px 0;
            /* filter: blur(2px); */
            transition: 0.5s;
            box-sizing: border-box;
            width: calc(50% - 40px);
            display: flex;
            position: relative;
            transform: translateY(-50px);
        }

        .item:nth-child(even) {
            align-self: flex-end;
        }
        .item:nth-child(1) .img {
          background-image: url(./images/timeBg1.jpg);
        }
        .item:nth-child(2) .img {
          background-image: url(./images/1962.jpg);
        }        .item:nth-child(3) .img {
          background-image: url(./images/1978.jpg);
        }        .item:nth-child(4) .img {
          background-image: url(./images/timeBg4.jpg);
        }        .item:nth-child(5) .img {
          background-image: url(./images/1993.jpg);
        }        .item:nth-child(6) .img {
          background-image: url(./images/1998.jpg);
        }        .item:nth-child(7) .img {
          background-image: url(./images/2002.png);
        }        .item:nth-child(8) .img {
          background-image: url(./images/2016.jpg);
        }        .item:nth-child(9) .img {
          background-image: url(./images/2017.jpg);
        }        .item:nth-child(10) .img {
          background-image: url(./images/2018.jpg);
        }        .item:nth-child(11) .img {
          background-image: url(./images/timeBg2.jpg);
        }        .item:nth-child(12) .img {
          background-image: url(./images/2020.jpg);
        }
        .item--active {
            opacity: 1;
            transform: translateY(0);
            /* filter: blur(0px); */
        }

        .item--active .content-title {
            margin: -50px 0 20px 0;
        }

        .img {
          cursor: pointer;
          position: relative;
          border-radius: 10px;
            max-width: 100%;
            height: 180px;
            background-size: cover;
            background-position: center;
            box-shadow: 0 15px 15px rgba(0, 0, 0, 0.4);
            overflow: hidden;
        }
        .img span{
          cursor: pointer;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left:0 ;
          background-color: rgba(0,0,0,0.4);
          transition: 4s ease;
          opacity: 1;
        }
        .subtitle {
            color: rgba(255, 255, 255,0.5);
            font-size: 16px;
            letter-spacing: 5px;
            margin: 10px 0 0 0;
            font-weight: normal;
        }
        .get {
          z-index: 999;
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
background-color: rgb(234, 234, 234);
  font-weight: 900;
  color: rgba(0,0,0,0.3);
  transition: all 0.3s;
}
.get:hover i {
  color: #000;
}
</style>

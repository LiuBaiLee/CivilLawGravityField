<template>
  <div class="box">
    <div class="nav">
      <h2>民法历史伟人</h2>
      <ul ref="ul">
      <li v-for="(item,index) in list" :key="index" @click="rwclick(index)" :class="{red : index===0}">{{ item.uname }}</li>
      </ul>
    </div>
    <div class="ziBox">
      <div class="zi">
        <div class="text1">
          <img :src="pg" alt="">
          <p>{{ text1 }}</p>
        </div>
        <div class="text2">
          <p>{{ text2 }}</p>
        </div>
      </div>
      <div class="get" @click="$router.push('/FuCivil')">
        <i class="iconfont icon-likai"></i>
        <span>返回</span>
      </div>
      <div class="textbg"></div>
    </div>
  </div>
</template>

<script>
import wr1 from '@/views/FunCivil/images/wr1.jpg'
import wr2 from '@/views/FunCivil/images/wr2.jpg'
import wr3 from '@/views/FunCivil/images/wr3.jpg'
import wr4 from '@/views/FunCivil/images/wr4.jpg'

export default {
  name: 'CI',
  data () {
    return {
      text1: '史尚宽（1899—1970）字旦生。安徽桐城人。1915年起先后入日本东京帝国大学法律系、德国柏林大学法律研究所、巴黎大学学习。1927年回国，任中山大学法学教授。1929年任立法委员。抗日战争时期，历任立法院法制委员会委员长、考试院秘书长兼法规委员会主任委员。1947年当选为第一届国大代表。1948年任总统府国策顾问。1949年去台湾，在东吴大学任教。1952年任台湾国民党当局“考选部长”。1958年任“司法院”大法官兼“光复大陆设计委员会”司法组召集人及“国民大会宪政研讨委员会”编纂委员。1969年任司法官训练所所长。1970年11月12日在台北病逝。',
      text2: '尚宽先生的著作主要有：《劳动法原论》、《民法总则释义》、《民法原论总则》、《行政法论》、《信托法论》、《土地法原论》、《债法总论》《物权法论》、《债法各论》、《亲属法论》、《继承法论》、《民法总论》， 以及《法学概论》、《法制》、《立法程序及立法技术》、《行政法要旨》等。',
      pg: wr1,
      list: [{
        uname: '史尚宽',
        text1: '史尚宽（1899—1970）字旦生。安徽桐城人。1915年起先后入日本东京帝国大学法律系、德国柏林大学法律研究所、巴黎大学学习。1927年回国，任中山大学法学教授。1929年任立法委员。抗日战争时期，历任立法院法制委员会委员长、考试院秘书长兼法规委员会主任委员。1947年当选为第一届国大代表。1948年任总统府国策顾问。1949年去台湾，在东吴大学任教。1952年任台湾国民党当局“考选部长”。1958年任“司法院”大法官兼“光复大陆设计委员会”司法组召集人及“国民大会宪政研讨委员会”编纂委员。1969年任司法官训练所所长。1970年11月12日在台北病逝。',
        text2: '尚宽先生的著作主要有：《劳动法原论》、《民法总则释义》、《民法原论总则》、《行政法论》、《信托法论》、《土地法原论》、《债法总论》《物权法论》、《债法各论》、《亲属法论》、《继承法论》、《民法总论》， 以及《法学概论》、《法制》、《立法程序及立法技术》、《行政法要旨》等。',
        pg: wr1
      }, {
        uname: '王泽鉴',
        text1: '王泽鉴（1938- ），台湾台北人。台湾当局司法机构大法官，成功高中毕业，台湾大学法律学系学士、硕士。在台湾大学法律研究所学习期间，以第一名考取台湾公费留学，后赴德国海德堡大学深造，半年后转学至慕尼黑大学，师承德国法学家卡尔·拉伦茨（Karl Larenz）教授研究民法及法学方法论，于1968年获法学博士学位。随后王泽鉴任教于台湾大学法律系，讲授民法总则、民法债编、民法物权、比较民法等课程。',
        text2: '王泽鉴先生专攻民法，其民法专长系台湾之权威。其于任教期间曾担任台湾大学法律学系教授、系主任、法律研究所所长、中国比较法学会理事长、行政院消费者保护委员会委员等职，曾担任德国柏林自由大学访问教授，并在英国剑桥大学，伦敦大学政经学院，澳洲墨尔本大学从事研究工作。其在台湾大学服务期间，育人无数。1994年起任台湾当局司法机构大法官，2003年卸任；其后曾任台湾大学法律学院暨马汉宝法学讲座教授，浙江大学客座教授，浙江大学光华法学院教授委员会委员，并获聘为台湾大学名誉教授。',
        pg: wr2
      },
      {
        uname: '江平',
        text1: '江平（1930年12月28日－2023年12月19日），男，本名江伟琏，祖籍浙江省宁波市，出生于大连市。毕业于燕京大学新闻系，莫斯科大学法律系。 [8]中国著名法学家、法学教育家，新中国民商法学的主要奠基人之一，中国政法大学原校长、终身教授、博士生导师。江平先生是第七届全国人大常委会委员、全国人大法律委员会副主任委员、全国人大法工委行政立法研究组组长。曾担任中国法学会副会长、中国经济法研究会副会长、中国法学会比较法研究会会长、北京仲裁委员会主任、中国消费者协会副会长等职务。享受国务院特殊津贴待遇，被授予“全国优秀教师”“全国杰出资深法学家”等荣誉称号。',
        text2: '20世纪80年代初，全国人大启动《民法通则》起草工作，江平是四名顾问之一。在全国人大任职期间，江平参与了《合同法》《信托法》《国家赔偿法》等重要法律的起草工作。担任《行政诉讼法》立法组组长，率先提出从实体法改到程序法，改变了行政立法的模式。担任全国人民代表大会《中华人民共和国民法典》编纂负责人。',
        pg: wr3
      }, {
        uname: '忆南',
        text1: '忆南，女，1961年出生于江苏镇江市，北京大学法学院教授，北京大学妇女研究中心副主任，中国法学会婚姻家庭法学研究会副会长 [1]，北京大学中外妇女问题研究中心研究员，《中华人民共和国妇女权益保障法》、《中华人民共和国婚姻法》《中华人民共和国人口与计划生育法》起草组专家。',
        text2: '1993年《妇女权益保障法指南》一书获中国版协“首届全国优秀妇女读物”三等奖。2004年 获中国法学会第四届“十大青年法学家”提名奖。2004年《婚姻家庭法新论》一书获第八届北京市哲学社会科学研究成果二等奖。2004年 获北京大学优秀教学奖。2008年《婚姻家庭继承法学》一书获北京高等教育精品教材证书。2009年“离婚救济制度的评价与选择” 一文获全国妇联、中国妇女研究会第二届优秀妇女研究成果二等奖。2010年被全国妇联授予“全国维护妇女儿童权益先进个人“称号。2019年11月，获得“全国维护妇女儿童权益先进个人”荣誉称号。 2020年4月，被授予北京市三八红旗奖章称号。',
        pg: wr4
      }]
    }
  },
  methods: {
    rwclick (index) {
      const li = this.$refs.ul.querySelectorAll('li')
      li.forEach((item, id) => {
        item.classList.remove('red')
      })
      li[index].classList.add('red')
      this.text1 = this.list[index].text1
      this.text2 = this.list[index].text2
      this.pg = this.list[index].pg
    }
  },
  mounted () {
    const index = this.$route.query.text
    if (!index) {
      return
    }
    const li = this.$refs.ul.querySelectorAll('li')
    li.forEach((item, id) => {
      item.classList.remove('red')
    })
    li[index].classList.add('red')
    this.text1 = this.list[index].text1
    this.text2 = this.list[index].text2
    this.pg = this.list[index].pg
  }
}
</script>

<style scoped>
    @keyframes op2 {
    0%{
        opacity: 0;
        transform: translate(-30px,0);
        filter: blur(4px);
    }
    60% {
      opacity: 0.6;
      transform: translate(-10px, 0);
      filter: blur(1px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
        filter: blur(0);
    }
}@keyframes op {
    0%{
        opacity: 0;
        transform: translate(0,-30px);
        filter: blur(4px);
    }
    60% {
      opacity: 0.6;
      transform: translate(0,-10px);
      filter: blur(1px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
        filter: blur(0);
    }
}
  .box {
    font-family: "华文中宋";
    display: flex;
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/bg.png);
  }
  .nav {
    animation: op2 0.8s linear;
    position: relative;
    display: flex;
    padding-top: 80px;
    flex-direction: column;
    align-items: center;
    width: 15vw;
    height: 100vh;
    box-shadow:  20px 0 30px rgba(0,0,0,0.2), 0 10px 100px rgba(0,0,0,0.3);
  }
  .nav::after {
    position: absolute;
    content: '';
    right: 15px;
    top:0;
    height: 80vh;
    width: 2px;
    background-color: #fff;
  }
  .red {
    color: rgb(153, 43, 46);
  }
  .nav::before {
    position: absolute;
    content: '';
    right: 0;
    top: 95px;
    width: 15px;
    height: 1.5px;
    background-color: #fff;
  }
  .nav h2 {
    font-weight: 400;
    color: rgb(153, 43, 46);
  }
  .nav ul {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 0.8;
  }
  .nav li {
    cursor: pointer;
    font-size: 20px;
    text-align: center;
  }
  .nav li:hover {
    color: rgb(153, 43, 46);
  }
  .ziBox {
    position: relative;
    padding: 70px;
    padding-left: 120px;
    flex: 1;
  }
  .zi {
    animation: op 0.8s linear;
    padding: 60px 120px;
    padding-bottom: 0;
display: flex;
position: relative;
flex-direction: column;
    width: 860px;
    height: 620px;
    background-image: url(./images/zi.png);
    background-size: contain;
    background-repeat: no-repeat;

}
.text1 {
  display: flex;
  width: 620px;
  height: 260px;
  font-size: 16px;
}
.text1 img{
  height: 210px;
  width: 145px;
  margin-right: 30px;
  border: 1px solid rgb(230, 230, 230);
  box-shadow:  20px 0 50px rgba(0,0,0,0.2), 0 10px 100px rgba(0,0,0,0.2);
  border-radius: 5px;
}
.text2 {
  flex: 1;
  font-size: 16px;
}
.get {
  cursor: pointer;
  position: absolute;
  right: 10vw;
  bottom: 14vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 40px;
  font-size: 26px;
}
.get i {
  font-size: 26px;
  font-weight: 900;
}
</style>

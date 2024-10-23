<template>
  <div class="ls">
    <div class="title">
      <h2>民法的前世今生</h2>
    </div>
    <div class="textBox">
      <div class="text" v-for="(item,index) in list" :key="index">
      <h3>{{ item.times }}</h3>
      <div class="pg" :backgroundImage = item.pg>
        <img :src="item.pg" alt="">
      </div>
      <div class="word">{{ item.text }}</div>
    </div>
    </div>
  </div>
</template>

<script>
import pg1 from '@/components/FunCivil/images/lspg1.png'
import pg2 from '@/components/FunCivil/images/ls1.png'
import pg3 from '@/components/FunCivil/images/timeBg2.jpg'

export default {
  name: 'LS',
  data () {
    return {
      list: [{
        times: '古代民法',
        text: '我国古代民法起源于先秦时期，其时的民法主要散布在《周礼》、《礼记》、《左传》等古籍之中。秦朝时期，统一了各国的法律，制定《秦律》。隋唐时期，民事法律法规逐渐完善，出现了《隋唐律》和《唐律》。宋朝时期，民法的发展进入成熟阶段，出现了《宋刑统》和《庆历条例》等法律法规。明朝时期，民法的发展进入全盛期，出现了《明律》和《大清律》等法律法规。中国古代民法的发展历史与西方有着显著的不同。在古代中国，法律体系的核心是刑法，民事法律并没有从刑法中分离出来形成独立的法律部门。古代中国法律体系中，民事和刑事的区分并不明显，法律主要作为维护家天下统治秩序的工具，以刑罚为核心。中国古代的民法渊源包括礼、法律、经义和习惯，体系上分为婚姻家庭制度、物权制度、契约制度、侵权行为制度和诉讼时效制度。在春秋战国时期，民法处于初创阶段，《秦律》标志着我国封建民法的初步确立，从隋开始封建立法进入确立时期，《唐律》则标志着我国古代民法已形成自己的体系。到了宋代，民法有了进一步的发展，明清时期则形成了较为完整的民法体系。总的来说，中国古代民法的发展历史是一个逐渐演变和积累的过程，它体现了中国古代社会的特点和需要，虽然与西方现代民法体系有很大的不同，但在中国古代社会中发挥了重要作用',
        pg: pg1
      },
      {
        times: '民国时期民法',
        text: '民国时期，民法的发展取得重要成果，主要体现在《民法法典》的颁布和实施。该法典以德国民法法典为蓝本，结合我国实际情况制定，分为总则、物权、合同、侵权、补充规定等五部分，共有84章，成为我国民法的重要法典。中国民法的发展经历了从传统向现代的转变。1912年中华民国成立，随即开始编纂民法典，以取代清朝末期的法律体系。1912年颁布的《中华民国临时约法》中，对民法的原则做了初步规定，但正式的民法典直到1929年至1930年间才正式颁布。1929年，国民政府颁布了《中华民国民法》，这是中国历史上第一部现代意义上的民法典。',
        pg: pg2
      },
      {
        times: '新中国民法',
        text: '1950年，我国第一部《民法法典》正式颁布实施，标志着新中国民法的开始。1986年，我国对《民法法典》进行了修改，颁布了新的《民法法典》。该法典进一步明确了民法的基本原则，明确了民事法律关系的基本内容，对我国民法的发展具有重要意义。从古至今，我国民法的发展与变迁，反映了我国社会经济制度的变化和法治理念的演变。在新的历史时期，我国民法应当继续坚持和发展，以适应社会经济的新变化，更好地保障民事主体的合法权益，促进社会和谐稳定。历经多次尝试和修改，最终在2020年5月28日由第十三届全国人民代表大会第三次会议通过。民法典共7编，1260条，包括总则、物权、合同、人格权、婚姻家庭、继承和侵权责任，自2021年1月1日起施行。民法典的颁布实施标志着中国民事法律制度的成熟和完善，为民事活动提供了全面、系统的法律依据。它体现了社会主义核心价值观，弘扬了法治精神，保障了公民的合法权益，促进了社会公平正义',
        pg: pg3
      }]
    }
  }
}
</script>

<style scoped>
@keyframes op {
    0%{
        opacity: 0;
        transform: translate(70px,0);
        filter: blur(4px);
    }
    60% {
      opacity: 0.6;
      transform: translate(30px, 0);
      filter: blur(1px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
        filter: blur(0);
    }
}
  .ls {
    animation: op 1.2s linear;
      position: absolute;
      z-index: 998;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 50px 20px;
      right: 2vw;
      top: 15vh;
      height: 400vh;
      width: 19vw;
    font-family: '华文宋体';
    border-radius: 10px;
      /* background-color: #eee; */
      box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);
    }
  .title {
    position: relative;
    width: 250px;
    height: 45px;
    text-align: center;
    font-size: 22px;
  }
  .title::after {
    position: absolute;
    left: -20px;
    top:-5px;
    transform: translateY(-50%);
    content: '';
    height: 45px;
    width: 40px;
    background-image: url(./images/textpg.png);
    background-position: 20px 25px;
    background-repeat: no-repeat;
  }
  .title::before {
    position: absolute;
    right: -20px;
    bottom:25%;
    transform: translateY(50%);
    content: '';
    height: 45px;
    width: 40px;
    background-image: url(./images/textpg.png);
    background-position: -23px 25px;
    background-repeat: no-repeat;
  }
  .textBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }
  .text {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .text h3{
    text-align: center;
    font-size: 25px;
  }
  .pg {
    margin-top: 20px;
    width: 100%;
    height: 160px;
    background-size: cover;
    border-radius: 10px;
  }
  .word {
    margin-top: 30px;
    font-size: 15px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
</style>

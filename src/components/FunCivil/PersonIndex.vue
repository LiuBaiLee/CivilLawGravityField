<template>
  <div class="box">
    <div class="text">
      <div class="title" ref="title">
      <h2>民法历史伟人</h2>
      </div>
      <div class="wr" ref="wr">
        <div class="rw" v-for="(item,index) in list" :key="index" @click="$router.push(`/FuCivil/CI?text=${index}`)">
          <span>{{ item.uname}}</span>
          <div class="rwtext">
            <div class="pg"></div>
            <div class="word">{{ item.text1 }}</div>
          </div>
        </div>
      </div>
      <div class="ljgd" @click="$router.push('/FuCivil/CI')">查看详细</div>
    </div>
  </div>
</template>

<script>
import wr1 from '@/views/FunCivil/images/wr1.jpg'
import wr2 from '@/views/FunCivil/images/wr2.jpg'
import wr3 from '@/views/FunCivil/images/wr3.jpg'
import wr4 from '@/views/FunCivil/images/wr4.jpg'
export default {
  name: 'PersonIndex',
  data () {
    return {
      list: [{
        uname: '史尚宽',
        text1: '史尚宽（1898—1970），字旦生，安徽桐城南乡人，是中国近现代法学家，被誉为“中国民法第一人”。他在法学领域有着深厚的造诣，尤其在民法领域贡献卓著。',
        pg: wr1
      }, {
        uname: '王泽鉴',
        text1: '王泽鉴（1938- ），台湾台北人。王泽鉴是中国台湾著名民法学者，专攻民法领域，被誉为台湾民法学的权威。',
        pg: wr2
      },
      {
        uname: '江平',
        text1: '江平（1930年12月28日－2023年12月19日）,江平是中国著名的法学家，被誉为中国法治建设的亲历者、开创者之一，以及中国政法大学前校长、终身教授。',
        pg: wr3
      }, {
        uname: '忆南',
        text1: '忆南，女，1961年出生于江苏镇江市，马忆南的研究领域包括婚姻家庭法、继承法、民法、妇女和儿童权益保护等。',
        pg: wr4
      }]
    }
  },
  mounted () {
    const wr = this.$refs.wr
    // 动画
    window.addEventListener('scroll', () => {
      if (wr.getBoundingClientRect().top < window.innerHeight) {
        wr.classList.add('op')
      } else {
        wr.classList.remove('op')
      }
    })
  }
}

</script>

<style scoped>
@keyframes op {
    0%{
        opacity: 0;
        transform: translate(0, 15%);
        filter: blur(3px);
    }
    60% {
      opacity: 0.6;
      transform: translate(0, 5%);
      filter: blur(1px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
        filter: blur(0);
    }
}
.op {
  animation: op 1s linear forwards;
}
  .box {
    margin-top: 30px;
    font-family: '华文中宋';
    position: relative;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }
  .text {
    position: absolute;
    padding-top: 30px;
    right: 21vw;
    width: 79vw;
    height: 100%;
  }
  .title {
    margin: 0 auto;;
    width: 250px;
    height: 45px;
    text-align: center;
    font-size: 22px;
  }
  .wr {
    opacity: 0;
    transform: translate(0, 15%);
    filter: blur(3px);
    margin-top: 80px;
    padding: 0 40px;
    display: flex;
    justify-content: space-around;
    background-position: center center;
    width: 100%;
  }
  .rw {
    cursor: pointer;
    position: relative;
    width: 180px;
    height: 280px;
    background-size: cover;
    border-radius: 10px;
    box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 1px 20px rgba(0,0,0,0.3);
  }
  .rw::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-image: linear-gradient(to top,rgba(0,0,0,0.5),rgba(0,0,0,0));
  }
  .rw:nth-child(1) {
    background-image: url(./images/wr1.jpg);
  }
  .rw:nth-child(2) {
    background-image: url(./images/wr2.jpg);
  }.rw:nth-child(3) {
    background-image: url(./images/wr3.jpg);
  }.rw:nth-child(4) {
    background-image: url(./images/wr4.jpg);
  }
  .rw span {
    z-index: 2;
    display: block;
    width: 100%;
    height: 80px;
    font-size: 18px;
    text-align: center;
    line-height: 80px;
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    opacity: 0.8;
  }
  .rw:hover .rwtext{
    opacity: 1;
  }
  .rwtext {
    position: absolute;
    top:0%;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0;
    padding-top: 15px;
    background-color: rgb(235, 235, 235);
    transition: all 0.5s;
  }
  .pg {
    margin: 0 auto;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-size: cover;
    box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 1px 20px rgba(0,0,0,0.3);
  }
  .rw:nth-child(1) .pg {
    background-image: url(./images/wr1.jpg);
  }
  .rw:nth-child(2) .pg {
    background-image: url(./images/wr2.jpg);
  }
  .rw:nth-child(3) .pg {
    background-image: url(./images/wr3.jpg);
  }
  .rw:nth-child(4) .pg {
    background-image: url(./images/wr4.jpg);
  }
  .word {
    width: 100%;
    padding: 12px;
    padding-top: 20px;
  }
  .ljgd {
    cursor: pointer;
    margin: 0 auto;
    margin-top: 120px;
    position: relative;
    width: 180px;
    height: 50px;
    text-align: center;
    font-size: 30px;
    border-radius: 10px;
    line-height: 50px;
    color: rgba(0,0,0,0.5);
    transition: all 0.5s;
      box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);
  }
  .ljgd:hover {
    color: #000;
  }
</style>

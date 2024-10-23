<template>
<div class="textBox">
      <div class="text" ref="text">
        <!-- 题目 -->
        <h2>《中华人民共和国民法典》</h2>
        <!-- 文字 -->
        <p>《中华人民共和国民法典》被称为“社会生活的百科全书”，是新中国第一部以法典命名的法律，在法律体系中居于基础性地位，也是市场经济的基本法。</p>
<p>《中华人民共和国民法典》共7编、1260条，各编依次为总则、物权、合同、人格权、婚姻家庭、继承、侵权责任，以及附则。通篇贯穿以人民为中心的发展思想，着眼满足人民对美好生活的需要，对公民的人身权、财产权、人格权等作出明确详实的规定，并规定侵权责任，明确权利受到削弱、减损、侵害时的请求权和救济权等，体现了对人民权利的充分保障，被誉为“新时代人民权利的宣言书”。
      </p>
<p>2020年5月28日，十三届全国人大三次会议表决通过了《中华人民共和国民法典》，自2021年1月1日起施行。婚姻法、继承法、民法通则、收养法、担保法、合同法、物权法、侵权责任法、民法总则同时废止。</p>
      </div>
      <div class="num" ref="num">
        <li>
          <h2>7<span>编数</span></h2>
        </li>
        <li>
          <h2>1260<span>条数</span></h2>
        </li>
        <li>
          <h2>2020-5-28<span>颁布时间</span></h2>
        </li>
        <li>
          <h2>2021-1-1<span>施行时间</span></h2>
        </li>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CivilCodeIntro',
  mounted () {
    const text = this.$refs.text
    const num = this.$refs.num
    // 动画
    window.addEventListener('scroll', () => {
      if (text.getBoundingClientRect().top < window.innerHeight) {
        text.classList.add('op')
      } else {
        text.classList.remove('op')
      }
      if (num.getBoundingClientRect().top < window.innerHeight) {
        num.classList.add('op')
      } else {
        num.classList.remove('op')
      }
    })
  }
}
</script>

<style scoped>
.textBox {
  padding-top: 60px;
  width: 100vw;
  height: 100vh;
  background-size: cover;
}
@keyframes op {
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
/* @keyframes op{
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
} */
.op {
  animation: op 0.8s linear forwards;
}
.text {
  transform: translateY(20%);
  margin: 0 60px;
  padding:0 40px;
}
.text h2 {
  font-size: 35px;
  text-align: center;
  margin-bottom: 50px;
}
.text p {
  text-indent: 2em;
  font-size: 22px;
}
.num {
  margin-top: 50px;
  padding:0 100px;
  display: flex;
}
.num h2 {
  position: relative;
  font-size: 92px;
  font-family: impact;
  margin-left: 60px;
}
.num h2 span {
  position: absolute;
  display: block;
  width: 100px;
  text-align: center;
  font-size: 20px;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
}
</style>

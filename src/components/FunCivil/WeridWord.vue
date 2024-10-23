<template>
  <div class="box">
    <div class="textBox">
      <div class="textbox"></div>
      <div class="textbox2"></div>

      <div class="title"><h2>民法歪理知识</h2></div>
      <div class="main">
      <div class="container" ref="container">
        <div class="card" style="--i:-3;">法治</div>
        <div class="card" style="--i:-2;">法治</div>
        <div class="card" style="--i:-1;">法治</div>
        <div class="card" style="--i:0">法治</div>
        <div class="card" style="--i:1;">法治</div>
        <div class="card" style="--i:2;">法治</div>
        <div class="card text" ref="text" style="--i:3;">点我</div>
      </div>
    </div>
    <div class="sx" ref="sx">洗卡</div>

  <div class="pbox" ref="pbox">
    <span ref="span" class="iconfont icon-guanbi"></span>
    <div class="ptitle">
      <h2>{{ title }}</h2>
    </div>
    <div class="p">
      <i class="iconfont"></i>
      <div class="word">
        <img :src="pg" alt="" class="wwpg">
        <div class="wordt">{{ text }}</div>
      </div>

    </div>
  </div>
    </div>
  </div>
</template>

<script>
import wwpg1 from '@/components/FunCivil/images/wwpg1.png'
import wwpg2 from '@/components/FunCivil/images/wwpg2.png'
import wwpg3 from '@/components/FunCivil/images/wwpg3.png'
import wwpg4 from '@/components/FunCivil/images/wwpg4.png'
import wwpg5 from '@/components/FunCivil/images/wwpg5.png'
import wwpg6 from '@/components/FunCivil/images/wwpg6.png'
import wwpg7 from '@/components/FunCivil/images/wwpg7.png'
import wwpg8 from '@/components/FunCivil/images/wwpg8.png'
import wwpg9 from '@/components/FunCivil/images/wwpg9.png'
import wwpg10 from '@/components/FunCivil/images/wwpg10.png'
import wwpg11 from '@/components/FunCivil/images/wwpg11.png'
import wwpg12 from '@/components/FunCivil/images/wwpg12.png'
export default {
  name: 'WeridWord',
  data () {
    return {
      n: false,
      text: '在西汉，单身女性还要纳税。汉惠帝即位后，推出律法规定，十五至三十岁尚未嫁配的女子，缴纳五倍的人头税(普通的人头税是一百二十钱)。',
      title: '女性单身有罪',
      pg: wwpg1,
      list: [
        {
          title: '女性单身有罪',
          text: '在西汉，单身女性还要纳税。汉惠帝即位后，推出律法规定，十五至三十岁尚未嫁配的女子，缴纳五倍的人头税(普通的人头税是一百二十钱)。',
          pg: wwpg1
        },
        {
          title: '寡妇尽孝能继承公婆遗产',
          text: '我国继承法规定，丧偶儿媳对公、婆尽了主要赡养义务的，可以作为第一顺序继承人继承公、婆的遗产。因此，寡妇在赡养婆婆尽孝之后，有权继承婆婆的遗产。',
          pg: wwpg3
        },
        {
          title: '餐厅吃饭吃出问题可以退一赔十',
          text: '在餐厅用餐时，若食品卫生存在问题，消费者可以要求商家退一赔十。若实际损失不足1000元，可按照实际损失索赔。',
          pg: wwpg4
        },
        {
          title: '物业费包含电梯费',
          text: '电梯费已经包含在物业费当中，住一楼不用交电梯费，住任何楼层都不用交电梯费。第十八：电梯收益车位出租费归业主共享，不归物业。',
          pg: wwpg5
        },
        {
          title: '私生子能上户口，私生子与婚生子享有同等的继承权',
          text: '根据我国法律规定，私生子享有与婚生子同等的权利，包括上户口的权利。私生子在法律上同样具有继承权，无论是法定继承还是遗嘱继承，私生子与婚生子都享有同等的继承份额。',
          pg: wwpg2
        },
        {
          title: '老公藏过多的私房钱涉嫌违法行为',
          text: '妻子有权要求丈夫上交工资，共同管理家庭财产。但丈夫藏有过多私房钱，若涉嫌违法，将依法处理。需要注意的是，夫妻共同财产的管理应遵循平等、自愿原则。',
          pg: wwpg6
        },
        {
          title: '胎儿在妈妈肚子里就能继承财产',
          text: '胎儿在妈妈肚子里虽未出生，但已具有继承权。若涉及遗产继承，胎儿可由其母亲代为继承。',
          pg: wwpg7
        },
        {
          title: '在商场，超市，餐厅等地摔倒，可要求赔偿',
          text: '在商场、超市、餐厅等地摔倒，若因场所管理不善导致，消费者有权要求赔偿。商家需承担相应的赔偿责任。',
          pg: wwpg8
        },
        {
          title: '老赖1万以下,债主花25元,法院可以缺席判決强制执行',
          text: '针对老赖欠款1万以下的情况，我国法律规定，债权人只需支付25元的诉讼费，即可启动诉讼程序。法院可缺席判决并强制执行。',
          pg: wwpg9
        },
        {
          title: '熊孩子打赏主播必须全部退还',
          text: '针对未成年人熊孩子打赏主播的行为，我国相关法律规定，未成年人的打赏行为需经过监护人同意。若监护人不同意，打赏金额应全额退还。',
          pg: wwpg10
        },
        {
          title: '侄子女,外甥,外甥女可以继承遗产',
          text: '根据我国继承法，侄子、侄女、外甥、外甥女在特定条件下可以成为代位继承人，继承其父母应继承的遗产份额。',
          pg: wwpg11
        }, {
          title: '游戏账号，游戏装备等虚拟财产可以继承',
          text: '虚拟财产如游戏账号、游戏装备等，在法律上已被认定为可以继承的财产。继承人可依法继承这些虚拟财产。',
          pg: wwpg12
        }
      ]
    }
  },
  mounted () {
    const container = this.$refs.container
    const card = container.querySelectorAll('.card')
    const text = this.$refs.text
    const pbox = this.$refs.pbox
    const span = this.$refs.span
    const sx = this.$refs.sx
    span.addEventListener('click', () => {
      pbox.style.display = 'none'
      card.forEach((item) => {
        item.classList.remove('cardactive')
      })
    })
    card.forEach((item) => {
      item.classList.remove('sxclick1')
    })
    sx.addEventListener('click', () => {
      this.n = null
      text.innerHTML = '点我'
      card.forEach((item) => {
        item.classList.remove('containerHover')
      })
      pbox.style.display = 'none'
    })
    container.addEventListener('click', () => {
      this.n = true
      text.innerHTML = '法治'
      card.forEach((item) => {
        item.classList.add('containerHover')
      })
      card.forEach((item) => {
        item.addEventListener('click', () => {
          const index = Math.floor(Math.random() * 12)
          const i = index
          console.log(index)
          this.text = this.list[i].text
          this.pg = this.list[i].pg
          this.title = this.list[i].title
          if (this.n) {
            item.classList.add('cardactive')
            setTimeout(() => {
              pbox.style.display = 'flex'
            }, 400)
          }
        })
      })
    })
  }
}
</script>

<style scoped>
.textbox {
  z-index: 0;
  position: absolute;
  right: 9vw;
  position: absolute;
  top: 0vh;
  width: 260px;
  height: 160px;
  background-size: cover;
  background-image: url(../../assets/textbgn.png);
}

.textbox2 {
  opacity: 0.5;
  position: absolute;
  width: 90px;
  left: 10vw;
  top: 5vh;
  height: 160px;
  background-size: cover;
  background-image: url(./images/bgtext1.png);
}
.box {
  font-family: '华文中宋';
  position: relative;
  width: 100vw;
  height: 100vh;
}
.textBox {
  position: relative;
  width: 79vw;
  height: 100%;
  overflow: hidden;
  padding-top: 40px;
}
.title {
  z-index: 1;
  position: relative;
  text-align: center;
    color: #000;
    margin-bottom: 20px;
    font-size: 22px;
}
.sx {
      cursor: pointer;
      position: absolute;
      bottom: 5vh;
      left: 50%;
      transform: translateX(-50%);
      font-size: 30px;
      width: 90px;
      height: 50px;
      border-radius: 10px;
      box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);
      text-align: center;
      line-height: 50px;
      color: rgba(0,0,0,0.5);
      transition: all 0.5s;
    }
    .sx:hover {
      color: #000;
    }
    .main {
      position: relative;
      width: 100%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .container {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .container .card {
      position: absolute;
      width: 240px;
      height: 360px;
      background-color: rgb(227, 227, 223);
      display: flex;
      border-radius: 8px;
      justify-content: center;
      align-items: center;
      color: rgba(0,0,0,0.25);
      font-size: 5em;font-weight: 700;
      border: 10px solid rgba(0,0,0,.1);
      transform-origin: 50% 100%;
      transition: .5s;
      filter: hue-rotate(calc(var(--i)*150deg));
      box-shadow: 0 0px 50px rgba(0,0,0,.1);
      cursor: pointer;
    }
    .container .containerHover {
      transform: rotate(calc(var(--i)*4deg)) translate(calc(var(--i)*110px),-50px);
      box-shadow: 0 15px 50px rgba(0,0,0,0.25);
      color: rgba(0,0,0,0.25);
    }
    .cardactive {
      translate: calc(var(--i)*20px)-50px;
      z-index: 999;
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

</style>

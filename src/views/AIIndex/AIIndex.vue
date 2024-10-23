<template>
  <div class="box">
    <HeadTop></HeadTop>
    <div class="main">
      <div class="text"></div>
      <ul class="message" ref="message">
        <li>
          <p class="time">{{ time }}</p>
        </li>
        <li class="text-left">
          <span>你好，我是民法AI助手，作为你的智能伙伴，既能陪你聊天、又能帮你答疑解惑。</span>
        </li>
        <li v-for="(msg, index) in messages" :key="index" :class="msg.type">
          <span>{{ msg.text }}</span>
        </li>
      </ul>

    </div>
    <div class="foot">
        <input placeholder="请输入你的问题" type="text" v-model="text">
        <button class="expression" ref="expression" @click="app"><span class="iconfont icon-faguanchui"></span></button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AIIndex',
  data () {
    return {
      timer1: null,
      time: '',
      text: '',
      messages: [] // 使用数组来存储消息
    }
  },
  methods: {
    // 开始
    app () {
      if (!this.text) {
        return
      }
      // const expression = this.$refs.expression
      // expression.disabled = true
      this.messages.push({ text: this.text, type: 'text-right' }) // 将新消息添加到数组中
      this.qx('user', this.text)
      this.text = ''
    },
    // 请求
    qx (role, content) {
      axios({
        method: 'post',
        url: 'http://8.138.151.247:8080/user/ai',
        data:
          [{ role, content }]
      }).then(res => {
        const expression = this.$refs.expression
        // expression.disabled = false
        this.messages.push({ text: res.data, type: 'text-left' })
      }).catch(er => {
        const expression = this.$refs.expression
        // expression.disabled = false
      })
    },
    down (e) {
      if (e.key === 'Enter') {
        this.app()
      }
    }
  },
  mounted () {
    document.addEventListener('keydown', (e) => {
      this.down(e)
    })
    const timer = new Date().valueOf()
    const date = new Date(timer)
    const h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':'
    const m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':'
    const s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds())
    const strDate = h + m + s
    this.time = strDate
  }
}
</script>

<style scoped>
@keyframes op2 {
    0%{
        opacity: 0;
        transform: translate(-50%,60px);
        filter: blur(4px);
    }
    60% {
      opacity: 0.6;
      transform: translate(-50%, 20px);
      filter: blur(1px);
    }
    100%{
        opacity: 1;
        transform: translate(-50%,0);
        filter: blur(0);
    }
}
.box {
  font-family: "华文中宋";
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(../../assets/bg.png);
}
.main {
  border-radius: 10px;
  width: 60vw;
  height: 65vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  background-color: #eee;
  box-shadow: 0 0 10px 3px rgba(0,0,0,0.2);
  margin: 20px auto;
  font-size: 16px;
}
ul {
  padding: 20px 30px;
}li {
  padding: 5px;
  margin-bottom: 10px;
  position: relative;
}
.main .time {
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  color: #999;
}
li span {
  display: inline-block;
  border-radius:7px ;
  background-color: #a6e860;
  padding: 6px 10px 8px 10px;
}
.text-left span {
  background-color: #fff;
}
.text-left::before{
  content: '';
  width: 22px;
  height: 22px;
  border-radius: 3px;
  display: block;
  background: url(./images/ai.png) no-repeat center center;
  background-size: 100%;
  position: absolute;
  left: -25px;
  top: 5px;
}
.text-right {
  text-align: right;
}
.text-left span::after{
  content: '';
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-right: 4px solid white;
  position: absolute;
  border-radius: 3px;
  display: block;
  background-size: 100%;
  left: -8px;
  top: 6px;
}
.text-right::before{
  content: '';
  width: 22px;
  height: 22px;
  border-radius: 3px;
  display: block;
  background: url(./images/ai.png) no-repeat center center;
  background-size: 100%;
  position: absolute;
  right: -23px;
  top: 5px;
}
.text-left span::after{
  content: '';
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-right: 4px solid #a6e860;
  position: absolute;
  border-radius: 3px;
  display: block;
  background-size: 100%;
  left: -8px;
  top: 6px;
}
button {
  outline: none;
  border: 0;
}
.foot {
  animation: op2 1s linear;
  width: 68vw;
  height: 13vh;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5vh;
  padding: 6px 8px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  background: #fff;
  box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 1px 20px rgba(0,0,0,0.3);
}
.foot input {
  height: 30px;
  width: 100%;
  border: none;
  text-indent: 10px;
  outline: medium;
  font-size: 18px;
  font-family: "华文中宋";
}
.foot span {
  width: 22px;
  height: 22px;
}
.expression {
  cursor: pointer;
  position: absolute;
  bottom: 1.2vh;
  right: 0.8vw;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: #eee;
  font-size: 20px;
  text-align: center;
  line-height: 45px;
  transition: all 0.8s;
}
.expression span{
  font-size: 30px;
  color: rgb(198, 198, 198);
  transition: all 0.8s;
}
.expression:hover {
  background-color: rgb(53, 107, 253);

}

.expression:hover span {
  color: #fff;
}

</style>

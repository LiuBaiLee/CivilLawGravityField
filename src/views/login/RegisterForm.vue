<template>
    <div class="box">
      <HeadTop></HeadTop>
            <div class="drop"></div>
          <div class="title">民法引力场</div>
        <form @submit.prevent = "submitForm" action="">
        <div class="register animate__animated animate__fadeInDownBig">
            <h2>注册</h2>
            <div class="account-box">
                <input v-model="users.email" type="text" required="">
                <label for="email">邮箱</label>
                <button @click.prevent='handleSendEmail' class="verification-button">点我发送验证码</button>
            </div>
            <div class="password-box">
                <input v-model="users.password" type="password" required>
                <label for="password">密码</label>
            </div>
            <div class="check-box">
                <input @blur="checkPassword" v-model="users.checkpassword" type="password" required="">
                <label ref="checkAlert" :class="{'animate__animated animate__swing': users.isCheckpass}" for="rewrite">确认密码</label>
            </div>
            <div class="verificationCode">
                <input v-model="users.verificationCode" type="text" required="">
                <label for="verificationCode">验证码</label>
            </div>
            <div>
                <button @click.prevent="sendRegister">注册</button>
            </div>
        </div>
    </form>
    </div>
</template>

<script>
import sendverificationCode from './sendverificationCode.js'// 发送验证码
export default {
  data () {
    return {
      users: {
        email: '',
        password: '',
        checkpassword: '',
        isCheckpass: false,
        verificationCode: ''
      }
    }
  },
  methods: {

    async handleSendEmail () {
      sendverificationCode()
      try {
        const url = `http://8.138.151.247:8080/user/email?email=${this.users.email}`
        const response = await fetch(url, {
          method: 'GET'
        })

        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error('邮件发送失败:', error)
      }
    },
    checkPassword () {
      if (this.users.checkpassword !== this.users.password) {
        this.users.isCheckpass = true
        this.$refs.checkAlert.style.color = 'red'
      } else {
        this.$refs.checkAlert.style.color = ''
      }
    },
    sendRegister () {
      fetch('http://8.138.151.247:8080/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.users)
      })
        .then(res => {
          // 处理响应对象 (res)
          return res.json()
        })
        .then(data => {
          console.log(data)
          if (data.code === 1) {
            // 注册成功，重定向到登录界面
            window.location.href = '/home'
            alert('注册成功，即将返回主界面')
          } else {
            console.error('注册失败:', data.message)
            alert(data.msg)
          }
        })
    }

  }
}
</script>

<style scoped>
.box {
  font-family:'华文中宋';
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/bg.png);

}
.drop {
  position:absolute;
  left: 10vw;
  top: 50%;
  transform: translateY(-50%);
  width: 450px;
  height: 450px;
  box-shadow: inset 20px 20px 20px rgba(0,0,0,0.05),25px 35px 20px rgba(0,0,0,0.05),25px 30px 30px rgba(0,0,0,0.05),inset -20px -20px 25px rgba(255,255,255,0.9);
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 52% 48% 33% 67% / 38% 45% 55% 62%;
}
.drop:hover {
  border-radius: 40%;
}
.title {
  position: absolute;
  top: 50%;
  left: 15vw;
  transform: translateY(-50%);
  font-size: 60px;
  font-weight: 700;
}
    .register{
        /* box居中定位 */
        position: absolute;
        top: 25%;
        left: 57%;
        transform: translate(-50%,-50%);

        border-radius: 10px;
        box-sizing: border-box;
        width: 400px;
        padding: 40px;

        background: rgba(0,0,0,0.5);

    }

    h2{
        text-align: center;
        color: #fff;
    }

    .register input{
        outline: none;
        color: #fff;
        width: 100%;
        background: transparent;
        padding: 10px;
        margin-bottom: 30px;
        border: 0px;
        border-bottom: 1px solid #fff;
    }

    .register>div{
        position: relative;
    }

    .register label{
        position: absolute;
        left: 0px;
        top: -10px;
        transition-duration: 0.5s;
    }

    .login_register{
        display: flex;
        justify-content: space-around;
    }

    button{
        border: 0px;
        background-color: rgba(0,0,0,0);
    }

    .account-box{
        position: relative;
    }

    .verification-button{
        position: absolute;top: -10px;left: 255px;
    }

    a{
        text-decoration: none;
        color: #000;
    }

    input:focus + label,input:valid + label{
        top: -20px;
        font-size: 12px;
        color: aquamarine;
    }
</style>

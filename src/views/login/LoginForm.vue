<template>
        <div class="box">
          <HeadTop></HeadTop>
            <div class="drop"></div>
          <div class="title">民法引力场</div>
            <form @submit.prevent = "submitForm" action="">
        <div class="login animate__animated animate__fadeInDownBig">
            <h2>登录</h2>
            <div class="account-box">
                <input @focus="trans_isActive1" @blur="returnDefault1" v-model="users.email" type="text" required="">
                <label :class="{ 'active': isActive1 }" for="email">账号</label>
            </div>
            <div class="password-box">
                <input @focus="trans_isActive2" @blur="returnDefault2" v-model="users.password" type="password" required="">
                <label :class=" { 'active':isActive2 } " for="password">密码</label>
            </div>
            <div class="login_register">
                <button>登录</button>
                <router-link to="/user/register">点我立即注册</router-link>
            </div>
        </div>
    </form>
        </div>
</template>

<script>
export default ({
  data () {
    return {
      isActive1: false,
      isActive2: false,
      users: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    trans_isActive1 () {
      if (this.users.email.length === 0) {
        this.isActive1 = !this.isActive1
      }
    },
    trans_isActive2 () {
      if (this.users.password.length === 0) {
        this.isActive2 = !this.isActive2
      }
    },
    returnDefault1 () {
      if (this.users.email.length > 0) {
        this.isActive1 = true
      } else {
        this.isActive1 = false
      }
    },
    returnDefault2 () {
      if (this.users.password.length > 0) {
        this.isActive2 = true
      } else {
        this.isActive2 = false
      }
    },
    submitForm () {
      fetch('http://8.138.151.247:8080/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.users)
      })
        .then(res => {
          // 处理响应对象 (res)
          
          if (res.status === 200) {
            return res.json()
          }
        })
        .then(res => {
          if (res.code === 1) {
          // 注册成功，重定向到登录界面
          alert('登录成功，即将返回主页面')
          window.location.href = '/FuCivil'
          // 保存token到localstorage
          const {data} = res
          localStorage.setItem('userId',data.userId)
          localStorage.setItem('token',data.token)
          console.log('登录成功')
            
          } else {
            alert(res.msg)
            console.error('登录失败:', res.msg)
          }
        })
    }
  }
})
</script>

<style scoped>
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
.box {
    width: 100vw;
    height: 100vh;
  font-family: '华文中宋';
    background-image: url(../../assets/bg.png);
}
    .login{
    /* box居中定位 */
    position: absolute;
    top: 30%;
    left: 55%;
    transform: translate(-50%,-50%);

    border-radius: 10px;
    box-sizing: border-box;
    width: 400px;
    padding: 40px;
    box-shadow:  2px 0 3px rgba(0,0,0,0.6), 0 5px 10px rgba(0,0,0,0.3);
    background-color: rgba(0,0,0,0.5);
}

h2{
    text-align: center;
    color: #fff;
}

.login input{
    outline: none;
    color: #fff;
    width: 100%;
    background: transparent;
    padding: 10px;
    margin-bottom: 30px;
    border: 0px;
    border-bottom: 1px solid #fff;
}

.login>div{
    position: relative;
}
.login label{
    position: absolute;
    left: 0px;
    top: -10px;
    transition-duration: 0.5s;
}

.active{
    top: -50px;
    font-size: 12px;
    color: aquamarine;
}

.login_register{
    display: flex;
    justify-content: space-around;
}
.login_register button:hover{
    color: aquamarine;
}
button{
  cursor: pointer;
    border: 0px;
    background-color: rgba(0,0,0,0);
}
.login_register a:hover {
    color: aquamarine;

}
a{
    text-decoration: none;
    color: #000;
}
</style>

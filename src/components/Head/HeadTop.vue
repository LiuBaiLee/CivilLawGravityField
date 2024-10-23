<template>
  <div class="head">
    <div class="logo">
    </div>
    <div class="navigation">
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/FuCivil">趣味民法</router-link>
      </li>
      <li>
        <router-link to="/CivilCode">民法典资讯</router-link>
      </li>
      
      <li>
        <router-link to="/EggJumo">民法大冒险</router-link>
      </li>
      <li>
        <router-link to="/AIIndex">AI民法问答</router-link>
      </li>
      <li>
        <router-link to="/Jump">社区</router-link>
      </li>

      <li>
        <div class="user">
          <div v-show="showSpan" class="land" @click="$router.push('/user/login')">立即登录</div>
          <div @click="changeUserCenter" v-show="showHead" class="avatr"><img :src="this.userhead" alt=""></div>
        </div>
        <!-- 个人中心 -->
        <userCenter v-show="showUserCenter"></userCenter>
      </li>
    </div>
  </div>
</template>

<script>
import userCenter from './userCenter.vue'
export default {
  name: 'HeadTop',
  components: {userCenter},
  data () {
    return {
      Value: '',
      showSpan:true,
      showHead:false,
      showUserCenter: false,
      // 用户昵称
      username: localStorage.getItem('username'),
      // 用户头像
      userhead: localStorage.getItem('avatar')
    }
  },
  mounted () {
    // 如果有令牌token则执行更新用户数据方法
    const token = localStorage.getItem('token')
    if(token){
      this.showSpan = false
      this.showHead =true
      const userId = localStorage.getItem('userId')
      const data = {
        userId: userId
      }
      // 调用更新用户数据方法
      this.$bus.$emit('updateUserInfo',data)
    }else {
      this.showSpan = true
      this.showHead = false
    }
  },
  methods: {
    changeUserCenter(){
      this.showUserCenter = !this.showUserCenter
    }
  }
}
</script>

<style scoped>
@keyframes op {
    0%{
        opacity: 0;
        transform: translate(0,-50px);
        filter: blur(4px);
    }
    60% {
      opacity: 0.6;
      transform: translate(0,-20px);
      filter: blur(1px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
        filter: blur(0);
    }
}
  .head {
    animation: op 0.5s linear;
    display: flex;
    align-items: center;
    width: 100%;
    height: 9.5vh;
    background-color: rgba(247, 247, 247);
    font-family: '华文中宋';
    font-size: 16px;
    box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 1px 20px rgba(0,0,0,0.3);
    z-index: 100;
  }
  .logo {
    margin-left: 80px;
    width: 6vw;
    height: 8vh;
    background-image: url(../../assets/logo.png);
    background-size: cover;
  }
  .user {
    position: relative;
    width: 100px;
    height: 6vh;
    margin-left: 3vw;
  }
  .land {
    display: block;
    cursor: pointer;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 80px;
    height: 4vh;
    text-align: center;
    line-height: 4vh;
    border-radius: 1vh;
    /* background-color: rgb(17, 72, 183); */
    color: #000;
  }
  .avatr {
    cursor: pointer;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 20px;
  }
  .avatr>img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  .navigation{
    display: flex;
    align-items: center;
    margin-left: 120px;
    flex: 1;
    height: 6vh;
    line-height: 6vh;
  }
  .navigation a {
    position: relative;
    display: block;
    width: 100px;
    height: 9.5vh;
    text-align: center;
    line-height: 9.5vh;
    margin: 0 20px;
    color: #000;
    font-size: 16px;
  }
  @keyframes move {
    0% {
      width: 0;
    }
    100% {
      width: 85%;
    }
  }
  .navigation a.router-link-active::after {
    content: '';
    animation: move 1.5s;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: 5px;
    border-radius: 1px;
    background: rgb(100, 100, 100);
  }
</style>

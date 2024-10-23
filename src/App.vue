<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import http from './components/http';
export default {
  name: 'App',
  mounted(){
    // 绑定用来更新用户数据的方法到全局
    this.$bus.$on('updateUserInfo',(data)=>{
      fetch(`http://8.138.151.247:8080/user/message/${data.userId}`,{
        method: 'GET'
      })
      .then((res)=>{
        // 处理响应对象 (res)
        if (res.status === 200) {
            return res.json()
          }
      })
      .then((res)=>{
        const {data} = res
        localStorage.setItem('username',data.username)
        console.log('存储用户名成功')
        localStorage.setItem('avatar',data.avatar)
        console.log('存储头像成功')
      })
    })
  }
}
</script>

<style lang="less" scoped>

</style>

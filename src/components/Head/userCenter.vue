<template>
  <div class="userCenter">
    <div class="userInfo">
        <img class="head-image" :src="this.userhead" alt="">
        <h2 class="username">{{this.username}}</h2>
    </div>
    <div class="reset">
        <div >
            <form method="post" action="" enctype="multipart/form-data">
                <input @change="handleFileChange" type="file" id="file-input" accept="image/*" style="display: none;">
                <label for="file-input" style="cursor: pointer;">修改头像</label>
            </form>
        </div>

        <div @click="puttingName">
            修改昵称
            <div v-if="isputtingName" class="puttingName">
                <div class="closeputtingName" @click.stop="closeputtingName">X</div>
                <label for="putinName">请输入你的新昵称：</label>
                <input v-model="newuserName" id="putinName" type="text">
                <button @click.stop="submitName">提交</button>
            </div>
        </div>

        <div @click.stop="exitlog">退出登录</div>
        <div class="gr" @click="$router.push('/userIndex')">个人中心</div>

    </div>
  </div>
</template>

<script>
import http from '@/components/http.js'
export default {
    data() {
        return {
            isputtingName: false,
            newuserName: '',
            // 通过change事件绑定图片文件
            newuserHead: null,

            // 用户昵称a
            username: localStorage.getItem('username'),
            // 用户头像
            userhead: localStorage.getItem('avatar')
        }
    },
    components: {http},
    methods:{
        puttingName() {
            this.isputtingName = true
        },
        closeputtingName(){
            this.isputtingName = false
            this.newuserName = ''
        },
        // 1.将头像保存到newuserHead
        handleFileChange(e){
            this.newuserHead = e.target.files[0]
            // console.log(this.newuserHead)
            if(this.newuserHead){
                // 将头像保存到formData
                let formData = new FormData();
                formData.append('file',this.newuserHead);
                // console.log(formData.get("file"))
                // 提交用户更改的头像
                fetch('http://8.138.151.247:8080/upload/avatar', {
                    method: 'POST',
                    body: formData
                })
                .then(res=>{
                    return res.json()
                })
                .then(res=>{
                    const {data} = res
                    // console.log(data)
                    // 切换用户头像
                    this.userhead = data
                    // 储存到local
                    localStorage.setItem('avatar',data)
                    setTimeout(() => {
                        window.location.reload()
                    }, 2500);
                })

            }
            else{
                alert('头像未选择')
            }
        },
        // 2.提交用户更改的名字
        submitName(){
            http({
                method: 'POST',
                url: 'http://8.138.151.247:8080/user/update',
                data: {
                    userId: 11,
                    username: this.newuserName
                }
            })
            .then(res=>{
                this.closeputtingName()
                // update用户信息
                const userId = localStorage.getItem('userId')
                const data = {
                    userId: userId
                }
                // 调用更新用户数据方法
                this.$bus.$emit('updateUserInfo',data)
                // 重新渲染个人中心
                setTimeout(() => {
                    window.location.reload()
                }, 2500);
            })

        },

        // 3.退出登录
        exitlog(){
            // 清除用户token
            localStorage.removeItem('token')
            // 重定向到jump
            this.$router.push('/Jump')
        }

    },
    mounted() {
        window.addEventListener('storage', e => {
        if(e.key === 'username') {
            this.username = localStorage.getItem('username')
        }
        if(e.key === 'avater'){
            this.userhead = localStorage.getItem('avater')
        }
        })
    },
}
</script>

<style scoped>
.userCenter{
    z-index: 1000;
    position: absolute;top:50px;
    display: flex;
    flex-wrap: wrap;
    width: 250px;
    height: 300px;
    border: 0px;
    border-radius: 10px; 
    padding: 20px; 

    background: rgba(255, 255, 255, 0.2); /* 背景颜色和透明度 */
    backdrop-filter: blur(10px); /* 背景模糊效果 */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
}
.head-image{
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #000;
}
.userInfo{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
.reset{
    margin-top: 20px;
    width: 100%;
}
.reset>div{
    text-align: center;
    margin-bottom: 10px;
    line-height: 30px;
    width: 100%;
    height: 30px;
    border-radius: 8px;
    background-color: #fff;
}
.reset>div:hover{
    background-color: rgb(120,120,120);
    cursor: pointer;
}

/* 设置昵称 */
.puttingName{
    background-color: #eee;
    position: relative;left: 0px;bottom: -10px;
    border-radius: 10px;
}
.closeputtingName{
    position: absolute;top: -5px;left: 200px;
    width: 10px;
    height: 10px;
    line-height: 10px;
    border: 1px solid #000;
    border-radius: 50%;
    font-size: 10px;
}
</style>
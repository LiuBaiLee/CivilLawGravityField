<template>
    <div class="main">
    </div>
</template>

<script>
import { set } from 'vue'
import router from '@/router'
export default {
    props: ['enddingContent'],
    mounted() {
        let str = this.enddingContent
        const main = document.querySelector('.main')
        let word = str.split("")

        let write = ()=>{
            if(word.length > 0){
                let span = document.createElement("span")
                let del = word.shift()
                span.innerHTML = del
                main.appendChild(span)
            }
            else{
                clearInterval(putin)
                setTimeout(() => {
                    this.$router.push({name: 'Egg'})
                    alert('即将返回游戏主页')
                }, 2000);
            }
        }
        const putin = setInterval(() => {
            write()
        }, 50)

    },
}
</script>

<style scoped>
    *{
        margin: 0px;
        padding: 0px;
    }
    body{
        background: #333;
        display: flex;
        width: 100%;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
    .main{
        font-size: 20px;
        margin: auto;
        width: 40vw;
        height: 80vh;
        border: 1px solid #fff;
        overflow: hidden;
        padding: 2vw;
        border-radius: 0.5vw;
        background-image: url('@/assets/enddingBG.jpg');
        background-size: cover;
        box-shadow: 1vw 1vw 3vw #000;
    }
    .main span{
        color: #000;
        line-height: 2.5vw;
        font-family: Arial, Helvetica, sans-serif;
        margin-right: 3px;
    }
</style>
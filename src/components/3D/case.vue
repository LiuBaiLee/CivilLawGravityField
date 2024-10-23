<template>
    <router-view></router-view>
</template>

<script>
export default {
    mounted(){
        // 将chooseNext方法绑定到全局事件总线中
        this.$bus.$on('chooseNext',(data)=>{
            // 将dialog弹窗添加到communication中
            const communication = document.querySelector('#communication')
            // 创建dialog弹窗
            const dialog = document.createElement('dialog')
            dialog.id = 'popup'
            // 弹窗内容
            dialog.innerHTML = `
                <div>
                    <button id="but1">${data.but1}</button>
                    <br>
                    <button id="but2">${data.but2}</button>
                </div>
            `
            // 弹窗添加到communication里
            communication.appendChild(dialog) 
            dialog.show()
            
            // 按钮实现跳转
            const but1 = document.querySelector('#but1')
            const but2 = document.querySelector('#but2')
            // case to A
            but1.addEventListener('click',()=>{
            this.$router.push({name: `${data.caseToArouter}`})
            })
            // case to B
            but2.addEventListener('click',()=>{
            this.$router.push({name: `${data.caseToBrouter}`})
            })
        })
    }
}
</script>

<style>

</style>
<template>
    <div class="popUpbox">
        <h1>高空抛物</h1>
        <h2>是否选择此剧情</h2>
        <div class="buttonbox">
            <button @click="toCase">Yes</button>
            <button @click="returnEgg">No</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toCase(){
            
        },
        returnEgg(){
            
        }
    },
}
</script>

<style scoped>
    .popUpbox{
        position: absolute;left: 50%;top: 50%;
        transform: translate(-50%,-50%);
        width: 300px;
        height: 400px;
        background-color: antiquewhite;
    }
    h1{
        text-align: center;
        padding-top: 30px;
        padding-bottom: 50px;
    }
    h2{
        text-align: center;
        padding-bottom: 50px;
    }
    .buttonbox{
        display: flex;
        justify-content: space-around;
    }
</style>
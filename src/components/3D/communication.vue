<template>
      <div id="communication" class="container animate__animated animate__fadeIn">
      </div>
</template>

<script>
export default {
  props:['screenplayContent'],
  mounted() {
    const container = document.querySelector('.container')
    const word = this.screenplayContent.split("")
    let write = ()=>{
      if(word.length>0){
        let span = document.createElement("span")
        let del = word.shift()
        let opc = 0
        span.innerHTML = del
        container.appendChild(span)
      }
    }
    setInterval(write, 50);
  },
}
</script> 

<style scoped>
      .container {
        z-index: 100;

        color: #fff;
        position: absolute;bottom: 0px;left: 30%;
        width: 770px;
        height: 180px;
        padding: 20px;
        margin: 20px;
        background: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,.6) 50%, rgba(0,0,0,0) 100%);
        border-radius: 20px;
        
        word-wrap: break-word;
      }
      .container p{
        font-size: 20px;
        line-height: 30px;
        font-family: monospace;
      }
      button:hover{
        cursor: pointer;
      }
</style>
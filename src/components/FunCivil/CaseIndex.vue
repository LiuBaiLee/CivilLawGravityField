<template>
  <div class="box">
    <div class="textBox">
      <div class="title">
        <h2>经典案例</h2>
      </div>
      <div id="banner" ref="banner">
    <div class="img-list img-wrapper" ref="img">
      <div class="img-box" v-for="(img, index) in imgBoxList" :key="index" @click="$router.push(`/FuCivil/CaseIndex?text=${index}`)">
        <div class="info">
          <h3>{{ img.text }}</h3>
        </div>
        <img :data-src="img.src" >
      </div>
    </div>
    </div>
    <div class="ljgd" @click="$router.push('/FuCivil/CaseIndex')">查看详细</div>

  </div>
</div>
</template>

<script>
import al1 from '@/components/FunCivil/images/al1.jpg'
import al2 from '@/components/FunCivil/images/al2.jpg'
import al3 from '@/components/FunCivil/images/al3.png'
import al4 from '@/components/FunCivil/images/al4.png'
import al5 from '@/components/FunCivil/images/al5.jpg'

export default {
  data () {
    return {
      imgBoxList: [
        { src: al1, text: '姜岩案——中国反暴力网络第一案' },
        { src: al2, text: '彭宇案' },
        { src: al3, text: '无锡胚胎案' },
        { src: al4, text: '超市拿鸡蛋被拦猝死案' },
        { src: al5, text: '闻天公司诉李琛茹确认合同无效案' }
      ]
    }
  },
  mounted () {
    const img = this.$refs.img
    const banner = this.$refs.banner
    // 图片懒加载
    window.addEventListener('scroll', () => {
      if (banner.getBoundingClientRect().top < window.innerHeight) {
        img.classList.add('admission')
        const pg = img.querySelectorAll('img')

        pg.forEach((item) => {
          const datasrc = item.getAttribute('data-src')
          item.setAttribute('src', datasrc)
        })
      } else {
        img.classList.remove('admission')
      }
    })
  }
}
</script>

<style scoped>
.box {
  margin-top: 20px;
  font-family: '华文中宋';
  position: relative;
  width: 100vw;
  height: 100vh;
}
.textBox {
  position: relative;
  width: 79vw;
  height: 100%;
}
.title {
  width: 100%;
  margin: 0 auto;
  text-align: center;
    color: #000;
    font-size: 22px;
}

#banner {
  overflow: hidden;
  width: 77.7vw;
  height: calc(25vw / 0.72);
  -webkit-mask: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDE0NDAgNTAwIiBpZD0iaiI+CiAgPHBhdGggZmlsbD0icmdiKDIwMCwyMDAsMjAwKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwczI3NS4wNCAxMDAgNzIwIDEwMFMxNDQwIDAgMTQ0MCAwdjUwMHMtMjc1LjA0LTEwMC03MjAtMTAwUzAgNTAwIDAgNTAwVjB6Ii8+Cjwvc3ZnPgo=);
          mask: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDE0NDAgNTAwIiBpZD0iaiI+CiAgPHBhdGggZmlsbD0icmdiKDIwMCwyMDAsMjAwKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAwczI3NS4wNCAxMDAgNzIwIDEwMFMxNDQwIDAgMTQ0MCAwdjUwMHMtMjc1LjA0LTEwMC03MjAtMTAwUzAgNTAwIDAgNTAwVjB6Ii8+Cjwvc3ZnPgo=);
  -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
  -webkit-mask-position: center;
          mask-position: center;
  -webkit-mask-size: 100vw;
          mask-size: 100vw;
  position: absolute;
  top: 10%;
}

#banner .img-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
justify-content: space-between;
  width: 100%;
  float: left;
  height: calc(25vw / 0.72);
}

#banner .img-wrapper .img-box {
  height: 100%;
  display: inline-block;
  /* margin-right: 0.5vw; */
  position: relative;
  cursor: pointer;
}

#banner .img-wrapper .img-box .info {
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(23, 23, 23, 0.6);
  text-align: center;
  color: #fff9f1;
  font-size: 22px;
  transition: all 1.2s ease;
}
#banner .img-wrapper .img-box .info:hover {
  background: rgba(23, 23, 23, 0);
}
#banner .img-wrapper .img-box img {
  width: 15vw;
  height: 100%;
     object-position: center;
     object-fit: cover;
}

.btn-group {
  height: 15vh;
  position: absolute;
  left: 50%;
  bottom: 0%;
          transform: translate(-50%, -50%);
  transition: 1s;
}

.btn-group .btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #171717;
  background-color: #fff;
  margin: 10px;
  cursor: pointer;
  -webkit-transition: 0.4s;
  transition: 0.4s;
          box-sizing: border-box;
}

.btn-group .btn:hover {
  -webkit-transform: scale(1.2);
          transform: scale(1.2);
  background-color: #000;
}

.btn-group .btn:hover .icon {
  fill: #fff;
}

.btn-group .btn .icon {
  width: 30px;
  height: 30px;
}

.btn-group .btn .right {
          transform: rotate(180deg);
}

.img-list {
  left: 0;
}

img {
  object-fit: cover;
}
@keyframes admission {
  0% {
            transform: translate(80vw, 0);
  }
  100% {
            transform: translate(0, 0);
  }
}
.admission {
  animation: admission 0.9s;
}
.ljgd {
    cursor: pointer;
    position:absolute;
    bottom: 15vh;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 50px;
      line-height: 50px;
      font-size: 30px;
      border-radius: 10px;
      text-align: center;
      color: rgba(0,0,0,0.5);
      transition: all 0.5s;
      box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);
  }
  .ljgd:hover {
    color: #000;
  }
</style>

<template>
  <div class="box1">
    <div class="textBg"></div>
    <div class="text">
<div class="reviewVideo">
    <div class="videoBgi">
        <div class="wrapper">
            <div class="Title">
                <h2>民法知识视频</h2>
            </div>
            <div class="video">
                <iframe
                    src="https://player.bilibili.com/player.html?isOutside=true&aid=317933552&bvid=BV1zP411Y7si&cid=1253910355&p=1"
                    frameborder="no"> </iframe>
            </div>
            <div class="iconfont icon-icon_on_the_left
"></div>
            <div class="iconfont icon-icon_on_the_right
"></div>
        </div>
    </div>
    <div class="videoNav">
        <div class="videoColum columClick">
            <div class="picWord">三分钟民法典</div>
        </div>
        <div class="videoColum">
            <div class="picWord">桃园三兄弟运用民法</div>
        </div>
        <div class="videoColum">
            <div class="picWord">孩子的红包与民法</div>
        </div>
    </div>
</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecoalEffe',
  data () {
    return {
      videoSrc: ['https://player.bilibili.com/player.html?isOutside=true&aid=317933552&bvid=BV1zP411Y7si&cid=1253910355&p=1',
        'https://player.bilibili.com/player.html?isOutside=true&aid=925671962&bvid=BV18T4y1u7YR&cid=193178968&p=1',
        '//player.bilibili.com/player.html?isOutside=true&aid=246637773&bvid=BV1ov411e7PC&cid=299214555&p=1'],
      n: 0
    }
  },
  mounted () {
    console.log(this.videoSrc)

    const videoBox = document.querySelector('.video iframe')
    const videoColum = document.querySelectorAll('.videoColum')
    // 使用变量n计算到哪个视频了
    for (let i = 0; i < videoColum.length; i++) {
      videoColum[i].addEventListener('click', () => {
        console.log(this.videoSrc)
        videoBox.src = this.videoSrc[i]
        for (let j = 0; j < videoColum.length; j++) {
          videoColum[j].classList.remove('columClick')
        }
        videoColum[i].classList.add('columClick')
        // 用于左右按钮寻找第几个src
        this.n = i
      })
    }
    const videoLeftBt = document.querySelector('.videoBgi .icon-icon_on_the_left')
    const videoRightBt = document.querySelector('.videoBgi .icon-icon_on_the_right')
    videoLeftBt.addEventListener('click', () => {
      // 左按钮当n！=0时改变视频的src，当n=0时不变
      if (this.n !== 0) {
        this.n--
        videoBox.src = this.videoSrc[this.n]
        // 改变图片样式跟着视频一起
        for (let j = 0; j < videoColum.length; j++) {
          videoColum[j].classList.remove('columClick')
        }
        videoColum[this.n].classList.add('columClick')
      }
    })
    // 右按钮
    videoRightBt.addEventListener('click', () => {
      if (this.n !== 2) {
        this.n++
        videoBox.src = this.videoSrc[this.n]
        for (let j = 0; j < videoColum.length; j++) {
          videoColum[j].classList.remove('columClick')
        }
        videoColum[this.n].classList.add('columClick')
      }
    })
  }
}
</script>

<style scoped>
  .box1 {
    width: 100vw;
    height: 100vh;
    position: relative;
    font-family: '华文中宋';
    }
    .textBg {
      opacity: 0.3;
      position: absolute;
      left: 3vw;
      bottom:20%;
      background-image: url(./images/bgtext2.png);
      width: 260px;
  height: 160px;
      background-size: contain;
      background-repeat: no-repeat;
}
@keyframes op {
    0%{
        opacity: 0;
        transform: translate(-100px,0);
        filter: blur(4px);
    }
    60% {
      opacity: 0.6;
      transform: translate(-40px,0);
      filter: blur(1px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
        filter: blur(0);
    }
}
    .text {
      animation: op 1.2s linear;
cursor: default;
      position: absolute;
      top: 6vh;
      right:21vw;
      width: 79vw;
      height: 700px;
    }
/* 历届回顾视频 */
.reviewVideo {
    position: relative;
    width: 100%;
}

.videoBgi {
    width: 100%;
    background-size: cover;
    height: 720px;
}

.videoBgi .wrapper {
    position: relative;
}

.videoBgi .Title {
  text-align: center;
    color: #000;
    margin-bottom: 40px;
    font-size: 22px;
}

.video {
    margin:0 auto;
    width: 680px;
    height: 400px;
    box-shadow:  20px 0 30px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.3);
    border-radius: 10px;
}

.video iframe {
    border-radius: 10px;
    width: 100%;
    height: 100%;
}

/* 左右按钮 */
.videoBgi .icon-icon_on_the_left,
.videoBgi .icon-icon_on_the_right{
  transition: all 0.5s;
    position: absolute;
    border-radius: 5px;
    border: 1px solid #fff;
    cursor: pointer;
    width: 42px;
    height: 42px;
    text-align: center;
    line-height: 42px;
    color: #000;
    font-size: 20px;
    box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 1px 20px rgba(0,0,0,0.3);
}

.videoBgi .icon-icon_on_the_left {
    top: 60%;
    left: 11vw;
    transform: translateY(-50%);
}

.videoBgi .icon-icon_on_the_right
{
    top: 60%;
    right: 11vw;
    transform: translateY(-50%);
}

.videoBgi .icon-icon_on_the_left:hover,
.videoBgi .icon-icon_on_the_right:hover {
    background-color: #fff;
    color: #000;
  cursor: pointer;

}

.videoNav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    z-index: 2;
    bottom: 12vh;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    width: 650px;
    height: 140px;
}

.videoColum {
    position: relative;
    box-sizing: content-box;
    z-index: -2;
    cursor: pointer;
    width: 160px;
    height: 90px;
    line-height: 90px;
    box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 1px 20px rgba(0,0,0,0.3);
    background-size: cover;
    border-radius: 10px;
}
.videoColum:nth-child(1) {
  background-image: url(./images/video3.png);
}
.videoColum:nth-child(2) {
  background-image: url(./images/video.jpg);
}
.videoColum:nth-child(3) {
  background-image: url(./images/video2.jpg);
}

.columClick {
  cursor: pointer;
  border-radius: 13px;
    border: 3px solid gray;
}
.columClick .picWord {
  color: #000;
}
.columClick::after {
  background-color: rgba(0,0,0,0) !important;
}
.videoColum::after {
  transition: all 0.8s;
  content: "";
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /* border-radius: 5px; */
    background-color: rgba(0, 0, 0, .3);
    border-radius: 10px;
}

.picWord {
    width: 100%;
    font-size: 15px;
    color: #fff;
    text-align: center;
    border-radius: 10px;
    transition: all 0.3s;
}
</style>

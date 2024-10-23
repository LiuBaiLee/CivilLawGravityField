<template>
  <div class="body">
    <div class="shell">
    <div class="shell_body">
      <div class="button">
        <div class="prev" @click="prev"><i class="iconfont icon-backward_filled">&#60;</i></div>
        <div class="next" @click="next"><i class="iconfont icon-forward_filled">&#62;</i></div>
      </div>

      <div class="shell_slider">
        <div class="item" v-for="(item, index) in items" :key="index">
          <div class="frame">
            <div class="box front">
              <h1>{{ item.title }}</h1>
              <span>{{ item.description }}</span>
            </div>
            <div class="box left"></div>
            <div class="box right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: '总则', description: '' }, { title: '物权', description: '' }, { title: '合同', description: '' },  { title: '人格', description: '' }, { title: '婚姻家庭', description: '' }, { title: '继承', description: '' }, { title: '侵权责任', description: '' },
      ],
      currIndex: 0,
      interval: null,
      intervalTime: 3000
    }
  },
  mounted () {
    this.init()
    this.resize()
    this.bindEvents()
    this.timer()
  },
  methods: {
    init () {
      // 初始化函数
      this.resize()
      this.move(Math.floor(this.items.length / 2))
    },
    resize () {
      // 窗口大小变化时调整大小
      const width = Math.max(window.innerWidth * 0.23, 275)
      const height = window.innerHeight * 0.5
      const totalWidth = width * this.items.length
      // 设置slider宽度
      const slider = this.$el.querySelector('.shell_slider')
      slider.style.width = totalWidth + 'px'
      // 设置每个item的宽度和高度
      const items = this.$el.querySelectorAll('.item')
      items.forEach((item, i) => {
        item.style.width = (width - (20 * 2)) + 'px'
        item.style.height = height + 'px'
      })
    },
    bindEvents () {
      // 窗口大小变化时调整大小
      window.addEventListener('resize', this.resize)
      // 点击prev按钮切换item
      const prevBtn = this.$el.querySelector('.prev')
      const nextBtn = this.$el.querySelector('.next')
      prevBtn.addEventListener('click', () => { this.prev() })
      nextBtn.addEventListener('click', () => { this.next() })
    },
    move (index) {
      // 移动shell到指定的item
      if (index < 1) index = this.items.length
      if (index > this.items.length) index = 1
      this.currIndex = index
      // 遍历所有item
      const items = this.$el.querySelectorAll('.item')
      items.forEach((item, i) => {
        const box = item.querySelector('.frame')
        if (i === (index - 1)) {
          // 当前item添加active类并设置3D效果
          item.classList.add('item--active')
          box.style.transform = 'perspective(1200px)'
        } else {
          // 其他item移除active类并设置3D效果
          item.classList.remove('item--active')
          box.style.transform = 'perspective(1200px) rotateY(' + (i < (index - 1) ? 40 : -40) + 'deg)'
        }
      })
      // 移动slider
      const width = Math.max(window.innerWidth * 0.23, 275)
      const slider = this.$el.querySelector('.shell_slider')
      slider.style.transform = 'translate3d(' + ((index * -width) + (width / 2) + window.innerWidth / 2) + 'px, 0, 0)'
      // 设置body背景图片
      const frontBox = items[this.currIndex - 1].querySelector('.front')
      document.body.style.backgroundImage = frontBox.style.backgroundImage
    },
    prev () {
      this.move(--this.currIndex)
      this.timer()
    },
    next () {
      this.move(++this.currIndex)
      this.timer()
    },
    timer () {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.next()
      }, this.intervalTime)
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
    window.removeEventListener('resize', this.resize)
  }
}
</script>
<style scoped>
  .body {
    font-family: '华文中宋';
    position: relative;
    width: 100vw;
    height: 120vh;
    background-image: url(../../assets/bg.png);
  }
  .shell {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100%;
            box-sizing: border-box;
        }

        .button {
            display: none;
            justify-content: space-between;
            align-items: center;
            width: 380px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -80px;
        }

        .prev,
        .next {
            transition: transform 0.25s ease;
            z-index: 99999;
            bottom: 5px;
        }

        .prev i,
        .next i {
            font-size: 90px;
            color: #fff;
            cursor: pointer;
            text-shadow: 0 0 10px #ffffff;
        }

        .shell_body {
            width: 100%;
            transform: scale(.8);
            padding: 20px 0 150px 0;
        }

        .shell_slider {
            position: relative;
            transition: transform 1s ease-in-out;
            background: transparent;
        }

        .shell_body .shell_slider .item {
          cursor: pointer;
            position: relative;
            float: left;
            margin: 0 20px;
            width: 300px;transition: all 0.8s;
        }
        .item:hover {
          transform: scale(1.25);
        }
        .frame {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 1s ease-in-out;
            transform-style: preserve-3d;
        }

        .frame::after {
            content: "";
            position: absolute;
            bottom: -16%;
            width: 100%;
            height: 60px;
            background: #ffffff1c;
            box-shadow: 0px 0px 15px 5px #ffffff1c;
            transform: rotateX(90deg) translate3d(0px, -20px, 0px);
        }

        .box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: 100%;
            height: 100%;
      border: 4px solid #eee;
            perspective: 1000px;
            transform-style: preserve-3d;
            background-color:rgb(60, 56, 53);
            box-shadow:  20px 0 30px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.3);

        }

        .box h1,
        .box span {
            color: #fff;
            transform: translateZ(20px);
        }

        .box h1 {
            text-shadow: 0 0 30px rgba(0,0,0,0.25);
            font-size: 40px;
        }

        .box span {
            position: absolute;
            bottom: 20px;
            padding: 0 25px;
            text-shadow: 0 0 10px rgba(0,0,0,0.25);
        }

        .front,
        .left,
        .right {
            box-shadow: 0 0 50px #ffffff;
            background-size: cover;
        }

        .right,
        .left {
            top: 0;
            width: 60px;
            backface-visibility: hidden;
        }

        .left {
            left: 0;
            border-left-width: 5px;
            transform: translate3d(1px, 0, -60px) rotateY(-90deg);
            transform-origin: 0%;
        }

        .right {
            right: 0;
            border-right-width: 5px;
            transform: translate3d(-1px, 0, -60px) rotateY(90deg);
            transform-origin: 100%;
        }
</style>

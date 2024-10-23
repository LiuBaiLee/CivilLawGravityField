<template>
  <!-- 侧边栏 -->
  <div class="sidebar" ref="sidebar">
    <!-- 民法 -->
    <router-link to="/FuCivil">
      <i class="iconfont icon-zhishi"></i>
      <span>趣味民法</span>
    </router-link>
    <!-- 民法典 -->
    <router-link to="/CivilCode">
      <i class="iconfont icon-shu"></i>
      <span>民法典资讯</span>
    </router-link>
    <!-- 游戏 -->
    <router-link to="/EggJumo">
      <i class="iconfont icon-yule1"></i>
      <span>民法大冒险</span>
    </router-link>
    <router-link to="/AIIndex">
      <i class="iconfont icon-a-jiqirenrengongzhineng
"></i>
      <span>AI民法问答</span>
    </router-link>
    <!-- 用户 -->
    <router-link to="/userIndex">
      <i class="iconfont icon-yonghu"></i>
      <span>用户</span>
    </router-link>
    <!-- 返回顶部 -->
    <div class="sidebarTop iconfont icon-xiangshang" @click="Top">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  mounted () {
    const sidebar = this.$refs.sidebar
    window.addEventListener('scroll', () => {
      // 设置滚动事件显示侧导航
      if (document.documentElement.scrollTop >= 300) {
        sidebar.style.display = 'flex'
        // 显示与隐藏动画
        sidebar.classList.remove('none')
        sidebar.classList.add('op')
      } else {
        sidebar.classList.remove('op')
        sidebar.classList.add('none')
      }
    })
  },
  methods: {
    // 侧边栏返回顶部动画函数animateTop
    animateTop (obj, target, callbak) {
      clearInterval(obj.timer)
      obj.timer = setInterval(function () {
        if (document.documentElement.scrollTop === target) {
          clearInterval(obj.timer)
          if (callbak) {
            callbak()
          }
        }
        let step = (target - document.documentElement.scrollTop) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        window.scrollTo(0, document.documentElement.scrollTop + step)
      }, 15)
    },
    // 设置点击事件页面返回0位置
    Top () {
      this.animateTop(window, 0)
    }
  }
}
</script>

<style scoped>
/* 显示动画 */
@keyframes op {
  from {
    opacity: 0;
    transform: translateX(100%) translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(-50%);
  }
}
/* 隐藏动画 */
@keyframes none {
  from {
    display: flex;
    opacity: 1;
    transform: translateX(0) translateY(-50%);
  }
  to {
    display: none;
    opacity: 0;
    transform: translateX(100%) translateY(-50%);
  }
}
.none {
  animation: none 0.3s linear forwards;
}
.op {
  animation: op 0.3s linear;
}
/* 侧边栏 */
.sidebar {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  background-color: rgb(238, 238, 238);
  right: 0;
  top:50%;
  transform: translateY(-50%);
  height: 400px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 10px 50px rgba(6,5,59,0.25);
}
/* a */
.sidebar a {
  padding-top: 5px;
  position: relative;
  display: block;
  width: 100%;
  height: 50px;
  width: 60px;
}
/* 图标 */
.sidebar a .iconfont {
  display: flex;
  margin: 0 auto;;
  justify-content: center;
  align-items: center;
  width: 50px;
  line-height: 50px;
  font-size: 20px;
  border-radius: 10px;
}
/* 字 */
.sidebar a span {
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: calc(100% + 14px);
  background-color: rgb(210, 210, 210);
  white-space: nowrap;
  padding: 8px 16px;
  border-radius: 6px;
  transform-origin: center left;
  transition: 0.15s ease;
}
/* 设置三角 */
.sidebar a span::before {
  content: '';
  width: 12px;
  height: 12px;
  background-color: rgb(210, 210, 210);
  position: absolute;
  right: -5px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  border-radius: 3px;
}
/* 变色 */
.sidebar a.router-link-active .iconfont,
.sidebar a:hover .iconfont{
  background-color: rgb(210, 210, 210);
  outline: none;
}
.sidebar a:hover span{
  transform: calc(1);
  display: block;
}

/* 返回头部样式 */
.sidebarTop {
  border-radius: 19px;
  cursor: pointer;
  width: 100%;
  font-size: 20px;
  text-align: center;
  height: 40px;
}
</style>

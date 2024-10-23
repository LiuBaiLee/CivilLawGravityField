<template>
  <div class="casebox">
    <canvas ref="myCanvas">
    </canvas>
    <communication v-show="isShow" :screenplayContent="this.screenplayContent"></communication>
  </div>
</template>

<script>
import * as THREE from 'three';
import {OrbitControls} from '../../../node_modules/three/examples/jsm/controls/OrbitControls'//添加控制器
import { CSS2DRenderer,CSS2DObject } from '../../../node_modules/three/examples/jsm/renderers/CSS2DRenderer'//2D渲染器
import  house from './全景.jpg'

// 引入对话框
import communication from './communication.vue';
export default {
  components: { communication },
  name: '3D',
  data() {
    return {
      isShow: false,
      screenplayContent: `
      你家住在十七楼,此时家里有一袋垃圾,但此时电梯坏了，你懒得下楼,突然想到垃圾轻轻的，于是脑子一热从阳台将垃圾扔了下去.过了会你听到楼下有些热闹,你往下一望发现许多人在下边围观什么。你意识到可能与你扔的垃圾有关系,请问你是否要选择下楼察看?
      `
    }
  },
  methods: {
    createScene(){
          // 创建场景
    const scene = new THREE.Scene();

    // 创建相机
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    camera.position.z = 100;

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    // 加载纹理
    const texture = new THREE.TextureLoader().load(house);
    
    // 创建材质
    const material = new THREE.MeshBasicMaterial({ map : texture });

    material.side = THREE.DoubleSide;//双面可见
    
    // 创建一个立方体
    const geometry = new THREE.SphereGeometry(300);

    geometry.center()

    const cube = new THREE.Mesh(geometry, material);

    // 反向
    cube.geometry.scale(1,1,-1)

    scene.add(cube);


    // 添加CSS2DObject
    const div = document.createElement('div');
    div.className = 'label'
    div.innerHTML = 'Rubbish'
    div.style.pointerEvents = 'auto'//给需要点击的元素添加pointerEvents
    const tag = new CSS2DObject(div);
    tag.position.set(0, 0, 100);
    scene.add(tag);   
    // 给垃圾添加点击事件
    div.addEventListener('click',(e)=>{
      // 点击出现对话框
      this.isShow = true
      //三秒后出现选择框 
      setTimeout(() => {
      // 传入AB选项路由路径名字(case...)
      const data = {
          caseToArouter: 'case1_2_A',
          caseToBrouter: 'case1_2_B',
          but1: 'A.下楼',
          but2: 'B.不下楼'
      }
      // 将dialog弹窗添加到communication中
      const communication = document.querySelector('#communication')
      // 创建dialog弹窗
      const dialog = document.createElement('dialog')
      dialog.id = 'popup'
      // 弹窗内容
      dialog.innerHTML = `
          <div>
              <button id="but1">A.下楼</button>
              <br>
              <button id="but2">B.不下楼</button>
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
      this.$router.push({name: `case1_2_A`})
      })
      // case to B
      but2.addEventListener('click',()=>{
      this.$router.push({name: `case1_2_B`})
      })
      }, 6000);
    })

    

    // 创建CSS2DRenderer
    const CSS2Renderer = new CSS2DRenderer();
    CSS2Renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(CSS2Renderer.domElement);    
    // 重新定位
    CSS2Renderer.domElement.style.position = 'fixed';
    CSS2Renderer.domElement.style.top = '0px';
    CSS2Renderer.domElement.style.left = '0px'
    CSS2Renderer.domElement.style.pointerEvents = 'none'//给CSS2D渲染器设置pointerEvent

    // 渲染循环
    let animate = function () {
        requestAnimationFrame(animate);    
        //   cube.rotation.x += 0.01;
        //   cube.rotation.y += 0.01;    
        renderer.render(scene, camera);
        CSS2Renderer.render(scene,camera)
    };   
    animate();

    // 添加控制器
    const controls = new OrbitControls(camera, renderer.domElement);
  
    },

  },
  mounted() {
    this.createScene()
  },

  beforeDestroy(){
    // 强制刷新清除场景
    window.location.reload()
  }
  } 

</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
canvas{
    position: fixed;
    display: block;
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
}
.label{
  cursor: pointer;
}
/*设置全局的选项弹窗 */
#popup{
  /* width: 100%;
  display: flex; */
  background-color: transparent;
  position: absolute; top: -85px; left: 0px;
  border: 0px;
  border-radius: 20px;
}
/* #popup>div{
  width: 100%;
  display: flex;
  justify-content: space-around;
} */
#but1,#but2{
  padding-right: 200px!important;
  z-index: 100;
  color: #fff;
  margin-top: 10px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-right: 0px;
  border: 0px;
  background: linear-gradient(to right, #4B5B50, transparent);
  padding: 5px;
}
</style>
import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginForm from '@/views/login/LoginForm.vue'
import RegisterForm from '@/views/login/RegisterForm.vue'
import CivilCodeIndex from '@/views/CivilCode/CivilCodeIndex.vue'
import HomeIndex from '@/views/Home/HomeIndex.vue'
import TimeAxis from '@/views/CivilCode/TimeAxis.vue'
import JumpIndex from '@/views/Jump/JumpIndex.vue'
import FuCivil from '@/views/FunCivil/FuCivil.vue'
import CI from '@/views/FunCivil/CI.vue'
import BigVernacular from '@/views/CivilCode/BigVernacular.vue'
import CaseIndex from '@/views/FunCivil/CaseIndex.vue'
import AIIndex from '@/views/AIIndex/AIIndex.vue'
import EggJumo from '@/views/Egg/EggJumo.vue'
import JigsaePuzzle from '@/views/Egg/JigsaePuzzle.vue'
import HuarongRoad from '@/views/Egg/HuarongRoad.vue'
import JPIndex from '@/views/Egg/JPIndex.vue'
import GameSelect from '@/views/Egg/GameSelect.vue'
import Egg from '@/components/Egg/EggBox.vue'
import userIndex from '@/views/user/userIndex.vue'
// 情景模拟
import Case from '@/components/3D/case.vue'
// 1.高空抛物
import case1_home from '@/components/3D/1_home.vue'
import case1_2_A from '@/components/3D/1_2/1_2_A.vue'
import case1_3_A_A from '@/components/3D/1_2/1_3/1_3_A_A.vue'
import case1_4_A_A_A from '@/components/3D/1_2/1_3/1_4/1_4_A_A_A.vue'
import case1_4_A_A_B from '@/components/3D/1_2/1_3/1_4/1_4_A_A_B.vue'
import case1_5_A_A_B_A from '@/components/3D/1_2/1_3/1_4/1_5/1_5_A_A_B_A.vue'
import case1_5_A_A_B_B from '@/components/3D/1_2/1_3/1_4/1_5/1_5_A_A_B_B.vue'
import case1_3_A_B from '@/components/3D/1_2/1_3/1_3_A_B.vue'
import case1_4_A_B_A from '@/components/3D/1_2/1_3/1_4/1_4_A_B_A.vue'
import case1_4_A_B_B from '@/components/3D/1_2/1_3/1_4/1_4_A_B_B.vue'
import case1_5_A_B_B_A from '@/components/3D/1_2/1_3/1_4/1_5/1_5_A_B_B_A.vue'
import case1_5_A_B_B_B from '@/components/3D/1_2/1_3/1_4/1_5/1_5_A_B_B_B.vue'
import case1_2_B from '@/components/3D/1_2/1_2_B.vue'
import case1_3_B_A from '@/components/3D/1_2/1_3/1_3_B_A.vue'
import case1_3_B_B from '@/components/3D/1_2/1_3/1_3_B_B.vue'
import case1_4_B_B_A from '@/components/3D/1_2/1_3/1_4/1_4_B_B_A.vue'
import case1_4_B_B_B from '@/components/3D/1_2/1_3/1_4/1_4_B_B_B.vue'

// 2.扶？不扶？
import case2_home from '@/components/3D/2_home.vue'
import case2_2_A from '@/components/3D/2_2/2_2_A.vue'
import case2_3_A_A from '@/components/3D/2_2/2_3/2_3_A_A.vue'
import case2_4_A_A_A from '@/components/3D/2_2/2_3/2_4/2_4_A_A_A.vue'
import case2_4_A_A_B from '@/components/3D/2_2/2_3/2_4/2_4_A_A_B.vue'

import case2_3_A_B from '@/components/3D/2_2/2_3/2_3_A_B.vue'
import case2_2_B from '@/components/3D/2_2/2_2_B.vue'
import case2_3_B_A from '@/components/3D/2_2/2_3/2_3_B_A.vue'
import case2_3_B_B from '@/components/3D/2_2/2_3/2_3_B_B.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/Jump'
  },
  {
    path: '/Jump',
    component: JumpIndex
  },
  {
    path: '/home',
    component: HomeIndex
  },
  {
    path: '/FuCivil',
    component: FuCivil
  },
  { path: '/FuCivil/CI', component: CI },
  { path: '/FuCivil/CaseIndex', component: CaseIndex }, {
    path: '/CivilCode',
    component: CivilCodeIndex
  },
  {
    path: '/AIIndex',
    component: AIIndex
  },
  {
    path: '/CivilCode/TimeAxis',
    component: TimeAxis
  },
  {
    path: '/CivilCode/BigVernacular',
    component: BigVernacular
  },
  {
    path: '/EggJumo',
    component: EggJumo
  },
  {
    path: '/JigsaePuzzle',
    component: JigsaePuzzle
  },
  {
    path: '/JPIndex',
    component: JPIndex
  },
  {
    path: '/GameSelect',
    component: GameSelect
  },
  {
    path: '/HuarongRoad',
    component: HuarongRoad
  },
  // 注册/users/register
  {
    name: 'register',
    path: '/user/register',
    component: RegisterForm
  },
  // 登录/users/login
  {
    name: 'login',
    path: '/user/login',
    component: LoginForm
  }, // 扭蛋机,
  {
    name: 'Egg',
    path: '/Egg',
    component: Egg
  },
  {
    name:'userIndex',
    path:'/userIndex',
    component: userIndex
  },
  // 情景模拟
  {
    name: 'case',
    path: '/case',
    component: Case,
    children: [
    // 1.高空抛物
      {
        name: 'case1_home',
        path: '1_home',
        component: case1_home
      },
      {
        name: 'case1_2_A',
        path: '1_2_A',
        component: case1_2_A
      },
      {
        name: 'case1_3_A_A',
        path: '1_3_A_A',
        component: case1_3_A_A
      },
      {
        name: 'case1_4_A_A_A',
        path: '1_4_A_A_A',
        component: case1_4_A_A_A
      },
      {
        name: 'case1_4_A_A_B',
        path: '1_4_A_A_B',
        component: case1_4_A_A_B
      },
      {
        name: 'case1_5_A_A_B_A',
        path: '1_5_A_A_B_A',
        component: case1_5_A_A_B_A
      },
      {
        name: 'case1_5_A_A_B_B',
        path: '1_5_A_A_B_B',
        component: case1_5_A_A_B_B
      },

      {
        name: 'case1_3_A_B',
        path: '1_3_A_B',
        component: case1_3_A_B
      },
      {
        name: 'case1_4_A_B_A',
        path: '1_4_A_B_A',
        component: case1_4_A_B_A
      },
      {
        name: 'case1_4_A_B_B',
        path: '1_4_A_B_B',
        component: case1_4_A_B_B
      },
      {
        name: 'case1_5_A_B_B_A',
        path: '1_5_A_B_B_A',
        component: case1_5_A_B_B_A
      },
      {
        name: 'case1_5_A_B_B_B',
        path: '1_5_A_B_B_B',
        component: case1_5_A_B_B_B
      },
      {
        name: 'case1_2_B',
        path: '1_2_B',
        component: case1_2_B
      },
      {
        name: 'case1_3_B_A',
        path: '1_3_B_A',
        component: case1_3_B_A
      },
      {
        name: 'case1_3_B_B',
        path: '1_3_B_B',
        component: case1_3_B_B
      },
      {
        name: 'case1_4_B_B_A',
        path: '1_4_B_B_A',
        component: case1_4_B_B_A
      },
      {
        name: 'case1_4_B_B_B',
        path: '1_4_B_B_B',
        component: case1_4_B_B_B
      },

      // 2.扶？不扶？
      {
        name: 'case2_home',
        path: '2_home',
        component: case2_home
      },
      {
        name: 'case2_2_A',
        path: '2_2_A',
        component: case2_2_A
      },
      {
        name: 'case2_3_A_A',
        path: '2_3_A_A',
        component: case2_3_A_A
      },
      {
        name: 'case2_4_A_A_A',
        path: '2_4_A_A_A',
        component: case2_4_A_A_A
      },
      {
        name: 'case2_4_A_A_B',
        path: '2_4_A_A_B',
        component: case2_4_A_A_B
      },

      {
        name: 'case2_3_A_B',
        path: '2_3_A_B',
        component: case2_3_A_B
      },

      {
        name: 'case2_2_B',
        path: '2_2_B',
        component: case2_2_B
      },
      {
        name: 'case2_3_B_A',
        path: '2_3_B_A',
        component: case2_3_B_A
      },
      {
        name: 'case2_3_B_B',
        path: '2_3_B_B',
        component: case2_3_B_B
      }
      // {
      //     name: '',
      //     path: '',
      //     component:
      // },
    ]
  }

]

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

// 重写push
VueRouter.prototype.push = function (location, resolve, reject) {
  if (reject && resolve) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => {}, () => {})
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (reject && resolve) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => {}, () => {})
  }
}

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router

<template>
  <div class="box">
    <div class="title"><h2>民法大白话</h2></div>
      <div class="get" @click="$router.go(-1)">
        <i class="iconfont icon-left-arrow"></i>
      </div>
    <div class="BigWordBox">
      <li v-for="(item,index) in list2" :key="index">
        <h3>{{ item }}:</h3>
        <p>{{ list3[index] }}</p>
      </li>
    </div>
    
    <SideNav></SideNav>

  </div>
</template>

<script>
export default {
  name: 'BigVernacular',
  data () {
    return {
      list2: ['自然人', '法人', '法定代表人', '债务人', '保证人', '被保证人', '出租人', '承租人', '一致行动人', '委托人', '受托人',
        '善意第三人', '普通合伙人', '有限合伙人', '出票人', '名义股东', '实际出资人',
        '法律', '无民事权利能力人', '利害关系人', '诉讼时效', '除斥期间', '法律行为', '法律行为',
        '附条件', '附期限', '原始取得', '继受取得', '按份共有', '共同共有', '抗辩权', '形成权',
        '可撤销的民事法律行为', '无权代理', '地役权', '相邻权', '同时履行抗辩权',
        '不安抗辩权', '优先购买权', '买卖不破租赁', '提存', '附条件的民事法律行为'],
      list3: ['可以是中国人、外国人或者没有国籍的人、男人、女人、植物人，但机器人不是哦',
        '法人是公司是组织，不是一个人，也不是公司里面的人',
        '是个有面子的人了，代表公司签合同等，要对公司负责的人',
        '那个欠钱不还的大爷大妈',
        '那个讨债的孙子，孙女',
        '还是那个欠钱的大爷大妈',
        '有房子出租的包租婆，包租公',
        '租房子的那个',
        '穿一条裤子的人，一起干什么的人',
        '有事自己解决不了，需要去找别人帮忙的的人',
        '拿钱给人家办事的',
        '被蒙在鼓里的傻憨憨，啥都不知道',
        '可有钱出钱，有力出力',
        '可以没有脑子，得出钱',
        '给你一千万离开我女儿的爸爸',
        '就是个傀儡而已',
        '幕后的金主妈妈',
        '每个国家给公民定的道德红线，低于这个是人渣',
        '想啥干啥，都不悲法律承认的小baby',
        '跟他有利益关系的',
        '时间一过，权利虽然还在，但法律不保护了',
        '时间一过，权利直接就没有了',
        '我买了张三的二手房，给了张三500万',
        '李白去菜市场买菜',
        '条件不一定会成就，明天下雨，我就给你送伞',
        '期限一定会到来，下次下兩，我就给你送伞',
        '在乡下盖个房子食，建成了就是你的',
        '从别人那里得来的',
        '只要你份额足够多，你就是老大',
        '你一个人说了不算，卖掉要一起说了算',
        '说不见的权利',
        '一个人就能说了算的权利',
        '可以反悔的合同',
        '冒充别人去干坏事',
        '为了看?风景而限制别人盖房的权利',
        '为了通风采光而限制别人盖房子的权利',
        '双方都有说不叉的权利',
        '给钱了就睡不着了',
        '我是老大，我第一',
        '就算你买了，我还是可以照样住里面',
        '找不到债权人还钱崮，送到提存机构去',
        '条件不一定成就'
      ]
    }
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  top: 5vh;
  left: 50%;
  transform: translateX(-50%);
  font-size: 22px;
}
  .box {
  overflow-y: auto;
  min-height: 200vh;
    width: 100vw;
    font-family: '华文中宋';
    background-image: url(./images/bg.png);
  }
  .get {
  cursor: pointer;
  position: absolute;
  left:  10vw;
  top: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 40px;
  font-size: 26px;
}
.get i {
  box-shadow:  2px 0 3px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.3);
/* color: #fff; */
width: 50px;
height: 50px;
font-size: 30px;
line-height: 50px;
  border-radius: 50%;
  text-align: center;
background-color: rgb(234, 234, 234);
  font-weight: 900;
  color: rgba(0,0,0,0.3);
  transition: all 0.3s;
}
.get:hover i {
  color: #000;
}
.BigWordBox {
  padding: 10px;
  position: absolute;
  width: 50vw;
  height: 85vh;
  border-radius: 10px;
  top: 15vh;
  left: 50%;
  transform: translateX(-50%);
  /* box-shadow: 0 0 30px rgba(0,0,0,0.2); */
}
li {
  height: 30px;
  line-height: 30px;
  padding: 3px;
  display: flex;
}
li p {
  padding-left: 5px;
  font-size: 16px;
}
</style>

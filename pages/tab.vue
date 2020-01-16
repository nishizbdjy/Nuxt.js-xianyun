<template>
  <!-- vue制作tab栏 -->
  <div class="tab">
    <div class="nav" v-for="(value,index) in arr" :key="index">
      <span @click="suoyin=index" :class="{red:suoyin ===index}">{{value}}</span>
    </div>
    <!-- 分类 -->
    <ul v-if="suoyin===0">
      <li>手机列表</li>
      <li>手机列表</li>
      <li>手机列表</li>
    </ul>
    <ul v-if="suoyin===1">
      <li>电脑列表</li>
      <li>电脑列表</li>
      <li>电脑列表</li>
    </ul>
    <ul v-if="suoyin===2">
      <li>服装</li>
      <li>服装</li>
      <li>服装</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["手机", "电脑", "服装"], //tab
      suoyin: 0 //索引
    };
  }
};
</script>

<style lang="less" scoped>
.red{
    color: red
}
.nav{
    width: 500px;
    margin : 10px auto; 
    display:flex;
    justify-content: space-around;
    cursor: pointer;
}
ul {
  justify-content: center;
  justify-content: space-around;
  width: 500px;
  display: flex;
  margin: 50px auto;
  > li {
    margin: 0 12px;
  }
}
</style>
<template>
  <!-- 头部导航 -->
  <div class="box">
    <el-row class="header" type="flex" justify="space-between" align="middle">
      <!-- logo -->
      <div class="logo">
        <img src="/logo.jpg" alt />
      </div>
      <!-- 导航栏 -->
      <el-row class="daohang" type="flex" align="middle">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>
      <!-- 登陆 -->
        <nuxt-link to="/user/login" v-if="!$store.state.user.userInfo.token">登录/注册</nuxt-link>
      <!-- 下拉菜单 -->
      <el-dropdown v-else>
        <span class="el-dropdown-link">
          <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar" />
          {{$store.state.user.userInfo.user.nickname}}
          <i
            class="el-icon-arrow-down el-icon--right"
          ></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item disabled>个人中心</el-dropdown-item>
          <el-dropdown-item divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$store.state.user.userInfo);
  }
};
</script>

<style lang="less" scoped>
.box {
  box-shadow: 0 3px 0 #f5f5f5;
  position: relative;
  z-index: 2;
  min-width: 1000px;
}
.header {
  width: 1000px;
  height: 60px;
  margin: 0 auto;
}
.logo {
  width: 156px;
  img {
    display: block;
    width: 100%;
  }
}
.daohang {
  flex: 1;
  margin: 0 20px;
  a {
    //   display:block;
    //内减模式
    box-sizing: border-box;
    padding: 0px 20px;
    height: 60px;
    line-height: 60px;
    &:hover {
      border-bottom: 4px solid #409eff;
      color: #409eff;
    }
  }
  .nuxt-link-exact-active {
    background-color: #409eff;
    color: #fff;
    &:hover {
      color: #fff !important;
    }
  }
}
.el-dropdown-link{
    cursor: pointer;

  img{
    width: 36px;
    height: 36px;
    border-radius: 50px;
    vertical-align:middle;
    border: 1.5px solid #fff;
    &:hover{
      border: 1.5px solid #409eff;
    }
  }
}
</style>
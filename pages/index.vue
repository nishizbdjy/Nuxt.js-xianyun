<template>
  <div class="container">
    <!-- 首页 -->
    <!-- 轮播图 -->
    <el-carousel height="700px" class="Carousel">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <div
          class="lbt"
          :style="`background:url(${$axios.defaults.baseURL + item.url}) center center no-repeat;
          background-size:contain contain;`"
        ></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [] //轮播图数据
    };
  },
  components: {},
  mounted() {
    this.$axios({
      url: "/scenics/banners"
    }).then(res => {
      console.log(res);
      //解构赋值
      const { data } = res.data;
      console.log(data);
      this.banners = data;
    });
  }
};
</script>

<style lang="less">
.lbt {
  height: 700px;
}
.Carousel {
  width: 100%;
  min-width: 1000px;
}
</style>

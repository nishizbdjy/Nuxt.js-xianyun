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
    <!-- 搜索tab栏 -->
    <div class="banner-content">
      <div class="search-bar">
        <!-- tab栏 -->
        <el-row type="flex" class="search-tab">
          <span
            v-for="(value,index) in options"
            :key="index"
            :class="{active:current===index}"
            @click="tabshijian(index)"
          >
            <i>{{value.name}}</i>
          </span>
        </el-row>
        <!-- 输入框 -->
        <el-row type="flex" align="middle" class="search-input">
          <input :placeholder="options[current].placeholder" />
          <i class="el-icon-search"></i>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [], //轮播图数据
      //tab栏数据
      options: [
        {
          name: "攻略", //分类名
          placeholder: "搜索城市", //input
          paegUrl: "" //跳转路径
        },
        {
          name: "酒店", //分类名
          placeholder: "请输入城市搜索酒店", //input
          paegUrl: "" //跳转路径
        },
        {
          name: "机票", //分类名
          placeholder: "", //input
          paegUrl: "" //跳转路径
        }
      ],
      current: 0 //tab栏索引
    };
  },
  components: {},
  mounted() {
    //获取轮播图地址
    this.$axios({
      url: "/scenics/banners"
    }).then(res => {
      //解构赋值
      const { data } = res.data;
      this.banners = data;
    });
  },
  methods: {
    //tab栏切换
    tabshijian(index) {
      this.current = index;
      if (index === 2) {
        //机票跳转
        this.$router.push({ name: "air" });
      }
    }
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
.banner-content {
  z-index: 9;
  width: 1000px;
  position: absolute;
  left: 50%;
  top: 45%;
  margin-left: -500px;
  border-top: 1px transparent solid;

  .search-bar {
    width: 552px;
    margin: 0 auto;
  }

  .search-tab {
    .active {
      i {
        color: #333;
      }
      &::after {
        background: #eee;
      }
    }

    span {
      width: 82px;
      height: 36px;
      display: block;
      position: relative;
      margin-right: 8px;
      cursor: pointer;

      i {
        position: absolute;
        z-index: 2;
        display: block;
        width: 100%;
        height: 100%;
        line-height: 30px;
        text-align: center;
        color: #fff;
      }

      &:after {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        border: 1px rgba(255, 255, 255, 0.2) solid;
        border-bottom: none;
        transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.2deg);
        transform-origin: bottom left;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 1px 2px 0 0;
        box-sizing: border-box;
      }
    }
  }

  .search-input {
    width: 550px;
    height: 46px;
    background: #fff;
    border-radius: 0 4px 4px 4px;
    border: 1px rgba(255, 255, 255, 0.2) solid;
    border-top: none;
    box-sizing: unset;

    input {
      flex: 1;
      height: 20px;
      padding: 13px 15px;
      outline: none;
      border: 0;
      font-size: 16px;
    }

    .el-icon-search {
      cursor: pointer;
      font-size: 22px;
      padding: 0 10px;
      font-weight: bold;
    }
  }
}
</style>

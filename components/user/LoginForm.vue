<template>
  <!-- 登录页表单imput组件 -->
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <p class="form-text">
      <nuxt-link to="#">忘记密码</nuxt-link>
    </p>

    <el-button class="submit" type="primary" @click="handleLoginSubmit">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    //username验证规则处理
    var validatePass = (rule, value, callback) => {
      let trr = /^1[3-9][0-9]{9}$/.test(value);
      if (trr) {
        callback();
      } else {
        callback(new Error("手机号格式不正确"));
      }
    };
    return {
      // 表单数据
      form: {
        username: "", //用户名
        password: "" //密码
      },
      // 表单规则
      rules: {
        username: [{ validator: validatePass, trigger: "blur" }],
        password: [
          { required: true, message: "请输入至少一位数", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 提交登录
    handleLoginSubmit() {
      this.$refs.form.validate(value => {
        if (value) {
          this.$axios({
            url: "/accounts/login",
            method: "post",
            data: this.form
          }).then(res => {
            //成功回调
            //存储token
            // console.log(res);
            const {data} = res
            // localStorage.setItem("xianyuntoen", res.data.token);
            //赋值给仓库
            console.log(data);
            
            this.$store.commit('user/setuserInfo',data)
            
            //跳转主页页面
            // this.$router.push({ path: "/" });
          })
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>
<template>
  <div class="login_container">
    <div class="avater">
      <img src="../assets/logo.png" alt="">
    </div>

    <!-- 表单登入 -->
    <!-- 账号框 -->
    <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" class="loginFrom">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username">
          <i slot="prefix" class="iconfont icon-user"></i>
        </el-input>
      </el-form-item>
      <!-- 密码框 -->
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password">
          <i slot="prefix" class="iconfont icon-3702mima"></i>
        </el-input>
      </el-form-item>
      <!-- 登入按钮 -->
      <el-form-item class="btns">
        <el-button type="primaty" @click="login">登入</el-button>
        <el-button type="info" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import mix from './Login-mixins.js'
export default {
  mixins: [mix]
}
</script>

<style lang="less" scoped>
.login_container {
  width: 450px;
  height: 304px;
  background-color: #ffffff;
  border-radius: 4px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avater {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 7px;
    box-shadow: 0 0 10px #eee;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.loginFrom {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>

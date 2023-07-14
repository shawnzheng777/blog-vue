<template>
  <div class="login">
    <el-card title="登录" class="login-card">
      <template #header>
        <div class="login-card-header">登录</div>
      </template>
      <el-form :model="form" label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="js">
import { ApiPost } from "@/infrastructure/axios/request";
import { ElMessage } from "element-plus";

export default {
  name: 'login-page',
  data() {
    return {
      form: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    async onSubmit() {
      const res = await ApiPost(
        '/login',
        {
          username: this.form.username,
          password: this.form.password
        });
      if (res.base_rsp.code === 0) {
        ElMessage({
          message: '登录成功'
        });
        setTimeout(() => this.$router.push('/'), 2000);
      }
    }
  }
}
</script>

<style>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 450px;
}

.login-card-header {
  font-size: 20px;
  font-weight: bolder;
  margin-left: 10px;
}
</style>

<template>
  <el-table :data="users" style="width: 100%; height: 100%">
    <el-table-column prop="id" label="ID"></el-table-column>
    <el-table-column prop="username" label="用户名"></el-table-column>
    <el-table-column prop="uuid" label="UUID"></el-table-column>
    <el-table-column prop="create_time" label="创建时间"></el-table-column>
  </el-table>
  <div>{{ users }}</div>
</template>

<script lang="js">
import { ApiGet } from "@/infrastructure/axios/request";
export default {
  data() {
    return {
      users: []
    }
  },
  name: "App",
  components: {},
  methods: {
     async getUsers () {
      const rsp = await ApiGet("/user/get");
      this.users = rsp?.data || "-";
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  margin-top: 60px;
}

.text {
  color: red;
  font-weight: bolder;
  font-size: 20px;
}
</style>

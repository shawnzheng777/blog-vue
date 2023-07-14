<template>
  <a-card title="用户信息" class="user-card">
    <a-table :columns="columns" :data-source="dataSource"></a-table>
  </a-card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { ApiGet } from "@/infrastructure/axios/request";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "姓名",
    dataIndex: "username",
  },
  {
    title: "UUID",
    dataIndex: "uuid",
  },
  {
    title: "手机号码",
    dataIndex: "phone",
    customRender: ({ record }) => record.phone || "-",
  },
  {
    title: "创建时间",
    dataIndex: "create_time",
  },
  {
    title: "邮箱",
    dataIndex: "email",
    customRender: ({ record }) => record.email || "-",
  },
];

let dataSource = ref([]);

onMounted(async () => {
  const { data } = await ApiGet("/user/get");
  dataSource.value = data;
});
</script>

<style>
.user-card {
  width: calc(100vw - 200px);
  margin: 50px auto !important;
}
</style>

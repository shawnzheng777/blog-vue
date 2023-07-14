import { createApp } from "vue";
import App from "./App.vue";
import "nprogress/nprogress.css";
import "@/assets/css/global.scss";
import "element-plus/dist/index.css";
import "ant-design-vue/dist/antd.css";
import ElementPlus from "element-plus";
import Antd from "ant-design-vue";
import { router } from "@/router/index.js";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(Antd);
app.mount("#app");

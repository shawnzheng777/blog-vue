import { createApp } from "vue";
import App from "./App.vue";
import "nprogress/nprogress.css";
import "@/assets/css/global.scss";
import ElementUI from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(ElementUI);
app.mount("#app");

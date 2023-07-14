const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api/login": {
        target: "http://www.janyz.cn",
        changeOrigin: true,
        pathRewrite: {
          "^/api/login": "/api/auth/login",
        },
      },
      "/api": {
        target: "http://localhost:9001",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {},
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("ts")
      .test(/\.ts$/)
      .use("ts-loader")
      .loader("ts-loader")
      .end();
  },
});

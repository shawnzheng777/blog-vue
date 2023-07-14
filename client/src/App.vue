<template>
  <a-layout>
    <a-layout-header class="header">
      <a-space class="space" align="center">
        <img src="../public/favicon.png" class="logo" @click="onClickLogo" />
        <a-button type="primary" @click="onClickLogin">登录</a-button>
      </a-space>
    </a-layout-header>
    <a-layout-content class="content">
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer class="footer">Footer</a-layout-footer>
  </a-layout>
</template>

<script lang="js">
export default {
  name: "App",
  methods: {
    onClickLogo() {
      this.$router.push('/');
    },
    onClickLogin() {
      this.$router.push('/login');
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}
.header {
  background: #fff;
  .space {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
  }
}
.content {
  height: calc(100vh - 120px);
  overflow: auto;
}
.footer {
  background: #fff;
}
.logo {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
}
</style>

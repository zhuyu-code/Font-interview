<!--
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-16 10:11:15
 * @LastEditTime: 2019-08-16 10:30:12
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      list: ["做作业", "吃饭", "考试", "睡觉"]
    };
  }
};
</script>
<style scoped lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

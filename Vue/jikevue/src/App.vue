<!--
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-16 09:55:52
 * @LastEditTime: 2019-08-17 16:52:00
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <router-view name="email"></router-view>
    <router-view name="tel"></router-view>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
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

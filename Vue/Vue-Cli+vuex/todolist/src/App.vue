<!--
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-13 09:30:53
 * @LastEditTime: 2019-08-13 11:39:10
 -->
<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./common/Header";
export default {
  data() {
    return {
      url: process.env.VUE_APP_URL
    };
  },
  components: { Header }
};
</script>
<style scoped>
#app {
}
</style>


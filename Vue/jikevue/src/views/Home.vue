<!--
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-16 09:55:52
 * @LastEditTime: 2019-08-16 14:51:10
 -->
<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

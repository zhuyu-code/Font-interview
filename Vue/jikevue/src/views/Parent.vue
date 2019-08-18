<!--
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-16 12:05:20
 * @LastEditTime: 2019-08-16 14:39:36
 -->
<template>
  <div>
    I am parent dom
    <router-link to="/parent/child"> go child</router-link>
    <button @click="pushRouter">回退一个</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    pushRouter () {
      // this.$router.go(-1)
      // this.$router.push("/");
      // this.$router.back();
      const name = "zhuyuhahaha"
      this.$router.push({
        path: `/arg/${name}`
      })
    }
  }
}
</script>
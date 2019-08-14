<!--
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-13 11:31:10
 * @LastEditTime: 2019-08-13 11:36:56
 -->
 <template>
  <div>
    <header>
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
    </header>
  </div>
</template>
<style scoped>
header {
  width: 100%;
  min-width: 200px;
  height: 200px;
  text-align: center;
  padding: 20px 0;
}
a {
  text-decoration: none;
  padding: 0 10px;
}
a:hover {
  color: red;
}
</style>

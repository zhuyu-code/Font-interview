<!--
 * @Description: 封装input组件
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-17 11:01:59
 * @LastEditTime: 2019-08-17 11:49:15
 -->
<template>
  <div class="text_group">
    <!-- 组件结构 -->
    <!-- 组件容器 -->
    <div class="input_group"
         :class="{'is-invalid':error}">
      <!-- 输入框 -->
      <input :type="type"
             :value="value"
             :placeholder="placeholder"
             :name="name"
             @input="$emit('input',$event.target.value)">
      <!-- 输入框后面的按钮 -->
      <button v-if="btnTitle"
              :disabled="disabled"
              @click="$emit('btnClick')">{{btnTitle}}</button>
    </div>
    <!-- 错误提醒 -->
    <div v-if="error"
         class="invalid-feedback">{{error}}</div>
  </div>
</template>

<script>
export default {
  name: "inputGroup",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: String,
    placeholder: String,
    name: String,
    btnTitle: String,
    disabled: Boolean,
    error: String
  }
};
</script>

<style scoped>
.input_group {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
}
.input_group input {
  height: 100%;
  width: 60%;
  border: none;
  outline: none;
}
.input_group button {
  border: none;
  outline: none;
  background: #fff;
}
.input_group button[disabled] {
  color: #aaa;
}
.is-invalid {
  border: 1px solid red;
}
.invalid-feedback {
  color: red;
  padding-top: 5px;
}
</style>

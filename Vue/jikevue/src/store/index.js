/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-16 09:55:52
 * @LastEditTime: 2019-08-16 09:55:52
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions
})

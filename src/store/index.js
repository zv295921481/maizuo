import Vue from 'vue'
import Vuex from 'vuex'
import CinemaModule from './module/CinemaModule'
import CityModule from './module/CityModule'
import TabbarModule from './module/TabbarModule'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// store  全局对象
export default new Vuex.Store({
  plugins: [createPersistedState({ storage: window.sessionStorage })],

  // 公共状态
  state: {

  },
  // 集中式修改状态 - 被监控
  mutations: {

  },
  // 异步
  actions: {

  },
  // 各个模块 - 火车组装
  modules: {
    TabbarModule,
    CityModule,
    CinemaModule
  }

})
// store 只是 存在内存中

// store 配置 持久化

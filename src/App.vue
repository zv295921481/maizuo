<template>
  <div>
    <tabbar v-show="isTabbarShow"></tabbar>
    <!-- 路由容器 -->
    <section>
      <router-view></router-view>
    </section>
  </div>

</template>

<script>
import tabbar from './components/Tabbar'
import Vue from 'vue'
import { mapState } from 'vuex' // export {mapState}
Vue.component('tabbar', tabbar)

// ES6 模块导出
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState('TabbarModule', ['isTabbarShow'])
  },
  mounted () {
    // console.log(mapState("TabbarModule",['isTabbarShow']));
  },
  components: {
    tabbar: tabbar
  }
  // mounted () {
  // 1- 后端配置好 cors
  // axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5')
  // .then((res) => {
  //   console.log(res.data);
  // })

  // 2- maoyan
  // axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=307B17E0360211EBB75B0F11AABC36BB31CB3B518CDD4023A06574FD6D23C261&optimus_risk_level=71&optimus_code=10')
  //   .then((res) => {
  //     console.log(res)
  //   })

  // 3- maizuo
  // axios({
  //   url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=2854241',
  //   headers: {
  //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16073193281345089267826689","bc":"310100"}',
  //     'X-Host': 'mall.film-ticket.film.list'
  //   },
  //   method: 'GET'
  // }).then(res => {
  //   console.log(res.data);
  // })
  // }
}
</script>

<style>
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  html,body{
    height: 100%;
  }
  section{
    margin-bottom: 50px;
  }

</style>

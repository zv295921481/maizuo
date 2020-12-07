<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster" alt="">
        {{data.name}}
        <p>{{data.actors}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    // 3- maizuo
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=2854241',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16073193281345089267826689","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      },
      method: 'GET'
    }).then(res => {
      this.datalist = res.data.data.films
    })
  },
  methods: {
    handleClick (id) {
      // console.log(id);
      // location.href = '#/center'

      // 页面跳转
      // 1-路径
      // this.$router.push(`/detail/${id}`) // 编程式导航

      // 2-路由名字
      // this.$router.push({
      //   name: 'zzyDetail',
      //   params: {
      //     myid: id
      //   }
      // })

      // 3- query方式跳转详情
      this.$router.push(`/detail?id=${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>

  li{
    overflow: hidden;
    padding: 10px 10px 10px 0px;
    img{
      float: left;
      width: 100px;
    }
  }

</style>

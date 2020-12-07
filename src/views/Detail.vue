<template>
  <div>
    detail
  </div>
</template>
<script>
export default {
  mounted () {
    // this.$route 当前匹配的路由对象信息
    // console.log('利用获取的id，ajax请求后端接口', this.$route.params.myid);

    // query方式
    console.log('利用获取的id，ajax请求后端接口', this.$route.query.id)
  }
}
</script>

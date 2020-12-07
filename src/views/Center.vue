<template>
  <div>
    center
  </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    // ...
    if (!localStorage.getItem('token')) {
      next('/login')
    } else {
      next()
    }
  },

  mounted () {
    // 检车是否有token，如果没有，重定向到login

    // if(!localStorage.getItem('token')){
    //   this.$router.push('/login')
    // }

  }
}
</script>

<template>
  <div class='swiper-container'>
    <div class='swiper-wrapper'>
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper/bundle' // 引入swiper.js
import 'swiper/swiper-bundle.min.css' // 引入swiper.css
export default {
  mounted () {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  // .swiper-wrapper{
  //   img{
  //     width: 100%;
  //     height: 200px;

  //   }
  // }
</style>

<template>
  <div>
    <film-swiper>
      <div class="swiper-slide" v-for="(data, index) in imgList" :key="index">
        <div :style="{backgroundImage: 'url('+data+')'}"
          style="height: 200px; background-size: cover"
        ></div>
      </div>
    </film-swiper>
    <!-- 只有在vue中，组件上写的class，style 会自动传到组件的根节点上 -->
    <film-header style="position:sticky;top:0px;background:white;z-index:100"></film-header>

    <router-view></router-view>

    <!-- zzy负责开发 -->
  </div>
</template>

<script>
import filmHeader from './film/FilmHeader'
import filmSwiper from './film/FilmSwiper'
export default {
  data () {
    return {
      imgList: ['https://pic.maizuo.com/usr/movie/2021c926443afc4ab94193976b96c031.jpg?x-oss-process=image/quality,Q_70', 'https://pic.maizuo.com/usr/movie/fb7a16a8dd601247d680c9976b5be542.jpg?x-oss-process=image/quality,Q_70', 'https://pic.maizuo.com/usr/movie/367d957ce9b2fa06b9e9dd5e73c08db3.jpg?x-oss-process=image/quality,Q_70']
    }
  },
  components: {
    filmHeader, filmSwiper
  }
}
</script>

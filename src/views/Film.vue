<template>
  <div>
    <div style="height:100px; background: yellow;">大轮播</div>
    <film-header></film-header>

    <router-view></router-view>
  </div>
</template>

<script>
import filmHeader from './film/FilmHeader'
export default {
  components: {
    filmHeader

  }
}
</script>

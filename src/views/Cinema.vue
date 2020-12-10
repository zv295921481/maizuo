<template>
  <div>
    <van-nav-bar
      title="影院"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        {{cityName}}<van-icon name="arrow-down" color='black' />
      </template>
      <template #right>
        <van-icon name="search" size="22" color='black'/>
      </template>
    </van-nav-bar>
    <div class="cinema" v-height>
      <van-list>
      <van-cell v-for="data in cinemaList" :key="data.cinemaId">
        <div>{{ data.name }}</div>
        <div class="address">{{ data.address }}</div>
      </van-cell>
    </van-list>
  </div>
  </div>
</template>
<script>
import BetterScroll from 'better-scroll'
import Vue from 'vue'
import { NavBar, Icon, List, Cell } from 'vant'
import { mapActions, mapMutations, mapState } from 'vuex'
Vue.use(NavBar).use(Icon).use(List).use(Cell)

Vue.directive('height', {
  inserted (el) {
    el.style.height = (document.documentElement.clientHeight || document.body.clientHeight) - 100 + 'px'
  }
})
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState('CinemaModule', ['cinemaList']),
    ...mapState('CityModule', ['cityId', ['cityName']])
  },
  methods: {
    ...mapActions('CinemaModule', ['getCinemaList']),
    ...mapMutations('CinemaModule', ['clearCinemaList']),
    onClickLeft () {
      // 清空cinemaList
      // this.$store.commit("clearCinemaList")
      this.clearCinemaList()

      this.$router.push('/city')
    },
    onClickRight () {
      this.$router.push('/cinema/search')
    }
  },
  mounted () {
    // 访问cityName，cityId

    if (this.cinemaList.length === 0) {
      // vuex 异步流程
      this.getCinemaList(this.cityId)
        .then(res => {
        // 状态立即更改， 但是dom异步渲染
          this.$nextTick(() => {
            new BetterScroll('.cinema', {
              scrollbar: {
                fade: true
              }
            })
          })
        })
    } else {
      console.log('缓存')
      this.$nextTick(() => {
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true
          }
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  li{
    padding: 5px;
    .address{
      font-size: 12px;
      color: gray;
    }
  }

  .cinema{
    height: 500px;
    overflow: hidden;
    position: relative;  //修正滚动条的位置
  }
</style>

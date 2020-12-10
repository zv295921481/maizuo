<template>
  <div>
    <a href="" @click="isshow"><i class="iconfont icon-back"></i></a>
    {{title}}
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props: ['title'],
  methods: {
    ...mapMutations('TabbarModule', ['show']),
    isshow () {
      this.show()
    }

  }
}
</script>

<style lang="scss" scoped>
  div{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: white;
    a{
      float: left;
      font-size: 16px;
    }
  }
</style>

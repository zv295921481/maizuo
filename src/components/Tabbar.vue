<template>
  <nav>
    <ul>
      <router-link to="/film" tag="li" active-class="zzy">
        <span><i class="iconfont icon-training">电影</i></span>
      </router-link>
      <router-link to="/cinema" tag="li" active-class="zzy">
        <span><i class="iconfont icon-all">影院</i></span>
      </router-link>
      <router-link to="/center" tag="li" active-class="zzy">
        <span><i class="iconfont icon-account">我的</i></span>
      </router-link>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
  nav{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 25px;
    text-align: center;
    background: white;
    ul{
      display: flex;
      li{
        flex: 1;
        display: flex;
        flex-direction: column;
        i{
          fonstsize: 18px;
        }
        span{
          fontsize: 12px;
        }
      }
    }
  }
  .zzy{
    color: red;
  }
</style>

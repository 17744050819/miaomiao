<template>
<!-- 电影 -->
  <div id="main">
      <Header title="喵喵电影"></Header>
      <div id="content">
          <div class="movie_menu">
            <router-link tag="div" to="/movie/city" activeClass="myactive" class="city_name">
              <span>大连</span><i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <div class="hot_swtich">
              <router-link tag="div" to="/movie/nowplaying" activeClass="myactive" class="hot_item">正在热映</router-link>
              <router-link tag="div" to="/movie/comingsoon" activeClass="myactive" class="hot_item">即将上映</router-link>
            </div>
            <router-link tag="div" to="/movie/search" activeClass="myactive" class="search_entry">
              <i class="iconfont icon-sousuo"></i>
            </router-link>
          </div>
          <!-- 加载二级路由组件页面 -->
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
      </div>
      <TabBar></TabBar>
  </div>
</template>

<script>

import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

export default {
  name : 'Movie',
  components : {
    Header,
    TabBar
  }
}
</script>

<style scoped>
.myactive{color: red;}
</style>
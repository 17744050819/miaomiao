import Vue from 'vue'
import VueRouter from 'vue-router'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import movieRouter from './movie'

Vue.use(VueRouter)

const routes = [
  cinemaRouter,
  mineRouter,
  movieRouter,
  {
    path:'/*',
    redirect:'/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

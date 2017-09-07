import Vue from 'vue'
import Router from 'vue-router'

const StagDetail = (resolve) => {
  import('pages/StageDetail/stagdetail').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StagDetail',
      component: StagDetail
    }
  ]
})

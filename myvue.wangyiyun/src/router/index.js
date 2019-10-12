import Vue from 'vue'
import Router from 'vue-router'
import secondchild1 from "../components/secondchild1.vue";
import secondchild2 from "../components/secondchild2.vue";
import thirdchild1 from "../components/thirdchild1.vue";
import thirdchild2 from "../components/thirdchild2.vue";
import thirdchild3 from "../components/thirdchild3.vue";
import thirdchild4 from "../components/thirdchild4.vue";
import thirdchild5 from "../components/thirdchild5.vue";
import thirdchild6 from "../components/thirdchild6.vue";




Vue.use(Router)

export default new Router({
  routes: [
    //重定向
    {
      path:"/",
      redirect:"secondchild1"
    },
    {
      path:"/secondchild1",component:secondchild1,
      children:[
        {
          path:"thirdchild1",component:thirdchild1
        },
        {
          path:"thirdchild2",component:thirdchild2
        },
        {
          path:"thirdchild3",component:thirdchild3
        },
        {
          path:"thirdchild4",component:thirdchild4
        },
        {
          path:"thirdchild5",component:thirdchild5
        },
        {
          path:"thirdchild6",component:thirdchild6
        },
      ]
    },
    {
      path:"/secondchild2",component:secondchild2,
    }

  ]
})

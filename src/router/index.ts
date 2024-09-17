import { createRouter, createWebHistory } from 'vue-router'

const catchPath = 'catchAll'

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: [
      {
        path: '/some',
        name: 'some',
        component: () => import('../pages/login/LoginPage.vue'),
        meta: {
          requiresAuth: true
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login/LoginPage.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: `/:${catchPath}(.*)`,
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(router)

  if (to.redirectedFrom){
    const matches = to.redirectedFrom.matched
    console.log(matches)
    if (matches.length != 0 && matches[0].path.includes(catchPath)) {
      router.back()
    }
  }


  const authEnable = import.meta.env.VITE_AUTH == 'true'
  if (authEnable && to.matched.some((record) => record.meta.requiresAuth)) {
    //TODO: check token
    next()
  } else next()
})

export default router

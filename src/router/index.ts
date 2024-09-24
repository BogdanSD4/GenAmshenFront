import { createRouter, createWebHistory } from 'vue-router'
import { userStote } from '@/stores/userRole'

const catchPath = 'catchAll'

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: [
      {
        path: ':role/person',
        name: 'person',
        component: () => import('../pages/person/PersonalDataPage.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: ':role',
        name: 'rolePage',
        component: () => import('../pages/users/MainUserPage.vue'),
        meta: {
          requiresAuth: true
        },
        children: []
      }
    ]
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('../pages/main/MainPage.vue'),
    meta: {
      requiresAuth: false
    },
    children: [
      {
        path: '/welcome/:id',
        name: 'welcomeTo',
        component: () => import('../pages/main/MainPage.vue'),
        meta: {
          requiresAuth: false
        }
      }
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

router.beforeEach(async (to, from, next) => {
  const authEnable = import.meta.env.VITE_AUTH == 'true'
  if (authEnable && to.matched.some((record) => record.meta.requiresAuth)) {
    const user = userStote()
    const valid = await user.valid()

    const role = to.params.role as string
    console.log(role)
    if (valid) {
      if (user.role != role) {
        if (to.redirectedFrom) {
          await router.push(to.redirectedFrom.path)
        } else router.back()
      } else next()
    } else {
      next('/login')
    }
  } else next()
})

export default router

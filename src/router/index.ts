import { createRouter, createWebHistory } from 'vue-router'
import { userStore } from '@/stores/userRole'
import { UserRole } from '@/types/userRole'

const catchPath = 'catchAll'

const routes = [
  {
    path: '/',
    redirect: '/welcome',
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
    redirect: '/welcome'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authEnable = import.meta.env.VITE_AUTH == 'true'

  if (authEnable && to.matched.some((record) => record.meta.requiresAuth)) {
    const user = userStore()
    const valid = await user.valid()

    const role = to.params.role as string

    if (valid) {
      if (user.role !== role) {
        console.warn(`Role mismatch: user role is ${user.role}, but trying to access ${role}`)

        if (to.redirectedFrom) {
          return next(to.redirectedFrom.path)
        } else {
          return router.back() // или next('/some-default-route');
        }
      } else {
        return next() // Всё верно, переходим дальше.
      }
    } else {
      return next('/login') // Пользователь не аутентифицирован.
    }
  } else {
    return next() // Роут не требует аутентификации.
  }
})

export default router

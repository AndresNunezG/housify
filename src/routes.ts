import HomeView from "./shared/views/HomeView.vue"
import LoginView from "./users/presentation/ui/views/LoginView.vue"
import PageNotFound from "./shared/views/PageNotFound.vue"
import PropertiesListView from "./properties/presentation/ui/views/PropertiesListView.vue"
import PropertyFormView from "./properties/presentation/ui/views/PropertyFormView.vue"
import { getCurrentUser } from "./firebase/auth"
import { createRouter, createWebHistory } from "vue-router"
import RegisterViewVue from "./users/presentation/ui/views/RegisterView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterViewVue
  },
  {
    path: '/properties',
    name: 'properties',
    component: PropertiesListView,
    meta: { requiresAuth: true }
  },
  {
    path: '/publish-property',
    name: 'publish-property',
    component: PropertyFormView,
    meta: { requiresAuth: true }
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'not-found',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, _, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  const currentUser = await getCurrentUser()

  const exemptUrls = ['login', 'register']

  console.log("HERRRE", to);


  if (exemptUrls.includes(to.name as string) && currentUser) {
    next({ name: 'properties' })
  } else if(requiresAuth && !currentUser) {
    next({ name: 'login' })
  } else {
    next()
  }

})

export default router

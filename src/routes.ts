import HomeView from "./shared/views/HomeView.vue"
import LoginView from "./users/presentation/ui/views/LoginView.vue"
import PageNotFound from "./shared/views/PageNotFound.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: "/:pathMatch(.*)*", name: 'not-found', component: PageNotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

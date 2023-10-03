import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import App from './App.vue'
import router from './routes';
import en from "./locale/en.json"
import es from "./locale/es.json"
import './style/index.css'

const MODE = import.meta.env.MODE
if (MODE !== "development") {
  navigator.serviceWorker.register('/sw.js')
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "es",
  fallbackLocale: "es",
  messages: { en, es },
});

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')

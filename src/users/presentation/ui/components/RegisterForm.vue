<script setup lang="ts">
import { ref } from 'vue';
import { type IAuthEmailPassword } from "@users/domain/models"
import SectionDivider from '@shared/components/SectionDivider.vue'
import { toast } from "vue3-toastify";

const emit = defineEmits<{
  (e: 'onSubmitRegister', value: IAuthEmailPassword): void,
  (e: 'onSubmitRegisterProvider'): void,
}>()

const email = ref("")
const password = ref("")
const passwordRepeat = ref("")

const onSubmitRegister = () => {
  if (password !== passwordRepeat) {
    toast.warn("Passwords do not match", {
      autoClose: 3000
    })
  } else {
    emit('onSubmitRegister', { email: email.value, password: password.value } as IAuthEmailPassword)
  }
}

const onSubmitProvider = () => {
  emit('onSubmitRegisterProvider')
}
</script>

<template>
  <section>
    <h1 class="title text-center font-secondary">
        <router-link :to="{ name: 'home' }">
        Housify
      </router-link>
      </h1>
    <form @submit.prevent="onSubmitRegister" class="d-flex flex-column gap-8">
      <input v-model="email" type="text" class="input" placeholder="Correo electrónico">
      <input v-model="password" type="password" class="input" placeholder="Contraseña">
      <input v-model="passwordRepeat" type="password" class="input" placeholder="Repetir contraseña">
      <button
        class="btn btn-primary font-weight-bold"
        type="submit"
        role="button"
        :disabled="!email || !password || !passwordRepeat"
      >Regístrate</button>
    </form>
    <section-divider />
    <button class="btn bg-white my-8 w-100 border-primary p-5 px-10 d-flex justify-center align-center gap-4" @click="onSubmitProvider">
      <img src="@assets/icons/google_icon_24.svg" width="18" height="18" alt="google logo">
      <span class="font-weight-bold">Continuar con Google</span>
    </button>
    <section-divider />
    <div class="w-100 d-flex justify-center">
      <span class="text-dark o-75">¿Ya tienes una cuenta?&nbsp;</span>
      <router-link :to="{ name: 'login' }">
        <span class="text-primary font-weight-bold underline">Inicia sesión</span>
      </router-link>
    </div>
  </section>
</template>

<style scoped lang="css">
.title a {
  font-size: 2.5rem;
}
.title a, a:visited, .title a:active {
  text-decoration: none !important;
  color: inherit;
}
</style>

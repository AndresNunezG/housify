<script setup lang="ts">
import { IAuthEmailPassword } from '@/users/domain/models';
import { loginWithEmailAndPasswordUseCase, loginWithProviderUseCase } from '@users/presentation/injections/auth';
import LoginForm from '@users/presentation/ui/components/LoginForm.vue';

const eventLogin = (data: IAuthEmailPassword) => {
  loginWithEmailAndPasswordUseCase(data)
}

const eventLoginProvider = () => {
  loginWithProviderUseCase()
}
</script>

<template>
  <section class="login-form-container">
    <login-form
      @on-submit-login="eventLogin"
      @on-submit-login-provider="eventLoginProvider"
      class="login-form"
    />
  </section>
</template>

<style scoped lang="css">
.login-form-container {
  display: grid;
  background-image: url('@assets/images/about-us_img.jpg');
  background-size: 100% 100%;
  background-position: center center;
  background-size: cover;
  background-color: (0, 0, 0, 0);
  width: 100dvw;
  height: 100dvh;
  position: relative;
    z-index: 1;
  & .login-form {
    place-self: center;
    max-width: 400px;
    width: 100%;
    padding: 2rem 4rem 4rem 4rem;
    border-radius: var(--border-radius);
    background-color: #FFF;
  }
  & .login-form::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>

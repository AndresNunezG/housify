<script setup lang="ts">
import { IAuthEmailPassword } from '@/users/domain/models';
import { loginWithEmailAndPasswordUseCase, loginWithProviderUseCase } from '@users/presentation/injections/auth';
import LoginForm from '@users/presentation/ui/components/LoginForm.vue';
import { toast } from "vue3-toastify";

const eventLogin = async (data: IAuthEmailPassword) => {
  try {
    await loginWithEmailAndPasswordUseCase(data)
  } catch (error: any) {
    console.log(typeof error);
    console.log(Object.keys(error));
    console.log(Object.values(error));

    let message = "There was an error, please try later"
    if (error?.code === "auth/user-not-found" ) {
      message = "User not found"
    } else if (error?.code === "auth/wrong-password") {
      message = "User or password incorrect"
    }
    toast.error(message, { autoClose: 3000 })
  }
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
  height: 100vh;
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

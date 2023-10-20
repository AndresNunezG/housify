<script setup lang="ts">
import { IAuthEmailPassword } from '@/users/domain/models';
import { registerWithEmailAndPasswordUseCase, loginWithProviderUseCase } from '@users/presentation/injections/auth';
import RegisterForm from '@users/presentation/ui/components/RegisterForm.vue';
import { toast } from "vue3-toastify";

const eventRegister = async (data: IAuthEmailPassword) => {
  try {
    console.log("here");

    await registerWithEmailAndPasswordUseCase(data)
  } catch(error: any) {
    console.log(typeof error);
    console.log(Object.keys(error));
    console.log(Object.values(error));

    let message = "There was an error, please try later"
    if (error?.code === "auth/email-already-in-use" ) {
      message = "Email already in use"
    }
    toast.error(message, { autoClose: 3000 })
  }
}

const eventRegisterProvider = () => {
  loginWithProviderUseCase()
}
</script>

<template>
  <section class="register-form-container">
    <register-form
      @on-submit-register="eventRegister"
      @on-submit-register-provider="eventRegisterProvider"
      class="register-form"
    />
  </section>
</template>

<style scoped lang="css">
.register-form-container {
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
  & .register-form {
    place-self: center;
    max-width: 400px;
    width: 100%;
    padding: 2rem 4rem 4rem 4rem;
    border-radius: var(--border-radius);
    background-color: #FFF;
  }
  & .register-form::after {
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

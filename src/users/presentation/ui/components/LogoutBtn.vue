<script setup lang="ts">
import { logoutUseCase } from '@users/presentation/injections/auth';
import LogoutIcon from '@assets/icons/LogoutIcon.vue';
</script>

<template>
  <logout-icon @click="logoutUseCase" />
</template>

<script setup lang="ts">
import LogoutBtn from "@users/presentation/ui/components/LogoutBtn.vue"
</script>

<template>
  <header class="w-100">
    <div class="header-container d-flex gap-8 justify-between align-center">
      <router-link :to="{ name: 'home' }" class="home-link">
        <h1 class="title font-secondary">{{ $t("common.appName") }}</h1>
      </router-link>
      <div class="btns-container h-100 d-flex gap-8 px-10 justify-center align-items-center">
        <router-link :to="{ name: 'publish-property' }">
          <button class="btn w-100 font-weight-bold btn-primary">Publish</button>
        </router-link>
        <logout-btn />
      </div>
    </div>
  </header>
</template>

<style scoped lang="css">
header {
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: var(--background-color) !important;
}
.home-link {
  text-decoration: none;
}
.title {
  color: var(--highlight-color);
  margin: 1rem;
  text-decoration: none;
}
svg {
  margin: auto 0;
}
</style>

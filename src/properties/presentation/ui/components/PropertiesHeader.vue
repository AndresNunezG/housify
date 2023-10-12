<script setup lang="ts">
import LogoutBtn from "@users/presentation/ui/components/LogoutBtn.vue"
</script>

<template>
  <header class="w-100">
    <div class="header-container d-flex justify-between align-center">
      <router-link :to="{ name: 'home' }" class="home-link">
        <h1 class="title font-secondary">{{ $t("common.appName") }}</h1>
      </router-link>
      <div class="btns-container h-100 d-flex justify-center align-items-center">
        <router-link :to="{ name: 'publish-property' }">
          <button class="btn btn-primary">Publish property</button>
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
  background-color: var(--background-color);
}
.home-link {
  text-decoration: none;
}
.title {
  color: var(--highlight-color);
  margin: 1rem;
  text-decoration: none;
}
.btns-container {
  margin: auto 1rem;
  gap: 1rem;
}
.btn {
  font-weight: bold;
  height: fit-content;
}
svg {
  margin: auto 0;
}
</style>

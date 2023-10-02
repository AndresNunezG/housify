<script setup lang="ts">
import LocaleChanger from '@shared/components/LocaleChanger.vue';
</script>

<template>
  <header class="w-100">
    <div class="header-container d-flex justify-between align-items-center">
      <h1 class="title font-secondary">{{ $t("common.appName") }}</h1>
      <nav class="d-flex justify-between alingn-items-center">
        <ul class="d-flex alingn-items-center">
          <li><a href="#home">{{ $t("header.home") }}</a></li>
          <li><a href="#about-us">{{ $t("header.aboutUs") }}</a></li>
          <li><a href="#properties">{{ $t("header.properties") }}</a></li>
          <li><a href="#testimonials">{{ $t("header.testimonials") }}</a></li>
          <locale-changer />
        </ul>
      </nav>
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
.header-container {
  padding: 0 3rem;
}
.title {
  color: var(--highlight-color);
}
ul {
  list-style-type: none;
  gap: 1rem;
  & li {
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
  }
  & a, a:visited, a:hover {
    color: inherit;
    text-decoration: none !important;
  }

}
</style>

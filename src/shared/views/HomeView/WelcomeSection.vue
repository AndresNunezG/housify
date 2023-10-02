<template>
  <section id="home" class="welcome-section d-flex">
    <section class="w-50 first-section">
      <div class="title-container">
        <h1>{{ $t("home.title") }}</h1>
        <h2>{{ $t("home.subtitle") }}</h2>
        <router-link :to="{ name: 'login' }">
          <button class="btn btn-primary">
            {{ $t("home.getStarted") }}
          </button>
        </router-link>
      </div>
    </section>
    <section class="w-50 second-section">
      <div class="img-container d-flex flex-column">
        <img
          class="main-img"
          src="@assets/images/about-us_img.jpg"
          alt="building-image Imagen de Hands off my tags! Michael Gaida en Pixabay"
        />
      </div>
    </section>
  </section>
</template>

<style scoped lang="css">
.welcome-section {
  margin-top: 6rem;
  gap: 3rem;
  padding: 3rem;
}
button {
  border-color: inherit;
  border-radius: 1rem 0 1rem 1rem;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  font-size: 1rem;
}
.first-section {
  & .title-container {
    & h1 {
      font-size: 3rem;
      margin-bottom: 0;
    }
    & h2 {
      font-size: 1.2rem;
      font-weight: 400;
      color: var(--paragraph-color);
      margin-bottom: 2rem;
    }
  }
}
.second-section {
  & img {
    border-radius: 6rem 6rem 0 6rem;
  }
}
</style>

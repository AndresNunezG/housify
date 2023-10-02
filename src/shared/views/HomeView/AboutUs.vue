<template>
  <section id="about-us" class="about-us__section d-flex">
    <section class="w-50 first-section">
      <div class="img-container d-flex flex-column">
        <img
          class="about-us-img"
          src="@assets/images/main_img.jpg"
          alt="Imagen de Ulises Casaraz en Pixabay"
        >
      </div>
    </section>
    <section class="w-50 first-section">
      <div class="d-flex flex-column about_us">
        <h3 class="font-secondary title">{{ $t("aboutUs.aboutUsLabel") }}</h3>
        <p class="subtitle">{{ $t("aboutUs.subtitle") }}</p>
        <p class="paragraph">{{ $t("aboutUs.paragraph") }}</p>
      </div>
    </section>
  </section>
</template>

<style scoped lang="css">
.about-us__section {
  background-color: var(--background-secondary-color);
  gap: 3rem;
  margin-top: 3rem;
  padding: 3rem;
}
.first-section {
  & img {
    border-radius: 6rem 6rem 6rem 0;
  }
}
.about_us {
  & .title {
    font-size: 1.5rem;
    color: var(--button-color);
    margin: 0;
  }
  & .subtitle {
    font-size: 2.2rem;
    font-weight: 800;
    margin-top: 1.2rem;
    margin-bottom: 0.5rem;
  }
  & .paragraph {
    margin: 0;
  }
}
</style>

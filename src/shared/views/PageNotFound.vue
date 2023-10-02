<template>
  <section class="page-not-found">
    <div class="container">
      <div class="glitch-wrapper">
        <div class="glitch" data-glitch="404">404</div>
      </div>
      <h1>{{ $t("notFound.labelParagraph") }}</h1>
      <h3>{{ $t("notFound.losedParagraph") }}</h3>
      <router-link :to="{ name: 'home' }">
        {{ $t("notFound.losedParagraph") }}
      </router-link>
    </div>
  </section>
</template>

<style scoped lang="css">
.page-not-found {
  display: grid;
  height: 100dvh;
  background-color: var(--background-secondary-color);
}

.container {
  place-self: center;
  text-align: center;
  border-radius: 16px;
  background-color: var(--background-color);
  padding: 2rem 4rem;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
}

.glitch-wrapper {
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
}

.glitch {
   position: relative;
   font-size: 80px;
   font-weight: 700;
   line-height: 1.2;
   letter-spacing: 5px;
   z-index: 1;
}

.glitch:before,
.glitch:after {
   display: block;
   content: attr(data-glitch);
   position: absolute;
   top: 0;
   left: 0;
   opacity: 0.8;
}

.glitch:before {
   animation: glitch-color 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
   color: var(--button-color);
   z-index: -1;
}

.glitch:after {
   animation: glitch-color 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
   color: var(--tertiary-color);
   z-index: -2;
}

@keyframes glitch-color {
   0% {
      transform: translate(0);
   }

   20% {
      transform: translate(-2px, 2px);
   }

   40% {
      transform: translate(-2px, -2px);
   }

   60% {
      transform: translate(2px, 2px);
   }

   80% {
      transform: translate(2px, -2px);
   }

   to {
      transform: translate(0);
   }
}
</style>

<script setup lang="ts">
import HandShakeIcon from '@assets/icons/HandShakeIcon.vue'
import HomeApartmentIcon from '@assets/icons/HomeApartmentIcon.vue'
import PublishHomeIcon from '@assets/icons/PublishHomeIcon.vue'
</script>

<template>
  <section class="our-services">
    <h3 class="title text-center">{{ $t("ourServices.ourServicesLabel") }}</h3>
    <section class="cards w-100 justify-between">
      <div class="service-card">
        <hand-shake-icon class="icon" fill="#3da9fc" :height="36" :width="36" />
        <p class="service-title">{{ $t("ourServices.buy") }}</p>
        <p class="paragraph">{{ $t("ourServices.buyParagraph") }}</p>
      </div>
      <div class="service-card">
        <home-apartment-icon class="icon" fill="#3da9fc" :height="36" :width="36" />
        <p class="service-title">{{ $t("ourServices.rent") }}</p>
        <p class="paragraph">{{ $t("ourServices.rentParagraph") }}</p>
      </div>
      <div class="service-card">
        <publish-home-icon class="icon" fill="#3da9fc" :height="36" :width="36" />
        <p class="service-title">{{ $t("ourServices.publish") }}</p>
        <p class="paragraph">{{ $t("ourServices.publishParagraph") }}</p>
      </div>
    </section>
  </section>
</template>

<style scoped lang="css">
.our-services {
  padding: 3rem;
}
.title {
  font-size: 1.5rem;
  font-weight: 900;
  margin-top: 0;
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.service-card {
  padding: 1rem 3rem;
  border-radius: 0 3rem 3rem 3rem;
  -webkit-box-shadow: 0px 0px 68px 3px rgba(0,0,0,0.29);
  -moz-box-shadow: 0px 0px 68px 3px rgba(0,0,0,0.29);
  box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.1);
  text-align: center;
  & .icon {
    border-radius: 50%;
    border: solid 2px var(--button-color);
    padding: 0.5rem;
  }
  & .service-title {
    font-weight: 700;
    font-size: 1.2rem;
    margin: 1rem 0 0 0;
  }
  & .paragraph {
    margin: 0.5rem 0;
  }
}
</style>

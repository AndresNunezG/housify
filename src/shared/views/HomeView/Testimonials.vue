<script setup lang="ts">
import { ref } from 'vue';
import { TESTIMONIALS, TESTIMONIALS_PER_SLIDE } from './utils'
import TestimonialCard from './TestimonialCard.vue'
import TestimonialSlider from './TestimonialSlider.vue';

const testimonials = ref(TESTIMONIALS.slice(0, TESTIMONIALS_PER_SLIDE))

const eventChangeSlide = (indexStart: number, indexEnd: number) => {
  testimonials.value = [ ...TESTIMONIALS.slice(indexStart, indexEnd) ]
}
</script>

<template>
  <section id="testimonials" class="testimonials">
    <h3 class="title text-center">{{ $t("testimonials.testimonialsLabel") }}</h3>
    <section class="testimonials-container">
      <testimonial-card
        v-for="testimonial, index in testimonials"
        :key="`${index}${testimonial.name}`"
        :testimonial="testimonial"
      />
    </section>
    <testimonial-slider
      :testimonials="TESTIMONIALS"
      @on-change-slide="eventChangeSlide"
    />
  </section>
</template>

<style scoped lang="css">
.testimonials {
  padding: 3rem;
}
.title {
  font-size: 1.5rem;
  font-weight: 900;
  margin-top: 0;
}
.testimonials-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  & .testimonial-card {
    grid-column: 1fr;
  }
}
</style>

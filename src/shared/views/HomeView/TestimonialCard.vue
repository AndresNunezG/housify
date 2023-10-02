<script setup lang="ts">
import { ITestimonial } from './utils'

defineProps<{
  testimonial: ITestimonial
}>()
</script>

<template>
  <div class="testimonial-card d-flex">
    <img
      :src="(testimonial.image as string)"
      alt="person image"
    />
    <div>
      <p class="title">{{ testimonial.name }}</p>
      <span class="occupation">{{ testimonial.occupation }}</span>
      <p>{{ testimonial.testimonial }}</p>
    </div>
  </div>
</template>

<style scoped lang="css">
.testimonial-card {
  border-radius: 2rem 2rem 0 2rem;
  padding: 1.5rem;
  gap: 1rem;
  background-color: var(--background-secondary-color);
  & img {
    border-radius: 2rem 2rem 0 2rem;
    width: 150px !important;
    height: 150px !important;
    object-fit: cover;
    filter: grayscale(30%);
  }
  & .title {
    font-weight: 600;
    margin-bottom: 0.3rem;
  }
  & .occupation {
    color: var(--paragraph-color);
    font-size: 0.8rem;
  }
}
</style>

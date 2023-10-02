<script setup lang="ts">
import { ref, computed } from 'vue';
import { type ITestimonial, TESTIMONIALS_PER_SLIDE } from './utils';

const props = defineProps<{
  testimonials: ITestimonial[]
}>()

const emits = defineEmits<{
  (e: 'onChangeSlide', indexStart: number, indexEnd: number): void
}>()

const slidesAmount = computed(() => props.testimonials.length / TESTIMONIALS_PER_SLIDE)
const currentSlides = ref(1)

const onChangeSlides = (slideIndex: number) => {
  currentSlides.value = slideIndex
  const indexStart = (slideIndex - 1) * TESTIMONIALS_PER_SLIDE
  const indexEnd = indexStart + TESTIMONIALS_PER_SLIDE
  emits("onChangeSlide", indexStart, indexEnd)
}
</script>

<template>
  <div class="w-100 d-flex justify-center slider-container">
    <button
      v-for="slideIndex in slidesAmount"
      class="slider"
      @click="onChangeSlides(slideIndex)"
      :class="{ 'selected': slideIndex === currentSlides }"
    >
    </button>
  </div>
</template>

<style scoped lang="css">
.slider-container {
  gap: 10px;
}
.slider {
  cursor: pointer;
  height: 10px;
  width: 10px;
  padding: 0;
  margin: 0;
  margin-top: 1.5rem;
  border-radius: 50%;
  border: solid 2px var(--button-color);
  background-color: var(--background-color);
}
.selected {
  background-color: var(--button-color);
}
</style>

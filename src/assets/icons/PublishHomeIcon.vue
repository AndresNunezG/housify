<script setup lang="ts">
interface IconProps {
  fill?: string
  height?: number
  width?: number
}
const props = withDefaults(defineProps<IconProps>(), {
  fill: "#DDD",
  height: 24,
  width: 24
})
</script>

<template>
  <svg :fill="props.fill" xmlns="http://www.w3.org/2000/svg" :height="height" :width="width" viewBox="0 -960 960 960"><path d="M760-400v-260L560-800 360-660v60h-80v-100l280-200 280 200v300h-80ZM560-800Zm20 160h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm60 500-280-78v58H40v-440h318l248 92q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60ZM120-160h80v-280h-80v280Zm438 16 238-74q-3-11-13.5-16.5T760-240H568q-31 0-56-4t-54-14l-69-24 23-76 80 26q18 6 42 9t66 3q0-11-6.5-21T578-354l-234-86h-64v220l278 76ZM200-300Zm400-20Zm-400 20Zm80 0Z"/></svg>
</template>

<script setup lang="ts">
interface IconProps {
  fill?: string
}
const props = withDefaults(defineProps<IconProps>(), {
  fill: "#DDD"
})
</script>

<template>
  <svg :fill="props.fill" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
</template>

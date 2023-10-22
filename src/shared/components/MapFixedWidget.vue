<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps<{
  latitude: number,
  longitude: number
}>()

async function initMap() {
  let map
  const position = { lat: props.latitude, lng: props.longitude }
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps")
  //@ts-ignore
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")

  map = new Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: position,
      mapId: 'WIDGET_FIXED_MAP_ID',
      disableDefaultUI: true,
    },
  )

  new AdvancedMarkerElement({
    map,
    position
  })

}

onMounted(() => {
  initMap();
})
</script>

<template>
  <div id="map"></div>
</template>

<style scoped lang="css">
#map {
  height: 200px;
  width: 200px;
  border-radius: var(--border-radius);
}
</style>

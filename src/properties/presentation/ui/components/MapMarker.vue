<script setup lang="js">
import { onMounted, ref } from 'vue';
import { selectedMarker } from "@properties/presentation/state/propertyFormController"

async function createAndCleanMarker({ map, position }) {
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")
  if (Object.keys(selectedMarker.value)?.length) {
    selectedMarker.value.setMap(null)
  }
  const marker =  new AdvancedMarkerElement({
    map,
    position
  })
  selectedMarker.value = marker
  marker.addListener('click', () => {
    map.setCenter(marker.position)
  })
}

async function initMap() {
  let map
  const position = { lat: 4.6576456, lng: -74.1012288 };
  const { Map } = await google.maps.importLibrary("maps")

  map = new Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: position,
      mapId: 'PROPERTY_FORM_MAP_ID',
    }
  );

  await createAndCleanMarker(
    {
      map: map,
      position: position
    }
  )

  map.addListener('click', async (event) => {
    await createAndCleanMarker(
      {
        map: map,
        position: {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        }
      }
    )
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
  height: 300px;
  width: 100%;
  border-radius: var(--border-radius);
}
</style>

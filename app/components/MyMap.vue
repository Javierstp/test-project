<script setup lang="ts">
import { onMounted } from "vue";

onMounted(async () => {
  const L = await import("leaflet");

  const map = L.map("map").setView([8.9824, -79.5199], 13);

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
      attribution: "&copy; OpenStreetMap",
    },
  ).addTo(map);
});
</script>
<template>
  <ClientOnly>
    <div id="map" class="h-125 w-full rounded-xl" />
  </ClientOnly>
</template>

<script setup lang="ts">
const search = useSearch();
</script>

<template>
  <UInput
    v-model="search"
    placeholder="Buscar..."
    size="md"
    variant="outline"
  />
</template>

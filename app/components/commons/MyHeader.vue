<script setup lang="ts">
defineEmits(["toggle-side"]);
</script>
<template>
  <UHeader>
    <template #left>
      <UButton
        icon="i-lucide-menu"
        variant="ghost"
        @click="$emit('toggle-side', 'left')"
      />
    </template>
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2 text-xl text-red-600">
        <UIcon name="i-lucide-beef" />
      </NuxtLink>
    </template>
  </UHeader>
</template>

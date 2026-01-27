<script setup lang="ts">
import type { Meal } from "~/types/meal";

defineProps<{
  meal: Meal;
}>();
</script>

<template>
  <UCard
    class="transition hover:scale-105 m-4 rounded-xl"
    :ui="{ body: 'p-6', header: 'p-0 sm:p-0', footer: 'pt-0' }"
    variant="outline"
  >
    <template #header>
      <NuxtImg
        :src="meal.strMealThumb"
        class="w-full h-56 object-cover rounded-t-xl"
        alt="Meal image"
      />
    </template>

    <h2
      class="text-2xl font-bold text-blue-950 dark:text-white mb-2 line-clamp-2"
    >
      {{ meal.strMeal }}
    </h2>

    <p class="text-gray-500 text-sm">Categoría: {{ meal.strCategory }}</p>
  </UCard>
</template>

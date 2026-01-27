<script setup lang="ts">
definePageMeta({
  layout: "meals",
});

const route = useRoute();
const router = useRouter();

const { getMealById } = useMeals();

const { data: meal } = await useAsyncData(`meal-${route.params.id}`, () =>
  getMealById(route.params.id as string),
);

const goBack = () => {
  router.back();
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen text-white py-10"
  >
    <UButton @click="goBack">Volver</UButton>
    <div
      v-if="meal"
      class="max-w-7xl mx-24 p-6 border border-gray-600 rounded-lg shadow-lg bg-slate-100"
    >
      <div class="flex flex-col justify-center md:items-center gap-6">
        <h1 class="text-3xl font-bold mb-4 text-blue-950 dark:text-white">
          {{ meal.strMeal }}
        </h1>
        <NuxtImg
          :src="meal.strMealThumb"
          alt="Meal thumbnail"
          class="w-full sm:48 md:w-64 rounded-lg shadow-md"
        />

        <p class="dark:text-gray-100 text-blue-950 text-justify">
          {{ meal.strInstructions }}
        </p>
      </div>

      <div class="flex justify-between text-sm text-gray-300 px-6 py-4">
        <UBadge
          variant="subtle"
          icon="i-lucide-utensils"
          color="primary"
          size="lg"
        >
          {{ meal.strCategory }}
        </UBadge>
        <span class="text-blue-950 dark:text-white">{{ meal.strArea }}</span>
      </div>
    </div>

    <div v-else class="flex justify-center items-center h-screen">
      <p class="text-gray-500 text-lg">Cargando receta...</p>
    </div>
  </div>
</template>

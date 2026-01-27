<script setup lang="ts">
const { loadMeals, searchMeals } = useMeals();
const search = useSearch();

const debouncedSearch = ref(search.value);

let timeout: ReturnType<typeof setTimeout>;

watch(search, (value) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    debouncedSearch.value = value;
  }, 300);
});

const { data: meals, pending } = await useAsyncData(
  () => `meals-${debouncedSearch.value}`,
  () =>
    debouncedSearch.value ? searchMeals(debouncedSearch.value) : loadMeals(),
  {
    watch: [debouncedSearch],
  },
);

const itemsPerPage = 12;
const paginatedMeals = computed(() => {
  if (!meals.value) return [];
  const start = (page.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return meals.value.slice(start, end);
});
const totalMeals = computed(() => meals.value?.length || 0);
const page = ref(meals.value ? 1 : 0);
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="mb-6 text-center text-2xl font-bold">Meals</h1>

    <div class="">
      <SearchBar />
    </div>

    <p v-if="pending" class="text-center text-gray-500">Loading meals...</p>

    <div
      v-else-if="meals?.length"
      class="flex flex-wrap items-center justify-center"
    >
      <NuxtLink
        v-for="meal in paginatedMeals"
        :key="meal.idMeal"
        :to="`/meals/${meal.idMeal}`"
      >
        <MealCard :meal="meal" />
      </NuxtLink>
    </div>

    <p v-else class="mt-10 text-center text-gray-500">No results found</p>
    <UPagination
      v-model:page="page"
      :total="totalMeals"
      :sibling-count="1"
      :items-per-page="itemsPerPage"
    />
  </div>
</template>

import type { Meal, MealsResponse } from "~/types/meal";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const useMeals = () => {
  const loadMeals = async (): Promise<Meal[]> => {
    const { data } = await useFetch<MealsResponse>(`${BASE_URL}/search.php`, {
      query: { s: "" },
    });

    return data.value?.meals || [];
  };

  const searchMeals = async (query: string) => {
    const { meals } = await $fetch<MealsResponse>(`${BASE_URL}/search.php`, {
      query: { s: query },
    });
    return meals || [];
  };

  const getMealById = async (id: string): Promise<Meal | null> => {
    const { data } = await useFetch<MealsResponse>(`${BASE_URL}/lookup.php`, {
      query: { i: id },
    });
    return data.value?.meals?.[0] || null;
  };

  return {
    searchMeals,
    getMealById,
    loadMeals,
  };
};

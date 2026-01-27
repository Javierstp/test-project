<script setup lang="ts">
const route = useRoute();
const links = [
  {
    label: "Inicio",
    to: "/",
    active: route.path === "/",
  },
  {
    label: "Comidas",
    to: "/meals",
    active: route.path.startsWith("/meals"),
  },
  {
    label: "Favoritos",
    to: "/favorites",
    active: route.path.startsWith("/favorites"),
  },
];
</script>
<template>
  <div>
    <UHeader mode="drawer" :toggle="{ color: 'primary', variant: 'subtle' }">
      <template #title>
        <NuxtLink to="/" class="flex items-center gap-2 text-xl text-red-600">
          <Logo class="h-6 w-6 border border-gray-400" />
          <span class="font-bold">Meals layout</span>
        </NuxtLink>
      </template>

      <template #right>
        <UNavbar :links="links" />
      </template>
    </UHeader>

    <NuxtPage />

    <UFooter>
      <div class="text-center text-sm text-gray-500">
        &copy; 2024 Meals App. All rights reserved.
      </div>
    </UFooter>
  </div>
</template>

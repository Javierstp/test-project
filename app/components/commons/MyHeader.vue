<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Inicio",
    to: "/",
    active: route.path === "/",
  },
  {
    label: "Sucursales",
    to: "/info/branches",
    active: route.path.startsWith("/branches"),
  },
  {
    label: "Sobre nosotros",
    to: "/info/about",
    active: route.path.startsWith("/about"),
  },
  {
    label: "Contacto",
    to: "/contact",
    active: route.path.startsWith("/contact"),
  },
]);
</script>
<template>
  <UHeader
    toggle-side="left"
    mode="slideover"
    :toggle="{ color: 'primary', variant: 'ghost' }"
  >
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2 text-xl text-red-600">
        <UIcon name="i-lucide-beef" />
      </NuxtLink>
    </template>

    <UNavigationMenu class="hidden md:flex" :items="items" />

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
        active-variant="ghost"
      />
    </template>
  </UHeader>
</template>

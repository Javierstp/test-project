<script setup lang="ts">
const isOpen = ref(false);

const items = [
  { label: "Inicio", to: "/" },
  { label: "Sucursales", to: "/info/branches" },
  { label: "Sobre nosotros", to: "/info/about" },
  { label: "Contacto", to: "/contact" },
];
</script>
<template>
  <div class="min-h-screen flex">
    <!-- desktop -->
    <UAside class="hidden md:flex w-64 border-r">
      <UNavigationMenu :items="items" orientation="vertical" class="p-4" />
    </UAside>

    <!-- mobile -->
    <USlideover v-model="isOpen" side="left">
      <UNavigationMenu :items="items" orientation="vertical" class="p-4" />
    </USlideover>
    <!-- Content -->
    <main class="flex-1 p-6">
      <UButton
        icon="i-lucide-menu"
        variant="ghost"
        class="md:hidden mb-4"
        @click="isOpen = true"
      />
    </main>
  </div>
</template>

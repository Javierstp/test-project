<script setup lang="ts"></script>
<template>
  <UCard
    variant="soft"
    :ui="{
      root: '',
      header: 'p-0 sm:p-0 border-none',
      body: 'border-none',
    }"
    class="max-w-md"
  >
    <template #header>
      <NuxtImg class="bg-green-200 min-h-80 w-full" />
    </template>

    <h2 class="text-xl font-bold">Nombre de sucursal</h2>

    <template #footer>
      <div class="sm:flex gap-6">
        <UButton color="primary" icon="i-lucide-phone-call" class="w-full mt-4">
          Llamar</UButton
        >
        <UButton
          color="primary"
          icon="i-lucide-calendar-plus"
          class="w-full mt-4"
        >
          Reservar
        </UButton>
        <UButton color="primary" icon="i-lucide-clock" class="w-full mt-4">
          Horarios</UButton
        >
      </div>
    </template>
  </UCard>
</template>

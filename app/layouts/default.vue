<script setup lang="ts">
import SideBar from "~/components/commons/SideBar.vue";
</script>

<template>
  <div>
    <CommonsMyHeader />
    <SideBar />
    <UMain>
      <NuxtPage />
    </UMain>
    <CommonsMyFooter />
  </div>
</template>

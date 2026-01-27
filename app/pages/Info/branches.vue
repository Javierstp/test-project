<script setup lang="ts">
import MyMap from "~/components/MyMap.vue";
</script>
<template>
  <main>
    <section class="w-full">
      <MyMap />
    </section>
    <div class="mt-12 lg:px-12">
      <section
        class="grid gap-6 place-items-center grid-cols-[repeat(auto-fit,minmax(400px,1fr))]"
      >
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
      </section>
    </div>
  </main>
</template>

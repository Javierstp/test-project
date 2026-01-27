<script setup lang="ts">
const props = defineProps<{
  title: string;
  description?: string;
  icon?: string;
  imageSrc?: string;
}>();

const showImage = !!props.imageSrc;
const showIcon = !!props.icon;
</script>
<template>
  <div
    class="border border-gray-200 p-4 rounded-md shadow-sm text-center w-full"
  >
    <div>
      <UIcon v-if="showIcon" :name="props.icon" size="48" class="mb-4" />
      <NuxtImg
        v-if="showImage"
        :src="props.imageSrc"
        alt="Card Image"
        class="w-24 h-24 mb-4 object-cover rounded-full"
      />
    </div>
    <h2 class="text-2xl font-bold mb-2">{{ props.title }}</h2>
    <p v-if="props.description" class="text-gray-600">
      {{ props.description }}
    </p>
  </div>
</template>

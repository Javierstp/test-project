<script setup lang="ts">
const value = ref("");

defineProps<{
  label: string;
  required?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <UInput
    v-model="value"
    :required="required"
    placeholder=""
    :ui="{ base: 'peer h-12' }"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <label
      class="pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal"
    >
      <span class="inline-flex bg-default px-1">{{ label }}</span>
    </label>
  </UInput>
</template>

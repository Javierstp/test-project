<script setup lang="ts">
import FloatingInput from "~/components/commons/FloatingInput.vue";
</script>

<template>
  <main class="w-full flex justify-center">
    <div
      class="w-full max-w-7xl mt-12 px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row gap-10"
    >
      <!-- Imagen -->
      <section
        class="w-full lg:w-1/2 h-48 sm:h-64 lg:h-auto rounded-xl bg-green-200 border border-gray-300"
      />

      <!-- Form -->
      <section class="w-full lg:w-1/2">
        <header class="flex flex-col items-center mb-6 text-center">
          <h2 class="text-xl sm:text-lg font-bold">Contáctenos</h2>
          <p class="text-sm sm:text-xs text-muted max-w-sm">
            Resolvemos sus dudas a solo un mensaje de distancia
          </p>
        </header>

        <UForm class="w-full">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FloatingInput label="Nombre" required />
            <FloatingInput label="Apellido" required />
            <FloatingInput label="Email" required />
            <FloatingInput label="Teléfono" required />

            <UTextarea
              required
              placeholder=""
              :rows="5"
              :ui="{ base: 'peer pt-6 text-base resize-none' }"
              class="col-span-full"
              autoresize
            >
              <label
                class="pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal"
              >
                <span class="inline-flex bg-default px-1">Asunto</span>
              </label>
            </UTextarea>
          </div>

          <div class="w-full flex justify-center">
            <UButton
              class="mt-6 w-full sm:w-auto flex justify-center"
              type="submit"
              color="primary"
              size="lg"
            >
              Enviar
            </UButton>
          </div>
        </UForm>

        <p class="text-xs text-center mt-6 text-muted">
          ¡Nos comprometemos a responder a todas las consultas en un plazo de 24
          horas!
        </p>
      </section>
    </div>
  </main>
</template>

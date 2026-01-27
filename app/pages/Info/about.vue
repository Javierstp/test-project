<script setup lang="ts">
import ImageBanner from "~/components/ImageBanner.vue";
</script>

<template>
  <main class="w-full">
    <!-- Banner -->
    <section>
      <ImageBanner />
    </section>

    <div class="w-full px-12">
      <!-- About -->
      <section class="max-w-6xl mx-auto px-6 mt-16 text-center">
        <h1 class="text-4xl font-bold mb-6">About Us</h1>

        <p class="text-lg mb-4 text-justify">
          Welcome to our application! We are dedicated to providing the best
          service possible.
        </p>

        <p class="text-lg text-justify mb-8">
          Our team is passionate about creating innovative solutions to help you
          achieve your goals.
        </p>

        <UButton label="Get Started" size="xl" />
      </section>

      <!-- Why the company -->
      <section class="max-w-6xl mx-auto mt-20">
        <h2 class="text-3xl font-bold text-center mb-10">Why the company?</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MyCard
            title="Test"
            icon="i-lucide-beef"
            description="Test description"
          />
          <MyCard
            title="Test"
            icon="i-lucide-beef"
            description="Test description"
          />
          <MyCard
            title="Test"
            icon="i-lucide-beef"
            description="Test description"
          />
        </div>
      </section>

      <!-- Images -->
      <section class="max-w-6xl mx-auto mt-20 space-y-12">
        <NuxtImg
          src=""
          alt="img"
          class="w-full h-96 rounded-2xl bg-green-200 object-cover"
        />
        <NuxtImg
          src=""
          alt="img"
          class="w-full h-96 rounded-2xl bg-green-200 object-cover"
        />
      </section>

      <!-- Contact Form -->
      <section class="max-w-6xl mx-auto mt-24 mb-24">
        <h2 class="text-3xl font-bold mb-8 text-center">Contact Us</h2>

        <UForm class="flex flex-col items-center">
          <div class="w-full">
            <UFormField label="Company name" name="companyName">
              <UInput name="companyName" class="w-full" />
            </UFormField>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full">
            <UFormField label="Name" name="name">
              <UInput name="name" class="w-full" />
            </UFormField>

            <UFormField label="Phone" name="phone">
              <UInput name="phone" class="w-full" />
            </UFormField>

            <UFormField label="Email" name="email">
              <UInput name="email" class="w-full" />
            </UFormField>

            <UFormField label="Confirm email" name="confirmEmail">
              <UInput name="confirmEmail" class="w-full" />
            </UFormField>
          </div>

          <UButton class="mt-6 w-full flex justify-center" type="submit">
            Submit
          </UButton>
        </UForm>
      </section>
    </div>
  </main>
</template>

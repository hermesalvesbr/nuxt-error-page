<script setup lang="ts">
console.log("Fruits");
const ogImageOptions = {
  title: "My awesome home page.",
};
</script>
<template>
  <v-container>
    <SBreadcrumb>
      <template #breadcrumb="{ to, title }">
        <NuxtLink :to="to">
          {{ title }}
        </NuxtLink>
      </template>
    </SBreadcrumb>
    <OgImage v-bind="ogImageOptions" />
    <ul>
      <ol>
        <NuxtLink to="/pie">Pie</NuxtLink>
      </ol>
      <ol>
        <NuxtLink to="/banana">Banana</NuxtLink>
      </ol>
      <ol>
        <NuxtLink to="https://twitter.com/nuxt_js" target="_blank">
          Nuxt Twitter
        </NuxtLink>
      </ol>
      <ol>
        <NuxtLink
          to="https://discord.nuxtjs.org"
          target="_blank"
          rel="noopener"
        >
          Nuxt Discord
        </NuxtLink>
      </ol>
      <ol>
        <NuxtLink to="https://github.com/nuxt" no-rel> Nuxt GitHub </NuxtLink>
      </ol>
      <ol>
        <NuxtLink to="/contact" target="_blank">
          Contact page opens in another tab
        </NuxtLink>
      </ol>
    </ul>
  </v-container>
</template>

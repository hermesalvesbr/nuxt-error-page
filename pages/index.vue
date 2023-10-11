<script setup lang="ts">
console.log("Fruits");
const ogImageOptions = {
  title: 'My awesome home page.',
}
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
    Choose one
    <NuxtLink to="/banana">Banana</NuxtLink>
    <NuxtLink to="https://twitter.com/nuxt_js" target="_blank">
      Nuxt Twitter
    </NuxtLink>
    <!-- <a href="https://twitter.com/nuxt_js" target="_blank" rel="noopener noreferrer">...</a> -->

    <NuxtLink to="https://discord.nuxtjs.org" target="_blank" rel="noopener">
      Nuxt Discord
    </NuxtLink>
    <!-- <a href="https://discord.nuxtjs.org" target="_blank" rel="noopener">...</a> -->

    <NuxtLink to="https://github.com/nuxt" no-rel> Nuxt GitHub </NuxtLink>
    <!-- <a href="https://github.com/nuxt">...</a> -->

    <NuxtLink to="/contact" target="_blank">
      Contact page opens in another tab
    </NuxtLink>
  </v-container>
</template>

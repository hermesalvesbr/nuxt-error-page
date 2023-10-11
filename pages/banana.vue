<script lang="ts" setup>
useHead({
  templateParams: {
    blogCategory: 'Tutorials'
  },
  title: 'How To Use Titles',
})
console.log("banana");
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
    Banana?
  </v-container>
</template>

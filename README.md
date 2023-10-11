# SBreadcrumb

```htm
<template>
  <v-container>
    <SBreadcrumb>
      <template #breadcrumb="{ to, title }">
        <NuxtLink :to="to"> {{ title }} </NuxtLink>
      </template>
    </SBreadcrumb>
    Banana?
  </v-container>
</template>
```

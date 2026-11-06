<!--
  DetailView.vue = de detailpagina van één item.
  DAG 6: dit bestand moet jij zelf schrijven.

  Stappen:
  1. import { useRoute } from 'vue-router' en import { items } from '../data.js'
  2. const route = useRoute()
  3. Zoek het juiste item met items.value.find(...) en route.params.id (maak er een Number van)
  4. Toon naam en beschrijving in de template, met v-if="item"
  5. Voeg een <RouterLink to="/">Terug</RouterLink> toe
  6. Haal in src/router/index.js het commentaar weg bij de detail-route
-->
<script setup>
import { useRoute } from 'vue-router'
import { items } from '../data.js'

const route = useRoute()
const item = items.value.find((i) => i.id === Number(route.params.id))
</script>

<template>
  <div v-if="item">
    <h1>{{ item.naam }}</h1>
    <p><strong>Club:</strong> {{ item.club }}</p>
    <p>{{ item.beschrijving }}</p>
    <RouterLink to="/">Terug</RouterLink>
  </div>

  <div v-else>
    <p>Deze voetballer bestaat niet.</p>
    <RouterLink to="/">Terug</RouterLink>
  </div>
</template>

<!--
  ItemKaart.vue = een los component: één kaartje voor één item.
  DAG 3 (en Dag 4): dit bestand moet jij zelf schrijven.

  Stappen:
  1. Zet in <script setup> defineProps({ id: Number, naam: String, beschrijving: String })
  2. Zet in de <template> een <div class="kaart"> met de naam (h2) en beschrijving (p)
     Gebruik {{ naam }} en {{ beschrijving }}
  3. Gebruik het component in HomeView.vue (import + <ItemKaart ... />)
  Dag 4: voeg een verwijderknop toe met defineEmits(['verwijder'])
  Dag 6: voeg een RouterLink naar de detailpagina toe
-->

<script setup>
defineProps({
  id: Number,
  naam: String,
  beschrijving: String,
  club: String,
  toonBeschrijving: Boolean,
})

const emit = defineEmits(['verwijder'])
</script>

<template>
  <div class="kaart">
    <h2>{{ naam }}</h2>
    <p>{{ club }}</p>
    <p v-if="toonBeschrijving">{{ beschrijving }}</p>
    <button @click="emit('verwijder', id)">Verwijder</button>
    <RouterLink :to="{ name: 'detail', params: { id } }">Bekijk</RouterLink>
  </div>
</template>

<style scoped>
.kaart {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin: 12px 0;
  background: white;
}
</style>
<!--
  HomeView.vue = je startpagina.
  Staat nu op: einde van Dag 2 (lijst met v-for). Dit werkt al.

  Dag 2: voeg een knop toe die de beschrijving toont of verbergt met v-if.
  Dag 3: gebruik hier je component ItemKaart in plaats van de losse <div>.
  Dag 4: voeg invoervelden, een knop Toevoegen en een verwijderfunctie toe.
  Dag 5: voeg een zoekveld toe met computed.
  De code per dag staat in 01_Dagplan_14_dagen.docx. Typ het zelf over.
-->
<script setup>
import { items } from '../data.js'
</script>

<template>
  <h1>Mijn lijst</h1>
  <div v-for="item in items" :key="item.id">
    <h2>{{ item.naam }}</h2>
    <p>{{ item.beschrijving }}</p>
  </div>
</template>

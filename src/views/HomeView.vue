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
import { ref } from 'vue'
import { items } from '../data.js'
import ItemKaart from '../components/ItemKaart.vue'

const toonBeschrijving = ref(true)
function verwijder(id) {
  items.value = items.value.filter((item) => item.id !== id)
}
</script>

<template>
  <h1>Mijn lijst</h1>
  <button @click="toonBeschrijving = !toonBeschrijving">
    {{ toonBeschrijving ? 'Verberg' : 'Toon' }} beschrijvingen
  </button>

  <ItemKaart
    v-for="item in items"
    :key="item.id"
    :id="item.id"
    :naam="item.naam"
    :beschrijving="item.beschrijving"
    :toonBeschrijving="toonBeschrijving"
    @verwijder="verwijder"
    :club="item.club"
  />
</template>

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
import { ref, computed } from 'vue'
import { items } from '../data.js'
import ItemKaart from '../components/ItemKaart.vue'

const toonBeschrijving = ref(true)
const zoek = ref('')
const nieuweNaam = ref('')
const nieuweClub = ref('')
const nieuweBeschrijving = ref('')

const gefilterd = computed(() =>
  items.value.filter((item) =>
    item.naam.toLowerCase().includes(zoek.value.toLowerCase())
  )
)

function verwijder(id) {
  items.value = items.value.filter((item) => item.id !== id)
}

function voegToe() {
  if (!nieuweNaam.value.trim()) return
  items.value.push({
    id: Date.now(),
    naam: nieuweNaam.value,
    club: nieuweClub.value,
    beschrijving: nieuweBeschrijving.value,
  })
  nieuweNaam.value = ''
  nieuweClub.value = ''
  nieuweBeschrijving.value = ''
}
</script>

<template>
  <h1>Mijn lijst</h1>
  <input v-model="zoek" placeholder="Zoek op naam" />

  <button @click="toonBeschrijving = !toonBeschrijving">
    {{ toonBeschrijving ? 'Verberg' : 'Toon' }} beschrijvingen
  </button>

  <div class="formulier">
    <input v-model="nieuweNaam" placeholder="Naam" />
    <input v-model="nieuweClub" placeholder="Club" />
    <input v-model="nieuweBeschrijving" placeholder="Beschrijving" />
    <button @click="voegToe">Toevoegen</button>
  </div>

  <ItemKaart
    v-for="item in gefilterd"
    :key="item.id"
    :id="item.id"
    :naam="item.naam"
    :club="item.club"
    :beschrijving="item.beschrijving"
    :toonBeschrijving="toonBeschrijving"
    @verwijder="verwijder"
  />

  <p v-if="items.length === 0">Geen voetballers meer. Voeg er een toe!</p>
  <p v-else-if="gefilterd.length === 0">Geen voetballers gevonden.</p>
</template>

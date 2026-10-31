// Dag 2: hier staat je data (de lijst met items). Alle pagina's gebruiken deze lijst.
// Vervang deze fruit-voorbeelden door jouw eigen thema (bijvoorbeeld films of oefeningen).
// Maak er minstens 4 en later (dag 8) minstens 6.
import { ref } from 'vue'

export const items = ref([
  { id: 1, naam: 'Appel', beschrijving: 'Rood en zoet' },
  { id: 2, naam: 'Banaan', beschrijving: 'Geel en zacht' },
  { id: 3, naam: 'Peer', beschrijving: 'Groen en sappig' },
])

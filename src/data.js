// Dag 2: hier staat je data (de lijst met items). Alle pagina's gebruiken deze lijst.
// Vervang deze fruit-voorbeelden door jouw eigen thema (bijvoorbeeld films of oefeningen).
// Maak er minstens 4 en later (dag 8) minstens 6.
import { ref } from 'vue'

export const items = ref([
  { id: 1, naam: 'Ronaldo', beschrijving: 'Portugees, speelde bij Real Madrid' },
  { id: 2, naam: 'Messi', beschrijving: 'Argentijn, speelde bij Barcelona ' },
  { id: 3, naam: 'Neymar', beschrijving: 'Brazilian, speelde bij PSG' },
  { id: 3, naam: 'Mbappe', beschrijving: 'Frans, speelde bij Monaco' },
])

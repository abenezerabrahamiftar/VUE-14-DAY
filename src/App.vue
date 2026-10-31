<!--
  App.vue = je hoofdbestand. Wat hier staat zie je op elke pagina.
  Dag 10: maak hier je menu mooier en voeg links toe.
-->
<template>
  <header>
    <h1>De app van Abenezer</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <!-- Dag 7: haal de commentaartekens weg om de API-pagina te tonen -->
      <!-- <RouterLink to="/api">API</RouterLink> -->
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

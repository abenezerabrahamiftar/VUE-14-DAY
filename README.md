# Vue-oefeningen

Dit is je startproject voor de 14 dagen. Het draait al: je ziet een lijst op de startpagina.

## Starten (doe dit in de terminal van VS Code)

    npm install
    npm run dev

Open daarna de link uit de terminal (meestal http://localhost:5173).
`npm install` maakt de map `node_modules` aan. Die zit niet in de zip en hoort ook niet op GitHub.
Stoppen: Ctrl + C.

## Mapindeling

    vue-oefeningen/
    ├── node_modules/        (maakt npm install aan, negeer deze map)
    ├── public/              (icoontje van de site)
    ├── src/
    │   ├── assets/main.css  (je stijl, Dag 11)
    │   ├── components/
    │   │   └── ItemKaart.vue  (Dag 3 en 4: jij schrijft dit)
    │   ├── router/index.js  (welke pagina bij welke link hoort)
    │   ├── views/
    │   │   ├── HomeView.vue   (startpagina, Dag 2 t/m 5)
    │   │   ├── DetailView.vue (Dag 6: jij schrijft dit)
    │   │   └── ApiView.vue    (Dag 7, optioneel: jij schrijft dit)
    │   ├── App.vue          (hoofdbestand: menu en pagina)
    │   ├── data.js          (je lijst met items)
    │   └── main.js          (startbestand, niets aan veranderen)
    ├── index.html
    ├── package.json         (lijst met wat het project nodig heeft)
    └── vite.config.js       (niets aan veranderen)

## Wat is al klaar en wat moet jij doen

Klaar: opzet, menu, router, data en de lijst met v-for (Dag 1 en 2).
Jij: ItemKaart (Dag 3, 4), zoeken (Dag 5), DetailView (Dag 6), ApiView (Dag 7).
Elk bestand heeft bovenaan commentaar met de stappen. De volledige code staat in 01_Dagplan_14_dagen.docx.

## Op GitHub zetten

Maak op github.com een lege repository en typ dan:

    git init
    git add .
    git commit -m "project opgezet"
    git branch -M main
    git remote add origin JOUW-GITHUB-LINK
    git push -u origin main

Daarna na elke werksessie: `git add .`, `git commit -m "wat je deed"`, `git push`.

## Prototype (Dag 8)

Kopieer deze hele map (zonder node_modules), noem de kopie `vue-prototype`, voer `npm install` uit en pas het aan op je thema. Maak een tweede repository op GitHub voor het prototype.

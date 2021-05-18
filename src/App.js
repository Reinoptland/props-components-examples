import logo from "./logo.svg";
import "./App.css";
import ImageCard from "./ImageCard";

// Beginscherm van de applicatie
// javascript of html bestand?
// Het ís javascript, maar sommige lijken html syntax
// JSX

// Hoe maak je van iets een component
// 1. Begin de HTML gewoon uit te schrijven (maak eerst wat je wil)
// 2. Als tevreden bent met je pagina kun een component "refactoren", opschonen
//   - [x] Kopier een component met alle data erin
//   - [x] Zet het in een ander JavaScript bestand
//   - [x] Maak een component functie
//   - [x] Die component functie returned JSX
//   - [x] Optioneel: voeg een div toe als je component uit meerder tags bestaat
//   - [x] Exporteer je component functie (export default)
//   - [x] Importeer je component functie in App (of waar je hem wil gebruiken)
//   - [x] Gebruik je component functie met JSX syntax
// 3. Is component af, maar "gehardcode", alles heeft altijd dezelfde waard
//    gebruik props om het component dynamisch te maken
//   - [ ] voeg attribuut to in de jsx (je mag kiezen hoe het attribuut heet)
//   - [ ] geeft het attribuut een waarde
//   - [ ] in de component functie gebruiken maken van de "prop" die is doorgegeven
//      - [ ] props toevoegen als parameter van de component functie
//      - [ ] De juiste prop eruit halen en gebruiken in je component
//   - [ ] Interpoleren in JSX

function App() {
  return (
    <div className="App">
      <ImageCard />
      <ImageCard />
      <ImageCard />
      {/* <h2>Nature</h2>
      <img src="https://source.unsplash.com/1600x900/?nature" />

      <h2>Cheese</h2>
      <img src="https://source.unsplash.com/1600x900/?cheese" />

      <h2>Travel</h2>
      <img src="https://source.unsplash.com/1600x900/?travel" />

      <h2>Animals</h2>
      <img src="https://source.unsplash.com/1600x900/?animals" /> */}
    </div>
  );
}

export default App;

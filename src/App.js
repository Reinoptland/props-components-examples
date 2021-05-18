import logo from "./logo.svg";
import "./App.css";

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
//   - [ ] Importeer je component functie in App (of waar je hem wil gebruiken)
//   - [ ] Gebruik je component functie met JSX syntax
function App() {
  return (
    <div className="App">
      <h2>Nature</h2>
      <img src="https://source.unsplash.com/1600x900/?nature" />

      <h2>Cheese</h2>
      <img src="https://source.unsplash.com/1600x900/?cheese" />

      <h2>Travel</h2>
      <img src="https://source.unsplash.com/1600x900/?travel" />

      <h2>Animals</h2>
      <img src="https://source.unsplash.com/1600x900/?animals" />
    </div>
  );
}

export default App;

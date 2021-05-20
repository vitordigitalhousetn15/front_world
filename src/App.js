import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import worldService from "./services/world";

function App() {
  const countries = worldService.getCountries();
  let [activeTab, setActiveTab] = useState("country");

  function onClickTab(event) {
    setActiveTab(event.target.id)
  }

  return (
    <main className="container">
      <section>
        <ul className="tabs">
          <li id="country" onClick={onClickTab}>
            Paises
          </li>
          <li id="language" onClick={onClickTab}>
            Idiomas
          </li>
          <li id="city" onClick={onClickTab}>
            Cidades
          </li>
        </ul>
      </section>
      <div className="country-wrapper">
        {countries.map(function (country) {
          return <Card key={country.Name} country={country} />;
        })}
      </div>
    </main>
  );
}

export default App;

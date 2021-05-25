import "./App.css";
import Card from "./components/Card";
import Tabs from "./components/Tabs";
import worldService from "./services/world";

function App() {
  const countries = worldService.getCountries();

  return (
    <main className="container">
      <section>
        <Tabs />
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

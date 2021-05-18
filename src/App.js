import "./App.css";
import Card from "./components/Card";
import worldService from "./services/world";

function App() {
  const countries = worldService.getCountries();

  return (
    <main className="container">
      <div className="country-wrapper">
        {countries.map(function (country) {
          return <Card country={country} />;
        })}
      </div>
    </main>
  );
}

export default App;

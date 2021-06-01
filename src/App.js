import "./App.css";
import Card from "./components/Card";
import Tabs from "./components/Tabs";
import worldService from "./services/world";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 *
 * hooks - funções que ajudam o desenvolvimento do React;
 * useState - controle de estado de um componente;
 * useEffect - controle de ciclo de vida de um componente;
 *
 */

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  /**
   * useEffect = é uma função = é um hook do React;
   * dentro do useEffect nós colocamos uma outra função
   */

  function filter() {
    const listFilter = countries.filter(function (country) {
      return country.Name.indexOf(search) >= 0;
    });

    setCountries(listFilter);
  }

  useEffect(() => {
    const callApi = async () => {
      const countriesApi = await worldService.getCountries();
      setCountries(countriesApi.response);
    };

    callApi();
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <section>
          <div className="search">
            <input
              type="text"
              value={search}
              onChange={function (event) {
                setSearch(event.target.value);
              }}
            />
            <button className="btn" onClick={filter}>
              Filtrar
            </button>
          </div>
        </section>
        <section>
          <Tabs />
        </section>
        <div className="country-wrapper">
          {countries.map(function (country) {
            return <Card key={country.Name} country={country} />;
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

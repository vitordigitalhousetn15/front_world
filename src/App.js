import "./App.css";
import Card from "./components/Card";
import Tabs from "./components/Tabs";
import worldService from "./services/world";
import { useEffect, useState } from 'react';

/**
 * 
 * hooks - funções que ajudam o desenvolvimento do React;
 * useState - controle de estado de um componente;
 * useEffect - controle de ciclo de vida de um componente;
 * 
 */

function App() {
  const [countries, setCountries] = useState([]);
  

  /**
   * useEffect = é uma função = é um hook do React;
   * dentro do useEffect nós colocamos uma outra função
   */

  useEffect(() => {
    const callApi = async () => {
      const countriesApi = await worldService.getCountries();
      setCountries(countriesApi.response)
    }

    callApi();
  }, []);

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

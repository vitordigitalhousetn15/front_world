import { useState } from "react";
import "./tabs.css"

function Tabs() {
  const [tabActive, setTabActive] = useState("country");

  function onClickTab(event) {
    setTabActive(event.target.id);
  }

  return (
    <ul className="tabs">
      <li
        id="country"
        onClick={onClickTab}
        className={tabActive === "country" ? "active" : null}
      >
        Paises
      </li>
      <li
        id="language"
        onClick={onClickTab}
        className={tabActive === "language" ? "active" : null}
      >
        Idiomas
      </li>
      <li
        id="city"
        onClick={onClickTab}
        className={tabActive === "city" ? "active" : null}
      >
        Cidades
      </li>
    </ul>
  );
}

export default Tabs;

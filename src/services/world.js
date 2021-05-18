const countries = [
  {
    Name: "Aruba",
    Continent: "North America",
    Population: 103000,
    Code2: "AW",
  },
  {
    Name: "Afghanistan",
    Continent: "Asia",
    Population: 22720000,
    Code2: "AF",
  },
  {
    Name: "Angola",
    Continent: "Africa",
    Population: 12878000,
    Code2: "AO",
  },
  {
    Name: "Anguilla",
    Continent: "North America",
    Population: 8000,
    Code2: "AI",
  },
  {
    Name: "Albania",
    Continent: "Europe",
    Population: 3401200,
    Code2: "AL",
  },
  {
    Name: "Andorra",
    Continent: "Europe",
    Population: 78000,
    Code2: "AD",
  },
  {
    Name: "Netherlands Antilles",
    Continent: "North America",
    Population: 217000,
    Code2: "AN",
  },
];

export default {
  getCountries: function getCountries() {
    return countries;
  }
}
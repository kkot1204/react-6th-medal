import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  console.log(countries);

  function onSubmit(event) {
    event.preventDefault();

    setCountries([
      {
        countryName,
        gold,
        silver,
        bronze,
      },
      ...countries,
    ]);

    setCountryName("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  }

  function onUpdate() {
    const targetCountry = countries.find(
      (country) => countryName === country.countryName
    );

    const newCountries = countries.map((country) => {
      if (country.countryName === targetCountry.countryName) {
        const newCountry = {
          countryName,
          gold,
          silver,
          bronze,
        };
        return newCountry;
      }
      return country;
    });

    console.log(targetCountry);

    setCountries(newCountries);
  }

  function onDelete(countryName) {
    const filteredCountries = countries.filter((country) => {
      if (countryName === country.countryName) {
        return false;
      }
      return true;
    });

    setCountries(filteredCountries);
  }

  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <form className="input-group" onSubmit={onSubmit}>
        <input
          type="text"
          name="country"
          value={countryName}
          onChange={(event) => setCountryName(event.target.value)}
        />
        <input
          type="number"
          name="gold"
          value={gold}
          onChange={(event) => setGold(event.target.value)}
        />
        <input
          type="number"
          name="silver"
          value={silver}
          onChange={(event) => setSilver(event.target.value)}
        />
        <input
          type="number"
          name="bronze"
          value={bronze}
          onChange={(event) => setBronze(event.target.value)}
        />
        <button type="submit">국가 추가</button>
        <button type="button" onClick={onUpdate}>
          업데이트
        </button>
      </form>
      <div>
        {countries.map((country) => (
          <div key={country.countryName}>
            <p>
              {country.countryName} {country.gold} {country.silver}{" "}
              {country.bronze}
            </p>
            <button onClick={() => onDelete(country.countryName)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import { lazy, useEffect, useState } from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import mockCurrencyData from "./currencyData.json";
import { CurrencyData } from "./types";

function App() {
  const [currencies, setCurrencies] = useState<CurrencyData[]>([]);

  useEffect(() => {
    // fetch the initial currencies for euro
    async function fetchCurrencies() {
      // const res = await fetch(
      //   "http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml"
      // );

      setCurrencies(mockCurrencyData);
    }
    fetchCurrencies();
  }, []);

  const currencyOptions = currencies.map((cur) => {
    return { value: cur.currency, label: cur.country };
  });

  return (
    <div className="App">
      <div className="max-w-xl m-auto py-16">
        <h1 className="text-xl mb-4">Currency Converter</h1>
        <CurrencyConverter currencies={currencies} currencyOptions={currencyOptions} />
      </div>
    </div>
  );
}

export default App;

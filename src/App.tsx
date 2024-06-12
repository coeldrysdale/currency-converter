import { useEffect, useState } from "react";
import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";

type CurrencyList = {
  [key: string]: string;
};

function App() {
  const [currencies, setCurrency] = useState<CurrencyList>({
    usd: "1.0730",
    gbp: "0.84198",
    eur: "1",
  });

  useEffect(() => {
    // fetch the initial currencies for euro
    async function fetchCurrencies() {
      const res = await fetch(
        "http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml"
      );

      setCurrency({});
    }
    fetchCurrencies();
  }, []);

  return (
    <div className="App">
      <h1 className="text-red-500">Currency Converter</h1>
      <CurrencyConverter currencies={currencies} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import CurrencyOptionBox from "./CurrencyOptionBox";

type CurrencyConverterProps = {
  currencies: { [key: string]: string };
};

export default function CurrencyConverter({
  currencies,
}: CurrencyConverterProps) {
  const [currency, setCurrency] = useState("usd");
  const [currency2, setCurrency2] = useState("eur");

  useEffect(() => {
    // fetch
    async function init() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      console.log(await res.json());
    }
    init();
  }, [currency, currency2]);

  return (
    <div className="flex max-w-3xl">
      <div>
        <CurrencyOptionBox currency={currency} />
      </div>
      <div>to</div>
      <div>
        <CurrencyOptionBox currency={currency2} />
      </div>
    </div>
  );
}

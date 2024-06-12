import { useState } from "react";
import CurrencyOptionBox from "./CurrencyOptionBox";
import { CurrencyData, SelectOption } from "../../types";

type CurrencyConverterProps = {
  currencies: CurrencyData[];
  currencyOptions: SelectOption[];
};

export default function CurrencyConverter({
  currencies,
  currencyOptions,
}: CurrencyConverterProps) {
  const [currency, setCurrency] = useState("eur");
  const [currency2, setCurrency2] = useState("usd");
  const [amount, setAmount] = useState(0);
  const [amount2, setAmount2] = useState(0);

  return (
    <div className="flex gap-4">
      <div className="w-full">
        <CurrencyOptionBox options={currencyOptions} />
      </div>
      <div>to</div>
      <div className="w-full">
        <CurrencyOptionBox options={currencyOptions} />
      </div>
    </div>
  );
}

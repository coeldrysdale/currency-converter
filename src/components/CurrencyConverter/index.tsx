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
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  console.log(
    { currency: currency, amount: value },
    { currency: currency2, amount: value2 }
  );

  return (
    <div className="flex gap-4">
      <div className="w-full">
        <CurrencyOptionBox
          currency={currency}
          value={value}
          options={currencyOptions}
          updateCurrency={(val: string) => setCurrency(val)}
          updateAmount={(val: string) => setValue(+val)}
        />
      </div>
      <div>to</div>
      <div className="w-full">
        <CurrencyOptionBox
          currency={currency}
          value={value}
          options={currencyOptions}
          updateCurrency={(val: string) => setCurrency2(val)}
          updateAmount={(val: string) => setValue2(+val)}
        />
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
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
  const [currency, setCurrency] = useState("EUR");
  const [currency2, setCurrency2] = useState("USD");
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(1);

  useEffect(() => {
    const exchangeRate = currencies.find((cur) => cur.currency === currency2)?.rate || 1;
    setValue2(+exchangeRate);
  }, [currencies, currency, currency2]);

  const defaultCurrencyMain = currencyOptions.find((cur) => cur.value === currency);
  const defaultCurrencySub = currencyOptions.find((cur) => cur.value === currency2);

  function calcFX(currency: string, val: number) {
    const exchangeRate = currencies.find((cur) => cur.currency === currency2)?.rate || 1;
    switch (currency) {
      case "main":
        // if main currency is updated, we need to update value of sub
        setValue(val);
        setValue2(+(val * +exchangeRate).toFixed(2));
        break;

      case "sub":
        // if sub currency is updated, we need to update value of main

        setValue(+(val / +exchangeRate).toFixed(2));
        setValue2(val);
        break;

      default:
        break;
    }
  }

  return (
    <div className="flex gap-4 items-center">
      <div className="w-full">
        <CurrencyOptionBox
          currency={defaultCurrencyMain}
          value={value}
          options={[{ value: "EUR", label: "Euro" }]}
          updateCurrency={(val: string) => setCurrency(val)}
          updateAmount={(val: number) => calcFX("main", val)}
        />
      </div>
      <div>to</div>
      <div className="w-full">
        <CurrencyOptionBox
          currency={defaultCurrencySub}
          value={value2}
          options={currencyOptions}
          updateCurrency={(val: string) => setCurrency2(val)}
          updateAmount={(val: number) => calcFX("sub", val)}
        />
      </div>
    </div>
  );
}

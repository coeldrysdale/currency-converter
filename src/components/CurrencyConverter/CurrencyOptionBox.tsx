import { SelectOption } from "../../types";
import Select from "react-select";

type CurrencyOptionBoxProps = {
  currency?: SelectOption;
  value: number;
  exchangeRate?: number;
  options: SelectOption[];
  updateCurrency: (val: string) => void;
  updateAmount: (val: number) => void;
};

export default function CurrencyOptionBox({
  currency,
  value,
  exchangeRate,
  options,
  updateCurrency,
  updateAmount,
}: CurrencyOptionBoxProps) {
  // const fx = { exchangeRate: "1.073", cur: "USD" };

  return currency ? (
    <div className="flex flex-col">
      <p>1 {currency.value} =</p>
      <div className="mt-2">
        <Select
          className="p-4 bg-slate-600 text-black"
          defaultValue={currency}
          options={options}
          onChange={(val) => updateCurrency(val?.value || "")}
        />
      </div>
      <div className="px-4 py-8 bg-slate-500">
        <input
          className="bg-transparent text-3xl w-full outline-none"
          type="number"
          value={value}
          onChange={(val) => updateAmount(+val.target.value)}
        />
      </div>
    </div>
  ) : null;
}

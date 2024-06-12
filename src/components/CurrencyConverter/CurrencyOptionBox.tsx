import { SelectOption } from "../../types";
import Select from "react-select";

type CurrencyOptionBoxProps = {
  currency?: SelectOption;
  value: number;
  exchangeRate?: number;
  options: SelectOption[];
  updateCurrency: (val: string) => void;
  updateAmount: (val: string) => void;
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
      <div>
        <Select
          defaultValue={currency}
          options={options}
          onChange={(val) => updateCurrency(val?.value || "")}
        />
      </div>
      <div>
        <input
          type="number"
          value={value}
          onChange={(val) => updateAmount(val.target.value)}
        />
      </div>
    </div>
  ) : null;
}

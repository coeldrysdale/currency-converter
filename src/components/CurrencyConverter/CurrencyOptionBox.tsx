import { SelectOption } from "../../types";
import Select from "react-select";

type CurrencyOptionBoxProps = {
  currency: string;
  value: number;
  options: SelectOption[];
  updateCurrency: (val: string) => void;
  updateAmount: (val: string) => void;
};

export default function CurrencyOptionBox({
  currency,
  value,
  options,
  updateCurrency,
  updateAmount,
}: CurrencyOptionBoxProps) {
  const defaultValue = options.find((opt) => opt.label == currency);
  return (
    <div className="flex flex-col">
      <div>
        <Select
          defaultValue={defaultValue}
          options={options}
          onChange={(val) => updateCurrency(val?.value || "")}
        />
      </div>
      <div>
        <input type="number" onChange={(val) => updateAmount(val.target.value)} />
      </div>
    </div>
  );
}

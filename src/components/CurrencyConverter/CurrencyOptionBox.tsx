import { SelectOption } from "../../types";
import Select from "react-select";

type CurrencyOptionBoxProps = {
  options: SelectOption[];
};

export default function CurrencyOptionBox({ options }: CurrencyOptionBoxProps) {
  return (
    <div className="flex flex-col">
      {/* <h3>1 {currency} = </h3> */}
      <div>
        <Select options={options} />
      </div>
      <div>
        <input
          type="number"
          // onChange={(val) => change(val.target.value)}
        />
      </div>
    </div>
  );
}

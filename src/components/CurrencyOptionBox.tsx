type CurrencyOptionBoxProps = {
  currency: string;
};

export default function CurrencyOptionBox({
  currency,
}: CurrencyOptionBoxProps) {
  return (
    <div className="flex flex-col">
      <h3>1 {currency.toUpperCase()} = </h3>
      <div>dropdown</div>
      <div>Details</div>
    </div>
  );
}

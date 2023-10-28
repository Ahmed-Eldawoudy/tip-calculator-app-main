/* eslint-disable react/prop-types */
export default function Result({
  onReset,
  disabled,
  numOfPeople,
  usedTip,
  bill,
}) {
  //
  //
  function tipDivider() {
    return Number((bill * (usedTip / 100)) / numOfPeople).toFixed(0);
  }
  function totalDivider() {
    let tipPerOne = (bill * (usedTip / 100)) / numOfPeople;
    return Number(tipPerOne + bill / numOfPeople).toFixed(0);
  }
  //
  return (
    <>
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-8">
          <div className="flex justify-between">
            <div>
              <p className="text-lg text-white">Tip Amount</p>
              <p className="text-sm text-neutral-400">/ person</p>
            </div>
            <p className="self-end text-4xl text-primary md:text-5xl">
              {numOfPeople == "null" || numOfPeople == null
                ? "$0.00"
                : `$${tipDivider()}`}
            </p>
          </div>
          {/* total */}
          <div className="flex justify-between">
            <div>
              <p className="text-xl text-white">Total Amount</p>
              <p className="text-sm text-neutral-400">/ person</p>
            </div>
            <p className="self-end text-4xl text-primary md:text-5xl">
              {numOfPeople == "null" || numOfPeople == null
                ? "$0.00"
                : `$${totalDivider()}`}
            </p>
          </div>
        </div>
        <button
          className="mt-16 rounded-lg bg-primary p-3 text-neutral-500 duration-150 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:bg-neutral-300 md:mt-0"
          onClick={onReset}
          disabled={disabled}
        >
          RESET
        </button>
      </div>
    </>
  );
}

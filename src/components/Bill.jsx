/* eslint-disable react/prop-types */
import { useState } from "react";
import IAMGES from "../images/Images";

export default function Bill({ bill, onBillChange, handleDisabled }) {
  //
  const [focus, setFocus] = useState(false);
  const handleFocusChange = () => {
    setFocus(!focus);
  };
  function handleBorder() {
    if (focus) {
      return "outline outline-2 outline-primary";
    }
  }
  //
  //
  return (
    <>
      <div className="space-y-1">
        <p className="text-sm text-neutral-400">Bill</p>
        <div
          className={`flex items-center justify-between rounded-lg bg-neutral-100 px-3 py-2 text-xl ${handleBorder()}`}
        >
          <p>
            <img src={IAMGES.dollarIcon} alt="" />
          </p>
          <input
            type="text"
            min={0}
            placeholder="0"
            value={bill}
            onChange={(e) => {
              onBillChange(e);
              handleDisabled(false);
            }}
            onFocus={handleFocusChange}
            onBlur={handleFocusChange}
            className="w-full cursor-pointer bg-neutral-100 text-right text-neutral-500 outline-none placeholder:text-neutral-300 placeholder:opacity-60"
          />
        </div>
      </div>
    </>
  );
}

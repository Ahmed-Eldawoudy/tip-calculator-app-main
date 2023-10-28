/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Tip({
  tip,
  onTipChange,
  customTip,
  onCustomTipChange,
  setTipPercentages,
  tipPercentages,
  setUsedTip,
}) {
  //
  //
  //
  //
  function handleTipChange(index) {
    tipPercentages.map((t, i) => {
      if (i === index) {
        onTipChange(t.value);
        onCustomTipChange("");
        setUsedTip(t.value);
        t.background = "primary";
        t.textColor = "neutral-500";
      } else {
        t.background = "neutral-500";
        t.textColor = "neutral-100";
      }
    });
  }
  //
  //
  return (
    <>
      <div className="space-y-1 text-xl">
        <p className="text-sm text-neutral-400">Select Tip %</p>
        <div className="grid grid-cols-3 grid-rows-2 gap-3">
          {tipPercentages.map((p, i) => (
            <button
              key={i}
              className={`rounded-md bg-${p.background} py-2 text-${p.textColor}`}
              onClick={() => {
                handleTipChange(i);
              }}
            >
              {p.value}%
            </button>
          ))}
          <input
            type="text"
            placeholder="Custom"
            value={customTip}
            onChange={(e) => {
              onCustomTipChange(e.target.value);
              onTipChange("");
              setUsedTip(e.target.value);
            }}
            onFocus={() => {
              setTipPercentages([
                {
                  value: 5,
                  background: "neutral-500",
                  textColor: "neutral-100",
                },
                {
                  value: 10,
                  background: "neutral-500",
                  textColor: "neutral-100",
                },
                {
                  value: 15,
                  background: "neutral-500",
                  textColor: "neutral-100",
                },
                {
                  value: 25,
                  background: "neutral-500",
                  textColor: "neutral-100",
                },
                {
                  value: 50,
                  background: "neutral-500",
                  textColor: "neutral-100",
                },
              ]);
            }}
            className={`cursor-pointer rounded-md bg-neutral-100 p-2 text-right text-neutral-500 outline-none placeholder:text-center focus:outline-2 focus:outline-primary `}
          />
        </div>
      </div>
    </>
  );
}

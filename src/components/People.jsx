/* eslint-disable react/prop-types */
import { useState } from "react";
import IAMGES from "../images/Images";

export default function People({ numOfPeople, onNumOfPeopleChange }) {
  //
  const [focus, setFocus] = useState(false);
  const handleFocusChange = () => {
    setFocus(!focus);
  };
  //
  function handleBorder() {
    if ((focus && numOfPeople == null) || (focus && numOfPeople > 0)) {
      return "outline outline-2 outline-primary";
    } else if ((focus && numOfPeople == 0) || numOfPeople == 0) {
      return "outline outline-2 outline-red";
    }
  }
  //
  //
  return (
    <>
      <div className="space-y-1">
        <p className="flex justify-between text-sm text-neutral-400">
          Number of People
          {numOfPeople == 0 && (
            <span className="text-red">Can&apos;t be zero</span>
          )}
        </p>
        <div
          className={`flex items-center justify-between rounded-lg bg-neutral-100 px-3 py-2 text-xl ${handleBorder()}`}
        >
          <p>
            <img src={IAMGES.personIcon} alt="" />
          </p>
          <input
            type="number"
            min={1}
            placeholder="0"
            value={numOfPeople}
            onChange={onNumOfPeopleChange}
            onFocus={handleFocusChange}
            onBlur={handleFocusChange}
            className="w-full cursor-pointer bg-neutral-100 text-right text-neutral-500 outline-none placeholder:text-neutral-300 placeholder:opacity-60"
          />
        </div>
      </div>
    </>
  );
}

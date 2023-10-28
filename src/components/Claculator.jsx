import { useState } from "react";
import Bill from "./Bill";
import People from "./People";
import Tip from "./Tip";
import Result from "./Result";

export default function Claculator() {
  //
  const [bill, setBill] = useState("");
  const [numOfPeople, setNumOfPeople] = useState(null);
  // tippppppppp
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [usedTip, setUsedTip] = useState("");
  const [tipPercentages, setTipPercentages] = useState([
    { value: 5, background: "neutral-500", textColor: "neutral-100" },
    { value: 10, background: "neutral-500", textColor: "neutral-100" },
    { value: 15, background: "neutral-500", textColor: "neutral-100" },
    { value: 25, background: "neutral-500", textColor: "neutral-100" },
    { value: 50, background: "neutral-500", textColor: "neutral-100" },
  ]);
  //
  const [tipPerPerson, setTipPerPerson] = useState("0.00");
  const [totalPerPerson, setTotalPerPerson] = useState("0.00");
  const [disabled, setDisabled] = useState(true);
  //
  console.log(tipPerPerson);
  //
  const handleBillChange = (e) => {
    setBill(e.target.value);
  };
  //
  const handlePeopleChange = (e) => {
    if (e.target.value === "") {
      setNumOfPeople(null);
    } else {
      setNumOfPeople(e.target.value);
    }
  };
  //
  function calculationFun(bill, numOfPeople, tip) {
    let myBill = Number(bill);
    console.log(myBill);
    let myPeopleNumber = Number(numOfPeople);
    let myTip = Number(tip);
    let tipPerPerson = (myBill * (myTip / 100)) / myPeopleNumber;
    let totalPerPerson = (myBill + myBill * (myTip / 100)) / myPeopleNumber;
    //
    setTipPerPerson(tipPerPerson);
    setTotalPerPerson(totalPerPerson);
  }
  //
  function handleReset() {
    setBill("");
    setNumOfPeople("null");
    setUsedTip("");
    setTipPerPerson("0.00");
    setTotalPerPerson("0.00");
    setTipPercentages([
      { value: 5, background: "neutral-500", textColor: "neutral-100" },
      { value: 10, background: "neutral-500", textColor: "neutral-100" },
      { value: 15, background: "neutral-500", textColor: "neutral-100" },
      { value: 25, background: "neutral-500", textColor: "neutral-100" },
      { value: 50, background: "neutral-500", textColor: "neutral-100" },
    ]);
    setCustomTip("");
    setDisabled(true);
  }
  //
  return (
    <section className="flex flex-col rounded-3xl bg-white p-4 md:flex-row">
      <div className="w-full space-y-6 p-8 md:w-1/2">
        <Bill
          bill={bill}
          onBillChange={handleBillChange}
          handleDisabled={setDisabled}
          calculationFun={calculationFun}
          numOfPeople={numOfPeople}
          usedTip={usedTip}
        />
        <Tip
          tip={tip}
          onTipChange={setTip}
          customTip={customTip}
          onCustomTipChange={setCustomTip}
          tipPercentages={tipPercentages}
          setTipPercentages={setTipPercentages}
          setUsedTip={setUsedTip}
        />
        <People
          numOfPeople={numOfPeople}
          onNumOfPeopleChange={handlePeopleChange}
        />
      </div>
      <div className="w-full rounded-3xl bg-neutral-500 p-8 md:w-1/2">
        <Result
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
          onReset={handleReset}
          disabled={disabled}
          bill={bill}
          numOfPeople={numOfPeople}
          usedTip={usedTip}
        />
      </div>
    </section>
  );
}

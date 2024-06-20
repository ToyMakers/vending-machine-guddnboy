import React from "react";
import "../css/VendingMachine.css";
import Machine from "./Machine";
import Wallet from "./Wallet";
import { useState } from "react";


const VendingMachineContainer = () => {
  const [myMoney, setMyMoney] = useState(0);
  function onClickInsert() {
    setMyMoney(myMoney + 2000);
  }

  function onClickDrinks(price) {
    if (myMoney >= price) {
      setMyMoney(myMoney - price);
      alert("구매가 완료되었습니다.");
    } else {
      alert("잔액이 부족합니다.");
    }
  }

  return (
    <div>
    <header>
      <h1>VendingMachine</h1>
    </header>
    <div className="machine-wallet">
      <div className="vending-machine-container">
        <Machine myMoney={myMoney} setMyMoney={setMyMoney}/>
      </div>
      <Wallet myMoney={myMoney} setMyMoney={setMyMoney}/>
    </div>
    </div>
  );
};

export default VendingMachineContainer;
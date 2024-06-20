import React from "react";
import "../css/VendingMachine.css";
import Machine from "./Machine";
import Wallet from "./Wallet";

const Container = () => {
  return (
    <div>
    <header>
      <h1>VendingMachine</h1>
    </header>
    <div className="machine-wallet">
      <div className="vending-machine-container">
        <Machine/>
      </div>
      <Wallet />
    </div>
    </div>
  );
};

export default Container;
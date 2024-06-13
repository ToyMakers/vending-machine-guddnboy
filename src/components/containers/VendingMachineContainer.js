import React from "react";
import "../../css/VendingMachine.css";
import Machine from "../Machine";

const VendingMachineContainer = () => {
  return (
  <div>
    <header>
      <h1>VendingMachine</h1>
    </header>
    <div className="vending-machine-container">
      <Machine />
    </div>
  </div>
  );
};

export default VendingMachineContainer;
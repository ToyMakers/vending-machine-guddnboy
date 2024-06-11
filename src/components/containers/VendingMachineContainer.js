import React from "react";
import "../../css/VendingMachine.css";

const VendingMachineContainer = () => {
  return (
  <div>
    <header>
      <h1>VendingMachine</h1>
    </header>
    <div className="vending-machine-container">

          <div className="drink-out">
            <button>상품 나오는 곳</button>
          </div>
        </div>
    </div>
  );
};

export default VendingMachineContainer;
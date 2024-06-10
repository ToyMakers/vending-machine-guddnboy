import React from "react";
import "./VendingMachine.css";

const VendingMachineContainer = () => {
  return (
  <div>
    <header>
      <h1>VendingMachine</h1>
    </header>
    <div className="vending-machine-container">
        <div className="vending-machine">
          <div className="drink-list">
            <button className="drinks">1</button>
            <button className="drinks">2</button>
            <button className="drinks">3</button>
            <button className="drinks">4</button>
            <button className="drinks">5</button>
            <button className="drinks">6</button>
            <button className="drinks">7</button>
            <button className="drinks">8</button>
          </div>
          <div className="drink-out">
            <button>상품 나오는 곳</button>
          </div>
        </div>
    </div>
  </div>
  );
};

export default VendingMachineContainer;
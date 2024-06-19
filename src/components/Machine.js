import React from "react";
import "../css/VendingMachine.css";
import ReturnDrink from "./ReturnDrink";
import DrinkList from "./DrinkList";
import Money from "./Money";


const Machine = () => {
    return(
        <div className="vending-machine">
          <div>
            <h3>나만의 자판기</h3>
          </div>
          <div className="drink-list-container">
            <div className="drink-list">
              <DrinkList/>
            </div>
          </div>
          <div className="money-container">
            <Money />
          </div>
          <div className="drink-out-container">
            <ReturnDrink />
          </div>
        </div>
    );
}

export default Machine;
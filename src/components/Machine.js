import React from "react";
import "../css/VendingMachine.css";
import "../css/drinks.css";
import ReturnDrink from "./ReturnDrink";
import DrinkList from "./DrinkList";


const Machine = () => {
    return(
        <div className="vending-machine">
          <div className="drink-list">
            <DrinkList/>
          </div>
          <div className="drink-out-container">
            <ReturnDrink />
          </div>
        </div>
    );
}

export default Machine;
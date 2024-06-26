import React from "react";
import "../css/VendingMachine.css";
import ReturnDrink from "./ReturnDrink";
import DrinkList from "./DrinkList";

const Machine = () => {
    return (
        <div className="vending-machine-container">
            <div className="vending-machine">
                <div>
                    <h3>나만의 자판기</h3>
                </div>
                <DrinkList />
                <ReturnDrink />
            </div>
        </div>
    );
};

export default Machine;

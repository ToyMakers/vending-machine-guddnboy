import React from "react";
import "../css/VendingMachine.css";
import "../css/drinks.css";
import insert_coin from "../img/insert.png";
import useStore from "./store.js";

const ReturnDrink = () => {
    const { insertMoney, returnMoney, getMyDrinks } = useStore(
        (state) => state
    );

    return (
        <div className="return-element">
            <div className="money-display">
                <div className="insert-money">
                    <div className="display-insert">{insertMoney}</div>
                    <div className="insert-return">
                        <button>
                            <img
                                src={insert_coin}
                                alt="insert"
                                width="45px"
                                height="45px"
                            />
                        </button>
                        <div
                            className="return-button"
                            onClick={returnMoney}></div>
                    </div>
                </div>
                <div className="present-money"></div>
            </div>
            <div className="drink-out-container">
                <div className="drink-out">
                    <button onClick={getMyDrinks}></button>
                </div>
            </div>
        </div>
    );
};

export default ReturnDrink;

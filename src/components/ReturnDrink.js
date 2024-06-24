/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "../css/VendingMachine.css";
import "../css/drinks.css";
import insert_coin from "../img/insert.png";

const ReturnDrink = ({
    insert,
    insertMoney,
    returnMoney,
    returnDrinks,
    selectedDrink,
    onClickResetDrinks,
}) => {
    return (
        <div>
            <div className="money-display">
                <div className="insert-money">
                    <div className="display-insert">{insertMoney}</div>
                    <div className="insert-return">
                        <button onClick={insert}>
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
                    <button></button>
                </div>
                <div className="bought-drinks">
                    <li>{returnDrinks}</li>
                </div>
            </div>
        </div>
    );
};

export default ReturnDrink;

import React, { Fragment } from "react";
import "../css/VendingMachine.css";
import "../css/drinks.css";
import insert_coin from "../img/insert.png";
import Inventory from "./Inventory";
import drinking from "../img/drinking.png";
import useStore from "./store.js";

const ReturnDrink = () => {
    const { insertMoney, insert, returnMoney, getMyDrinks, takeMyDrinks } =
        useStore((state) => state);

    return (
        <Fragment>
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
                    <button onClick={getMyDrinks}></button>
                </div>
            </div>
            <Inventory />
            <div className="take-my-drinks">
                <button onClick={takeMyDrinks}>
                    <img src={drinking} alt="마시기"></img>
                </button>
            </div>
        </Fragment>
    );
};

export default ReturnDrink;

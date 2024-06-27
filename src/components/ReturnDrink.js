import React, { Fragment } from "react";
import "../css/VendingMachine.css";
import "../css/drinks.css";
import insert_coin from "../img/insert.png";
import useStore from "./store.js";

const ReturnDrink = () => {
    const { insertMoney, insert, returnMoney, getMyDrinks } = useStore(
        (state) => state
    );

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
        </Fragment>
    );
};

export default ReturnDrink;

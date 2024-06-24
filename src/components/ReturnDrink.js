/* eslint-disable array-callback-return */
import React, { useState } from "react";
import defaultReturning from "../img/defaultReturing.png";
import Returning from "../img/Returning.png";
import "../css/VendingMachine.css";
import "../css/drinks.css";
import insert_coin from "../img/insert.png";

const ReturnDrink = ({
    insert,
    insertMoney,
    returnMoney,
    seletedDrink,
    returnDrinks,
    onClickResetDrinks,
}) => {
    const [isHovered, setIsHovered] = useState(false);

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
                <div
                    className="drink-out"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <img
                        src={isHovered ? Returning : defaultReturning}
                        alt="상품 나오는 곳"
                        onClick={returnDrinks}
                    />
                </div>
            </div>
        </div>
    );
};

export default ReturnDrink;

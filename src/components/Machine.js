import React from "react";
import "../css/VendingMachine.css";
import ReturnDrink from "./ReturnDrink";
import DrinkList from "./DrinkList";
import { useState } from "react";
import insert_coin from "../img/insert.png";

const Machine = ({ money, setMoney }) => {
    const [insertMoney, setInsertMoney] = useState(0);

    function insert() {
        if (money < 1000) {
            alert("보유 금액이 부족합니다.");
        } else {
            setInsertMoney(insertMoney + 1000);
            setMoney(money - 1000);
        }
    }

    function returnMoney() {
        setMoney(money + insertMoney);
        setInsertMoney(0);
    }

    return (
        <div className="vending-machine">
            <div>
                <h3>나만의 자판기</h3>
            </div>
            <div className="drink-list-container">
                <div className="drink-list">
                    <DrinkList
                        insertMoney={insertMoney}
                        setInsertMoney={setInsertMoney}
                    />
                </div>
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
            </div>
            <div className="drink-out-container">
                <ReturnDrink />
            </div>
        </div>
    );
};

export default Machine;

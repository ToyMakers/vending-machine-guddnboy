import React from "react";
import "../css/VendingMachine.css";
import ReturnDrink from "./ReturnDrink";
import DrinkList from "./DrinkList";
import { useState } from "react";

const Machine = ({ money, setMoney }) => {
    const [insertMoney, setInsertMoney] = useState(0);
    const [selectedDrink, setSelectedDrink] = useState([]);

    const insert = () => {
        if (money < 1000) {
            alert("보유 금액이 부족합니다.");
        } else {
            setInsertMoney(insertMoney + 1000);
            setMoney(money - 1000);
        }
    };

    const returnMoney = () => {
        setMoney(money + insertMoney);
        setInsertMoney(0);
    };

    const returnDrinks = (drink) => {
        setSelectedDrink([...selectedDrink, drink]);
    };

    const resetSeletedDrink = () => {
        setSelectedDrink([]);
    };

    return (
        <div className="vending-machine-container">
            <div className="vending-machine">
                <div>
                    <h3>나만의 자판기</h3>
                </div>
                <DrinkList
                    insertMoney={insertMoney}
                    setInsertMoney={setInsertMoney}
                />
                <ReturnDrink
                    insert={insert}
                    insertMoney={insertMoney}
                    returnMoney={returnMoney}
                    returnDrinks={returnDrinks}
                    seletedDrink={selectedDrink}
                    onClickResetDrinks={resetSeletedDrink}
                />
            </div>
        </div>
    );
};

export default Machine;

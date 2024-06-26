import React from "react";
import "../css/VendingMachine.css";
import ReturnDrink from "./ReturnDrink";
import DrinkList from "./DrinkList";
import { useState } from "react";

const Machine = ({ money, setMoney }) => {
    const [insertMoney, setInsertMoney] = useState(0);
    const [selectedDrink, setSelectedDrink] = useState([]);
    const [myDrinks, setMyDrinks] = useState([]);

    const insert = () => {
        if (money < 1000) {
            alert("1,000원 이상부터 금액 투입이 가능합니다.");
        } else {
            setInsertMoney(insertMoney + 1000);
            setMoney(money - 1000);
        }
    };

    const returnMoney = () => {
        setMoney(money + insertMoney);
        setInsertMoney(0);
    };

    const buyDrink = (drink) => {
        if (insertMoney >= drink.price) {
            setInsertMoney(insertMoney - drink.price);
            setSelectedDrink([...selectedDrink, drink]);
            console.log(drink.name);
            console.log(selectedDrink);
        } else {
            console.log(drink.price, insertMoney);
            alert("보유 금액이 부족합니다.");
        }
    };

    const resetSelectedDrink = () => {
        setSelectedDrink([]);
    };

    const getMyDrinks = () => {
        if (selectedDrink.length === 0) {
            alert("구매한 음료가 없습니다.");
        } else {
            setMyDrinks([...myDrinks, ...selectedDrink]);
            console.log(myDrinks);
        }
    };

    const takeMyDrinks = () => {
        resetSelectedDrink();
        setMyDrinks([]);
    };

    return (
        <div className="vending-machine-container">
            <div className="vending-machine">
                <div>
                    <h3>나만의 자판기</h3>
                </div>
                <DrinkList buyDrink={buyDrink} />
                <ReturnDrink
                    insert={insert}
                    insertMoney={insertMoney}
                    returnMoney={returnMoney}
                    myDrinks={myDrinks}
                    getMyDrinks={getMyDrinks}
                    selectedDrink={selectedDrink}
                    onClickResetDrinks={resetSelectedDrink}
                    takeMyDrinks={takeMyDrinks}
                />
            </div>
        </div>
    );
};

export default Machine;

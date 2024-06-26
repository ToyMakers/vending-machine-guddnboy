import React from "react";
import "../css/VendingMachine.css";
import useStore from "./store.js";

import bearImg from "../img/drinks/beer.png";
import bluehawai from "../img/drinks/bluehawai.png";
import bubbletea from "../img/drinks/bubbletea.png";
import coke from "../img/drinks/coke.png";
import fanta from "../img/drinks/fanta.png";
import lemonade from "../img/drinks/lemonade.png";
import orangejuice from "../img/drinks/orangejuice.png";
import vita500 from "../img/drinks/vita500.png";

const Inventory = () => {
    const myDrinks = useStore((state) => state.myDrinks);

    const drinkImages = {
        맥주: bearImg,
        블루하와이: bluehawai,
        버블티: bubbletea,
        콜라: coke,
        환타: fanta,
        레모네이드: lemonade,
        오렌지주스: orangejuice,
        비타500: vita500,
    };

    return (
        <div className="my-drinks">
            <h2>내가 산 음료수들</h2>
            <div className="my-drink-list">
                {myDrinks.map((drink, name) => (
                    <img
                        key={name}
                        src={drinkImages[drink.name]}
                        alt={drink.name}
                        width="45px"
                        height="45px"
                    />
                ))}
            </div>
        </div>
    );
};

export default Inventory;

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
import drinking from "../img/drinking.png";

const Inventory = () => {
    const myDrinks = useStore((state) => state.myDrinks);
    const takeMyDrinks = useStore((state) => state.takeMyDrinks);

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
            <h2>My Drinks</h2>
            <div className="my-drink-list">
                <li>
                    {myDrinks.map((drink, name) => (
                        <img
                            key={name}
                            src={drinkImages[drink.name]}
                            alt={drink.name}
                            width="45px"
                            height="45px"
                        />
                    ))}
                </li>
            </div>
            <div className="take-my-drinks">
                <button onClick={takeMyDrinks}>
                    <img src={drinking} alt="마시기"></img>
                </button>
            </div>
        </div>
    );
};

export default Inventory;

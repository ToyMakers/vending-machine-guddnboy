import React from "react";
import coin from "../img/coin.png";
import "../css/money.css";

const Money = () => {
    return(
        <div className="money-input">
            <button><img src={coin} values="동전"></img></button>
        </div>
    );
}
export default Money;
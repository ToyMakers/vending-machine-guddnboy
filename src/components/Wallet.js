import React from "react";
import "../css/money.css";
import coin from "../img/coin.png";

const Wallet = ({money, setMoney}) => {
    function InsertMoney() {
        setMoney(money + 2000);
    }

    return (
        <div className="wallet-container">
            <h1>내 지갑</h1>
            <div>
            <div className="money-input">
                <button onClick={InsertMoney}>
                    <img src={coin} alt="동전" />
                </button>
            </div>
            <div className="mywallet">
            현재 잔액은 {money}입니다.
        </div>
        </div>
            <div className="my-drinks">
                <div>내가 뽑은 음료수</div>
            </div>
        </div>
    );
}

export default Wallet;
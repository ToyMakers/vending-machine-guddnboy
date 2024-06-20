import React from "react";
import "../css/Wallet.css";
import money_500 from "../img/money_500.png";
import money_1000 from "../img/money_1000.png";
import money_2000 from "../img/money_2000.png";

const Wallet = ({ money, setMoney }) => {
    function get500() {
        setMoney(money + 500);
    }
    function get1000() {
        setMoney(money + 1000);
    }
    function get2000() {
        setMoney(money + 2000);
    }

    return (
        <div className="wallet-container">
            <h1>내 지갑</h1>
            <div>
                <div className="money-input">
                    <button onClick={get500}>
                        <img src={money_500} alt="500원" />
                    </button>
                    <button onClick={get1000}>
                        <img src={money_1000} alt="1000원" />
                    </button>
                    <button onClick={get2000}>
                        <img src={money_2000} alt="2000원" />
                    </button>
                </div>
                <div className="mywallet">현재 잔액은 {money}입니다.</div>
            </div>
            <div className="my-drinks">
                <div>내가 뽑은 음료수</div>
            </div>
        </div>
    );
};

export default Wallet;

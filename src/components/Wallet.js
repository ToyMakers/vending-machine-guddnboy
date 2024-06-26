import React from "react";
import "../css/Wallet.css";
import money_500 from "../img/money_500.png";
import money_1000 from "../img/money_1000.png";
import money_2000 from "../img/money_2000.png";
import useStore from "./store.js";

const Wallet = () => {
    const { money, handleGet500, handleGet1000, handleGet2000 } = useStore(
        (state) => ({
            money: state.money,
            handleGet500: state.handleGet500,
            handleGet1000: state.handleGet1000,
            handleGet2000: state.handleGet2000,
        })
    );
    return (
        <div className="wallet-container">
            <h1>내 지갑</h1>
            <div>
                <div className="money-input">
                    <button onClick={handleGet500}>
                        <img src={money_500} alt="500원" />
                    </button>
                    <button onClick={handleGet1000}>
                        <img src={money_1000} alt="1000원" />
                    </button>
                    <button onClick={handleGet2000}>
                        <img src={money_2000} alt="2000원" />
                    </button>
                </div>
                <div className="mywallet">현재 잔액은 {money}입니다.</div>
            </div>
        </div>
    );
};

export default Wallet;

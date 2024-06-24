import React from "react";
import "../css/VendingMachine.css";
import Machine from "./Machine";
import Wallet from "./Wallet";
import { useState } from "react";

const Container = () => {
    const [money, setMoney] = useState(0);

    const handleGet500 = () => {
        setMoney(money + 500);
    };

    const handleGet1000 = () => {
        setMoney(money + 1000);
    };

    const handleGet2000 = () => {
        setMoney(money + 2000);
    };

    return (
        <div className="containers">
            <header>
                <h1>VendingMachine</h1>
            </header>
            <div className="machine-wallet">
                <Machine money={money} setMoney={setMoney} />
                <Wallet
                    money={money}
                    onClickGet500={handleGet500}
                    onClickGet1000={handleGet1000}
                    onClickGet2000={handleGet2000}
                />
            </div>
        </div>
    );
};

export default Container;

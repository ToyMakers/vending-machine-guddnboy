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
        <div>
            <header>
                <h1>VendingMachine</h1>
            </header>
            <div className="machine-wallet">
                <div className="vending-machine-container">
                    <Machine money={money} setMoney={setMoney} />
                </div>
                <Wallet
                    money={money}
                    handleGet500={handleGet500}
                    handleGet1000={handleGet1000}
                    handleGet2000={handleGet2000}
                />
            </div>
        </div>
    );
};

export default Container;

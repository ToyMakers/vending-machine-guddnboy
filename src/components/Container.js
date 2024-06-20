import React from "react";
import "../css/VendingMachine.css";
import Machine from "./Machine";
import Wallet from "./Wallet";
import { useState } from "react";

const Container = () => {
    const [money, setMoney] = useState(0);

    return (
        <div>
            <header>
                <h1>VendingMachine</h1>
            </header>
            <div className="machine-wallet">
                <div className="vending-machine-container">
                    <Machine money={money} setMoney={setMoney} />
                </div>
                <Wallet money={money} setMoney={setMoney} />
            </div>
        </div>
    );
};

export default Container;

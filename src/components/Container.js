import React from "react";
import "../css/VendingMachine.css";
import Machine from "./Machine";
import Wallet from "./Wallet";

const Container = () => {
    return (
        <div className="containers">
            <header>
                <h1>VendingMachine</h1>
            </header>
            <div className="machine-wallet">
                <Machine />
                <Wallet />
            </div>
        </div>
    );
};

export default Container;

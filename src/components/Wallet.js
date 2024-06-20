import React from "react";
import "../css/money.css";
import MoneyManage from "./MoneyManage";

const Wallet = ({myMoney,setMyMoney }) => {
    
    return (
        <div className="wallet-container">
            <h1>내 지갑</h1>
            <MoneyManage myMoney={myMoney} setmyMoney={setMyMoney}/>
            <div className="my-drinks">
                <div>내가 뽑은 음료수</div>
            </div>
        </div>
    );
}

export default Wallet;
import React from "react";
import "../css/VendingMachine.css";
import ReturnDrink from "./ReturnDrink";
import DrinkList from "./DrinkList";


const Machine = ({myMoney, setMyMoney}) => {
    return(
        <div className="vending-machine">
          <div>
            <h3>나만의 자판기</h3>
          </div>
          <div className="drink-list-container">
            <div className="drink-list">
              <DrinkList myMoney={myMoney} setMyMoney={setMyMoney}/>
            </div>
            <div className="center-deco">
              <h4>시원한 음료수 자판기</h4>
            </div>
          </div>
          <div className="drink-out-container">
            <ReturnDrink />
          </div>
        </div>
    );
}

export default Machine;
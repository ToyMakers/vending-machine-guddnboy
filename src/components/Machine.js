import React from "react";
import "../css/VendingMachine.css";
import "../css/drinks.css";
import MoneyContainer from "./containers/MoneyContainer";
import beeaImg from "../img/beer.png";
import bluehawia from "../img/bluehawai.png";
import bubbletea from "../img/bubbletea.png";
import coke from "../img/coke.png";
import fanta from "../img/fanta.png";
import lemonade from "../img/lemonade.png";
import orangejuice from "../img/orangejuice.png";
import vita500 from "../img/vita500.png";


const Machine = () => {
    return(
        <div className="vending-machine">
          <div className="drink-list">
            <button className="drinks">
            <img src={beeaImg} alt="맥주" onclick="" ></img>
            </button>
            <button className="drinks">
            <img src={bluehawia} alt="블루하와이" onclick="" ></img>
            </button>

            <button className="drinks">
            <img src={bubbletea} alt="버블티" onclick="" ></img>
            </button>
            <button className="drinks">
            <img src={coke} alt="콜라" onclick="" ></img>
            </button>
            <button className="drinks">
            <img src={fanta} alt="환타" onclick="" ></img>
            </button>
            <button className="drinks">
            <img src={lemonade} alt="레모네이드" onclick="" ></img>
            </button>
            <button className="drinks">
            <img src={orangejuice} alt="오렌지주스" onclick="" ></img>
            </button>
            <button className="drinks">
            <img src={vita500} alt="비타500" onclick="" ></img>
            </button>
          </div>
          <div className="money-container">
            <MoneyContainer />
          </div>
          <div className="drink-out">
            <button>상품 나오는 곳</button>
          </div>
        </div>
    );
}

export default Machine;
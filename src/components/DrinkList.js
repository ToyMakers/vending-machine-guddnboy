import React from "react";
import bearImg from "../img/drinks/beer.png";
import bluehawai from "../img/drinks/bluehawai.png";
import bubbletea from "../img/drinks/bubbletea.png";
import coke from "../img/drinks/coke.png";
import fanta from "../img/drinks/fanta.png";
import lemonade from "../img/drinks/lemonade.png";
import orangejuice from "../img/drinks/orangejuice.png";
import vita500 from "../img/drinks/vita500.png";
import "../css/drinks.css";


const DrinkList = ({ drinks }) => {
    return (
        <div className="drink-list">
    
    <div className="drink-list">
            <button className="drinks">
            <img src={bearImg} alt="맥주" onClick="" ></img>
            </button>
            <button className="drinks">
            <img src={bluehawai} alt="블루하와이" onClick="" ></img>
            </button>
            <button className="drinks">
            <img src={bubbletea} alt="버블티" onClick="" ></img>
            </button>
            <button className="drinks">
            <img src={coke} alt="콜라" onClick="" ></img>
            </button>
            <button className="drinks">
            <img src={fanta} alt="환타" onClick="" ></img>
            </button>
            <button className="drinks">
            <img src={lemonade} alt="레모네이드" onClick="" ></img>
            </button>
            <button className="drinks">
            <img src={orangejuice} alt="오렌지주스" onClick="" ></img>
            </button>
            <button className="drinks">
            <img src={vita500} alt="비타500" onClick="" ></img>
            </button>
          </div>
        </div>
    );
    };
export default DrinkList;
import React from "react";
import "../css/VendingMachine.css";

const Inventory = ({ myDrinks, drinkImages }) => {
    return (
        <div className="my-drinks">
            <h4>내가 산 음료수들</h4>
            <div className="my-drink-list">
                {myDrinks.map((drink, name) => (
                    <img
                        key={name}
                        src={drinkImages[drink.name]}
                        alt={drink.name}
                        width="45px"
                        height="45px"
                    />
                ))}
            </div>
        </div>
    );
};

export default Inventory;

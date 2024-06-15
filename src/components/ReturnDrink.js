import React, { useState } from 'react';
import defaultReturning from '../img/defaultReturing.png';
import Returning from '../img/Returning.png';
import '../css/VendingMachine.css';

const ReturnDrink = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="drink-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={isHovered ? Returning : defaultReturning} 
        alt="상품 나오는 곳" 
      />
    </div>
  );
}

export default ReturnDrink;

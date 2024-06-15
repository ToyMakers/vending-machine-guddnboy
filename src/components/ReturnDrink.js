import React, { useState } from 'react';
import defaultImage from '../img/default_return.png';
import hoverImage from '../img/return_return.png';
import '../css/drinks.css';

const ReturnDrink = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="drink-out-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        className="drink-out"
        src={isHovered ? hoverImage : defaultImage} 
        alt="상품 나오는 곳" 
      />
    </div>
  );
}

export default ReturnDrink;

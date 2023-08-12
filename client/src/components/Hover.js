import React, { useState } from 'react';


const Hover = ({ icon, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="icon-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span className="bi bi-file-person-fill"></span>
      {isHovered && <span className="text">nass</span>}
    </div>
  );
};

export default Hover;

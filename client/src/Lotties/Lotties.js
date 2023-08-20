import Lottie from "react-lottie";

import React, { useState } from "react";

const Lotties = ({ height, width, animationData, click}) => {

  const [stopped, setStopped] = useState(true);

  const options = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      onMouseEnter={() => {
        setStopped(false);
      }}
      onMouseLeave={() => {
        setStopped(true);
      }}
      onClick={click}
    >
      <Lottie
        options={options}
        isClickToPauseDisabled
        isStopped={stopped}
        height={height}
        width={width}
      />
    </div>
  );
};

export default Lotties;

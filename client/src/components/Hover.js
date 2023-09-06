import React, { useState } from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const Hover = ({ icon, text }) => {


  return (
    <>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
        mass
      </a>
      <Tooltip place="right" id="my-tooltip" />
    </>
  );
};

export default Hover;

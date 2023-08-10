import React from 'react';
import Model from './Model';
import { useState } from 'react';


const Example = () => {

    const [showModel, setShowModel] = useState(false);
    
  return (
    <>
    <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
    <button style={{border:"1px solid black"}} onClick={() =>setShowModel(true)}>model</button>
    <Model isVisible={showModel} onClose={() => setShowModel(false)}/ >
    </div>
    </>
  )
}

export default Example
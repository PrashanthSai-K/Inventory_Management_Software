import { React, useEffect, useState } from "react";

import axios from 'axios';
import {
    Brush,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';


function Areachart({inventory}) {


    const [isCostFullScreen, setisCostFullScreen] = useState(false);

    const toggleCostFullScreen = () => {
        setisCostFullScreen(!isCostFullScreen);
    };

    return (
        <>
            
                <div className="flex justify-center">
                    <div
                        className={` shadow-2xl p-10 bg-white rounded-2xl shadow ${isCostFullScreen ? 'fixed top-0 left-0 max-w z-50 full-screen' : ''
                            }`}
                        style={{ width: isCostFullScreen ? '100%' : '100%', height: isCostFullScreen ? '100%' : '490px' }}
                    >
                        <h4 style={{ fontFamily: 'Iceland', fontWeight: "bold", borderBottom: "1px solid gray", display: "flex", justifyContent: "space-between" }} className=" text-start text-3xl pb-2">Cost Overview <button  className="spin icon" onClick={toggleCostFullScreen}><i class={`bi bi-arrows-${isCostFullScreen ? 'collapse' : 'fullscreen'}`}></i></button></h4>
                        <br />

                        <ResponsiveContainer width="100%" height="80%">
                            <AreaChart
                                width={500}
                                height={200}
                                data={inventory}
                                syncId="anyId"
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="Cost" stroke="#220129" fill="#9a07b8" isAnimationActive={true} animationDuration={2000} />
                                <Brush startIndex={0} endIndex={10} dataKey={null} height={10} stroke="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
        </>
    )

}
export default Areachart




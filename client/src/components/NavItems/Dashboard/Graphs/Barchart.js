import { React, useEffect, useState } from "react";

import axios from 'axios';
import {
    BarChart,
    Bar,
    Brush,
    ReferenceLine,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Cell,
    Legend,
    ResponsiveContainer,
} from 'recharts';




function Barchart({categories}) {



    

    const [isStockFullScreen, setisStockFullScreen] = useState(false);

    const toggleStockFullScreen = () => {
        setisStockFullScreen(!isStockFullScreen);

    };

    const colors = ['#4287f5', '#67cc52', '#f5d142', '#a142f5', '#33ff88', '#f542d1', '#8833ff', '#ff8833', '#33ff33', '#ff33ff', '#33ffff', '#ffff33', '#3333ff'];

    return (
        <>
            <div style={{ backgroundColor: "#F4F4F4" , width:"650px"}} >
                <div>
                    <div
                        className={`shadow-2xl p-10 bg-white rounded-2xl shadow ${isStockFullScreen ? 'fixed top-0 left-0 max-w z-50 full-screen  ' : 'max-w-2xl'
                            }`}
                        style={{
                            width: isStockFullScreen ? '100%' : '100%',
                            height: isStockFullScreen ? '100%' : '530px',

                        }}
                    >
                        <h4
                            style={{
                                fontFamily: 'Iceland',
                                fontWeight: 'bold',
                                borderBottom: '1px solid gray',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                            className="text-start text-3xl pb-2"
                        >
                            Stock Analysis{' '}
                            <button onClick={toggleStockFullScreen}>
                                <i
                                    className={`bi bi-arrows-${isStockFullScreen ? 'collapse' : 'fullscreen'
                                        }`}
                                ></i>
                            </button>
                        </h4>
                        <br />
                        <ResponsiveContainer width="100%" height="80%">
                            <BarChart
                                width={500}
                                height={300}
                                data={categories} // Replace `categories` with the data for the stock graph
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                                <ReferenceLine y={0} stroke="#000" />
                                <Brush
                                    startIndex={0}
                                    endIndex={isStockFullScreen ? 10 : 2}
                                    dataKey={null}
                                    height={10}
                                    stroke="#8884d8"
                                />
                                <Bar
                                    dataKey="Stock"
                                    barSize={60}
                                    isAnimationActive={true}
                                    animationDuration={1000}
                                    fill="#fc03ca"
                                >
                                    {categories.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
    </>
  )
}


export default Barchart




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




function Barchart({ open, setOpen, categories, labname, labsStock }) {



    const [selectedLab, setSelectedLab] = useState("all");
    const [filteredData, setFilteredData] = useState(categories);

    const [isStockFullScreen, setisStockFullScreen] = useState(false);

    const toggleStockFullScreen = () => {
        setisStockFullScreen(!isStockFullScreen);

    };

    const colors = ['#4287f5', '#67cc52', '#f5d142', '#a142f5', '#33ff88', '#f542d1', '#8833ff', '#ff8833', '#33ff33', '#ff33ff', '#33ffff', '#ffff33', '#3333ff'];

    const handleFilter = () => {

        if (selectedLab === "all") {
            setFilteredData(categories);
        } else {
            const filtered = labsStock.filter((category) => category.labname === selectedLab);

            setFilteredData(filtered);

        }
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const dataPoint = payload[0].payload;
            const stockValue = dataPoint.Stock;
            const yAxisName = dataPoint.name;
    
            return (
                <div style={{ display: 'flex', flexDirection: 'column' , backgroundColor:"white" , padding:"15px" }}>
                    <span>{yAxisName}</span>
                    <span style={{color:"#fc03ca"}}>Stock: {stockValue} nos</span>
                </div>
            );
        }
    
        return null;
    };

    return (
        <>
            <div className="bar animate2" style={{ backgroundColor: "#F4F4F4", width: "44%" }} >
                <div
                    className={` barh shadow-2xl p-10 bg-white rounded-2xl  shadow ${isStockFullScreen ? 'fixed top-0 left-0  z-50 full-screen  ' : ''
                        }`}
                    style={{
                        width: isStockFullScreen ? '100%' : '100%',
                        height: isStockFullScreen ? '100%' : '500px',

                    }}
                >
                    <div
                        style={{

                            borderBottom: '1px solid gray',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: "center"
                        }}

                    >
                        <h4 style={{ fontFamily: "Iceland" }} className="text-start text-3xl font-bold pb-2" >Stock Analysis</h4>
                        <div className="flex gap-2" >
                            <select
                                style={{ maxWidth: "200px" }}
                                name="cars"
                                id="cars"
                                value={selectedLab}
                                onChange={(e) => setSelectedLab(e.target.value)}
                            >
                                <option value="all">All</option>
                                {labname.map((name) => {
                                    return (
                                        <option value={name.labname}>{name.labname}</option>
                                    )
                                })}
                            </select>

                            <button

                                className="bg-blue-500 filter animate1 cursor-pointer whitespace-nowrap hover:bg-blue-700 text-white text-sm h-10 py-2 px-4 rounded"
                                onClick={handleFilter}
                            >
                                Ok
                            </button>
                        </div>
                        <button className="icon text-start text-3xl font-bold pb-2" onClick={toggleStockFullScreen}>
                            <i
                                className={`bi bi-arrows-${isStockFullScreen ? 'collapse' : 'fullscreen'
                                    }`}
                            ></i>
                        </button>
                    </div>
                    <br />

                    {filteredData.length > 0 ?
                        <ResponsiveContainer width="100%" height="80%">
                            <BarChart
                                width={500}
                                height={300}
                                data={filteredData}
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
                                <Tooltip content={<CustomTooltip />} />
                                <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                                <ReferenceLine y={0} stroke="#000" />
                                <Bar
                                    dataKey="Stock"
                                    barSize={60}
                                    isAnimationActive={true}
                                    animationDuration={1000}
                                    fill="#fc03ca"
                                >
                                    {filteredData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                    ))}
                                </Bar>
                                <Brush startIndex={0} endIndex={2} dataKey={null} height={10} stroke="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                        : <div className="flex items-center justify-center h-96 text-3xl">No Data Available</div>}
                </div>
            </div>
        </>
    )
}


export default Barchart




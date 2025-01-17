import { React, useEffect, useState } from "react";

import axios from 'axios';
import {
    PieChart,
    Pie,
    Sector,
    ResponsiveContainer,
} from 'recharts';

import { Doughnut } from 'react-chartjs-2';


function Piechart({ labitem }) {


    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };



    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    const updateDataColor = () => {
        const updatedData = labitem.map((item, index) => {
            if (index === activeIndex) {
                return { ...item, color: getRandomColor() };
            }
            return item;
        });
        return updatedData;
    };

    const updatedData = updateDataColor();

    const [isItemFullScreen, setisItemFullScreen] = useState(false);

    const toggleItemFullScreen = () => {
        setisItemFullScreen(!isItemFullScreen);
    };

    const innerRadius = isItemFullScreen ? 170 : 100;
    const outerRadius = isItemFullScreen ? 200 : 130;

    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1);
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';
        const sectorFill = props.activeIndex === props.index ? payload.color : fill;
        const fontSize = isItemFullScreen ? '20px' : '12px';
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const lineHeight = isItemFullScreen ? '30px' : '15px';

        const wrapText = (text, maxWidth, fontSize, lineHeight) => {
            const words = text.split(' ');
            let line = '';
            let lines = [];

            words.forEach((word) => {
                const testLine = line + word + ' ';
                const testWidth = context.measureText(testLine).width;

                { }

                if (testWidth > maxWidth) {
                    lines.push(<tspan x={cx} y={cy - innerRadius + ((lines.length + 1) * 15)} dy={isItemFullScreen ? 180 : 70}>{line}</tspan>);
                    line = word + ' ';
                } else {
                    line = testLine;
                }
            });

            lines.push(<tspan x={cx} y={cy - innerRadius + (lines.length + 1) * 15} dy={isItemFullScreen ? 200 : 70}>{line}</tspan>);

            return lines;
        };

        const wrappedText = wrapText(payload.name, innerRadius * 1, fontSize);

        return (

            <g>
                <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    fill={fill}
                    style={isItemFullScreen ? { fontSize: fontSize, fontWeight: 'bold' } : { fontSize: fontSize, fontWeight: 'bold' }}
                >
                    {wrappedText}
                </text>

                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={sectorFill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={sectorFill}
                />
                <label></label>
                <g transform={`translate(${ex + (cos >= 0 ? 1 : -1)}, ${ey})`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <text textAnchor={textAnchor}  fill="#333">Items :</text>
                    <text textAnchor={textAnchor} dy={20} fill="#333">{`${value} nos`}</text>
                </g>

            </g>
        );
    };
    const data = {
        labels: labitem.map(item => item.name),
        datasets: [
            {
                data: labitem.map(item => item.value),
                backgroundColor: labitem.map(() => getRandomColor()), // You can use your getRandomColor function here
            },
        ],
    };
    return (
        <>
            <div className="pie animate2" style={{ backgroundColor: "#F4F4F4", width: "40%" }}>
                <div>
                    <div
                        className={` pieh shadow-2xl p-10 bg-white rounded-2xl shadow ${isItemFullScreen ? 'fixed top-0 left-0 max-w z-50 full-screen' : ''
                            }`}
                        style={{ width: isItemFullScreen ? '100%' : '100%', height: isItemFullScreen ? '100%' : '500px' }}
                    >
                        <h4 style={{ fontFamily: 'Iceland', fontWeight: "bold", borderBottom: "1px solid gray", display: "flex", justifyContent: "space-between" }} className="text-start text-3xl pb-2">Item Analysis <button className="icon" onClick={toggleItemFullScreen}><i class={`bi bi-arrows-${isItemFullScreen ? 'collapse' : 'fullscreen'}`}></i></button></h4>

                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    activeIndex={activeIndex}
                                    activeShape={renderActiveShape}
                                    data={updatedData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={innerRadius}
                                    outerRadius={outerRadius}
                                    fill="#c92204"
                                    dataKey="value"
                                    onMouseEnter={onPieEnter}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Piechart




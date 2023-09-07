import { React, useEffect, useState } from "react";

import axios from "axios";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  PieChart,
  Pie,
  Sector,
  Cell,
  Line,
  AreaChart,
  Area,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Dashboard({ open }) {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [labitem, setLabitem] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0 && inventory.length > 0) {
      setTimeout(() => setIsLoading(false), 2000);
    }
  });
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getCategories"); // Replace '/api/data' with your API endpoint
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getInventory"); // Replace '/api/data' with your API endpoint
      setInventory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLabitem();
  }, []);

  const fetchLabitem = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getLabItem"); // Replace '/api/data' with your API endpoint
      setLabitem(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
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

  const [isStockFullScreen, setisStockFullScreen] = useState(false);

  const toggleStockFullScreen = () => {
    setisStockFullScreen(!isStockFullScreen);
  };

  const [isItemFullScreen, setisItemFullScreen] = useState(false);

  const toggleItemFullScreen = () => {
    setisItemFullScreen(!isItemFullScreen);
  };

  const [isCostFullScreen, setisCostFullScreen] = useState(false);

  const toggleCostFullScreen = () => {
    setisCostFullScreen(!isCostFullScreen);
  };

  const innerRadius = isItemFullScreen ? 230 : 100;
  const outerRadius = isItemFullScreen ? 300 : 130;

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
    const sectorFill = props.activeIndex === props.index ? payload.color : fill;
    const fontSize = isItemFullScreen ? "20px" : "12px";
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const lineHeight = isItemFullScreen ? "30px" : "15px";

    const wrapText = (text, maxWidth, fontSize, lineHeight) => {
      const words = text.split(" ");
      let line = "";
      let lines = [];

      words.forEach((word) => {
        const testLine = line + word + " ";
        const testWidth = context.measureText(testLine).width;

        {
        }

        if (testWidth > maxWidth) {
          lines.push(
            <tspan
              x={cx}
              y={cy - innerRadius + (lines.length + 1) * 15}
              dy={isItemFullScreen ? 180 : 70}
            >
              {line}
            </tspan>
          );
          line = word + " ";
        } else {
          line = testLine;
        }
      });

      lines.push(
        <tspan
          x={cx}
          y={cy - innerRadius + (lines.length + 1) * 15}
          dy={isItemFullScreen ? 200 : 70}
        >
          {line}
        </tspan>
      );

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
          style={
            isItemFullScreen
              ? { fontSize: fontSize, fontWeight: "bold" }
              : { fontSize: fontSize, fontWeight: "bold" }
          }
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
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <label></label>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`Items : ${value}`}</text>
      </g>
    );
  };

  const colors = [
    "#4287f5",
    "#67cc52",
    "#f5d142",
    "#a142f5",
    "#33ff88",
    "#f542d1",
    "#8833ff",
    "#ff8833",
    "#33ff33",
    "#ff33ff",
    "#33ffff",
    "#ffff33",
    "#3333ff",
  ];

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-full duration-800 ">
          <span class="loader animate-bounce duration-800"></span>
          Loading
        </div>
      ) : (
        <>
          <div style={{ backgroundColor: "#F4F4F4" }}>
            <h1
              style={{
                fontFamily: "Iceland",
                fontWeight: "bold",
                fontSize: "40px",
              }}
              class="text-start pl-24 pt-10"
            >
              Dashboard
            </h1>
            <center style={{ paddingTop: "20px" }}>
              <div
                className={` shadow-2xl p-10 bg-white rounded-2xl shadow ${
                  isCostFullScreen
                    ? "fixed top-0 left-0 max-w z-50 full-screen"
                    : "max-w-7xl"
                }`}
                style={{
                  width: isCostFullScreen ? "100%" : "100%",
                  height: isCostFullScreen ? "100%" : "530px",
                }}
              >
                <h4 style={{ fontFamily: 'Iceland', fontWeight: "bold", borderBottom: "1px solid gray", display: "flex", justifyContent: "space-between"}} className=" text-start text-3xl pb-2">Cost Overview <button className="spin" onClick={toggleCostFullScreen}><i class={`bi bi-arrows-${isCostFullScreen ? 'collapse' : 'fullscreen'}`}></i></button></h4>
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
                    <Area
                      type="monotone"
                      dataKey="Cost"
                      stroke="#220129"
                      fill="#9a07b8"
                      isAnimationActive={true}
                      animationDuration={2000}
                    />
                    <Brush
                      startIndex={0}
                      endIndex={10}
                      dataKey={null}
                      height={10}
                      stroke="#8884d8"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </center>
            <br />
            <br />

            <div
              style={{ display: "flex", gap: "30px", justifyContent: "center" }}
            >
              <div
                className={`shadow-2xl p-10 bg-white rounded-2xl shadow ${
                  isStockFullScreen
                    ? "fixed top-0 left-0 max-w z-50 full-screen  "
                    : "max-w-2xl"
                }`}
                style={{
                  width: isStockFullScreen ? "100%" : "100%",
                  height: isStockFullScreen ? "100%" : "530px",
                }}
              >
                <h4
                  style={{
                    fontFamily: "Iceland",
                    fontWeight: "bold",
                    borderBottom: "1px solid gray",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  className="text-start text-3xl pb-2"
                >
                  Stock Analysis{" "}
                  <button onClick={toggleStockFullScreen}>
                    <i
                      className={`bi bi-arrows-${
                        isStockFullScreen ? "collapse" : "fullscreen"
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
                    <Legend
                      verticalAlign="top"
                      wrapperStyle={{ lineHeight: "40px" }}
                    />
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

              <div
                className={` shadow-2xl p-10 bg-white rounded-2xl shadow ${
                  isItemFullScreen
                    ? "fixed top-0 left-0 max-w z-50 full-screen"
                    : "max-w-xl"
                }`}
                style={{
                  width: isItemFullScreen ? "100%" : "100%",
                  height: isItemFullScreen ? "100%" : "530px",
                }}
              >
                <h4
                  style={{
                    fontFamily: "Iceland",
                    fontWeight: "bold",
                    borderBottom: "1px solid gray",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  className="text-start text-3xl pb-2"
                >
                  Item Analysis{" "}
                  <button onClick={toggleItemFullScreen}>
                    <i
                      class={`bi bi-arrows-${
                        isItemFullScreen ? "collapse" : "fullscreen"
                      }`}
                    ></i>
                  </button>
                </h4>

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
      )}
    </>
  );
}

export default Dashboard;

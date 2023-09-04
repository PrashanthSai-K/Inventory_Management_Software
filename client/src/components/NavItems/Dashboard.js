import React, { Fragment, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { BarChart, Bar, XAxis, YAxis, Brush, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, } from 'recharts';
import { LineChart, Line, } from 'recharts';
import Cookies from "js-cookie";

function Dashboard() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { getUser, user, isLoggedIn } = useAuth();


  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/")
    } else {
      getUser();
    }
  });
  const data = [
    {
        name: 'Page A',
        Scrab: 4000,
        Stock: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        Scrab: 3000,
        Stock: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        Scrab: 2000,
        Stock: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        Scrab: 2780,
        Stock: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        Scrab: 1890,
        Stock: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        Scrab: 2390,
        Stock: 3800,
        amt: 2500,
    },
    {
        name: 'Page E',
        Scrab: 1890,
        Stock: 4800,
        amt: 2181,
    },
    {
        name: 'Page E',
        Scrab: 1890,
        Stock: 4800,
        amt: 2181,
    }];

    const data01 = [
      { name: 'Group A', value: 400, color: "red" },
      { name: 'Group B', value: 300, color: "red" },
      { name: 'Group C', value: 300, color: "red" },
      { name: 'Group D', value: 200, color: "red" },
      { name: 'Group E', value: 278, color: "red" },
      { name: 'Group F', value: 189, color: "red" },{ name: 'Group A', value: 400, color: "red" },
      { name: 'Group B', value: 300, color: "red" },
      { name: 'Group C', value: 300, color: "red" },
      { name: 'Group D', value: 200, color: "red" },
      { name: 'Group E', value: 278, color: "red" }
  ];




  return (
    <>
      {user.user_name}
      <ResponsiveContainer width="50%" height="50%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Brush startIndex={0} endIndex={2} dataKey="name" height={10} stroke='#8884d8' />
          <Bar dataKey="Stock" fill="#8884d8" />
          <Bar dataKey="Scrab" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>








      <ResponsiveContainer width="50%" height="70%">
        <PieChart width={400} height={400}>

          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={200}
            label      />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {user.length ? (
        <div className="text-2xl">
          {user.email_id},{user.role},{user.dept_code}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Dashboard;

import {React,  useEffect, useState } from "react";

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
  Legend,
  ResponsiveContainer,
} from 'recharts';


function Dashboard() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:4000/getCategories'); // Replace '/api/data' with your API endpoint
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };


 





  return (
    <>
      <ResponsiveContainer width="57%" height="50%">
        <BarChart
          width={500}
          height={300}
          data={categories}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 /* Your desired font size */ }} />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush startIndex={0} endIndex={3}  height={10} stroke="#8884d8" />
          <Bar dataKey="Stock" fill="#82ca9d" barSize={70}/>
        </BarChart>
      </ResponsiveContainer>

    </>

  )
}

export default Dashboard
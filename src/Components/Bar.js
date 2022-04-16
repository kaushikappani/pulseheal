import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const data = [
  {
    name: "4pm",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "5pm",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "6pm",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "7pm",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "8pm",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "9pm",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "10pm",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const BarComp = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarComp;
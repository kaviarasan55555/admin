import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const AreaChartComponent = () => {
  const data = [
    { month: 'January', earnings: 25000 },
    { month: 'February', earnings: 30000 },
    { month: 'March', earnings: 28000 },
    { month: 'April', earnings: 35000 },
    { month: 'May', earnings: 40000 },
    { month: 'June', earnings: 10000 },
  ]; 

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="earnings" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;


import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';

const data = [
  { month: 'Jan', value: 1000, trend: 1000 },
  { month: 'Feb', value: 2000, trend: 1500 },
  { month: 'Mar', value: 3000, trend: 2000 },
  { month: 'Apr', value: 4000, trend: 2500 },
  { month: 'May', value: 3000, trend: 3000 },
  { month: 'Jun', value: 2000, trend: 3500 },
  { month: 'Jul', value: 1000, trend: 4000 },
  { month: 'Aug', value: 2000, trend: 4500 },
  { month: 'Sep', value: 3000, trend: 5000 },
  { month: 'Oct', value: 4000, trend: 5500 },
  { month: 'Nov', value: 3000, trend: 6000 },
  { month: 'Dec', value: 2000, trend: 6500 },
];

const CombinedChart = () => {
  return (
    <div>
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{ top: 20, right: 50, left: 0, bottom: 30 }} // Increased bottom margin to accommodate labels
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Legend />
        <Bar dataKey="value" fill="#277ACC" barSize={30} />
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="trend"
            stroke="#FF5733"
            strokeWidth={2}
            dot={false}
            animationEasing="ease-in-out"
            animationDuration={400}
          />
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" />
          <YAxis />
        </LineChart>
      </BarChart>
    </div>
  );
};

export default CombinedChart;

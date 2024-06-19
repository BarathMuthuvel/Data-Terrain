import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', value: 1000 },
  { month: 'Feb', value: 2000 },
  { month: 'Mar', value: 3000 },
  { month: 'Apr', value: 4000 },
  { month: 'May', value: 3000 },
  { month: 'Jun', value: 2000 },
  { month: 'Jul', value: 1000 },
  { month: 'Aug', value: 2000 },
  { month: 'Sep', value: 3000 },
  { month: 'Oct', value: 4000 },
  { month: 'Nov', value: 3000 },
  { month: 'Dec', value: 2000 },
];

const CustomizedBar = (props:any) => {
  const { x, y, width, height, fill } = props;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
      />
    </g>
  );
};

const CombinedChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 0, left: 0, bottom: 35 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Legend />
        <Tooltip />
        <Bar
          dataKey="value"
          fill="#277ACC"
          barSize={30}
          shape={<CustomizedBar />}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#002B55"
          strokeWidth={3}
          dot={false}
          animationEasing="ease-in-out"
          animationDuration={400}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CombinedChart;

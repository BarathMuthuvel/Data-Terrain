import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DataType {
  month: string;
  value: number;
}

const BarChart: React.FC = () => {
  const data: DataType[] = [
    { month: "Jan", value: 1000 },
    { month: "Feb", value: 2000 },
    { month: "Mar", value: 3000 },
    { month: "Apr", value: 4000 },
    { month: "May", value: 3000 },
    { month: "Jun", value: 2000 },
    { month: "Jul", value: 1000 },
    { month: "Aug", value: 2000 },
    { month: "Sep", value: 3000 },
    { month: "Oct", value: 4000 },
    { month: "Nov", value: 3000 },
    { month: "Dec", value: 2000 },
  ];

  const chartData: ChartData<'bar' | 'line', number[], string> = {
    labels: data.map(d => d.month),
    datasets: [
      {
        type: 'line' as const,
        label: 'Trend',
        data: data.map(d => d.value),
        borderColor: '#002B55',
        borderWidth: 2,
        fill: false,
        cubicInterpolationMode: 'monotone', 
      },
      {
        type: 'bar' as const,
        label: 'Value',
        data: data.map(d => d.value),
        backgroundColor: '#277ACC',
        borderColor: '#277ACC',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar' | 'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: false, // Hide the title
      },
    },
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        max: 5000,
        ticks: {
          stepSize: 1000,
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Chart type="bar" data={chartData} options={options} />
    </div>
  );
};

export default BarChart;

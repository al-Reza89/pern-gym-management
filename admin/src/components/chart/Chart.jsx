import "./chart.scss";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    name: "January",
    Total: 1200,
  },
  {
    name: "February",
    Total: 2100,
  },
  {
    name: "March",
    Total: 800,
  },
  {
    name: "April",
    Total: 1600,
  },
  {
    name: "May",
    Total: 900,
  },
  {
    name: "June",
    Total: 1700,
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Last 6 month (Revenue)</div>
      <AreaChart
        width={1000}
        height={400}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#total)"
        />
      </AreaChart>
    </div>
  );
};

export default Chart;

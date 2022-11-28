import { chartData } from "@/constants/cards";
import { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
} from "recharts";
import CardChartWrapper from "./CardChartWrapper";

const CardAreaChart = () => {
  const data = useMemo(() => chartData, []);
  return (
    <CardChartWrapper>
      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          // width={500}
          // height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 30,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0294FF" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid horizontal={false} />
          <XAxis
            dataKey="name"
            tickLine={false}
            // axisLine={false}
            // orientation="top"
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="uv"
            stroke="none"
            fill={"url(#colorUv)"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </CardChartWrapper>
  );
};
export default CardAreaChart;

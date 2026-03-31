import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

type Props = {
  data: { name: string; value: number }[];
  title?: string;
};

const LiveChart: React.FC<Props> = ({ data, title = "Weekly Data" }) => {
  return (
    <div className="w-full bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl shadow-xl border border-gray-100">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>
        <span className="text-sm text-gray-500">Live</span>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded-2xl shadow-inner">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            
            {/* Gradient */}
            <defs>
              <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity={1}/>
                <stop offset="100%" stopColor="#6366F1" stopOpacity={0.2}/>
              </linearGradient>
            </defs>

            {/* Grid */}
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

            {/* Axis */}
            <XAxis 
              dataKey="name" 
              tick={{ fill: "#6b7280", fontSize: 12 }} 
            />
            <YAxis 
              tick={{ fill: "#6b7280", fontSize: 12 }} 
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
              }}
            />

            {/* Line */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="url(#colorLine)"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LiveChart;
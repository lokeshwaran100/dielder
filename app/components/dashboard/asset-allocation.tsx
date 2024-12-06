"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const protocolData = [
  { name: "Ethereum", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Polygon", value: 30, color: "hsl(var(--chart-2))" },
  { name: "USDC", value: 25, color: "hsl(var(--chart-3))" },
];

const assetData = [
  { name: "ETH", value: 40, color: "hsl(var(--chart-1))" },
  { name: "MATIC", value: 35, color: "hsl(var(--chart-2))" },
  { name: "USDC", value: 25, color: "hsl(var(--chart-3))" },
];

interface AssetAllocationProps {
  type: "protocol" | "asset";
}

export function AssetAllocation({ type }: AssetAllocationProps) {
  const data = type === "protocol" ? protocolData : assetData;

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              index,
            }) => {
              const RADIAN = Math.PI / 180;
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              return (
                <text
                  x={x}
                  y={y}
                  className="fill-current text-xs"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {`${data[index].name} (${value}%)`}
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                stroke="hsl(var(--background))"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
            itemStyle={{
              color: "hsl(var(--foreground))",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
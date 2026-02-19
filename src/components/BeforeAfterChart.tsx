import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface BeforeAfterChartProps {
  beforeMetrics: Record<string, number>;
  afterMetrics: Record<string, number>;
}

const labels: Record<string, string> = {
  income: "Income ($)",
  healthScore: "Health",
  educationLevel: "Education",
  wellbeing: "Wellbeing",
};

const BeforeAfterChart = ({ beforeMetrics, afterMetrics }: BeforeAfterChartProps) => {
  const data = Object.keys(beforeMetrics).map((key) => ({
    metric: labels[key] || key,
    Before: beforeMetrics[key],
    After: afterMetrics[key],
  }));

  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} barGap={4}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(200 10% 90%)" />
        <XAxis dataKey="metric" tick={{ fontSize: 12, fill: "hsl(200 10% 46%)" }} />
        <YAxis tick={{ fontSize: 12, fill: "hsl(200 10% 46%)" }} />
        <Tooltip
          contentStyle={{
            borderRadius: "8px",
            border: "1px solid hsl(200 10% 90%)",
            boxShadow: "0 4px 12px -2px rgba(0,0,0,0.08)",
          }}
        />
        <Legend />
        <Bar dataKey="Before" fill="hsl(200 15% 75%)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="After" fill="hsl(174 60% 32%)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BeforeAfterChart;

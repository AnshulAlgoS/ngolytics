import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { beneficiaries, programDistribution } from "@/data/mockData";

const Analytics = () => {
  const locationData = Object.entries(
    beneficiaries.reduce<Record<string, { total: number; avgImpact: number }>>((acc, b) => {
      if (!acc[b.location]) acc[b.location] = { total: 0, avgImpact: 0 };
      acc[b.location].total++;
      acc[b.location].avgImpact += b.impactScore;
      return acc;
    }, {})
  ).map(([location, data]) => ({
    location: location.split(",")[0],
    beneficiaries: data.total,
    avgImpact: Math.round(data.avgImpact / data.total),
  }));

  const ageGroups = [
    { group: "12-18", count: beneficiaries.filter((b) => b.age >= 12 && b.age <= 18).length },
    { group: "19-30", count: beneficiaries.filter((b) => b.age >= 19 && b.age <= 30).length },
    { group: "31-45", count: beneficiaries.filter((b) => b.age >= 31 && b.age <= 45).length },
    { group: "46-65", count: beneficiaries.filter((b) => b.age >= 46 && b.age <= 65).length },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-sm text-muted-foreground mt-1">Insights across programs, locations, and demographics.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5" style={{ boxShadow: "var(--shadow-card)" }}>
          <h3 className="text-sm font-semibold text-foreground mb-4">Impact by Location</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={locationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(200 10% 90%)" />
              <XAxis dataKey="location" tick={{ fontSize: 12, fill: "hsl(200 10% 46%)" }} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(200 10% 46%)" }} />
              <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(200 10% 90%)" }} />
              <Legend />
              <Bar dataKey="beneficiaries" name="Beneficiaries" fill="hsl(174 60% 32%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="avgImpact" name="Avg Impact" fill="hsl(36 90% 55%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-xl border border-border bg-card p-5" style={{ boxShadow: "var(--shadow-card)" }}>
          <h3 className="text-sm font-semibold text-foreground mb-4">Age Distribution</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={ageGroups}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(200 10% 90%)" />
              <XAxis dataKey="group" tick={{ fontSize: 12, fill: "hsl(200 10% 46%)" }} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(200 10% 46%)" }} />
              <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(200 10% 90%)" }} />
              <Bar dataKey="count" name="Beneficiaries" fill="hsl(205 70% 50%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="lg:col-span-2 rounded-xl border border-border bg-card p-5" style={{ boxShadow: "var(--shadow-card)" }}>
          <h3 className="text-sm font-semibold text-foreground mb-4">Program Enrollment Summary</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {programDistribution.map((p) => (
              <div key={p.name} className="text-center rounded-lg bg-muted/50 p-4">
                <p className="text-2xl font-bold text-foreground">{p.count}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-tight">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

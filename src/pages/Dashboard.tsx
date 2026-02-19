import { Users, TrendingUp, DollarSign, Activity, CheckCircle, Clock } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import StatCard from "@/components/StatCard";
import { dashboardStats, monthlyImpact, programDistribution } from "@/data/mockData";

const COLORS = ["hsl(174 60% 32%)", "hsl(36 90% 55%)", "hsl(205 70% 50%)", "hsl(152 60% 40%)", "hsl(0 65% 55%)", "hsl(280 60% 50%)"];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Overview of your organization's impact and beneficiary metrics.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Total Beneficiaries" value={dashboardStats.totalBeneficiaries} icon={Users} variant="primary" trend={{ value: 12, positive: true }} />
        <StatCard title="Avg Impact Score" value={dashboardStats.avgImpactScore} subtitle="out of 100" icon={TrendingUp} variant="accent" trend={{ value: 8, positive: true }} />
        <StatCard title="Aid Distributed" value={`$${dashboardStats.totalAidDistributed.toLocaleString()}`} icon={DollarSign} variant="default" trend={{ value: 5, positive: true }} />
        <StatCard title="Active Programs" value={dashboardStats.activePrograms} icon={Activity} variant="primary" />
        <StatCard title="Active Beneficiaries" value={dashboardStats.activeBeneficiaries} icon={Clock} variant="default" />
        <StatCard title="Completed" value={dashboardStats.completedBeneficiaries} icon={CheckCircle} variant="accent" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-border bg-card p-5" style={{ boxShadow: "var(--shadow-card)" }}>
          <h3 className="text-sm font-semibold text-foreground mb-4">Impact Score Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={monthlyImpact}>
              <defs>
                <linearGradient id="impactGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(174 60% 32%)" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="hsl(174 60% 32%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(200 10% 90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(200 10% 46%)" }} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(200 10% 46%)" }} />
              <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(200 10% 90%)" }} />
              <Area type="monotone" dataKey="score" stroke="hsl(174 60% 32%)" strokeWidth={2} fill="url(#impactGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-xl border border-border bg-card p-5" style={{ boxShadow: "var(--shadow-card)" }}>
          <h3 className="text-sm font-semibold text-foreground mb-4">Program Distribution</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={programDistribution} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={40}>
                {programDistribution.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(200 10% 90%)" }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {programDistribution.map((p, i) => (
              <div key={p.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                  <span className="text-muted-foreground truncate max-w-[140px]">{p.name}</span>
                </div>
                <span className="font-medium text-foreground">{p.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

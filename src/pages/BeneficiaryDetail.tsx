import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Percent, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImpactScoreBadge from "@/components/ImpactScoreBadge";
import BeforeAfterChart from "@/components/BeforeAfterChart";
import { beneficiaries } from "@/data/mockData";

const BeneficiaryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const beneficiary = beneficiaries.find((b) => b.id === id);

  if (!beneficiary) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-muted-foreground">Beneficiary not found.</p>
        <Button variant="outline" className="mt-4" onClick={() => navigate("/beneficiaries")}>Go back</Button>
      </div>
    );
  }

  const b = beneficiary;

  return (
    <div className="space-y-6">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      {/* Header */}
      <div className="flex items-start gap-5 rounded-xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
        <img src={b.avatar} alt={b.name} className="h-16 w-16 rounded-full" />
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-foreground">{b.name}</h1>
            <ImpactScoreBadge score={b.impactScore} size="md" />
          </div>
          <p className="text-sm text-muted-foreground">{b.id} · {b.program}</p>
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {b.location}</span>
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Enrolled {b.enrollmentDate}</span>
            <span className="flex items-center gap-1"><Percent className="h-3.5 w-3.5" /> {b.attendance}% attendance</span>
            <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" /> ${b.financialAid.toLocaleString()} aid</span>
          </div>
        </div>
      </div>

      {/* Before/After */}
      <div className="rounded-xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
        <h2 className="text-sm font-semibold text-foreground mb-4">Before & After Comparison</h2>
        <BeforeAfterChart beforeMetrics={b.beforeMetrics} afterMetrics={b.afterMetrics} />
      </div>

      {/* Service History */}
      <div className="rounded-xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
        <h2 className="text-sm font-semibold text-foreground mb-4">Service History</h2>
        <div className="space-y-3">
          {b.serviceHistory.map((s, i) => (
            <div key={i} className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
              <div className="mt-0.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">{s.service}</p>
                  <p className="text-xs text-muted-foreground">{s.date}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{s.provider} — {s.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeneficiaryDetail;

import { hotspotData } from "@/data/landingData";
import { MapPin, Users, Layers, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const intensityColor = {
  high: "bg-destructive/80",
  medium: "bg-accent/80",
  low: "bg-primary/60",
};

const intensityLabel = {
  high: "High Activity",
  medium: "Moderate Activity",
  low: "Emerging",
};

const Mapping = () => {
  const totalBeneficiaries = hotspotData.reduce((s, h) => s + h.beneficiaries, 0);
  const totalPrograms = hotspotData.reduce((s, h) => s + h.programs, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Impact Mapping</h1>
        <p className="text-muted-foreground mt-1">Geographic overview of program hotspots and beneficiary concentrations</p>
      </div>

      {/* Summary stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="stat-card flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{hotspotData.length}</p>
            <p className="text-sm text-muted-foreground">Active Locations</p>
          </div>
        </div>
        <div className="stat-card flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Users className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{totalBeneficiaries.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Total Beneficiaries</p>
          </div>
        </div>
        <div className="stat-card flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Layers className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{totalPrograms}</p>
            <p className="text-sm text-muted-foreground">Programs Deployed</p>
          </div>
        </div>
      </div>

      {/* Visual map area */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Global Hotspot Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full aspect-[2/1] bg-secondary/50 rounded-xl overflow-hidden border border-border">
            {/* SVG world map outline */}
            <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5">
              {/* Simplified continent outlines */}
              <path d="M150,120 Q200,100 250,110 Q280,120 300,140 Q310,170 290,200 Q260,230 230,240 Q200,250 180,230 Q160,200 150,170 Z" />
              <path d="M450,80 Q520,60 600,70 Q680,80 720,100 Q760,130 770,170 Q780,210 750,230 Q700,250 650,240 Q600,260 550,270 Q500,260 470,230 Q450,200 440,160 Q440,120 450,80 Z" />
              <path d="M500,280 Q540,260 580,270 Q610,290 600,330 Q580,370 540,380 Q510,370 500,340 Q495,310 500,280 Z" />
              <path d="M180,280 Q220,260 260,270 Q280,300 270,340 Q250,380 220,400 Q190,390 170,360 Q160,320 180,280 Z" />
              <path d="M750,160 Q800,140 850,150 Q900,170 920,210 Q930,250 910,290 Q880,310 840,300 Q810,280 790,250 Q770,220 750,190 Z" />
            </svg>

            {/* Hotspot dots */}
            {hotspotData.map((spot) => {
              const x = ((spot.lng + 180) / 360) * 100;
              const y = ((90 - spot.lat) / 180) * 100;
              const size = spot.intensity === "high" ? "h-5 w-5" : spot.intensity === "medium" ? "h-4 w-4" : "h-3 w-3";
              return (
                <div
                  key={spot.id}
                  className={`absolute rounded-full ${intensityColor[spot.intensity]} ${size} animate-pulse border-2 border-background shadow-lg cursor-pointer group`}
                  style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                  title={spot.name}
                >
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                    <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
                      <p className="text-sm font-semibold text-foreground">{spot.name}</p>
                      <p className="text-xs text-muted-foreground">{spot.beneficiaries.toLocaleString()} beneficiaries</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-4 justify-center">
            {(["high", "medium", "low"] as const).map((level) => (
              <div key={level} className="flex items-center gap-2">
                <span className={`h-3 w-3 rounded-full ${intensityColor[level]}`} />
                <span className="text-xs text-muted-foreground">{intensityLabel[level]}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Location details table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Hotspot Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 font-medium text-muted-foreground">Location</th>
                  <th className="pb-3 font-medium text-muted-foreground">Beneficiaries</th>
                  <th className="pb-3 font-medium text-muted-foreground">Programs</th>
                  <th className="pb-3 font-medium text-muted-foreground">Activity Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {hotspotData.sort((a, b) => b.beneficiaries - a.beneficiaries).map((spot) => (
                  <tr key={spot.id} className="hover:bg-muted/50 transition-colors">
                    <td className="py-3 font-medium text-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {spot.name}
                    </td>
                    <td className="py-3 text-foreground">{spot.beneficiaries.toLocaleString()}</td>
                    <td className="py-3 text-foreground">{spot.programs}</td>
                    <td className="py-3">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        spot.intensity === "high"
                          ? "bg-destructive/10 text-destructive"
                          : spot.intensity === "medium"
                          ? "bg-accent/10 text-accent-foreground"
                          : "bg-primary/10 text-primary"
                      }`}>
                        {spot.intensity === "high" && <AlertTriangle className="h-3 w-3" />}
                        {intensityLabel[spot.intensity]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Mapping;

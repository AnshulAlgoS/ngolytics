import { reportsData } from "@/data/landingData";
import { FileText, Download, Clock, File, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const typeColors: Record<string, string> = {
  "Annual Report": "bg-primary/10 text-primary",
  "Quarterly Report": "bg-accent/10 text-accent-foreground",
  "Program Report": "bg-info/10 text-info-foreground",
  "Financial Report": "bg-success/10 text-success-foreground",
  "Forecast": "bg-warning/10 text-warning-foreground",
};

const Reports = () => {
  const [filterType, setFilterType] = useState("All");
  const types = ["All", ...new Set(reportsData.map((r) => r.type))];
  const filtered = filterType === "All" ? reportsData : reportsData.filter((r) => r.type === filterType);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground mt-1">Access published reports, impact analyses, and program evaluations</p>
        </div>
        <Button className="gradient-primary border-0 text-primary-foreground gap-2 self-start">
          <FileText className="h-4 w-4" />
          Generate Report
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="h-4 w-4 text-muted-foreground" />
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              filterType === type
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Report cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((report) => (
          <Card key={report.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${typeColors[report.type] || "bg-muted text-muted-foreground"}`}>
                      {report.type}
                    </span>
                    <Badge variant={report.status === "Published" ? "default" : "secondary"} className="text-xs">
                      {report.status}
                    </Badge>
                  </div>
                  <h3 className="text-base font-semibold text-foreground leading-snug">{report.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{report.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {report.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <File className="h-3 w-3" />
                      {report.pages} pages
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="shrink-0 gap-1.5">
                  <Download className="h-3.5 w-3.5" />
                  PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reports;

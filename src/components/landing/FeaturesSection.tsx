import { Users, BarChart3, ClipboardList, Shield, TrendingUp, Globe } from "lucide-react";
import { featuresData } from "@/data/landingData";

const iconMap: Record<string, React.ElementType> = {
  Users, BarChart3, ClipboardList, Shield, TrendingUp, Globe,
};

const FeaturesSection = () => {
  return (
    <section id="features" className="landing-section bg-muted/30">
      <div className="landing-container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Platform Features</span>
          <h2 className="section-title mt-2">Everything You Need to Track Real Impact</h2>
          <p className="section-subtitle mx-auto">
            From beneficiary registration to donor-ready reports, ImpactTrack covers every aspect of monitoring and evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => {
            const Icon = iconMap[feature.icon] || Users;
            return (
              <div key={feature.title} className="feature-card group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-community.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Community members" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex items-center rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm border border-primary/30">
            🌍 Trusted by 200+ NGOs Worldwide
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
            Measure Impact,<br />
            <span className="text-accent">Not Just Activity</span>
          </h1>

          <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
            The comprehensive platform that helps NGOs track beneficiary progress, measure real outcomes with before-after comparisons, and demonstrate transparent impact to stakeholders.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link to="/dashboard">
              <Button size="lg" className="gradient-primary border-0 text-primary-foreground px-8 text-base">
                Start Tracking Impact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="#features">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 px-8 text-base">
                Explore Features
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-8 pt-4 text-primary-foreground/70 text-sm">
            <div><span className="text-xl font-bold text-primary-foreground">12,400+</span><br />Beneficiaries</div>
            <div className="h-8 w-px bg-primary-foreground/20" />
            <div><span className="text-xl font-bold text-primary-foreground">67%</span><br />Avg Improvement</div>
            <div className="h-8 w-px bg-primary-foreground/20" />
            <div><span className="text-xl font-bold text-primary-foreground">18</span><br />Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

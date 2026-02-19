import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="landing-section">
      <div className="landing-container">
        <div className="rounded-3xl gradient-hero px-8 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to Measure Real Impact?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/75 max-w-xl mx-auto">
            Join 200+ organizations using ngolytics to transform their monitoring & evaluation processes.
          </p>
          <Link to="/dashboard" className="inline-block mt-8">
            <Button size="lg" className="bg-accent border-0 text-accent-foreground hover:bg-accent/90 px-8 text-base">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

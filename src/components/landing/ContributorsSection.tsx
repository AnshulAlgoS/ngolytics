import { contributorsData } from "@/data/landingData";
import { MapPin } from "lucide-react";

const ContributorsSection = () => {
  return (
    <section id="contributors" className="landing-section bg-secondary/30">
      <div className="landing-container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our People</p>
          <h2 className="section-title">People Who Made It Possible</h2>
          <p className="section-subtitle mx-auto">
            Meet the dedicated individuals whose expertise and passion drive real impact for communities worldwide.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contributorsData.map((person) => (
            <div key={person.name} className="feature-card text-center group">
              <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-primary/20 transition-all group-hover:border-primary/50">
                <img src={person.avatar} alt={person.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{person.name}</h3>
              <p className="text-sm font-medium text-primary mt-0.5">{person.role}</p>
              <div className="flex items-center justify-center gap-1 mt-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {person.location}
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{person.contribution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributorsSection;

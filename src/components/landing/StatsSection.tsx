import { statsData } from "@/data/landingData";

const StatsSection = () => {
  return (
    <section className="landing-section gradient-hero">
      <div className="landing-container">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {statsData.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-primary-foreground sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

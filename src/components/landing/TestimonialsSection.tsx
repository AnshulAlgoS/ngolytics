import { Quote } from "lucide-react";
import { testimonialsData } from "@/data/landingData";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="landing-section bg-muted/30">
      <div className="landing-container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="section-title mt-2">Trusted by NGOs Worldwide</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonialsData.map((t, i) => (
            <div key={i} className="testimonial-card">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed italic">"{t.quote}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

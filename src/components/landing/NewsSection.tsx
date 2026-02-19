import { Clock, ArrowRight } from "lucide-react";
import { newsArticles } from "@/data/landingData";

const categoryColor: Record<string, string> = {
  "Impact Story": "bg-success/10 text-success",
  Partnership: "bg-info/10 text-info",
  Report: "bg-primary/10 text-primary",
  "Product Update": "bg-accent/10 text-accent",
};

const NewsSection = () => {
  return (
    <section id="news" className="landing-section">
      <div className="landing-container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Latest News</span>
            <h2 className="section-title mt-2">Stories of Impact & Updates</h2>
            <p className="section-subtitle">Stay informed with the latest from our programs and partnerships around the world.</p>
          </div>
        </div>

        {/* Featured article */}
        <div className="news-card mb-8 grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="aspect-video lg:aspect-auto">
            <img src={newsArticles[0].image} alt={newsArticles[0].title} className="h-full w-full object-cover" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className={`self-start rounded-full px-3 py-1 text-xs font-medium ${categoryColor[newsArticles[0].category] || "bg-muted text-muted-foreground"}`}>
              {newsArticles[0].category}
            </span>
            <h3 className="mt-4 text-2xl font-bold text-foreground leading-tight">{newsArticles[0].title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{newsArticles[0].excerpt}</p>
            <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{newsArticles[0].date}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{newsArticles[0].readTime}</span>
            </div>
            <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline self-start">
              Read Full Story <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsArticles.slice(1).map((article) => (
            <article key={article.id} className="news-card group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColor[article.category] || "bg-muted text-muted-foreground"}`}>
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />{article.readTime}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                <p className="mt-3 text-xs text-muted-foreground">{article.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

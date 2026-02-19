import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <Heart className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-base font-bold text-foreground">ngolytics</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Empowering NGOs with data-driven tools to measure, track, and demonstrate real beneficiary impact.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Features</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">API</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Case Studies</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Community</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Contact</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 ngolytics. All rights reserved. Built with ❤️ for NGOs worldwide.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

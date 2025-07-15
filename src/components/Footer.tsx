import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              YR.
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Dynamic Full-Stack Developer passionate about building innovative, AI-enhanced solutions 
              that make a real difference.
            </p>
            <p className="text-muted-foreground text-sm">
              📍 Karlskrona, Sweden<br />
              🌍 Open to Stockholm relocation
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {[
                { href: '#about', label: 'About Me' },
                { href: '#experience', label: 'Experience' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Professional Info */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Professional</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium">Experience:</span> 3.5+ years
              </p>
              <p>
                <span className="font-medium">Specialization:</span> Full-Stack Development
              </p>
              <p>
                <span className="font-medium">Focus:</span> AI/ML Integration
              </p>
              <p>
                <span className="font-medium">Languages:</span> English (Fluent), Swedish (B2)
              </p>
              <p>
                <span className="font-medium">Availability:</span> Full-Time, Freelance, Consulting
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Yaswanth Rahul Yarlagadda. All rights reserved.
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
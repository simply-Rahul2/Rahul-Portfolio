import { Smartphone, Tablet, Monitor, Zap, Target, Hand } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MobileDesignSection = () => {
  const responsiveFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile-First Approach',
      description: 'Designed for mobile devices first, then progressively enhanced for larger screens',
      features: ['Touch-friendly interfaces', 'Optimized performance', 'Thumb-zone navigation'],
    },
    {
      icon: Tablet,
      title: 'Tablet Optimization',
      description: 'Balanced layouts that work beautifully on iPad and Android tablets',
      features: ['Adaptive grid systems', 'Split-screen ready', 'Landscape support'],
    },
    {
      icon: Monitor,
      title: 'Desktop Enhancement',
      description: 'Rich experiences on larger screens with multi-column layouts',
      features: ['Hover interactions', 'Keyboard shortcuts', 'Advanced features'],
    },
  ];

  const mobilePatterns = [
    {
      name: 'Bottom Navigation',
      description: 'Thumb-friendly navigation bar for primary actions',
      usage: 'Mobile apps, PWAs',
    },
    {
      name: 'Swipe Gestures',
      description: 'Natural swipe actions for navigation and actions',
      usage: 'Cards, galleries, forms',
    },
    {
      name: 'Pull to Refresh',
      description: 'Intuitive gesture for content updates',
      usage: 'Feeds, lists, dashboards',
    },
    {
      name: 'Touch Targets',
      description: 'Minimum 44x44px tap targets for easy interaction',
      usage: 'All interactive elements',
    },
    {
      name: 'Hamburger Menu',
      description: 'Space-efficient navigation for mobile screens',
      usage: 'Mobile websites, apps',
    },
    {
      name: 'Cards & Lists',
      description: 'Scrollable content containers optimized for touch',
      usage: 'Content browsing, selection',
    },
  ];

  const breakpoints = [
    { name: 'Mobile', range: '< 640px', cols: '1 column', focus: 'Vertical scroll' },
    { name: 'Tablet', range: '640px - 1024px', cols: '2 columns', focus: 'Flexible layouts' },
    { name: 'Desktop', range: '> 1024px', cols: '3+ columns', focus: 'Rich experiences' },
  ];

  return (
    <section id="mobile-design" className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Smartphone className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Mobile & Responsive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Responsive Design <span className="text-accent">Across Devices</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
            Mobile-first approach ensuring optimal experiences on smartphones, tablets, and desktops
          </p>
        </div>

        {/* Device-Specific Features */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Target className="h-5 w-5 text-accent" />
            <h3 className="text-2xl font-bold">Device-Specific Optimization</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {responsiveFeatures.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Responsive Breakpoints */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="h-5 w-5 text-accent" />
            <h3 className="text-2xl font-bold">Responsive Breakpoints</h3>
          </div>
          <Card className="bg-gradient-to-br from-card to-accent/5">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {breakpoints.map((breakpoint, index) => (
                  <div 
                    key={breakpoint.name} 
                    className="text-center animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl font-bold text-accent mb-2">{breakpoint.name}</div>
                    <div className="text-sm text-muted-foreground mb-2">{breakpoint.range}</div>
                    <Badge variant="secondary" className="mb-2">{breakpoint.cols}</Badge>
                    <p className="text-xs text-muted-foreground">{breakpoint.focus}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Interaction Patterns */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Hand className="h-5 w-5 text-accent" />
            <h3 className="text-2xl font-bold">Mobile Interaction Patterns</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mobilePatterns.map((pattern, index) => (
              <Card 
                key={pattern.name} 
                className="group hover:bg-accent/5 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                    {pattern.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">{pattern.description}</p>
                  <Badge variant="outline" className="text-xs">{pattern.usage}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Visual Comparison */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Monitor className="h-5 w-5 text-accent" />
            <h3 className="text-2xl font-bold">Side-by-Side Comparison</h3>
          </div>
          <Card className="bg-gradient-to-r from-accent/10 to-primary/10">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Mobile Mockup */}
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 mb-4">
                    <Smartphone className="h-5 w-5 text-accent" />
                    <span className="font-semibold">Mobile View</span>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-lg mx-auto max-w-[200px] border-4 border-foreground/10">
                    <div className="space-y-3">
                      <div className="h-8 bg-accent/20 rounded" />
                      <div className="h-32 bg-muted rounded" />
                      <div className="h-4 bg-muted rounded" />
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <div className="h-8 bg-primary/20 rounded" />
                        <div className="h-8 bg-secondary/20 rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="text-xs">Single column</Badge>
                  </div>
                </div>

                {/* Tablet Mockup */}
                <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Tablet className="h-5 w-5 text-accent" />
                    <span className="font-semibold">Tablet View</span>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-lg border-4 border-foreground/10">
                    <div className="space-y-3">
                      <div className="h-8 bg-accent/20 rounded" />
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-24 bg-muted rounded" />
                        <div className="h-24 bg-muted rounded" />
                      </div>
                      <div className="h-4 bg-muted rounded" />
                      <div className="h-4 bg-muted rounded w-2/3" />
                      <div className="flex gap-2 pt-2">
                        <div className="h-8 bg-primary/20 rounded flex-1" />
                        <div className="h-8 bg-secondary/20 rounded flex-1" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="text-xs">Two columns</Badge>
                  </div>
                </div>

                {/* Desktop Mockup */}
                <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Monitor className="h-5 w-5 text-accent" />
                    <span className="font-semibold">Desktop View</span>
                  </div>
                  <div className="bg-card rounded-lg p-4 shadow-lg border-4 border-foreground/10">
                    <div className="space-y-3">
                      <div className="h-8 bg-accent/20 rounded" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-16 bg-muted rounded" />
                        <div className="h-16 bg-muted rounded" />
                        <div className="h-16 bg-muted rounded" />
                      </div>
                      <div className="h-3 bg-muted rounded" />
                      <div className="h-3 bg-muted rounded w-4/5" />
                      <div className="flex gap-2 pt-2">
                        <div className="h-6 bg-primary/20 rounded px-4" />
                        <div className="h-6 bg-secondary/20 rounded px-4" />
                        <div className="h-6 bg-accent/20 rounded px-4" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="text-xs">Multi-column</Badge>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h4 className="font-semibold mb-4 text-center">Key Responsive Design Decisions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5" />
                    <span><strong>Fluid Typography:</strong> Font sizes scale with viewport width</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5" />
                    <span><strong>Flexible Grids:</strong> Layouts adapt to available space</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5" />
                    <span><strong>Touch Optimization:</strong> 44px minimum tap targets</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5" />
                    <span><strong>Performance:</strong> Optimized images for each breakpoint</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MobileDesignSection;

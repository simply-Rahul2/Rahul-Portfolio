import { useState } from 'react';
import { Palette, Type, Layers, Image as ImageIcon, Brush, Grid3x3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const VisualDesignSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work', icon: Grid3x3 },
    { id: 'brand', label: 'Brand Identity', icon: Layers },
    { id: 'illustration', label: 'Illustrations', icon: Brush },
    { id: 'icons', label: 'Icon Sets', icon: ImageIcon },
    { id: 'typography', label: 'Typography', icon: Type },
    { id: 'color', label: 'Color Palettes', icon: Palette },
  ];

  const designWork = [
    {
      id: 1,
      title: 'Modern Tech Brand Identity',
      category: 'brand',
      description: 'Complete brand identity system for a SaaS startup including logo, color palette, and brand guidelines',
      tags: ['Logo Design', 'Brand Guidelines', 'Color System'],
      gradient: 'from-primary to-secondary',
      details: 'Designed a cohesive brand identity that reflects innovation and reliability. Includes primary and secondary logos, typography system, and comprehensive usage guidelines.',
    },
    {
      id: 2,
      title: 'Minimalist Icon Set',
      category: 'icons',
      description: '50+ minimalist icons for productivity applications with consistent design language',
      tags: ['UI Icons', 'Line Art', 'SVG'],
      gradient: 'from-secondary to-accent',
      details: '24x24px base grid, 2px stroke weight, optimized for web and mobile. Includes filled and outlined variants.',
    },
    {
      id: 3,
      title: 'Abstract Data Illustrations',
      category: 'illustration',
      description: 'Custom illustrations for data visualization and analytics platform',
      tags: ['Vector Art', 'Data Viz', 'Editorial'],
      gradient: 'from-accent to-primary',
      details: 'Created a series of isometric illustrations representing various data concepts. Used modern color palette with smooth gradients.',
    },
    {
      id: 4,
      title: 'Typography System Design',
      category: 'typography',
      description: 'Comprehensive typography scale and pairing for design system',
      tags: ['Type Scale', 'Font Pairing', 'Hierarchy'],
      gradient: 'from-primary/80 to-accent/80',
      details: 'Established type hierarchy with Inter for UI and JetBrains Mono for code. Includes responsive scaling and accessibility considerations.',
    },
    {
      id: 5,
      title: 'Vibrant Color Palette',
      category: 'color',
      description: 'Accessible color system with WCAG AA compliant combinations',
      tags: ['Color Theory', 'Accessibility', 'Design Tokens'],
      gradient: 'from-secondary/80 to-primary/80',
      details: 'Primary, secondary, and accent colors with tints and shades. All combinations tested for contrast ratios. Includes dark mode variants.',
    },
    {
      id: 6,
      title: 'E-commerce Brand Refresh',
      category: 'brand',
      description: 'Rebranding project for established online retail platform',
      tags: ['Rebrand', 'Visual Identity', 'Marketing'],
      gradient: 'from-accent/80 to-secondary/80',
      details: 'Modernized visual identity while maintaining brand recognition. Updated logo, refreshed color palette, and created new marketing materials.',
    },
    {
      id: 7,
      title: 'Custom Illustration Library',
      category: 'illustration',
      description: 'Unique illustration style for fintech mobile application',
      tags: ['Character Design', 'Financial', 'Mobile UI'],
      gradient: 'from-primary to-accent',
      details: 'Developed friendly, approachable illustration style to demystify financial concepts. Includes characters, scenes, and spot illustrations.',
    },
    {
      id: 8,
      title: 'Dashboard Icon System',
      category: 'icons',
      description: 'Comprehensive icon system for analytics dashboard',
      tags: ['UI Icons', 'Data Viz', 'Dashboard'],
      gradient: 'from-secondary to-primary',
      details: 'Designed 100+ icons covering all dashboard functions. Consistent style with subtle variations for different data types.',
    },
    {
      id: 9,
      title: 'Editorial Typography',
      category: 'typography',
      description: 'Custom typography for digital magazine and blog platform',
      tags: ['Editorial', 'Readability', 'Web Fonts'],
      gradient: 'from-accent to-primary/80',
      details: 'Optimized for long-form reading with generous line height and paragraph spacing. Includes display and body type pairings.',
    },
  ];

  const filteredWork = activeCategory === 'all' 
    ? designWork 
    : designWork.filter(work => work.category === activeCategory);

  return (
    <section id="visual-design" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Palette className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Visual Design</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Graphic Design & <span className="text-primary">Visual Work</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
            Exploring visual creativity through brand identity, illustrations, typography, and color theory
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {categories.map((category, index) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredWork.map((work, index) => (
            <Card 
              key={work.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Preview */}
              <div className={`relative h-48 bg-gradient-to-br ${work.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white/90">
                    <div className="text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                      {work.title.split(' ')[0].charAt(0)}
                    </div>
                    <div className="text-sm font-medium opacity-80">
                      {work.category.toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {work.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Details */}
                <div className="text-xs text-muted-foreground bg-muted/30 rounded-lg p-3">
                  {work.details}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Design Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Type className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Typography First</h3>
              <p className="text-sm text-muted-foreground">
                Clear hierarchy and readable typography form the foundation of every design, ensuring optimal user experience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Color Psychology</h3>
              <p className="text-sm text-muted-foreground">
                Strategic use of color to evoke emotions, guide attention, and create memorable brand experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Systematic Approach</h3>
              <p className="text-sm text-muted-foreground">
                Building cohesive design systems that scale across products while maintaining consistency and quality.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisualDesignSection;

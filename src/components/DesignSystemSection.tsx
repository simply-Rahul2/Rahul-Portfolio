import { useState } from 'react';
import { Check, Copy, Palette, Layout, Type, Zap, Eye, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const DesignSystemSection = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const designTokens = [
    { name: 'Primary', color: 'hsl(210, 98%, 45%)', usage: 'Main brand color, CTAs' },
    { name: 'Secondary', color: 'hsl(270, 85%, 55%)', usage: 'Secondary actions' },
    { name: 'Accent', color: 'hsl(340, 85%, 65%)', usage: 'Highlights, emphasis' },
    { name: 'Success', color: 'hsl(142, 71%, 45%)', usage: 'Success states' },
  ];

  const components = [
    {
      name: 'Buttons',
      description: 'Interactive button components with multiple variants',
      states: ['Default', 'Hover', 'Active', 'Disabled'],
      accessibility: 'Keyboard navigable, ARIA labels, focus indicators',
    },
    {
      name: 'Cards',
      description: 'Content containers with consistent spacing and shadows',
      states: ['Default', 'Hover', 'Selected'],
      accessibility: 'Semantic HTML, proper heading hierarchy',
    },
    {
      name: 'Forms',
      description: 'Input fields with validation and error states',
      states: ['Default', 'Focus', 'Error', 'Disabled'],
      accessibility: 'Label associations, error announcements',
    },
    {
      name: 'Navigation',
      description: 'Responsive navigation with smooth transitions',
      states: ['Default', 'Active', 'Mobile'],
      accessibility: 'Skip links, keyboard navigation, screen reader friendly',
    },
  ];

  const copyToken = (token: string) => {
    navigator.clipboard.writeText(token);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <section id="design-systems" className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Palette className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Design Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Component Library & <span className="text-primary">Design Tokens</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
            Comprehensive design system with reusable components, accessibility features, and consistent design tokens
          </p>
        </div>

        {/* Design Tokens */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Palette className="h-5 w-5 text-primary" />
            <h3 className="text-2xl font-bold">Design Tokens</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {designTokens.map((token, index) => (
              <Card key={token.name} className="group hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div 
                    className="w-full h-24 rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" 
                    style={{ backgroundColor: token.color }}
                  />
                  <h4 className="font-semibold text-lg mb-2">{token.name}</h4>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mb-2 text-xs font-mono"
                    onClick={() => copyToken(token.color)}
                  >
                    {copiedToken === token.color ? (
                      <>
                        <Check className="h-3 w-3 mr-1" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 mr-1" />
                        {token.color}
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground">{token.usage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Component Library */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Layout className="h-5 w-5 text-primary" />
            <h3 className="text-2xl font-bold">Component Library</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {components.map((component, index) => (
              <Card key={component.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{component.name}</h4>
                      <p className="text-sm text-muted-foreground">{component.description}</p>
                    </div>
                    <Code className="h-5 w-5 text-muted-foreground" />
                  </div>
                  
                  {/* Component States Demo */}
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">States:</p>
                    <div className="flex flex-wrap gap-2">
                      {component.states.map((state) => (
                        <Badge key={state} variant="secondary" className="text-xs">
                          {state}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Accessibility Features */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="h-4 w-4 text-success" />
                      <p className="text-sm font-medium">Accessibility</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{component.accessibility}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Component Examples */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="h-5 w-5 text-primary" />
            <h3 className="text-2xl font-bold">Interactive Examples</h3>
          </div>
          
          <Card className="bg-gradient-to-br from-card to-muted/20">
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Button States */}
                <div>
                  <p className="text-sm font-medium mb-4">Button Variants:</p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="default" disabled>Disabled</Button>
                  </div>
                </div>

                {/* Badge States */}
                <div>
                  <p className="text-sm font-medium mb-4">Badge Variants:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </div>

                {/* Typography Scale */}
                <div>
                  <p className="text-sm font-medium mb-4">Typography Scale:</p>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">Heading 1</p>
                    <p className="text-3xl font-bold text-muted-foreground">Heading 2</p>
                    <p className="text-2xl font-semibold text-muted-foreground">Heading 3</p>
                    <p className="text-base text-muted-foreground">Body text with proper line height and spacing</p>
                    <p className="text-sm text-muted-foreground">Small text for captions and metadata</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Guidelines */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Type className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Usage Guidelines</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Design Principles</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Consistency across all components</li>
                  <li>✓ Accessibility-first approach</li>
                  <li>✓ Responsive by default</li>
                  <li>✓ Performance optimized</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Component Standards</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Semantic HTML structure</li>
                  <li>✓ WCAG 2.1 AA compliance</li>
                  <li>✓ Keyboard navigation support</li>
                  <li>✓ Screen reader compatible</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DesignSystemSection;

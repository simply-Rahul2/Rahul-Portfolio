import { useState } from 'react';
import { Play, Sparkles, MousePointer, Loader2, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const InteractionDesignSection = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [loadingState, setLoadingState] = useState(false);
  const [successState, setSuccessState] = useState(false);

  const microInteractions = [
    {
      name: 'Button Feedback',
      description: 'Hover, click, and focus states with smooth transitions',
      demo: 'button',
    },
    {
      name: 'Loading States',
      description: 'Skeleton loaders and progress indicators',
      demo: 'loading',
    },
    {
      name: 'Success Animation',
      description: 'Confirmation feedback with smooth check animation',
      demo: 'success',
    },
    {
      name: 'Card Interactions',
      description: 'Hover effects with scale and shadow transitions',
      demo: 'card',
    },
  ];

  const animations = [
    {
      title: 'Page Transitions',
      description: 'Smooth fade and slide animations between routes',
      techniques: ['Fade In/Out', 'Slide Transitions', 'Scale Effects'],
    },
    {
      title: 'Scroll Animations',
      description: 'Elements animate into view as users scroll',
      techniques: ['Fade In Up', 'Stagger Effects', 'Parallax'],
    },
    {
      title: 'Gesture-Based',
      description: 'Swipe, drag, and pinch interactions for mobile',
      techniques: ['Swipe Actions', 'Drag & Drop', 'Pull to Refresh'],
    },
    {
      title: 'Micro-interactions',
      description: 'Delightful feedback for user actions',
      techniques: ['Button States', 'Form Validation', 'Loading Spinners'],
    },
  ];

  const triggerLoadingDemo = () => {
    setLoadingState(true);
    setSuccessState(false);
    setTimeout(() => {
      setLoadingState(false);
      setSuccessState(true);
      setTimeout(() => setSuccessState(false), 2000);
    }, 2000);
  };

  return (
    <section id="interaction-design" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Interaction Design</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Motion & <span className="text-secondary">Micro-interactions</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
            Crafting delightful user experiences through smooth animations, transitions, and interactive feedback
          </p>
        </div>

        {/* Interactive Demo Area */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Play className="h-5 w-5 text-secondary" />
            <h3 className="text-2xl font-bold">Interactive Demonstrations</h3>
          </div>
          
          <Card className="bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Demo Controls */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold mb-4">Try These Interactions:</h4>
                  {microInteractions.map((interaction, index) => (
                    <Button
                      key={interaction.name}
                      variant={activeDemo === interaction.demo ? "default" : "outline"}
                      className="w-full justify-start group animate-slide-in-right"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setActiveDemo(interaction.demo)}
                      onMouseEnter={() => setActiveDemo(interaction.demo)}
                    >
                      <MousePointer className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                      <div className="text-left">
                        <div className="font-medium">{interaction.name}</div>
                        <div className="text-xs opacity-70">{interaction.description}</div>
                      </div>
                    </Button>
                  ))}
                </div>

                {/* Demo Display */}
                <div className="flex items-center justify-center bg-card/50 rounded-lg p-8 min-h-[300px]">
                  <div className="text-center space-y-6">
                    {activeDemo === 'button' && (
                      <div className="space-y-4 animate-scale-in">
                        <p className="text-sm text-muted-foreground mb-4">Hover over these buttons</p>
                        <Button className="hover:scale-110 transition-transform duration-200">
                          Hover Me
                        </Button>
                        <Button className="animate-pulse-glow">
                          Pulsing Button
                        </Button>
                      </div>
                    )}
                    
                    {activeDemo === 'loading' && (
                      <div className="space-y-4 animate-scale-in">
                        <Button onClick={triggerLoadingDemo} disabled={loadingState}>
                          {loadingState ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Loading...
                            </>
                          ) : (
                            'Trigger Loading'
                          )}
                        </Button>
                        {loadingState && (
                          <div className="space-y-2 animate-fade-in">
                            <div className="h-4 bg-muted rounded animate-pulse" />
                            <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                            <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
                          </div>
                        )}
                      </div>
                    )}
                    
                    {activeDemo === 'success' && (
                      <div className="space-y-4 animate-scale-in">
                        <Button onClick={triggerLoadingDemo} disabled={loadingState || successState}>
                          Trigger Success
                        </Button>
                        {successState && (
                          <div className="animate-scale-in">
                            <CheckCircle2 className="h-16 w-16 text-success mx-auto animate-pulse" />
                            <p className="text-success font-medium mt-2">Success!</p>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {activeDemo === 'card' && (
                      <Card className="hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer animate-scale-in">
                        <CardContent className="p-6">
                          <h4 className="font-semibold mb-2">Interactive Card</h4>
                          <p className="text-sm text-muted-foreground">Hover to see the effect</p>
                        </CardContent>
                      </Card>
                    )}
                    
                    {!activeDemo && (
                      <div className="text-muted-foreground animate-fade-in">
                        <MousePointer className="h-12 w-12 mx-auto mb-4 animate-float" />
                        <p>Select an interaction to preview</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Animation Techniques */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="h-5 w-5 text-secondary" />
            <h3 className="text-2xl font-bold">Animation Techniques</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {animations.map((animation, index) => (
              <Card 
                key={animation.title} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                    {animation.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">{animation.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {animation.techniques.map((technique) => (
                      <Badge key={technique} variant="secondary" className="text-xs">
                        {technique}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* User Flow Animation Example */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <ArrowRight className="h-5 w-5 text-secondary" />
            <h3 className="text-2xl font-bold">User Flow Transitions</h3>
          </div>
          <Card className="bg-gradient-to-r from-secondary/10 to-accent/10">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <h4 className="text-lg font-semibold">Seamless Navigation</h4>
                  <p className="text-sm text-muted-foreground">
                    Users experience smooth transitions between states, with loading indicators, 
                    success confirmations, and error handling that feels natural and responsive.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span>Fade transitions for route changes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span>Skeleton loading states</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span>Staggered animations for lists</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span>Gesture-based mobile interactions</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center animate-pulse">
                    <span className="text-2xl">1</span>
                  </div>
                  <ArrowRight className="h-6 w-6 text-muted-foreground animate-slide-in-right" />
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <span className="text-2xl">2</span>
                  </div>
                  <ArrowRight className="h-6 w-6 text-muted-foreground animate-slide-in-right" style={{ animationDelay: '0.5s' }} />
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                    <span className="text-2xl">3</span>
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

export default InteractionDesignSection;

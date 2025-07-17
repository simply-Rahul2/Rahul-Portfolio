import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Greeting */}
          <p className="text-primary text-lg md:text-xl font-medium mb-4 animate-slide-in-right">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Yaswanth Rahul
            <br />
            Yarlagadda
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Dynamic <span className="text-primary font-semibold">Full-Stack Developer</span> with{' '}
            <span className="text-secondary font-semibold">3.5+ years</span> of experience building scalable,{' '}
            <span className="text-accent font-semibold">AI-enhanced</span> applications
          </p>

          {/* Skills Highlight */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm md:text-base">
            {[
              'React & Angular',
              'C# & .NET Core',
              'Node.js & Python',
              'AI/ML Integration',
              'Cloud Technologies'
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border text-muted-foreground animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="group shadow-hero hover:shadow-glow transition-all duration-300">
              <Download className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Mail className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Get In Touch
            </Button>
          </div>

          {/* Location & Availability */}
          <div className="text-muted-foreground mb-8">
            <p className="text-sm md:text-base">
              📍 Karlskrona, Sweden • 🌍 Open to Stockholm relocation
            </p>
            <p className="text-sm">
              🚀 Currently exploring opportunities for full-time positions in Sweden
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a
              href="#about"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in">
          {[
            { number: '3.5+', label: 'Years Experience' },
            { number: '30+', label: 'Projects Delivered' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '5', label: 'Team Members Led' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
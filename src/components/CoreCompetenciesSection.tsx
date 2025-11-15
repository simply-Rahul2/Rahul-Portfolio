import { Card } from '@/components/ui/card';
import { 
  Users, 
  Code, 
  Sparkles, 
  Layers, 
  Search, 
  Users2, 
  Cpu, 
  Smartphone,
  Eye
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const CoreCompetenciesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const competencies = [
    {
      icon: Users,
      title: "User-Centered Design",
      description: "Creating designs that solve real user problems, with strong attention to usability and accessibility standards.",
      color: "text-blue-500"
    },
    {
      icon: Code,
      title: "End-to-End Design & Implementation",
      description: "Full-stack capability to design and implement functional web and mobile apps using React, Angular, and modern frameworks.",
      color: "text-purple-500"
    },
    {
      icon: Sparkles,
      title: "Prototyping & Interaction Design",
      description: "Expert in creating wireframes, prototypes, and interactive designs to visualize user flows and interactions.",
      color: "text-pink-500"
    },
    {
      icon: Layers,
      title: "Design Systems & Consistency",
      description: "Establishing consistent design patterns, reusable components, and comprehensive visual guidelines across projects.",
      color: "text-indigo-500"
    },
    {
      icon: Search,
      title: "Problem-Solving & Analytical Thinking",
      description: "Systematic approach to design challenges, using research, data analysis, and testing to validate solutions.",
      color: "text-green-500"
    },
    {
      icon: Users2,
      title: "Collaboration & Mentoring",
      description: "Proven leadership in guiding teams, mentoring juniors, and working cross-functionally with developers and stakeholders.",
      color: "text-orange-500"
    },
    {
      icon: Cpu,
      title: "Integration of AI & Technology",
      description: "Integrating AI-driven features and automation into UX workflows, enhancing personalization and efficiency.",
      color: "text-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Adaptability Across Platforms",
      description: "Expertise in mobile, web, responsive design, and cross-platform considerations for seamless user experiences.",
      color: "text-teal-500"
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description: "Pixel-perfect designs with meticulous consideration of typography, color, spacing, and interaction flows.",
      color: "text-red-500"
    }
  ];

  return (
    <section 
      id="competencies" 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Core Competencies
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A comprehensive skill set spanning full-stack development, AI integration, and UI/UX design—
            delivering end-to-end solutions for modern applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((competency, index) => {
            const Icon = competency.icon;
            return (
              <Card
                key={index}
                className={`p-6 hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 ${competency.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {competency.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {competency.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="p-8 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 border-primary/20">
            <p className="text-lg text-foreground font-medium mb-2">
              Actively seeking opportunities in:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <span className="px-6 py-2 bg-primary/10 text-primary rounded-full font-semibold">
                Full-Stack Developer
              </span>
              <span className="px-6 py-2 bg-purple-500/10 text-purple-500 rounded-full font-semibold">
                AI Developer
              </span>
              <span className="px-6 py-2 bg-pink-500/10 text-pink-500 rounded-full font-semibold">
                UI/UX Designer
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoreCompetenciesSection;

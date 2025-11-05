import { useState, useEffect, useRef } from 'react';
import { Code, Database, Cloud, Brain, Settings, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = {
    frontend: {
      title: 'Frontend Technologies',
      icon: Code,
      color: 'primary',
      skills: [
        { name: 'Angular (2+)', level: 'Proficient', experience: '3+ years, 8+ projects' },
        { name: 'React.js', level: 'Proficient', experience: '2+ years, 4+ projects' },
        { name: 'Next.js', level: 'Proficient', experience: '1+ years, 3+ projects' },
        { name: 'Vue.js', level: 'Moderate', experience: '1 year, 2+ projects' },
        { name: 'TypeScript', level: 'Proficient', experience: '3+ years' },
        { name: 'JavaScript (ES6+)', level: 'Proficient', experience: '4+ years' },
        { name: 'HTML5 & CSS3', level: 'Proficient', experience: '4+ years' },
        { name: 'React Native', level: 'Proficient', experience: '1+ years (GamePlan App)' },
        { name: 'Kotlin', level: 'Proficient', experience: '1+ years (Food Recipe App)' }
      ]
    },
    backend: {
      title: 'Backend Technologies',
      icon: Database,
      color: 'secondary',
      skills: [
        { name: 'C#', level: 'Proficient', experience: '3+ years' },
        { name: '.NET Core', level: 'Proficient', experience: '3+ years' },
        { name: 'ASP.NET Core', level: 'Proficient', experience: '3+ years' },
        { name: 'Node.js', level: 'Proficient', experience: '3+ years' },
        { name: 'Python', level: 'Proficient', experience: '3+ years' },
        { name: 'Entity Framework Core', level: 'Proficient', experience: '3+ years' },
        { name: 'REST APIs', level: 'Proficient', experience: '4+ years' },
        { name: 'JWT Authentication', level: 'Proficient', experience: '2+ years' }
      ]
    },
    database: {
      title: 'Database Technologies',
      icon: Database,
      color: 'accent',
      skills: [
        { name: 'SQL Server', level: 'Proficient', experience: '3+ years' },
        { name: 'PostgreSQL', level: 'Proficient', experience: '2+ years' },
        { name: 'MongoDB', level: 'Proficient', experience: '2+ years' },
        { name: 'SQLite', level: 'Proficient', experience: '2+ years' },
        { name: 'Firebase Firestore', level: 'Proficient', experience: '1+ years' },
        { name: 'Hadoop', level: 'Proficient', experience: '1.5+ years' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'primary',
      skills: [
        { name: 'AWS (EC2, S3, Lambda)', level: 'Proficient', experience: '2+ years' },
        { name: 'Azure', level: 'Proficient', experience: '2+ years' },
        { name: 'GCP', level: 'Proficient', experience: '1+ years' },
        { name: 'Docker', level: 'Proficient', experience: '2+ years' },
        { name: 'Kubernetes', level: 'Proficient', experience: '1+ years' },
        { name: 'GitHub Actions', level: 'Proficient', experience: '2+ years' },
        { name: 'CI/CD Pipelines', level: 'Proficient', experience: '2+ years' }
      ]
    },
    ai: {
      title: 'Generative AI & Prompt Engineering',
      icon: Brain,
      color: 'secondary',
      skills: [
        { name: 'Generative AI Development', level: 'Proficient', experience: 'AI agents & chatbots' },
        { name: 'Prompt Engineering', level: 'Proficient', experience: 'Advanced prompt techniques' },
        { name: 'Vibe Coding (AI-Assisted)', level: 'Proficient', experience: 'AI-enhanced development' },
        { name: 'LangChain Framework', level: 'Proficient', experience: '1+ years' },
        { name: 'OpenAI API Integration', level: 'Proficient', experience: '1+ years' },
        { name: 'Hugging Face Models', level: 'Proficient', experience: 'Dual-LLM project' },
        { name: 'RAG Implementation', level: 'Proficient', experience: 'Chatbot development' },
        { name: 'AI Agent Building', level: 'Proficient', experience: 'Microsoft certification' },
        { name: 'TensorFlow/Keras', level: 'Proficient', experience: 'Bachelor\'s thesis' },
        { name: 'MMPose & SemGCN', level: 'Proficient', experience: '3D pose estimation' }
      ]
    },
    tools: {
      title: 'Development Practices',
      icon: Settings,
      color: 'accent',
      skills: [
        { name: 'Multi-Agentic Systems', level: 'Proficient', experience: 'AI orchestration' },
        { name: 'Workflow Automation (n8n)', level: 'Proficient', experience: 'Process automation' },
        { name: 'Agile Methodologies', level: 'Proficient', experience: '3+ years' },
        { name: 'Test-Driven Development', level: 'Proficient', experience: 'Industry practice' },
        { name: 'Pair Programming', level: 'Proficient', experience: 'Team collaboration' },
        { name: 'Code Review', level: 'Proficient', experience: 'Quality assurance' },
        { name: 'Git Version Control', level: 'Proficient', experience: '4+ years' },
        { name: 'Microservices', level: 'Proficient', experience: 'Enterprise projects' },
        { name: 'API Documentation', level: 'Proficient', experience: 'Swagger/OpenAPI' }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'border-primary text-primary bg-primary-light',
      secondary: 'border-secondary text-secondary bg-secondary-light',
      accent: 'border-accent text-accent bg-accent-light'
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Proficient':
        return 'bg-success text-success-foreground';
      case 'Moderate':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="skills" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
          {categories.map((category) => {
            const categoryData = skillCategories[category as keyof typeof skillCategories];
            const IconComponent = categoryData.icon;
            const isActive = activeCategory === category;
            
            return (
              <Button
                key={category}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`transition-all duration-300 ${
                  isActive ? 'shadow-lg' : 'hover:shadow-md'
                }`}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {categoryData.title}
              </Button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="animate-fade-in-up">
          {categories.map((category) => {
            const categoryData = skillCategories[category as keyof typeof skillCategories];
            const IconComponent = categoryData.icon;
            const isVisible = activeCategory === category;

            return (
              <div
                key={category}
                className={`transition-all duration-500 ${
                  isVisible ? 'block' : 'hidden'
                }`}
              >
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className={`p-3 rounded-lg ${getColorClasses(categoryData.color)}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      {categoryData.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {categoryData.skills.map((skill, index) => {
                        const proficiencyLevel = skill.level === 'Expert' ? 95 : skill.level === 'Proficient' ? 80 : 60;
                        
                        return (
                          <div
                            key={skill.name}
                            className="p-5 bg-card rounded-lg border hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-scale-in"
                            style={{ animationDelay: `${index * 0.05}s` }}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="font-medium text-foreground text-base">{skill.name}</h4>
                              <Badge className={`text-xs ${getLevelColor(skill.level)}`}>
                                {skill.level}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {skill.experience}
                            </p>
                            
                            {/* Animated Progress Bar */}
                            <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className={`skill-bar-fill h-full rounded-full ${getColorClasses(categoryData.color).split(' ')[0].replace('text-', 'bg-')}`}
                                style={{ 
                                  '--skill-level': `${proficiencyLevel}%`,
                                  animationDelay: `${index * 0.1}s`
                                } as React.CSSProperties}
                              />
                            </div>
                            <div className="text-right mt-1">
                              <span className="text-xs font-medium text-muted-foreground">{proficiencyLevel}%</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications & Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Docker for Developers',
              'Learning Kubernetes',
              'Learning C#',
              'C# and .NET Essential Training',
              'Backend Development',
              'Backend Web Development with .NET',
              'Become a Full Stack Web Developer',
              'Generative AI for Web Developers',
              'Microsoft: Building AI Agents for Beginners (2025)',
              'Microsoft Azure Fundamentals (2023)',
              'Full-Stack Web Development (LinkedIn Learning)',
              'React Front-End Development (LinkedIn Learning)',
              'AI LLM Fundamentals (Coursera)',
              '.NET Core for Web Apps (Microsoft Learn)',
              'AWS Academy Cloud Foundations (HDLC)'
            ].map((cert, index) => (
              <div
                key={cert}
                className="p-4 bg-card rounded-lg border hover:shadow-md transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div className="mt-12 p-6 bg-primary-light/50 rounded-lg border animate-fade-in">
          <h3 className="text-xl font-bold mb-4 text-primary">Currently Exploring</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'NX Monorepo',
              'GraphQL',
              'Contentful CMS',
              'ClickHouse',
              'Apache Superset', 
              'Dagster',
              'Elasticsearch',
              'MLOps (MLflow, Kubeflow)'
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="border-primary text-primary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
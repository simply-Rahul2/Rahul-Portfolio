import { ExternalLink, Github, Users, Zap, Brain, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'TaskFlow - Smart Task Management System',
      description: 'Full-stack web application serving 200+ users with comprehensive task management, role-based access control, and real-time tracking capabilities.',
      category: 'Freelance Project',
      icon: Zap,
      scale: '200+ users',
      features: [
        'Multi-user task management with role-based access',
        'Real-time task tracking and notifications',
        'Responsive dashboard with data visualization',
        'Secure JWT authentication system',
        'RESTful API architecture'
      ],
      technologies: ['C#', '.NET Core', 'ASP.NET Core', 'Angular', 'SQL Server', 'Entity Framework Core', 'JWT', 'Chart.js', 'NgRx', 'Swagger UI'],
      highlights: ['100% client satisfaction', 'Scalable architecture', 'Real-time features'],
      demoUrl: 'https://taskflow-dev.netlify.app/',
      githubUrl: '#'
    },
    {
      title: 'GamePlan App - Fitness & Retail Management',
      description: 'React Native mobile application with GPS-based attendance tracking and task management for fitness/retail environments, serving 200+ users.',
      category: 'Team Project (Lead)',
      icon: Users,
      scale: '200+ users',
      features: [
        'GPS-based attendance tracking system',
        'Real-time task management and assignment',
        'Firebase real-time database integration',
        'Cross-platform mobile compatibility',
        'Comprehensive testing suite'
      ],
      technologies: ['React Native', 'Firebase Firestore', 'Firebase Authentication', 'Jest', 'Cypress', 'GPS APIs'],
      highlights: ['5-person team leadership', 'Cross-platform deployment', 'Real-time sync'],
      demoUrl: 'https://gameplan-dev.netlify.app/',
      githubUrl: '#'
    },
    {
      title: 'Dual-LLM Insight Engine',
      description: 'AI chatbot with RAG implementation for intelligent query processing and response generation using multiple language models.',
      category: 'AI/ML Project',
      icon: Brain,
      scale: 'Enterprise-ready',
      features: [
        'RAG (Retrieval-Augmented Generation) implementation',
        'Multi-LLM integration for enhanced responses',
        'Robust data processing and validation',
        'PostgreSQL integration for data persistence',
        'Advanced prompt engineering techniques'
      ],
      technologies: ['Python', 'Node.js', 'LangChain', 'Ollama', 'PostgreSQL', 'Pandas', 'REST APIs'],
      highlights: ['Advanced AI integration', 'Robustness testing', 'Multi-model architecture'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Intelligent Consent Flow for Medical Care',
      description: 'AI-powered healthcare solution that streamlines and humanizes medical consent processes using conversational AI, speech technology, and digital signature capture.',
      category: 'AI/Healthcare Project',
      icon: Brain,
      scale: 'Prototype/Demo-ready',
      features: [
        'Converts medical notes/ICD-10/CPT codes to plain-English summaries',
        'Interactive patient Q&A via text or voice interface',
        'Accessibility features with instant audio playback (TTS)',
        'Digital signature capture for verified consent',
        'Privacy-first architecture with minimal data logging',
        'Multi-modal consent capture (audio/digital signature)'
      ],
      technologies: ['Python', 'Streamlit', 'Perplexity AI API', 'Whisper STT', 'gTTS', 'streamlit-drawable-canvas', 'REST APIs'],
      highlights: ['Healthcare AI innovation', 'Privacy-focused design', 'Accessibility compliance', 'Multi-modal interaction'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: '3D Pose Estimation for Fatigue Detection',
      description: 'Bachelor\'s thesis project achieving 93% accuracy in fatigue detection using smartphone-based 3D pose estimation and machine learning.',
      category: 'Research Project',
      icon: Brain,
      scale: '93% accuracy',
      features: [
        '2D keypoint extraction using MMPose (HRNet)',
        '3D pose lifting with SemGCN algorithms',
        'Kinematic feature computation for analysis',
        'Multiple ML models for classification',
        '4-fold cross-validation for reliability'
      ],
      technologies: ['Python', 'TensorFlow/Keras', 'MMPose', 'SemGCN', 'OpenMMLab', 'NumPy', 'SciPy', 'OpenCV'],
      highlights: ['93% accuracy achieved', 'Innovative smartphone approach', 'Academic research'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Grayscale Image Processor',
      description: 'Serverless AWS Lambda application for image processing with automatic grayscale conversion, built for cloud-native scalability.',
      category: 'Cloud Project (Lead)',
      icon: Cloud,
      scale: 'Serverless architecture',
      features: [
        'Event-driven serverless processing',
        'Automatic image format detection',
        'S3 integration for file storage',
        'CloudWatch monitoring and logging',
        'Scalable architecture design'
      ],
      technologies: ['AWS Lambda', 'Python', 'Pillow', 'AWS S3', 'CloudWatch', 'Event-driven architecture'],
      highlights: ['3-person team leadership', 'Serverless deployment', 'Cost-effective scaling'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Angular Weather Dashboard',
      description: 'Real-time weather application serving 100+ users with responsive design and comprehensive weather data visualization.',
      category: 'Freelance Project',
      icon: Zap,
      scale: '100+ users',
      features: [
        'Real-time weather data integration',
        'Responsive design for all devices',
        'Interactive weather visualizations',
        'Location-based weather forecasts',
        'Offline data caching capabilities'
      ],
      technologies: ['AngularJS', 'OpenWeatherMap API', 'HTML5', 'CSS3', 'Local Storage', 'REST APIs'],
      highlights: ['Client satisfaction', 'Responsive design', 'Real-time data'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Research')) return Brain;
    if (category.includes('Cloud')) return Cloud;
    if (category.includes('Team')) return Users;
    return Zap;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI') || category.includes('Research')) return 'secondary';
    if (category.includes('Cloud')) return 'accent';
    if (category.includes('Team')) return 'primary';
    return 'primary';
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions across full-stack development, AI/ML, and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            const categoryColor = getCategoryColor(project.category);
            
            return (
              <Card
                key={project.title}
                className="group hover:shadow-xl transition-all duration-500 border-l-4 border-l-primary animate-fade-in-up h-full magnetic-hover animate-border-morph"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-${categoryColor}-light`}>
                      <CategoryIcon className={`h-6 w-6 text-${categoryColor}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={`border-${categoryColor} text-${categoryColor}`}>
                        {project.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {project.scale}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors animate-gradient-text">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-medium mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1 text-xs flex-shrink-0">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium mb-3 text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-medium mb-3 text-foreground">Project Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <Badge key={highlight} className={`text-xs bg-${categoryColor} text-${categoryColor}-foreground`}>
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t">
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                    {project.demoUrl !== '#' && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Projects Summary */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="bg-gradient-card border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">More Projects</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Beyond these featured projects, I've delivered 30+ consumer-facing applications at Gaddr, 
                5+ Angular-based freelance projects, and multiple open-source contributions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">Applications at Gaddr</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Users Served</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
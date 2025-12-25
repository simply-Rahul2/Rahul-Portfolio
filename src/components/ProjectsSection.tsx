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
      githubUrl: 'https://github.com/simply-Rahul8/TAskFlow.git'
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
      githubUrl: 'https://github.com/simply-Rahul8/GamePlanApp.git'
    },
    {
      title: 'Customer Feedback Analysis Tool',
      description: 'Hybrid rule-based + AI-assisted system designed to analyze customer feedback with low latency (<500ms), fault tolerance, and scalable architecture for sentiment analysis and topic extraction.',
      category: 'AI/Generative AI Project',
      icon: Brain,
      scale: 'Enterprise-ready',
      features: [
        'Hybrid architecture combining deterministic rules with AI for nuanced analysis',
        'Real-time sentiment categorization (positive/neutral/negative)',
        'Automated topic extraction and feedback routing',
        'Critical issue auto-flagging based on pattern detection',
        'Lightweight UI for interaction and monitoring'
      ],
      technologies: ['Python', 'AI/LLM APIs', 'Rule Engine', 'REST APIs', 'Caching', 'Event-driven Architecture'],
      highlights: ['<500ms latency', 'Fault-tolerant design', 'Scalable hybrid architecture'],
      demoUrl: '#',
      githubUrl: 'https://github.com/simply-Rahul8/Customer-Feedback-Analysis-Tool.git'
    },
    {
      title: 'Intelligent Consent Flow for Medical Care',
      description: 'AI-powered conversational system that streamlines and humanizes the medical consent process using speech technologies and natural language processing.',
      category: 'AI/Generative AI Project',
      icon: Brain,
      scale: 'Prototype/Demo-ready',
      features: [
        'Converts medical notes/ICD-10/CPT codes to patient-friendly summaries',
        'Interactive patient Q&A via text or voice with context-aware AI',
        'Accessibility via instant audio playback (TTS) for summaries',
        'Captures consent through verified audio or digital signature',
        'Privacy-first architecture with minimal logging'
      ],
      technologies: ['Python', 'Streamlit', 'Perplexity AI API', 'Whisper STT', 'gTTS', 'streamlit-drawable-canvas', 'REST APIs'],
      highlights: ['Modernized consent workflow', 'Enhanced accessibility', 'Privacy-first design'],
      demoUrl: '#',
      githubUrl: 'https://github.com/simply-Rahul8/Intelligent-medical-Assista.git'

    },
    {
      title: 'Personal Data Chatbot with Streamlit, RAG, Ollama, and LangChain',
      description: 'Privacy-preserving chatbot with Retrieval-Augmented Generation (RAG) for secure natural language querying of personal documents on local infrastructure.',
      category: 'AI/ML Project',
      icon: Brain,
      scale: 'Prototype / Personal use',
      features: [
        'Full document ingestion without filtering for personal data handling',
        'Multi-turn chat with persistent session state',
        'Green dot UI indicator for successful document processing',
        'Enhanced UI with improved font size and upload margins',
        'Secure local infrastructure with no external data sharing'
      ],
      technologies: ['Streamlit', 'Python', 'LangChain', 'Ollama', 'FAISS', 'PyPDF2'],
      highlights: ['Privacy-preserving design', 'Local infrastructure', 'RAG technology integration'],
      demoUrl: '#',
      githubUrl: 'https://github.com/simply-Rahul8/Personal-chatbot.git'
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
      githubUrl: 'https://github.com/simply-Rahul8/Dual-LLM-RAG-based-Pipeline.git'
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
      githubUrl: 'https://github.com/simply-Rahul8/3D-pose-estimation.git'
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
      githubUrl: 'https://github.com/simply-Rahul8/Grayscale-Image-Processor.git'
    },
    {
      title: 'COVID-19 Data Analysis Dashboard',
      description: 'Team-led data analytics dashboard providing real-time COVID-19 insights with interactive visualizations and comprehensive data processing capabilities.',
      category: 'Team Project (Lead)',
      icon: Users,
      scale: '3-person team',
      features: [
        'Real-time COVID-19 data monitoring and analysis',
        'Interactive data visualizations with Matplotlib',
        'Responsive web dashboard for stakeholders',
        'Advanced data preprocessing and validation',
        'Team leadership and project coordination'
      ],
      technologies: ['Flask', 'Python', 'NumPy', 'Pandas', 'Matplotlib', 'Figma', 'Git'],
      highlights: ['Team leadership', 'Data analytics expertise', 'Stakeholder-focused design'],
      demoUrl: '#',
      githubUrl: 'https://github.com/simply-Rahul8/COVID-19-Data-Visualization-tool.git'
    },
    {
      title: 'Microservices-based Online Food Ordering System',
      description: 'Enterprise-grade microservices architecture with separate services for users, menu, orders, and payments, deployed using modern containerization.',
      category: 'Enterprise Project',
      icon: Cloud,
      scale: 'Microservices architecture',
      features: [
        'Split services: User, Menu, Order, Payment Services',
        'API Gateway for service orchestration',
        'Inter-service communication via gRPC/REST',
        'Docker and Kubernetes deployment',
        'Scalable enterprise architecture'
      ],
      technologies: ['.NET Core', 'Microservices', 'API Gateway', 'gRPC', 'REST APIs', 'Docker', 'Kubernetes'],
      highlights: ['Microservices design', 'Enterprise scalability', 'Modern deployment'],
      demoUrl: '#',
      githubUrl: 'https://github.com/simply-Rahul8/Micro-services-Ordering-system.git'
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
      githubUrl: 'https://github.com/simply-Rahul8/Angular-Weather-forecaster.git'
    }
  ];

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Research')) return Brain;
    if (category.includes('Cloud')) return Cloud;
    if (category.includes('Team')) return Users;
    return Zap;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI') || category.includes('Research') || category.includes('Generative')) return 'secondary';
    if (category.includes('Cloud')) return 'accent';
    if (category.includes('Team')) return 'primary';
    return 'primary';
  };

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-background to-muted/20" style={{ backgroundSize: '200% 200%', animation: 'gradient-shift 15s ease infinite' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions across full-stack development, AI/ML, and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            const categoryColor = getCategoryColor(project.category);
            
            return (
              <Card
                key={project.title}
                className="group hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50 transition-all duration-500 border-l-4 border-l-primary animate-fade-in-up h-full overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-primary before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-${categoryColor}-light`}>
                      <CategoryIcon className={`h-5 w-5 text-${categoryColor}`} />
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge variant="outline" className={`border-${categoryColor} text-${categoryColor} text-xs`}>
                        {project.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {project.scale}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4 pt-0 relative z-10">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-medium mb-2 text-foreground text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-primary mt-1 text-xs flex-shrink-0">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium mb-2 text-foreground text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs px-2 py-0">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs px-2 py-0">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-medium mb-2 text-foreground text-sm">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.map((highlight) => (
                        <Badge key={highlight} className={`text-xs bg-${categoryColor} text-${categoryColor}-foreground px-2 py-0`}>
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-3 border-t">
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
        <div className="mt-12 text-center animate-fade-in">
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
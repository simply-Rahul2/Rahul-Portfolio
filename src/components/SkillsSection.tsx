import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Database, Cloud, Brain, Settings } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('ai');

  const skillCategories = {
    ai: {
      title: 'AI & ML',
      icon: Brain,
      skills: [
        'Generative AI Development',
        'Prompt Engineering',
        'RAG Implementation',
        'LangChain Framework',
        'OpenAI API Integration',
        'Hybrid AI Architectures',
        'Sentiment Analysis',
        'NLP & Text Processing',
        'TensorFlow/Keras',
        'Multi-LLM Orchestration',
        'AI Agent Building',
        'MMPose & SemGCN'
      ]
    },
    frontend: {
      title: 'Frontend',
      icon: Code,
      skills: [
        'React.js',
        'Angular (2+)',
        'Next.js',
        'TypeScript',
        'React Native',
        'Vue.js',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Tailwind CSS'
      ]
    },
    backend: {
      title: 'Backend',
      icon: Database,
      skills: [
        'C# / .NET Core',
        'ASP.NET Core',
        'Node.js',
        'Python',
        'REST APIs',
        'Entity Framework',
        'PostgreSQL',
        'SQL Server',
        'MongoDB',
        'Firebase'
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        'AWS (EC2, S3, Lambda)',
        'Azure',
        'Google Cloud Platform',
        'Docker',
        'Kubernetes',
        'GitHub Actions',
        'CI/CD Pipelines',
        'Microservices',
        'Serverless Architecture'
      ]
    },
    practices: {
      title: 'Practices',
      icon: Settings,
      skills: [
        'System Design',
        'Low-Latency Systems',
        'Agile Methodologies',
        'Test-Driven Development',
        'Git Version Control',
        'API Documentation',
        'Code Review',
        'Technical Leadership'
      ]
    }
  };

  const categories = Object.entries(skillCategories);

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-stack expertise across the modern technology landscape
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map(([key, cat]) => {
            const Icon = cat.icon;
            const isActive = activeCategory === key;
            return (
              <Button
                key={key}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(key)}
                className={`transition-all ${isActive ? 'shadow-md' : ''}`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {cat.title}
              </Button>
            );
          })}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {categories.map(([key, cat]) => {
            const Icon = cat.icon;
            if (key !== activeCategory) return null;
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-card border rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{cat.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <Badge variant="secondary" className="px-3 py-1.5 text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Currently Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border max-w-4xl mx-auto"
        >
          <h3 className="text-lg font-semibold mb-4 text-center">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'MLOps (MLflow, Kubeflow)',
              'GraphQL',
              'NX Monorepo',
              'Elasticsearch',
              'Apache Superset',
              'Advanced RAG Patterns'
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="border-primary/50 text-primary">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { Calendar, MapPin, Users, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Fullstack & AI Developer Intern',
      company: 'Gaddr',
      location: 'Sweden',
      period: 'March 2025 - Present',
      type: 'Internship',
      description: 'Leading cross-functional teams and developing AI-enhanced consumer applications',
      achievements: [
        'Led 5-member cross-functional team development of 30+ consumer-facing web applications',
        'Mentored 5 junior interns in full-stack development and Agile practices',
        'Enhanced user engagement for 100+ users through innovative solutions',
        'Improved team productivity by 20% through effective mentorship',
        'Reduced deployment time by 15% through CI/CD optimization',
        'Successfully presented technical demos to stakeholders and CEO'
      ],
      technologies: ['Angular', 'React', 'Vue.js', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Azure', 'AWS', 'LangChain', 'OpenAI API', 'Docker', 'GitHub Actions']
    },
    {
      title: 'Freelance Full Stack Developer',
      company: 'Remote',
      location: 'Remote',
      period: '2022 - 2024',
      type: 'Freelance',
      description: 'Delivered customer-obsessed B2B/DTC solutions with rapid iteration cycles',
      achievements: [
        'Achieved 100% client satisfaction across all freelance projects',
        'Delivered projects with 1-3 week rapid iteration cycles',
        'Reduced technical debt by 20% through code refactoring',
        'Built scalable, modular architectures across all projects',
        'Developed 5+ Angular-based projects with real-time features',
        'Enhanced user engagement with event-driven designs and responsive UIs'
      ],
      technologies: ['Angular', 'ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework Core', 'JWT', 'Chart.js', 'SignalR', 'Blazor', 'REST APIs']
    },
    {
      title: 'Cloud Computing Intern',
      company: 'HDLC Info Technologies',
      location: 'India',
      period: 'May 2023 - July 2023',
      type: 'Internship',
      description: 'Executed cloud operations and built scalable infrastructure solutions',
      achievements: [
        'Executed 50+ cloud operations using AWS EC2 and S3',
        'Improved DevOps efficiency by 10% through pipeline optimization',
        'Automated infrastructure via CI/CD pipelines using GitHub Actions',
        'Delivered scalable infrastructure for consumer-focused client applications',
        'Gained hands-on experience with GCP and Azure platforms',
        'Successfully met client requirements in consumer sectors'
      ],
      technologies: ['AWS', 'EC2', 'S3', 'CloudWatch', 'GCP', 'Azure', 'GitHub Actions', 'CI/CD']
    }
  ];

  const education = [
    {
      degree: 'Bachelor\'s Exchange Program in Computer Science',
      institution: 'Blekinge Institute of Technology (BTH)',
      location: 'Sweden',
      period: '2024 - June 2025',
      status: 'Graduated',
      focus: 'Full-Stack Development, Cloud Computing, Generative AI',
      courses: ['Applied Generative AI', 'Introduction to Cloud Computing', 'Mobile Applications Development']
    },
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science',
      institution: 'Jawaharlal Nehru Technological University (JNTU)',
      location: 'India',
      period: '2021 - 2024',
      status: 'Graduated',
      focus: 'Machine Learning, Data Analytics, Software Development',
      courses: ['Machine Learning', 'Data Structures', 'Python Programming', 'Cyber Security', 'Big Data Analytics', 'Cryptography & Network Security']
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Animated gradient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" style={{ animation: 'particle-float 20s ease-in-out infinite' }} />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" style={{ animation: 'particle-float 25s ease-in-out infinite 5s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl" style={{ animation: 'particle-float 30s ease-in-out infinite 10s' }} />
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of continuous learning and professional growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary-light rounded-lg">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="relative">
              {/* Interactive Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden lg:block" style={{ left: '-2rem' }} />
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={`${exp.company}-${index}`} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block shadow-lg" style={{ left: '-2.5rem' }}>
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                    </div>
                    
                    <Card
                      className="group hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-500 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl text-primary group-hover:text-primary-hover transition-colors">
                          {exp.title}
                        </CardTitle>
                        <p className="text-lg font-medium text-foreground mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5 text-xs">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-foreground">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-secondary-light rounded-lg">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card
                  key={`${edu.institution}-${index}`}
                  className="group hover:shadow-2xl hover:-translate-y-1 hover:border-secondary/50 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${(index + experiences.length) * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl text-secondary group-hover:text-secondary-hover transition-colors">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-lg font-medium text-foreground mt-1">
                          {edu.institution}
                        </p>
                      </div>
                      <Badge variant="outline" className="w-fit border-success text-success">
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground font-medium">{edu.focus}</p>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-foreground">Relevant Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Thesis Section */}
              <Card className="border-l-4 border-l-accent animate-fade-in-up" style={{ animationDelay: `${(education.length + experiences.length) * 0.2}s` }}>
                <CardHeader>
                  <CardTitle className="text-xl text-accent">
                    Bachelor's Thesis
                  </CardTitle>
                  <p className="text-lg font-medium text-foreground">
                    3D Pose Estimation for Fatigue Detection
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Pioneered low-cost, smartphone-based system for physical fatigue detection, 
                    achieving <span className="text-accent font-semibold">93% accuracy</span> via 4-fold cross-validation.
                  </p>
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Technical Implementation:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'TensorFlow/Keras', 'MMPose (HRNet)', 'SemGCN', 'Conv1D + BiLSTM', 'Random Forest', 'OpenMMLab'].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
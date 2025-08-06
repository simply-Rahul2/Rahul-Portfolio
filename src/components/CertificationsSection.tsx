import { Award, BookOpen, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CertificationsSection = () => {
  const completedCertifications = [
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      year: '2023',
      type: 'Cloud Computing'
    },
    {
      title: 'Full-Stack Web Development',
      issuer: 'LinkedIn Learning',
      year: '2023',
      type: 'Web Development'
    },
    {
      title: 'React Front-End Development',
      issuer: 'LinkedIn Learning',
      year: '2023',
      type: 'Frontend'
    },
    {
      title: 'AI LLM Fundamentals',
      issuer: 'Coursera',
      year: '2023',
      type: 'AI/ML'
    },
    {
      title: '.NET Core for Web Apps',
      issuer: 'Microsoft Learn',
      year: '2023',
      type: 'Backend'
    },
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'HDLC Info Technologies',
      year: '2023',
      type: 'Cloud Computing'
    }
  ];

  const ongoingLearning = [
    {
      title: 'Exploring NX Monorepo',
      type: 'Architecture',
      status: 'Self-Paced'
    },
    {
      title: 'GraphQL',
      type: 'API Development',
      status: 'Self-Paced'
    },
    {
      title: 'Contentful CMS',
      type: 'Content Management',
      status: 'Self-Paced'
    }
  ];

  const getTypeColor = (type: string): "default" | "destructive" | "outline" | "secondary" => {
    if (type.includes('AI') || type.includes('ML')) return 'secondary';
    if (type.includes('Cloud')) return 'secondary';
    if (type.includes('Frontend') || type.includes('Backend')) return 'default';
    return 'outline';
  };

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Certifications & Learning
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning through certifications and ongoing skill development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Completed Certifications */}
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                Completed Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {completedCertifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="flex items-start justify-between p-4 rounded-lg bg-card border hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant={getTypeColor(cert.type)} className="text-xs">
                        {cert.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Ongoing Learning */}
          <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                Ongoing Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {ongoingLearning.map((learning, index) => (
                <div
                  key={learning.title}
                  className="flex items-start justify-between p-4 rounded-lg bg-card border hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{learning.title}</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant={getTypeColor(learning.type)} className="text-xs">
                        {learning.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {learning.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Learning Philosophy */}
        <Card className="bg-gradient-card border animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning Philosophy</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Staying current with emerging technologies and industry best practices through structured learning 
              and hands-on experimentation. Always exploring new tools and methodologies to deliver innovative solutions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CertificationsSection;
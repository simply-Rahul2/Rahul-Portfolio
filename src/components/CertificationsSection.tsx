import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    { title: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', type: 'Cloud' },
    { title: 'AWS Academy Cloud Foundations', issuer: 'AWS', type: 'Cloud' },
    { title: 'AI LLM Fundamentals', issuer: 'Coursera', type: 'AI/ML' },
    { title: 'Full-Stack Web Development', issuer: 'LinkedIn Learning', type: 'Development' },
    { title: 'React Front-End Development', issuer: 'LinkedIn Learning', type: 'Frontend' },
    { title: '.NET Core for Web Apps', issuer: 'Microsoft Learn', type: 'Backend' },
  ];

  const learning = [
    'MLOps (MLflow, Kubeflow)',
    'GraphQL',
    'NX Monorepo',
    'Elasticsearch'
  ];

  return (
    <section id="certifications" ref={ref} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Certifications & <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning through structured certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Certifications</h3>
                </div>
                
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                      className="flex items-start justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-sm">{cert.title}</p>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{cert.type}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <BookOpen className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold">Currently Learning</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {learning.map((item) => (
                    <Badge key={item} variant="secondary">{item}</Badge>
                  ))}
                </div>

                <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border">
                  <p className="text-sm text-muted-foreground italic">
                    "If you explore my work, you'll see experiments, trade-offs, and learning in progress. That's how I grow as an engineer."
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

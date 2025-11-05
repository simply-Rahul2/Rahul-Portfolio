import { Award, Users, Presentation, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Led 5-member cross-functional teams and mentored junior developers',
    },
    {
      icon: Presentation,
      title: 'Stakeholder Engagement',
      description: 'Presented technical demos to stakeholders and CEO at Gaddr',
    },
    {
      icon: TrendingUp,
      title: 'Performance Impact',
      description: 'Improved team productivity by 20% and reduced deployment time by 15%',
    },
    {
      icon: Award,
      title: 'Client Success',
      description: 'Achieved 100% client satisfaction in freelance projects',
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 mt-8">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about building innovative solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I'm a <span className="text-accent font-semibold">recent graduate</span> & <span className="text-primary font-semibold">dynamic Full-Stack Developer</span> with{' '}
                <span className="text-secondary font-semibold">3+ years</span> of experience building scalable, 
                consumer-centric applications using modern technologies like{' '}
                <span className="text-accent font-semibold">C#, .NET Core, Angular, React, and cloud-native platforms</span>.
              </p>

              <p>
                At <span className="text-primary font-semibold">Gaddr</span>, I lead a 5-member cross-functional team, 
                mentor junior interns, and deliver user-focused solutions. I present technical demos to stakeholders 
                and the CEO, driving product success through innovative development approaches.
              </p>

              <p>
                My expertise spans <span className="text-secondary font-semibold">AI-driven development</span> with 
                LangChain and OpenAI API, along with proficiency in <span className="text-accent font-semibold">
                AWS, Azure, GCP</span>, and modern development practices including Agile methodologies and DevSecOps.
              </p>

              <p>
                <span className="text-primary font-semibold">Fluent in English</span> with{' '}
                <span className="text-secondary font-semibold">B2 Swedish proficiency</span>, I'm eager to relocate to 
                Stockholm to contribute to innovative, client-focused solutions in dynamic tech environments.
              </p>
            </div>

            {/* Languages */}
            <div className="mt-8 p-6 bg-card rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-medium">English</span>
                  <p className="text-muted-foreground text-sm">Fluent</p>
                </div>
                <div>
                  <span className="font-medium">Swedish</span>
                  <p className="text-muted-foreground text-sm">B2 (Intermediate)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="grid gap-6 animate-fade-in-up">
            {highlights.map((highlight, index) => (
              <Card
                key={highlight.title}
                className="group hover:shadow-xl hover:-translate-x-1 transition-all duration-500 border-l-4 border-l-primary animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-primary-light rounded-lg">
                      <highlight.icon className="h-5 w-5 text-primary" />
                    </div>
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievement Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
          {[
            { number: '200+', label: 'Users Served', desc: 'Across multiple applications' },
            { number: '93%', label: 'ML Accuracy', desc: 'In fatigue detection system' },
            { number: '20%', label: 'Efficiency Boost', desc: 'Through mentorship & optimization' },
            { number: '5', label: 'Team Size', desc: 'Cross-functional leadership' }
          ].map((achievement, index) => (
            <div
              key={achievement.label}
              className="text-center p-6 bg-card rounded-lg border group hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {achievement.number}
              </div>
              <div className="font-medium text-foreground mb-1">
                {achievement.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {achievement.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
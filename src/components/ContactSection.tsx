import { Mail, Phone, MapPin, Linkedin, Github, Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yashwanthrahul5126@gmail.com',
      href: 'mailto:yashwanthrahul5126@gmail.com',
      color: 'primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+46 764 341 815',
      href: 'tel:+46764341815',
      color: 'secondary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karlskrona, Sweden',
      href: 'https://maps.google.com/?q=Karlskrona,Sweden',
      color: 'accent'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ry-',
      href: 'https://linkedin.com/in/ry-',
      color: 'primary'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/simply-Rahul8',
      href: 'https://github.com/simply-Rahul8',
      color: 'secondary'
    },
    {
      icon: Download,
      label: 'Portfolio',
      value: 'View Portfolio Site',
      href: 'https://simply-rahul8.github.io/Portfolio-RY',
      color: 'accent'
    }
  ];

  const availabilityOptions = [
    {
      title: 'Full-Time Opportunities',
      description: 'Seeking permanent positions in Stockholm or remote roles with Swedish companies',
      highlight: 'Preferred'
    },
    {
      title: 'Freelance Projects',
      description: '1-3 week rapid iteration cycles with proven 100% client satisfaction rate',
      highlight: 'Available'
    },
    {
      title: 'Consulting Services',
      description: 'Technical advisory, code reviews, and architecture consulting',
      highlight: 'Open'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring innovative solutions to your team. Open to Stockholm relocation and excited about new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border hover:shadow-md transition-all duration-300 group animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 rounded-lg bg-${contact.color}-light group-hover:bg-${contact.color} group-hover:text-${contact.color}-foreground transition-colors`}>
                      <contact.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{contact.label}</div>
                      <div className="text-muted-foreground text-sm">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-medium mb-4 text-foreground">Connect Online</h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-card rounded-lg border hover:shadow-md transition-all duration-300 group animate-slide-in-right"
                      style={{ animationDelay: `${(index + contactInfo.length) * 0.1}s` }}
                    >
                      <div className={`p-2 rounded-lg bg-${social.color}-light group-hover:bg-${social.color} group-hover:text-${social.color}-foreground transition-colors`}>
                        <social.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-sm">{social.label}</div>
                        <div className="text-muted-foreground text-xs">{social.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="animate-fade-in">
              <h4 className="font-medium mb-4 text-foreground">Availability</h4>
              <div className="space-y-3">
                {availabilityOptions.map((option, index) => (
                  <div
                    key={option.title}
                    className="p-4 bg-card rounded-lg border animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-foreground">{option.title}</h5>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        option.highlight === 'Preferred' ? 'bg-primary text-primary-foreground' :
                        option.highlight === 'Available' ? 'bg-success text-success-foreground' :
                        'bg-accent text-accent-foreground'
                      }`}>
                        {option.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Interested in collaboration? Drop me a message and I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="your.email@company.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company / Organization
                    </label>
                    <Input id="company" placeholder="Your company name" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, requirements, or how we can work together..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full group">
                    <Send className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact CTA */}
            <div className="mt-6 p-6 bg-gradient-primary/10 rounded-lg border border-primary/20">
              <div className="text-center">
                <h4 className="font-medium mb-2 text-primary">Prefer Direct Contact?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  For urgent inquiries or quick discussions, feel free to reach out directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:yashwanthrahul5126@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Directly
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://linkedin.com/in/ry-" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn Message
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-card rounded-lg border">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              With 3.5+ years of experience, proven leadership skills, and a passion for innovation, 
              I'm ready to contribute to your team's success from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="h-5 w-5 mr-2" />
                Download My Resume
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="h-5 w-5 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
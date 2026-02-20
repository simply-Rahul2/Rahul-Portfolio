import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const expertise = [
    'Full-Stack Development',
    'AI & ML Engineering',
    'Cloud Architecture',
    'System Design',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            rotate: [2, -2, 2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 right-[5%] w-96 h-96 bg-secondary/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [-5, 15, -5],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10"
        >
          {/* Left Content */}
          <div className="flex-1">
          {/* Greeting & Name */}
          <motion.div variants={itemVariants} className="mb-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Open to opportunities in Sweden
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Open to relocation
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            Hi, I'm{' '}
            <span className="text-gradient">Yaswanth Rahul</span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-8"
          >
            <span className="text-primary">Full-Stack</span> &{' '}
            <span className="text-secondary">AI Engineer</span>
          </motion.h2>

          {/* Story Intro */}
          <motion.div variants={itemVariants} className="max-w-3xl mb-10">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I build systems end-to-end — from{' '}
              <span className="text-foreground font-medium">clean, thoughtful user interfaces</span> to{' '}
              <span className="text-foreground font-medium">scalable backend services</span> and{' '}
              <span className="text-foreground font-medium">intelligent AI decision layers</span>.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
              I didn't arrive at AI by chasing trends — I came here through engineering. 
              Certified in AI & Analytics from <span className="text-foreground font-medium">IIT Roorkee</span>, 
              what motivates me is solving problems where technology genuinely helps people 
              understand complex things or work more effectively.
            </p>
          </motion.div>

          {/* Expertise Tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
            {expertise.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="px-4 py-2 bg-card border rounded-full text-sm font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:yashwanthrahul5126@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
          </motion.div>

          {/* Location & Social */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              Karlskrona, Sweden
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/simply-Rahul8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-full transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ry-"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-full transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          </div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex-shrink-0"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-primary/30 p-1">
              <img
                src="/RY Profile image.png"
                alt="Yaswanth Rahul"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-primary/10 ring-offset-2 ring-offset-background" />
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
        >
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '30+', label: 'Projects Delivered' },
            { number: '93%', label: 'ML Accuracy (Thesis)' },
            { number: '5', label: 'Team Members Led' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              className="text-center p-4 bg-card/60 backdrop-blur-sm rounded-xl border hover:border-primary/50 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code, Brain } from "lucide-react";

const timelineItems = [
  {
    year: "2026",
    title: "AI/ML Research Focus",
    description: "Deep dive into multimodal recommendation systems and financial NLP applications",
    icon: Brain,
  },
  {
    year: "2025",
    title: "Research Projects",
    description: "Started working on sentiment analysis using FinBERT and RoBERTa models",
    icon: Briefcase,
  },
  {
    year: "2024",
    title: "Full-Stack Development",
    description: "Building production-grade applications with React, Spring Boot, and modern databases",
    icon: Code,
  },

  {
    year: "2023",
    title: "Academic Foundation",
    description: "Strong foundation in computer science, algorithms, and data structures",
    icon: GraduationCap,
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            A passionate technologist bridging the gap between cutting-edge research and real-world applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 font-display text-foreground">
                Building Intelligent Systems
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                I specialize in developing AI/ML solutions that solve real-world problems. 
                My work spans from financial news analysis and risk scoring to multimodal 
                recommendation systems, always with a focus on research-driven innovation.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                With expertise in NLP models like FinBERT and RoBERTa, combined with 
                full-stack development skills in React and Spring Boot, I create end-to-end 
                solutions that are both technically robust and user-friendly.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "AI/ML Projects", value: "10+" },
                { label: "Years Coding", value: "4+" },
                { label: "Research Papers", value: "2" },
                { label: "Technologies", value: "20+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-1 font-display">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-body">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
            
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.15 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-secondary border-2 border-primary/50 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  
                  <div className="glass-card-hover p-6 rounded-xl">
                    <span className="text-primary text-sm font-semibold font-display">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-semibold mt-1 mb-2 font-display text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm font-body">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

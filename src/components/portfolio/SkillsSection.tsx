import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Server, Layout, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "AI/ML & NLP",
    icon: Brain,
    skills: [
      { name: "FinBERT", level: 90 },
      { name: "RoBERTa", level: 85 },
      { name: "BERTopic", level: 80 },
      { name: "Sentiment Analysis", level: 95 },
      { name: "Event Extraction", level: 85 },
      { name: "PyTorch", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Java Spring Boot", level: 90 },
      { name: "Python", level: 95 },
      { name: "PostgreSQL", level: 85 },
      { name: "SQLite", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "Microservices", level: 75 },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Streamlit", level: 95 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Jupyter", level: 90 },
      { name: "Linux", level: 80 },
      { name: "CI/CD", level: 70 },
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            A comprehensive toolkit spanning AI/ML, full-stack development, and modern DevOps practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              className="glass-card-hover p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground font-body">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-body">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

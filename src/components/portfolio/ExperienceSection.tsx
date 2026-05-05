import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, TrendingUp, Award } from "lucide-react";

const experiences = [
  {
    period: "2025 - 2026",
    title: "AI/ML Research & Development",
    organization: "Independent Research",
    type: "Research",
    highlights: [
      {
        icon: Lightbulb,
        title: "Research Gap",
        description: "Identified limitations in single-modality recommendation systems for financial applications.",
      },
      {
        icon: Target,
        title: "Innovation",
        description: "Developed novel multimodal fusion architecture combining text, numerical, and temporal features.",
      },
      {
        icon: TrendingUp,
        title: "Outcome",
        description: "Achieved 23% improvement in recommendation accuracy; preparing research paper for publication.",
      },
    ],
  },
  {
    period: "2024 - 2025",
    title: "Financial NLP Specialist",
    organization: "Academic Project",
    type: "Research",
    highlights: [
      {
        icon: Lightbulb,
        title: "Research Gap",
        description: "Existing sentiment models underperform on domain-specific financial text and jargon.",
      },
      {
        icon: Target,
        title: "Innovation",
        description: "Fine-tuned FinBERT with custom financial dataset; implemented ensemble with RoBERTa.",
      },
      {
        icon: TrendingUp,
        title: "Outcome",
        description: "Deployed production-ready API handling 10K+ requests/day with 94% classification accuracy.",
      },
    ],
  },
  {
    period: "2023 - 2024",
    title: "Full-Stack Developer",
    organization: "Project-Based Learning",
    type: "Development",
    highlights: [
      {
        icon: Lightbulb,
        title: "Challenge",
        description: "Building scalable, maintainable applications with modern architecture patterns.",
      },
      {
        icon: Target,
        title: "Approach",
        description: "Mastered React ecosystem, Spring Boot microservices, and database optimization.",
      },
      {
        icon: TrendingUp,
        title: "Outcome",
        description: "Delivered 5+ full-stack applications with focus on performance and user experience.",
      },
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            Experience & <span className="gradient-text">Research</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            A journey of continuous learning, innovation, and building impactful solutions
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(186_100%_50%/0.5)] -translate-x-1/2 md:-translate-x-1/2 z-10 top-8 md:top-1/2 md:-translate-y-1/2" />

                {/* Date */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-12 md:pl-0`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.2 }}
                  >
                    <span className="text-primary font-semibold font-display text-lg">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold mt-1 font-display text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {exp.organization}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full font-display">
                      {exp.type}
                    </span>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} pl-12 md:pl-0`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="glass-card p-6 rounded-2xl space-y-4"
                  >
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={highlight.title} className="flex gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 h-fit">
                          <highlight.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground font-display text-sm">
                            {highlight.title}
                          </h4>
                          <p className="text-muted-foreground text-sm font-body mt-1">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

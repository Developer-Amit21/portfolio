import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Code, GitBranch, Star, Trophy, FileCode, Users } from "lucide-react";

const stats = [
  { icon: Code, label: "Lines of Code", value: 50000, suffix: "+" },
  { icon: GitBranch, label: "Git Commits", value: 1200, suffix: "+" },
  { icon: Star, label: "GitHub Stars", value: 150, suffix: "+" },
  { icon: FileCode, label: "Projects Completed", value: 15, suffix: "" },
  { icon: Trophy, label: "Competitions", value: 5, suffix: "" },
  { icon: Users, label: "Collaborations", value: 10, suffix: "+" },
];

const AnimatedCounter = ({ value, suffix, isInView }) => {
  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          const el = document.getElementById(`counter-${value}`);
          if (el) {
            el.textContent = Math.round(latest).toLocaleString();
          }
        },
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <span
      id={`counter-${value}`}
      className="text-4xl md:text-5xl font-bold gradient-text font-display"
    >
      0{suffix}
    </span>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            By The <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-muted-foreground font-body">
            A snapshot of my coding journey and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-sm text-muted-foreground font-body">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

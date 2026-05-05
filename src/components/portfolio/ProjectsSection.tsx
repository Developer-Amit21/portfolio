import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All","AI/ML",
  "Web",
  "Automation",
  "Data Analytics",
  "Cybersecurity"
];



const projects = [
  {
    id: 1,
    title: "Financial News Risk Analyzer",
    description: "NLP-powered system for analyzing financial news and computing real-time risk scores.",
    problem: "Manual analysis of financial news is slow and biased.",
    techStack: ["FinBERT", "Python", "Streamlit", "spaCy"],
    features: ["Sentiment analysis", "Entity extraction", "Risk scoring"],
    researchValue: "Fine-tuned NLP model for financial sentiment classification.",
    category: ["AI/ML", "Web"],
    github: "https://github.com/Developer-Amit21/financial-risk-sentiment-analysis.git",
    demo:"https://financial-risk-sentiment-analysis.streamlit.app/"

  },
  {
  id: 2,
  title: "Portfolio Website",
  description: "A modern personal portfolio built using React and Vite, showcasing projects, skills, and experience with a clean UI and smooth animations.",
  problem: "Creating a fast, responsive, and visually engaging platform to present projects and technical skills effectively.",
  techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
  features: [
    "Responsive design for all devices",
    "Animated UI components",
    "Project showcase with GitHub and demo links",
    "Clean and modern layout",
    "Reusable component-based architecture"
  ],
  researchValue: "Demonstrates frontend engineering practices, component-based design, and performance optimization using modern tools like Vite.",
  category: ["Web", "Frontend"],
  github: "https://github.com/Developer-Amit21/portfolio.git",
  demo: "https://portfolio-orcin-ten-12.vercel.app/"
  },
  {
    id: 3,
    title: "Netflix Data Analysis",
    description: "Exploratory data analysis project on Netflix dataset to uncover trends in content, genres, and user preferences.",
    problem: "Large datasets are difficult to interpret without proper visualization.",
    techStack: ["Python", "pandas", "matplotlib", "seaborn"],
    features: ["Data cleaning", "Trend analysis", "Visual insights"],
    researchValue: "Demonstrates data-driven decision making using real-world datasets.",
    category: "Data Analytics",
    github: "https://github.com/Developer-Amit21/Project/tree/main/Data_Analytics/Netflix_Data",
  },
  {
    id: 4,
    title: "Amazon Clone",
    description: "A frontend clone of Amazon with responsive design and core e-commerce UI features.",
    problem: "Understanding real-world UI/UX and scalable frontend architecture.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: ["Responsive layout", "Product listings", "UI components"],
    researchValue: "Recreates production-level UI for learning scalable design patterns.",
    category: "Web",
    github: "https://github.com/Developer-Amit21/Project/tree/main/web_development/AMAZON_Clone",
    demo:"https://celadon-alfajores-13da3e.netlify.app/"
  },
  {
    id: 5,
    title: "GCETTS College Website",
    description: "A full-stack college website with frontend UI and backend integration.",
    problem: "Institutions require structured platforms to manage and display information.",
    techStack: ["HTML", "CSS", "JavaScript", "Java"],
    features: ["Dynamic pages", "Backend integration", "User-friendly UI"],
    researchValue: "Demonstrates full-stack development with Java backend.",
    category: "Web",
    github: "https://github.com/Developer-Amit21/gcetts",
    demo:"https://leafy-frangollo-42af2d.netlify.app/"
    
  },
  {
    id: 6,
    title: "Tic Tac Toe (5x5 Advanced)",
    description: "An advanced version of Tic Tac Toe with a 5x5 grid and extended win conditions.",
    problem: "Scaling simple game logic to more complex rule sets.",
    techStack: ["JavaScript", "HTML", "CSS"],
    features: ["5x5 grid", "Advanced win logic", "Dynamic gameplay"],
    researchValue: "Explores algorithmic thinking in game design.",
    category: "Web",
    github: "https://github.com/Developer-Amit21/Project/tree/main/web_development/TIC%20TAC%20TOE%205%2C5",
    demo:"https://tictactie0.netlify.app/"
  },
  {
    id: 7,
    title: "Video Downloader",
    description: "A tool for downloading videos from online platforms using automated scripts.",
    problem: "Users need offline access to online video content.",
    techStack: ["Python", "yt-dlp", "CLI"],
    features: ["Multi-platform support", "Download options", "Fast processing"],
    researchValue: "Automation of media retrieval using scripting tools.",
    category: "Automation",
    github: "https://github.com/Developer-Amit21/Project/tree/main/web_development/video_dowloader",
  },
  {
    id: 8,
    title: "Tic Tac Toe Game",
    description: "Classic Tic Tac Toe game with interactive UI and game logic.",
    problem: "Implementing game logic and user interaction in web apps.",
    techStack: ["JavaScript", "HTML", "CSS"],
    features: ["2-player mode", "Win detection", "Interactive UI"],
    researchValue: "Demonstrates fundamental logic building and DOM manipulation.",
    category: "Web",
    github: "https://github.com/Developer-Amit21/Project/tree/main/web_development/TIC%20TAC%20TOE",
    demo:"https://tictactoe3x3play.netlify.app/"
  },
  {
    id: 9,
    title: "Password Strength Checker",
    description: "A cybersecurity tool that evaluates password strength and provides real-time feedback for improving security.",
    problem: "Users often create weak passwords, making systems vulnerable to attacks.",
    techStack: ["Python", "Regex", "JavaScript"],
    features: ["Strength scoring", "Pattern detection", "Real-time feedback"],
    researchValue: "Applies rule-based and heuristic analysis to enhance password security.",
    category: "Cybersecurity",
    github: "https://github.com/Developer-Amit21/Project/tree/main/CyberSecurith/password_Strenght_checker",
  },
];



export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;

    if (Array.isArray(project.category)) {
      return project.category.includes(activeCategory);
    }

    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            A showcase of AI/ML research, full-stack applications, and data-driven solutions
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium font-display transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(186_100%_50%/0.3)]"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover rounded-2xl overflow-hidden group"
              >
                {/* Project Image/Header */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/20 font-display">
                      {project.id.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30 font-display">
                      {Array.isArray(project.category)
                        ? project.category.join(", ")
                        : project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 font-body line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}

                        className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded font-body"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded font-body">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Research Value */}
                  <p className="text-xs text-primary/80 mb-4 font-body italic">
                    💡 {project.researchValue}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1"
                      onClick={() => project.github && window.open(project.github, "_blank")}
                      disabled={!project.github}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => project.demo && window.open(project.demo, "_blank")}
                    disabled={!project.demo}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="hero-outline" size="lg">
            View All Projects
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

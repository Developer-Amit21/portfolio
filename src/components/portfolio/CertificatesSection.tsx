import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "AI",
  "Generative AI",
  "Web Development",
  "Frontend",
  "Programming",
  "Python",
  "DSA",
  "Cybersecurity"
];
const certificates = [
  {
    id: 1,
    title: "Python Bootcamp",
    issuer: "LetsUpgrade",
    date: "Sep 2024",
    description: "Completed Python Bootcamp covering core programming concepts and hands-on coding.",
    image: "src/components/portfolio/cirtificates/LetsUpgrade/Python Bootcamp.pdf",
    link: "https://drive.google.com/file/d/195h4Fma_CPun0R_zcDPKj5ey2EHFPBXm/view?usp=drive_link",
    category: ["Programming", "Python"]
  },
  {
    id: 2,
    title: "ChatGPT Bootcamp",
    issuer: "LetsUpgrade",
    date: "Jun 2024",
    description: "Learned practical applications of ChatGPT and AI tools for real-world use cases.",
    image: "src/components/portfolio/cirtificates/LetsUpgrade/ChatGPT Bootcamp.pdf",
    link: "https://drive.google.com/file/d/1SogCEri7Q6zNsNYE09o4dfDHsY6BBno6/view?usp=drive_link",
    category: ["AI", "Generative AI"]
  },
  {
    id: 3,
    title: "50 Days of DSA (JavaScript)",
    issuer: "Udemy",
    date: "Jan 2025",
    description: "Completed intensive DSA training using JavaScript with problem-solving on LeetCode.",
    image: "src/components/portfolio/cirtificates/Udemy/50 Days of DSA (JavaScript).pdf",
    link: "https://www.udemy.com/certificate/UC-46c437b9-b383-4e3e-b9c9-c29a8271bf3b/",
    category: ["DSA", "JavaScript"]
  },
  {
    id: 4,
    title: "CSS, JavaScript, PHP & Python All-in-One",
    issuer: "Udemy",
    date: "May 2025",
    description: "Full-stack programming course covering frontend and backend technologies.",
    image: "src/components/portfolio/cirtificates/Udemy/Full Stack Programming.pdf",
    link: "https://www.udemy.com/certificate/UC-acf72790-79f3-4c3d-87a5-c2f412d36e51/",
    category: ["Web Development", "Full Stack"]
  },
  {
    id: 5,
    title: "CSS & JavaScript Crash Course",
    issuer: "Udemy",
    date: "Sep 2024",
    description: "Hands-on crash course to strengthen frontend development skills.",
    image: "src/components/portfolio/cirtificates/Udemy/CSS & JavaScript Crash Course.pdf",
    link: "https://www.udemy.com/certificate/UC-67bb2a25-0ae2-4900-9b1b-86d6c6d08f4d/",
    category: ["Web Development", "Frontend"]
  },
  {
    id: 6,
    title: "Web Design (HTML, CSS, WordPress)",
    issuer: "Udemy",
    date: "Sep 2024",
    description: "Learned web design fundamentals including HTML, CSS, and WordPress.",
    image: "src/components/portfolio/cirtificates/Udemy/Web Design (HTML, CSS, WordPress).pdf",
    link: "https://www.udemy.com/certificate/UC-d8167386-b6c4-471a-917c-da342c530ffa/",
    category: ["Web Development", "Design"]
  },
  {
    id: 7,
    title: "Python Certification (Beginner to Expert)",
    issuer: "Udemy",
    date: "Apr 2024",
    description: "Comprehensive Python training covering real-world problem-solving and applications.",
    image: "src/components/portfolio/cirtificates/Udemy/Python Certification (Beginner to Expert).pdf",
    link: "https://www.udemy.com/certificate/UC-35641a50-517f-4827-82d9-cea9f027bbf3/",
    category: ["Programming", "Python"]
  },
  {
    id: 8,
    title: "20+ AI Websites (Noob to Expert)",
    issuer: "Udemy",
    date: "Sep 2024",
    description: "Explored AI tools and built multiple AI-based applications.",
    image: "src/components/portfolio/cirtificates/Udemy/20+ AI Websites (Noob to Expert).jpg",
    link: "https://www.udemy.com/certificate/UC-f7806b65-f274-44bd-8c79-df373bf17b14/",
    category: ["AI", "Tools"]
  },
  {
    id: 9,
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage (Tata Group)",
    date: "May 2025",
    description: "Hands-on cybersecurity simulation focused on real-world problem-solving.",
    image: "src/components/portfolio/cirtificates/Forage/Cybersecurity Analyst Job Simulation.jpg",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_uqpWn3pMuAvsot5tg_1747900989655_completion_certificate.pdf",
    category: ["Cybersecurity"]
  },
  {
    id: 10,
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud Skills Boost",
    date: "Dec 2024",
    description: "Learned principles of ethical and responsible AI usage.",
    image: "src/components/portfolio/cirtificates/Google Cloud Skills Boost/responsible-ai.png",
    link: "https://www.cloudskillsboost.google/public_profiles/e74076b3-f1bf-4627-ab08-6af16429d48c/badges/13274855",
    category: ["AI", "Ethics"]
  },
  {
    id: 11,
    title: "Introduction to Generative AI",
    issuer: "Google Cloud Skills Boost",
    date: "Sep 2024",
    description: "Fundamentals of generative AI models and applications.",
    image: "src/components/portfolio/cirtificates/Google Cloud Skills Boost/generative-ai.png",
    link: "https://www.cloudskillsboost.google/public_profiles/e74076b3-f1bf-4627-ab08-6af16429d48c/badges/11547463?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    category: ["AI", "Generative AI"]
  }
];

export const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredcertificates = certificates.filter((Certificate) => {
    if (activeCategory === "All") return true;

    if (Array.isArray(Certificate.category)) {
      return Certificate.category.includes(activeCategory);
    }

    return Certificate.category === activeCategory;
  });

  return (
    <section id="certificates" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="gradient-text">Certificates</span>
          </h2>
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

        {/* certificates Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredcertificates.map((Certificate, index) => (
              <motion.div
                key={Certificate.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover rounded-2xl overflow-hidden group"
              >
                {/* Certificate Image/Header */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/20 font-display">
                      {Certificate.id.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30 font-display">
                      {Array.isArray(Certificate.category)
                        ? Certificate.category.join(", ")
                        : Certificate.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-display text-foreground group-hover:text-primary transition-colors">
                    {Certificate.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 font-body line-clamp-2">
                    {Certificate.description}
                  </p>

                  {/* Skills */}
                  {Certificate.category && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Certificate.category.map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded font-body"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Research Value */}
                  <p className="text-xs text-primary/80 mb-4 font-body italic">
                    💡 {Certificate.researchValue}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => Certificate.link && window.open(Certificate.link, "_blank")}
                      disabled={!Certificate.link}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Certificate
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
            View All certificates
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

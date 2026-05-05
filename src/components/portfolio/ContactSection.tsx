import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, ExternalLink, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "shawamit76023@gmail.com",
    href: "mailto:shawamit76023@gmail.com",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/amitshaw",
    href: "https://www.linkedin.com/in/amit-shaw21/",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@amitshaw",
    href: "https://github.com/Developer-Amit21",
    color: "from-gray-500/20 to-slate-500/20",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleContactClick = () => {
    // Replace with your actual Google Form URL
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfMCul9jhQuflYG6II9pOcZkQ1_WNE8SwCn-EhU79_9dyO_JA/viewform?usp=publish-editor", "_blank");
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Interested in collaboration, research opportunities, or just want to chat about AI/ML? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-card-hover p-6 rounded-2xl text-center group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground font-display mb-1">
                    {link.label}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body flex items-center justify-center gap-1">
                    {link.value}
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="glass-card p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
                <Send className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display text-foreground">
                Ready to Start a Conversation?
              </h3>
              <p className="text-muted-foreground font-body max-w-lg mx-auto mb-8">
                Whether you're looking for a collaborator on an AI project, have research questions, 
                or want to discuss opportunities — I'm all ears.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={handleContactClick}
                  className="group"
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Contact Me
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>

              <p className="text-xs text-muted-foreground mt-4 font-body">
                Opens Google Form for easy communication
              </p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-2 mt-8 text-muted-foreground"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-body">Based in India • Open to Remote Opportunities</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

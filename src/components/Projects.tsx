import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import neta from "@/assets/neta.jpg";
import uds from "@/assets/uds.jpg";
import badges from "@/assets/badges.jpg";
import google from "@/assets/google.jpg";

const projects = [
  {
    title: "Full-Stack Web Application",
    category: "Freelance Project",
    description:
      "Developed and deployed responsive full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Managed end-to-end deployment, version control, and client delivery using Git and cloud hosting platforms.",
    image: uds,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"],
    links: {
      demo: "#",
      github: "#",
      uds: "https://uniquedesignsolution.in/",
    },
  },

  {
    title: "Generative AI Deployment",
    category: "AWS Cloud Project",
    description:
      "Deployed generative AI models using AWS services, including EC2, to support scalable application execution. Earned performance-based recognition through successful completion of AI challenges and deployments.",
    image: badges,
    tags: ["AWS", "EC2", "Generative AI", "Cloud Deployment"],
    links: {
      demo: "#",
      github: "#",
      credly: "https://www.credly.com/users/mannan-walekar/badges#credly",
    },
  },
  {
    title: "AI Chatbot UI/UX Design",
    category: "UI/UX Design",
    description:
      "Designed intuitive and user-centric interfaces for a live AI chatbot application using Figma. Translated functional requirements into wireframes, prototypes, and high-fidelity UI designs.",
    image: neta,
    tags: ["Figma", "UI/UX", "Wireframing", "Prototyping"],
    links: {
      demo: "#",
      github: "#",
      askneta: "https://askneta.com/",
    },
  },
  {
    title: "GDSC Event Graphics",
    category: "Graphic Design",
    description:
      "Led visual design strategy for Google Developer Student Club events. Created high-quality posters, social media creatives, banners, and promotional assets using Canva and design tools.",
    image: google,
    tags: ["Canva", "Visual Design", "Social Media", "Typography"],
    links: {
      demo: "#",
      github: "#",
      GDSC: "https://gdsc-sage.vercel.app/#",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center gothic-title">
          <span className="glow-text scribble-underline gothic-ornament">
            Featured Projects
          </span>
        </h2>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-lg overflow-hidden neon-border hover:scale-105 transition-all duration-500 group animate-slide-up gothic-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors gothic-title">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-accent/20 text-accent text-xs rounded border border-accent/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.links.demo !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.links.github !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.links.credly && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.links.credly}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Credly
                        </a>
                      </Button>
                    )}
                    {project.links.GDSC && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.links.GDSC}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          GDSC
                        </a>
                      </Button>
                    )}
                    {project.links.uds && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.links.uds}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Link
                        </a>
                      </Button>
                    )}
                    {project.links.askneta && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.links.askneta}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Link
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-24 h-24 border border-primary/10 rounded-full animate-float" />
      <div
        className="absolute bottom-10 right-10 w-32 h-32 border border-accent/10 rotate-45 animate-float"
        style={{ animationDelay: "4s" }}
      />
    </section>
  );
};

export default Projects;

import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Freelancer",
    period: "Sep 2025 – Present",
    location: "Remote",
    description:
      "Developed and deployed responsive full-stack web applications for clients using React.js, Node.js, Express.js, and MongoDB. Built RESTful APIs, integrated databases, and ensured seamless frontend–backend communication.",
    highlights: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
    ],
  },
  {
    role: "UI/UX Designer Intern",
    company: "Kiaan Technology",
    period: "Apr 2025 – July 2025",
    location: "Indore, India",
    description:
      "Designed intuitive and user-centric interfaces for a live AI chatbot application using Figma. Translated functional requirements into wireframes, prototypes, and high-fidelity UI designs.",
    highlights: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
  },
  {
    role: "Graphics Team Lead",
    company: "Google Developer Student Club (GDSC)",
    period: "2023 – 2025",
    location: "Indore, India",
    description:
      "Led the visual design strategy for technical and creative events, delivering high-quality posters, social media creatives, and promotional assets. Collaborated with cross-functional teams to ensure consistent visual identity.",
    highlights: ["Visual Design", "Team Leadership", "Canva", "Event Graphics"],
  },
];

const WorkExperience = () => {
  return (
    <section id="work" className="py-12 sm:py-20 bg-secondary/50 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16 text-center gothic-title">
          <span className="glow-text scribble-underline gothic-ornament">
            Work Experience
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow">
                      <Briefcase className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-card p-4 sm:p-6 rounded-lg gothic-border parchment-texture">
                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground gothic-title">
                        {exp.role}
                      </h3>
                      <p className="text-lg sm:text-xl text-primary font-semibold gothic-title">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full border border-accent/30"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-accent/10 rounded-full animate-float" />
      <div
        className="absolute bottom-20 left-20 w-28 h-28 border border-primary/10 rotate-45 animate-float"
        style={{ animationDelay: "3s" }}
      />
    </section>
  );
};

export default WorkExperience;

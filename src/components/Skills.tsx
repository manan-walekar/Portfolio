import { Code, Palette, Layers, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    color: "text-primary",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend & UI/UX",
    icon: Palette,
    color: "text-accent",
    skills: ["React.js", "Figma", "Canva", "Adobe Tools", "Responsive Design"],
  },
  {
    title: "Full-Stack Development",
    icon: Layers,
    color: "text-coral",
    skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Git"],
  },
  {
    title: "Cloud & AI",
    icon: Cloud,
    color: "text-electric",
    skills: [
      "AWS (EC2)",
      "Cloud Deployment",
      "Generative AI",
      "ML Concepts",
      "GoDaddy Hosting",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center gothic-title">
          <span className="glow-text scribble-underline gothic-ornament">
            Skills & Tools
          </span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-lg neon-border hover:scale-105 transition-transform animate-slide-up group gothic-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-lg ${
                      category.color === "text-accent"
                        ? "bg-accent/20"
                        : category.color === "text-primary"
                          ? "bg-primary/20"
                          : category.color === "text-coral"
                            ? "bg-coral/20"
                            : "bg-electric/20"
                    } group-hover:scale-110 transition-transform`}
                  >
                    <category.icon
                      className={`h-8 w-8 ${
                        category.color === "text-accent"
                          ? "text-accent"
                          : category.color === "text-primary"
                            ? "text-primary"
                            : category.color === "text-coral"
                              ? "text-coral"
                              : "text-electric"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold ml-3 gothic-title">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <span className="text-foreground font-medium">
                        {skill}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < 4 ? "bg-primary" : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured achievements */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 glass-card p-6 rounded-lg gothic-border">
              <div className="text-center">
                <div className="text-3xl font-bold glow-text gothic-title">
                  Full-Stack
                </div>
                <div className="text-sm text-muted-foreground">Development</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold glow-text gothic-title">
                  UI/UX
                </div>
                <div className="text-sm text-muted-foreground">
                  Design Expert
                </div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold glow-text gothic-title">
                  AWS
                </div>
                <div className="text-sm text-muted-foreground">
                  Cloud Skills
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary/20 rounded-full animate-float" />
      <div
        className="absolute bottom-1/4 right-10 w-16 h-16 border border-accent/20 rotate-45 animate-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
};

export default Skills;

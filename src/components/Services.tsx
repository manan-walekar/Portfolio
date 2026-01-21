import { Code, Monitor, Cloud, Palette } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "Building responsive web applications using React.js, Node.js, Express.js, and MongoDB. RESTful API development and seamless frontend-backend integration.",
    features: [
      "React.js Applications",
      "Node.js Backend",
      "RESTful APIs",
      "MongoDB Integration",
      "Responsive Design",
    ],
    color: "primary",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces for web applications, mobile apps, and enterprise dashboards with focus on user experience using Figma.",
    features: [
      "Web & App Design",
      "Wireframing",
      "Prototyping",
      "User Research",
      "High-Fidelity Designs",
    ],
    color: "accent",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description:
      "Deploying and managing applications on cloud platforms including AWS (EC2) and GoDaddy. Experience with scalable application architecture.",
    features: [
      "AWS EC2",
      "Cloud Deployment",
      "Application Hosting",
      "Version Control",
      "CI/CD Basics",
    ],
    color: "coral",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Creating compelling visual content including posters, social media graphics, banners, and promotional materials using Canva and Adobe tools.",
    features: [
      "Poster Design",
      "Social Media Graphics",
      "Brand Identity",
      "Typography",
      "Digital Content",
    ],
    color: "electric",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16 text-center gothic-title">
          <span className="glow-text scribble-underline gothic-ornament">
            Services
          </span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-lg neon-border hover:scale-105 transition-all duration-500 group animate-slide-up gothic-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`p-4 rounded-lg ${
                      service.color === "accent"
                        ? "bg-accent/20"
                        : service.color === "primary"
                          ? "bg-primary/20"
                          : service.color === "coral"
                            ? "bg-coral/20"
                            : "bg-electric/20"
                    } group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    <service.icon
                      className={`h-8 w-8 ${
                        service.color === "accent"
                          ? "text-accent"
                          : service.color === "primary"
                            ? "text-primary"
                            : service.color === "coral"
                              ? "text-coral"
                              : "text-electric"
                      }`}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors gothic-title">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground mb-3 gothic-title">
                        What I Offer:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                service.color === "accent"
                                  ? "bg-accent"
                                  : service.color === "primary"
                                    ? "bg-primary"
                                    : service.color === "coral"
                                      ? "bg-coral"
                                      : "bg-electric"
                              }`}
                            />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <div className="glass-card p-8 rounded-lg max-w-2xl mx-auto gothic-border">
              <h3 className="text-2xl font-bold mb-4 gothic-title">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to bring your creative vision to life. Whether
                it's development, design, or cloud deployment, I'm here to help
                you achieve your goals.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors neon-border gothic-title"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/3 right-20 w-28 h-28 border border-primary/10 rounded-full animate-float" />
      <div
        className="absolute bottom-1/3 left-20 w-20 h-20 border border-accent/10 rotate-45 animate-float"
        style={{ animationDelay: "3s" }}
      />
    </section>
  );
};

export default Services;

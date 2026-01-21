import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import mananProfile from "@/assets/manan-profile.png";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-float" />
      <div
        className="absolute top-40 right-20 w-6 h-6 border-2 border-primary rotate-45 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-8 h-8 border-2 border-accent rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Profile Photo above name */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={mananProfile}
                alt="Manan Walekar"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary shadow-glow animate-glow-pulse object-cover"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight gothic-title">
            <span className="block text-foreground gothic-ornament">MANAN</span>
            <span className="block glow-text scribble-underline">WALEKAR</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto gothic-title">
            Software Engineer & UI/UX Designer
          </p>
          <p className="text-base sm:text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
            Building practical, user-friendly applications with full-stack
            development expertise
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToWork}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold gothic-border group gothic-title"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/manan-walekar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 transition-transform gothic-border"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/manan-walekar-36114a254/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 transition-transform gothic-border"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:Manan.walekar0404@gmail.com"
              className="p-3 glass-card rounded-full hover:scale-110 transition-transform gothic-border"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary rounded-full animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-64 h-64 border border-accent rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>
    </section>
  );
};

export default Hero;

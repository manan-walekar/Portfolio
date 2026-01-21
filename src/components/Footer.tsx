import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold glow-text mb-2 gothic-title">
              Manan Walekar
            </div>
            <p className="text-muted-foreground gothic-title">
              Designing the future, one pixel at a time.
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/manan-walekar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 transition-transform neon-border"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/manan-walekar-36114a254/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 transition-transform neon-border"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:Manan.walekar0404@gmail.com"
              className="p-3 glass-card rounded-full hover:scale-110 transition-transform neon-border"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2"></p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Manan Walekar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

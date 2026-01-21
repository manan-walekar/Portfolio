import { GraduationCap, Heart, Target, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center gothic-title">
            <span className="glow-text scribble-underline gothic-ornament">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-lg gothic-border parchment-texture">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold gothic-title">
                    Education
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  <strong>B.Tech in Computer Engineering (SE)</strong>
                  <br />
                  SAGE University, Indore
                  <br />
                  2022 - 2026
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Higher Secondary Education - Maharaja Yashwantrao School,
                  Indore (2022)
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg gothic-border parchment-texture">
                <div className="flex items-center mb-4">
                  <Heart className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-xl font-semibold gothic-title">
                    Passion
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Entry-level Software Engineer passionate about building
                  practical and user-friendly applications. Experienced in
                  full-stack development, UI/UX design, and cloud technologies.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 rounded-lg gothic-border parchment-texture">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold gothic-title">
                    Expertise
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Hands-on experience with Python, Java, JavaScript, SQL, and
                  AWS. Comfortable working on real-world projects, collaborating
                  with teams, and learning new technologies to deliver efficient
                  and scalable solutions.
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg parchment-texture">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold gothic-title">
                    Summary
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Full-stack developer with expertise in React.js, Node.js,
                  Express.js, and MongoDB. Skilled in UI/UX design with Figma
                  and cloud deployment using AWS. Currently a final year student
                  at SAGE University.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-primary/20 rounded-full animate-float" />
      <div
        className="absolute bottom-10 left-10 w-24 h-24 border border-accent/20 rotate-45 animate-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
};

export default About;

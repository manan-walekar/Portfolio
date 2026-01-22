import { useState, useCallback, lazy, Suspense } from "react";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

// ✅ Vite-safe lazy import
const PixelTrail = lazy(() => import("@/components/PixelTrail"));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen animate-fade-in relative">
      {/* ✅ Lazy-loaded background effect */}
      {/* <Suspense fallback={null}>
        <PixelTrail
          gridSize={20}
          trailSize={0.1}
          maxAge={100}
          interpolate={4}
          color="#5227FF"
          gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
          className="opacity-70"
        />
      </Suspense> */}

      <Navigation />

      <div id="home">
        <Hero />
      </div>

      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};


export default Index;

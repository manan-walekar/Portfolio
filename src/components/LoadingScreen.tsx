import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden">
      {/* Prism container */}
      <div className="relative flex flex-col items-center">
        {/* 3D Prism */}
        <div className="prism-container mb-12">
          <div className="prism">
            <div className="prism-face prism-front"></div>
            <div className="prism-face prism-back"></div>
            <div className="prism-face prism-left"></div>
            <div className="prism-face prism-right"></div>
            <div className="prism-face prism-bottom"></div>
          </div>
        </div>

        {/* Light beams */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="light-beam beam-1"></div>
          <div className="light-beam beam-2"></div>
          <div className="light-beam beam-3"></div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold gothic-title mb-4 glow-text">
            PREPARING MY ENVIORNMENT...
          </h2>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-muted-foreground mt-4 text-sm gothic-title">
            {progress < 100 ? "Loading..." : "Welcome"}
          </p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        .prism-container {
          perspective: 500px;
          width: 100px;
          height: 120px;
        }

        .prism {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: prism-rotate 4s ease-in-out infinite;
        }

        .prism-face {
          position: absolute;
          border: 2px solid hsl(var(--primary) / 0.5);
          background: linear-gradient(
            135deg,
            hsl(var(--primary) / 0.1) 0%,
            hsl(var(--primary) / 0.05) 50%,
            transparent 100%
          );
          backdrop-filter: blur(2px);
        }

        .prism-front {
          width: 0;
          height: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          border-bottom: 86px solid hsl(var(--primary) / 0.15);
          background: none;
          transform: translateZ(30px);
          border-top: none;
        }

        .prism-back {
          width: 0;
          height: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          border-bottom: 86px solid hsl(var(--primary) / 0.1);
          background: none;
          transform: translateZ(-30px) rotateY(180deg);
          border-top: none;
        }

        .prism-left {
          width: 60px;
          height: 86px;
          left: -5px;
          transform: rotateY(-90deg) translateZ(25px);
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
        }

        .prism-right {
          width: 60px;
          height: 86px;
          right: -5px;
          transform: rotateY(90deg) translateZ(25px);
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
        }

        .prism-bottom {
          width: 100px;
          height: 60px;
          bottom: 0;
          transform: rotateX(-90deg) translateZ(43px);
        }

        @keyframes prism-rotate {
          0%, 100% {
            transform: rotateY(0deg) rotateX(15deg);
          }
          50% {
            transform: rotateY(180deg) rotateX(15deg);
          }
        }

        .light-beam {
          position: absolute;
          width: 2px;
          height: 150px;
          background: linear-gradient(to bottom, transparent, hsl(var(--primary) / 0.3), transparent);
          transform-origin: top center;
          animation: beam-pulse 2s ease-in-out infinite;
        }

        .beam-1 {
          transform: rotate(-30deg) translateX(-40px);
          animation-delay: 0s;
        }

        .beam-2 {
          transform: rotate(0deg);
          animation-delay: 0.3s;
        }

        .beam-3 {
          transform: rotate(30deg) translateX(40px);
          animation-delay: 0.6s;
        }

        @keyframes beam-pulse {
          0%, 100% {
            opacity: 0.3;
            height: 100px;
          }
          50% {
            opacity: 0.8;
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;

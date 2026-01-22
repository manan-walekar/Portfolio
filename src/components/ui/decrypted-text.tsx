import React, { useEffect, useRef, useState } from "react";

type DecryptedTextProps = {
  text: string;
  scrambleInterval?: number; // ms for scramble updates
  revealInterval?: number; // ms between revealing next character
  className?: string;
};

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>/?";

export default function DecryptedText({
  text,
  scrambleInterval = 80,
  revealInterval = 300,
  initialDelay = 800,
  className,
}: DecryptedTextProps) {
  const [reveal, setReveal] = useState(0);
  const [display, setDisplay] = useState(() => text.replace(/./g, " "));
  const raf = useRef<number | null>(null);
  const revealRef = useRef<number>(0);
  const revealIntervalId = useRef<number | null>(null);
  const scrambleIntervalId = useRef<number | null>(null);
  const startTimeout = useRef<number | null>(null);

  useEffect(() => {
    // reset state when text changes
    setReveal(0);
    revealRef.current = 0;
    setDisplay(text.replace(/./g, " "));

    const scramble = () => {
      setDisplay(
        text
          .split("")
          .map((ch, i) =>
            i < revealRef.current
              ? ch
              : CHARS[Math.floor(Math.random() * CHARS.length)],
          )
          .join(""),
      );
    };

    // start after an initial delay to make the effect slower/longer
    startTimeout.current = window.setTimeout(() => {
      if (scrambleInterval && scrambleInterval > 0) {
        scrambleIntervalId.current = window.setInterval(
          scramble,
          scrambleInterval,
        );
        scramble();
      } else {
        const loop = () => {
          scramble();
          if (revealRef.current < text.length)
            raf.current = requestAnimationFrame(loop);
        };
        raf.current = requestAnimationFrame(loop);
      }

      // reveal timer steps through characters slowly
      revealIntervalId.current = window.setInterval(() => {
        revealRef.current += 1;
        setReveal(revealRef.current);

        if (revealRef.current >= text.length) {
          // fully revealed: stop timers and set exact text
          if (revealIntervalId.current) {
            clearInterval(revealIntervalId.current);
            revealIntervalId.current = null;
          }
          if (scrambleIntervalId.current) {
            clearInterval(scrambleIntervalId.current);
            scrambleIntervalId.current = null;
          }
          if (raf.current) {
            cancelAnimationFrame(raf.current);
            raf.current = null;
          }
          setDisplay(text);
        }
      }, revealInterval);
    }, initialDelay);

    return () => {
      if (startTimeout.current) {
        clearTimeout(startTimeout.current);
        startTimeout.current = null;
      }
      if (raf.current) cancelAnimationFrame(raf.current);
      if (revealIntervalId.current) clearInterval(revealIntervalId.current);
      if (scrambleIntervalId.current) clearInterval(scrambleIntervalId.current);
      revealIntervalId.current = null;
      scrambleIntervalId.current = null;
    };
  }, [text, revealInterval, scrambleInterval, initialDelay]);

  return (
    <span className={className} aria-label={text} data-decrypted>
      {display}
    </span>
  );
}

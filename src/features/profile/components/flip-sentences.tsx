"use client";

import { AnimatePresence, m } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export function FlipSentences({
  className,
  sentences,
}: {
  className?: string;
  sentences: string[];
}) {
  const [currentSentence, setCurrentSentence] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startAnimation = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSentence((prev) => (prev + 1) % sentences.length);
      }, 2500);
    };

    startAnimation();

    const abortController = new AbortController();
    const { signal } = abortController;

    document.addEventListener(
      "visibilitychange",
      () => {
        if (document.visibilityState !== "visible" && intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        } else if (document.visibilityState === "visible") {
          setCurrentSentence((prev) => (prev + 1) % sentences.length);
          startAnimation();
        }
      },
      { signal }
    );

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      abortController.abort();
    };
  }, [sentences]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <m.p
        key={`current-sentence-${currentSentence}`}
        className={cn(
          "font-mono text-sm text-balance text-muted-foreground select-none",
          className
        )}
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -8, opacity: 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
      >
        {sentences[currentSentence]}
      </m.p>
    </AnimatePresence>
  );
}

"use client";

import type { LottieComponentProps } from "lottie-react";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

import readingAnimation from "@/animations/reading.json";
import sleepAnimation from "@/animations/sleep.json";
import typingAnimation from "@/animations/typing.json";
import { cn } from "@/lib/utils";

type TimeRange = [number, number];
type LottieAnimation = LottieComponentProps["animationData"];

interface AnimationConfig {
  animation: LottieAnimation;
  class: string;
}

interface DynamicHeroAnimationProps {
  readingTimes?: TimeRange[];
  sleepTimes?: TimeRange[];
  timeZone?: string;
  className?: string;
  id?: string;
  forceAnimation?: "reading" | "sleep" | "typing";
}

const animationConfig: Record<"reading" | "sleep" | "typing", AnimationConfig> =
  {
    reading: { animation: readingAnimation, class: "translate-y-6" },
    sleep: {
      animation: sleepAnimation,
      class: "translate-y-28 lg:translate-y-36",
    },
    typing: { animation: typingAnimation, class: "translate-y-6" },
  };

export default function DynamicHeroAnimation({
  readingTimes = [
    [6, 8],
    [12, 13],
    [17, 18],
    [19, 20],
  ],
  sleepTimes = [
    [22, 24],
    [0, 6],
  ],
  timeZone = "Asia/Kolkata",
  className = "",
  id = "js-hero-animation",
  forceAnimation,
}: DynamicHeroAnimationProps) {
  const [animation, setAnimation] = useState<LottieAnimation>(typingAnimation);
  const [loading, setLoading] = useState(true);
  const [defaultClassName, setDefaultClassName] = useState(
    "absolute bottom-0 left-1/2 origin-bottom -translate-x-1/2 scale-[2.5] sm:scale-[1.8] md:scale-[1.7]"
  );

  useEffect(() => {
    let selected = animationConfig.typing;

    if (forceAnimation) {
      selected = animationConfig[forceAnimation];
    } else {
      const now = new Date();
      const hour = Number(
        new Intl.DateTimeFormat("en-GB", {
          timeZone,
          hour: "numeric",
          hour12: false,
        }).format(now)
      );

      const inRange = (ranges: TimeRange[]) =>
        ranges.some(([start, end]) =>
          start <= end
            ? hour >= start && hour < end
            : hour >= start || hour < end
        );

      if (inRange(readingTimes)) {
        selected = animationConfig.reading;
      } else if (inRange(sleepTimes)) {
        selected = animationConfig.sleep;
      }
    }

    setAnimation(selected.animation);
    setDefaultClassName(
      `absolute left-1/2 origin-bottom -translate-x-1/2 
       scale-[2.5] sm:scale-[1.7] md:scale-[1.7] ${selected.class}`
    );
  }, [readingTimes, sleepTimes, timeZone, forceAnimation]);

  // 🔹 Loading dots animation
  const dotRevolution1 = {
    animation: "dotRevolution 1.4s linear infinite",
    transformOrigin: "5px 20px",
  };
  const dotRevolution2 = {
    animation: "dotRevolution 1s linear infinite",
    transformOrigin: "5px 35px",
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {loading && (
        <div className="relative h-[10px] w-[10px]">
          <div className="absolute h-[10px] w-[10px] rounded-full bg-gray-200"></div>
          <div
            className="absolute h-[10px] w-[10px] rounded-full bg-gray-200"
            style={{ ...dotRevolution1, top: "-15px", left: 0 }}
          ></div>
          <div
            className="absolute h-[10px] w-[10px] rounded-full bg-gray-200"
            style={{ ...dotRevolution2, top: "-30px", left: 0 }}
          ></div>
        </div>
      )}

      <Lottie
        animationData={animation}
        id={id}
        loop
        className={cn(
          defaultClassName,
          className,
          loading ? "hidden" : "block"
        )}
        onDOMLoaded={() => setLoading(false)}
      />

      <style>
        {`
          @keyframes dotRevolution {
            0% { transform: rotateZ(0deg) translate3d(0,0,0); }
            100% { transform: rotateZ(360deg) translate3d(0,0,0); }
          }
        `}
      </style>
    </div>
  );
}

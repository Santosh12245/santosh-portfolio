"use client";

import type { JSX } from "react";
import { useState } from "react";

import DynamicHeroAnimation from "@/components/DynamicHeroAnimation";

// Define allowed animation types
type AnimationType = "typing" | "sleep" | "reading";

export default function NotFound(): JSX.Element {
  const [animation, setAnimation] = useState<AnimationType>("typing");

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-6 overflow-hidden bg-gray-100">
      {/* Animation */}
      <DynamicHeroAnimation forceAnimation={animation} />

      {/* Buttons */}
      <div className="absolute top-4 flex space-x-4">
        <button
          onClick={() => setAnimation("typing")}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
        >
          Typing
        </button>
        <button
          onClick={() => setAnimation("sleep")}
          className="rounded-lg bg-green-600 px-4 py-2 text-white shadow hover:bg-green-700"
        >
          Sleep
        </button>
        <button
          onClick={() => setAnimation("reading")}
          className="rounded-lg bg-purple-600 px-4 py-2 text-white shadow hover:bg-purple-700"
        >
          Reading
        </button>
      </div>
    </div>
  );
}

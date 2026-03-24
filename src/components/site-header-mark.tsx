"use client";

// import { useMotionValueEvent, useScroll } from "motion/react";
// import * as motion from "motion/react-m";
// import { usePathname } from "next/navigation";

// import { useEffect, useRef, useState } from "react";
import { LogoMark } from "./logo-mark";

export function SiteHeaderMark() {
  // const pathname = usePathname();
  // return pathname === "/" ? <LogoMarkMotion /> : <LogoMark />;
  return <LogoMark />;
}

// function LogoMarkMotion() {
//   const { scrollY } = useScroll();
//   const [visible, setVisible] = useState(false);
//   const distanceRef = useRef(160);

//   useMotionValueEvent(scrollY, "change", (latestValue) => {
//     setVisible(latestValue >= distanceRef.current);
//   });

//   useEffect(() => {
//     const coverMark = document.getElementById("js-cover-mark");
//     if (!coverMark) return;

//     distanceRef.current = calcDistance(coverMark);

//     const resizeObserver = new ResizeObserver(() => {
//       distanceRef.current = calcDistance(coverMark);
//     });
//     resizeObserver.observe(coverMark);

//     return () => {
//       resizeObserver.disconnect();
//     };
//   }, []);

//   return (
//     <motion.svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 512 256"
//       initial={{
//         opacity: 0,
//         transform: "translateY(8px)",
//       }}
//       animate={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateY(0px)" : "translateY(8px)",
//       }}
//       transition={{ duration: 0.3 }}
//     >
//       <path
//         d="M192 256H64v-64h128v64Z M64 192H0V64h64v128Z M192 64H64V0h128v64Z M448 64h-128v64h128v64h-128V0h128v64Z M320 256h-64V0h64v256Z M512 64h-64v64h64V64Z"
//         fill="currentColor"
//       />
//     </motion.svg>
//   );
// }

// const calcDistance = (el: HTMLElement) => {
//   const rect = el.getBoundingClientRect();
//   const scrollTop = document.documentElement.scrollTop;
//   const headerHeight = 56;
//   return scrollTop + rect.top + rect.height - headerHeight;
// };

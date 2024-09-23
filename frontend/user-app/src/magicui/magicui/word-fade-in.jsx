"use client";
import { motion } from "framer-motion";

// Function to combine class names, replacing the cn function
const combineClassNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export default function WordFadeIn({
  words = "",
  delay = 0.5,
  variants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className = "",
  isPrimary = false // Added prop to distinguish between primary and secondary text
}) {
  const _words = words.split(" ");

  // Determine font size based on the `isPrimary` prop
  const textSize = isPrimary ? "text-2xl md:text-4xl lg:text-5xl" : "text-sm md:text-base lg:text-lg";

  // Combine base classes with additional classes
  const combinedClassName = combineClassNames(
    "font-display",
    "text-center",
    textSize, // Apply text size based on the `isPrimary` prop
    "font-bold",
    "tracking-[-0.02em]",
    "drop-shadow-sm",
    "dark:text-white",
    "text-black",
    className
  );

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      className={combinedClassName}
    >
      {_words.map((word, i) => (
        <motion.span key={i} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}

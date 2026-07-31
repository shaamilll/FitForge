import React from "react";
import { motion } from "framer-motion";
import Button from "../Buttons/Button";
import HeroImagePlaceholder from "./HeroImagePlaceholder";

// Defining animation variants outside the component means they're
// created once, not re-created on every render. Each child fades in
// and slides up slightly, staggered one after another for a smooth
// "cascading" entrance instead of everything popping in at once.
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// The image gets its own slide-in-from-the-side animation, since it
// enters the screen differently than the stacked text on the left.
const imageVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/**
 * Hero
 * The first section visitors see: brand statement, two CTAs, and a
 * large product image. Two columns on desktop, stacked on mobile.
 *
 * Why it exists:
 * Per the Component Order, Hero comes right after the Navbar. It's
 * job is purely to make a strong first impression and route people
 * toward the collection via a single primary CTA — no product data
 * or logic lives here, just presentation.
 */
const Hero = () => {
  return (
    <section
      aria-label="Hero"
      className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column: text content + CTAs.
            motion.div + variants + "animate on mount" (whileInView
            could be used instead if this weren't the very first
            thing visible on page load). */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500"
          >
            New Collection
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl"
          >
            Train Harder.
            <br />
            Look <span className="text-orange-500">Sharper.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-md text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            Performance apparel engineered for movement, built for
            everyday life. Discover the collection made to keep up with
            you.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Single primary CTA. No onClick/href yet — this will be
                wired to the /shop route once React Router is added. */}
            <Button variant="primary">Shop Collection</Button>
          </motion.div>
        </motion.div>

        {/* Right column: hero image placeholder */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <HeroImagePlaceholder label="FitForge Apparel" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

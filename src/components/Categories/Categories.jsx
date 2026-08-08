import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { CATEGORIES } from "../../constants/categories";

// Same stagger pattern used in the Hero: the parent controls timing,
// each child just declares its own hidden/visible state.
const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/**
 * Categories
 * "Featured Categories" section, placed directly below the Hero.
 * Shows a heading, subtitle, and a responsive grid of CategoryCards.
 *
 * Why it exists:
 * Per the Component Order, this is the next step after Hero — it
 * gives visitors quick entry points into the catalog (Men, Women,
 * Accessories, New Arrivals) before any real product data exists.
 *
 * Animation note:
 * Unlike the Hero (which animates on page load), this section is
 * further down the page, so it uses `whileInView` — the cards only
 * animate in once the user scrolls to them, not immediately on load.
 * `viewport={{ once: true }}` means the animation plays once and
 * doesn't replay every time the user scrolls back up/down past it.
 */
const Categories = () => {
  return (
    <section
      aria-labelledby="categories-heading"
      className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"
    >
      <div className="mb-12 flex flex-col items-start gap-3">
        <h2
          id="categories-heading"
          className="text-3xl font-bold tracking-tight text-black sm:text-4xl"
        >
          Shop by Category
        </h2>
        <p className="max-w-md text-base text-gray-600">
          Find your fit, wherever you train.
        </p>
      </div>

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {CATEGORIES.map((category) => (
          <motion.div key={category.id} variants={cardVariants}>
            <CategoryCard
              name={category.name}
              description={category.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Categories;

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiImage } from "react-icons/fi";

/**
 * CategoryCard
 * A single category tile (Men, Women, Accessories, New Arrivals).
 *
 * Why it exists:
 * The Categories section renders four of these, each with the same
 * shape: image, name, description, "Shop Now" CTA, and a hover
 * animation. Pulling this into one reusable component means the grid
 * in Categories.jsx just maps over data and renders this — no
 * duplicated markup for four near-identical cards.
 *
 * Props:
 * - name:        category name, e.g. "Men"
 * - description: one-line supporting text
 * - onClick:     handler for the "Shop Now" CTA (wired up later once
 *                routing exists)
 */
const CategoryCard = ({ name, description, onClick }) => {
  return (
    // whileHover lets Framer Motion animate scale/elevation purely on
    // hover, without needing separate mouse-enter/leave state.
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image placeholder: same "gradient + icon" pattern used in the
          Hero, kept local here since it's small and specific to a card. */}
      <div
        role="img"
        aria-label={`${name} category placeholder image`}
        className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      >
        <FiImage className="text-4xl text-gray-500 transition-transform duration-300 group-hover:scale-110" />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-lg font-bold text-black">{name}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>

        <button
          type="button"
          onClick={onClick}
          className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-black transition-colors duration-300 hover:text-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm"
        >
          Shop Now
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
};

export default CategoryCard;

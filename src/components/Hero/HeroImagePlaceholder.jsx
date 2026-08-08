import React from "react";
import { FiImage } from "react-icons/fi";

/**
 * HeroImagePlaceholder
 * A temporary stand-in for the real hero product photo.
 *
 * Why it exists:
 * No real image asset has been added to assets/images yet. Rather
 * than hardcoding a broken <img src="..."> path, this component
 * renders a styled placeholder (a gradient panel with an icon) so
 * the layout, spacing, and responsiveness can all be built and
 * tested now. Later, swap the contents of this file for a real
 * <img> tag — nothing in Hero.jsx will need to change, since it just
 * renders <HeroImagePlaceholder />.
 *
 * Props:
 * - label: small caption shown under the icon (optional)
 */
const HeroImagePlaceholder = ({ label = "Hero Image" }) => {
  return (
    <div
      role="img"
      aria-label="FitForge hero placeholder image"
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black aspect-[4/5] max-h-[560px]"
    >
      {/* Subtle orange glow in the corner for brand accent, purely decorative */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-orange-500/30 blur-3xl"
      />

      <div className="flex flex-col items-center gap-3 text-gray-400">
        <FiImage className="text-6xl" />
        <span className="text-xs font-medium uppercase tracking-widest">
          {label}
        </span>
      </div>
    </div>
  );
};

export default HeroImagePlaceholder;

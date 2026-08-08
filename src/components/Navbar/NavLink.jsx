import React from "react";

/**
 * NavLink
 * A single reusable navigation link.
 *
 * Why it exists:
 * The Navbar needs the same link "shape" (text + active state + hover
 * animation) in two places: the desktop menu and the mobile drawer.
 * Instead of writing that markup twice, we pull it into one small
 * component and reuse it. This is the "reusable component" principle
 * from the project rules — one source of truth, no duplicated code.
 *
 * Props:
 * - label:     the text shown to the user (e.g. "Home")
 * - isActive:  boolean, true if this is the currently selected page
 * - onClick:   function to run when the link is clicked
 * - variant:   "desktop" | "mobile" — lets us tweak spacing/size per context
 */
const NavLink = ({ label, isActive, onClick, variant = "desktop" }) => {
  const baseClasses =
    "relative font-medium tracking-wide transition-colors duration-300 outline-none";

  // Different sizing for desktop (inline menu) vs mobile (stacked drawer)
  const variantClasses =
    variant === "desktop" ? "text-sm py-2" : "text-2xl py-3";

  // Active link is orange (accent color). Inactive is dark gray,
  // and turns black on hover as a subtle hover animation.
  const colorClasses = isActive
    ? "text-orange-500"
    : "text-gray-700 hover:text-black focus-visible:text-black";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`${baseClasses} ${variantClasses} ${colorClasses} focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-sm`}
    >
      {label}

      {/* Animated underline: only rendered under the active link.
          It's a simple absolutely-positioned bar under the text. */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 ${
          isActive ? "w-full" : "w-0"
        }`}
      />
    </button>
  );
};

export default NavLink;

import React from "react";

/**
 * IconButton
 * A small reusable button that wraps a single icon.
 *
 * Why it exists:
 * The Navbar needs four icon buttons (search, wishlist, cart, user).
 * They all share the same size, hover animation, and accessibility
 * behavior. Rather than repeating that markup four times, we describe
 * it once here and pass in the icon + label as props.
 *
 * Props:
 * - icon:        the icon element to render (from react-icons)
 * - label:       accessible name, e.g. "Search" (used for aria-label)
 * - onClick:     optional click handler
 * - badgeCount:  optional number shown as a small badge (e.g. cart items)
 */
const IconButton = ({ icon, label, onClick, badgeCount }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="relative p-2 text-gray-800 hover:text-orange-500 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-full"
    >
      <span className="text-xl block transition-transform duration-300 hover:scale-110">
        {icon}
      </span>

      {/* Badge (e.g. "2" items in cart). Only renders if a count is passed. */}
      {badgeCount > 0 && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-semibold text-white">
          {badgeCount}
        </span>
      )}
    </button>
  );
};

export default IconButton;

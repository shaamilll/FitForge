import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import NavLink from "./NavLink";

/**
 * MobileDrawer
 * The slide-out menu shown on small screens when the hamburger icon
 * is tapped.
 *
 * Why it exists:
 * On mobile there isn't enough horizontal space for the full link
 * list, so we hide it behind a hamburger icon and reveal it in a
 * full-height drawer that slides in from the right. Keeping this in
 * its own file keeps Navbar.jsx focused on layout, not animation
 * details.
 *
 * Props:
 * - isOpen:     boolean, whether the drawer is visible
 * - onClose:    function to close the drawer
 * - navItems:   array of { label } objects to render as links
 * - activeLink: the currently active link label
 * - setActiveLink: function to update the active link
 */
const MobileDrawer = ({
  isOpen,
  onClose,
  navItems,
  activeLink,
  setActiveLink,
}) => {
  const handleLinkClick = (label) => {
    setActiveLink(label);
    onClose();
  };

  return (
    // AnimatePresence lets Framer Motion animate a component OUT
    // before it's removed from the DOM (normally React would just
    // delete it instantly).
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop: dims the page behind the drawer and closes it on click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
            aria-hidden="true"
          />

          {/* The drawer panel itself, slides in from the right */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 text-gray-800 hover:text-orange-500 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-full"
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            <nav className="flex flex-col items-start gap-2 px-8 mt-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  label={item.label}
                  isActive={activeLink === item.label}
                  onClick={() => handleLinkClick(item.label)}
                  variant="mobile"
                />
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;

import React, { useState, useEffect } from "react";
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiMenu } from "react-icons/fi";
import NavLink from "./NavLink";
import IconButton from "./IconButton";
import MobileDrawer from "./MobileDrawer";

// The nav items live in one array so both the desktop menu and the
// mobile drawer render from the same source of truth. Add or remove
// a page here and both menus update automatically.
const NAV_ITEMS = [
  { label: "Home" },
  { label: "Shop" },
  { label: "Men" },
  { label: "Women" },
  { label: "Collections" },
  { label: "About" },
];

/**
 * Navbar
 * The site-wide top navigation. Sticky, shows a shadow once the user
 * scrolls, highlights the active page, and swaps to a hamburger +
 * slide-out drawer on small screens.
 *
 * State:
 * - isScrolled:  tracks whether the page has been scrolled, so we can
 *                add a shadow (a purely visual, non-interactive state)
 * - isDrawerOpen: whether the mobile drawer is currently open
 * - activeLink:   which nav item is currently "selected"
 *
 * Note on "activeLink": routing (React Router) hasn't been built yet
 * per the project plan, so for now this is local state defaulting to
 * "Home". Once routing exists, this will be swapped for
 * `useLocation()` so the active link reflects the real URL.
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // useEffect + scroll listener: this runs once on mount, attaches a
  // "scroll" listener to the window, and cleans it up when the
  // component unmounts (the returned function). We only flip
  // isScrolled when it actually changes, to avoid unnecessary re-renders.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo - placeholder text for now, swap for a logo image/SVG later */}
        <a
          href="/"
          className="text-2xl font-bold tracking-tight text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm"
          onClick={() => setActiveLink("Home")}
        >
          FIT<span className="text-orange-500">FORGE</span>
        </a>

        {/* Desktop nav links - hidden below the lg breakpoint */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-8"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              isActive={activeLink === item.label}
              onClick={() => setActiveLink(item.label)}
              variant="desktop"
            />
          ))}
        </nav>

        {/* Right side icons - always visible */}
        <div className="flex items-center gap-1">
          <div className="hidden sm:flex items-center gap-1">
            <IconButton icon={<FiSearch />} label="Search" />
            <IconButton icon={<FiHeart />} label="Wishlist" />
            <IconButton icon={<FiShoppingBag />} label="Cart" badgeCount={0} />
            <IconButton icon={<FiUser />} label="Account" />
          </div>

          {/* Hamburger button - only shown below the lg breakpoint */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open menu"
            className="lg:hidden p-2 text-gray-800 hover:text-orange-500 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-full"
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile drawer lives outside the flex row above since it's
          positioned "fixed" and overlays the whole screen. */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        navItems={NAV_ITEMS}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
    </header>
  );
};

export default Navbar;

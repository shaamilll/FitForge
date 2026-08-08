import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiMenu,
} from "react-icons/fi";
import NavLink from "./NavLink";
import IconButton from "./IconButton";
import MobileDrawer from "./MobileDrawer";

// The nav items live in one array so both the desktop menu and the
// mobile drawer render from the same source of truth. Add or remove
// a page here and both menus update automatically.
const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Men", path: "/men" },
  { label: "Women", path: "/women" },
  { label: "Collections", path: "/collections" },
  { label: "About", path: "/about" },
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect + scroll listener: this runs once on mount, attaches a
  // "scroll" listener to the window, and cleans it up when the
  // component unmounts (the returned function). We only flip
  // isScrolled when it actually changes, to avoid unnecessary re-renders.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const currentRoute = NAV_ITEMS.find(
      (item) => item.path === location.pathname,
    );
    if (currentRoute) {
      setActiveLink(currentRoute.label);
    } else {
      setActiveLink("Home");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-30 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        {/* Logo - placeholder text for now, swap for a logo image/SVG later */}
        <button
          type="button"
          className="text-2xl font-bold tracking-tight text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm"
          onClick={() => {
            setActiveLink("Home");
            navigate("/");
          }}
        >
          FIT<span className="text-orange-500">FORGE</span>
        </button>

        {/* Desktop nav links - hidden below the lg breakpoint */}
        <nav
          aria-label="Main navigation"
          className="hidden flex-1 justify-center lg:flex"
        >
          <div className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                label={item.label}
                isActive={activeLink === item.label}
                onClick={() => {
                  setActiveLink(item.label);
                  navigate(item.path);
                }}
                variant="desktop"
              />
            ))}
          </div>
        </nav>

        {/* Right side icons - always visible */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2.5 py-1.5 shadow-sm">
            <motion.div
              layout
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-center justify-end gap-1.5"
            >
              <AnimatePresence mode="wait">
                {isSearchOpen ? (
                  <motion.form
                    key="search-form"
                    initial={{ opacity: 0, width: 0, marginRight: 0 }}
                    animate={{ opacity: 1, width: 180, marginRight: 6 }}
                    exit={{ opacity: 0, width: 0, marginRight: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onSubmit={(event) => {
                      event.preventDefault();
                      const normalized = searchQuery.trim();
                      if (normalized) {
                        navigate(
                          `/shop?search=${encodeURIComponent(normalized)}`,
                        );
                      } else {
                        navigate("/shop");
                      }
                      setIsSearchOpen(false);
                    }}
                    className="flex items-center overflow-hidden rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 shadow-sm"
                  >
                    <FiSearch className="mr-2 shrink-0 text-gray-500" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search"
                      className="w-full border-0 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                      autoFocus
                    />
                  </motion.form>
                ) : null}
              </AnimatePresence>
              <IconButton
                icon={<FiSearch />}
                label="Search"
                onClick={() => setIsSearchOpen((open) => !open)}
              />
            </motion.div>
            <IconButton
              icon={<FiHeart />}
              label="Wishlist"
              onClick={() => navigate("/shop")}
            />
            <IconButton
              icon={<FiShoppingBag />}
              label="Cart"
              badgeCount={0}
              onClick={() => navigate("/shop")}
            />
            <IconButton
              icon={<FiUser />}
              label="Account"
              onClick={() => navigate("/about")}
            />
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

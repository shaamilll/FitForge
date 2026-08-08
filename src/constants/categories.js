/**
 * categories.js
 *
 * Why it exists:
 * The Categories section needs to loop over four categories to render
 * one card each. Instead of hardcoding that array inside a component
 * file (mixing data with UI), it lives here in /constants — matching
 * the project's existing folder structure, and separating "what the
 * data is" from "how it's displayed" (the same UI/logic separation
 * rule already used for the Navbar's NAV_ITEMS).
 *
 * If a category is added, renamed, or removed, this is the only file
 * that needs to change — Categories.jsx will pick it up automatically.
 */
export const CATEGORIES = [
  {
    id: "men",
    name: "Men",
    description: "Performance essentials built for daily training.",
  },
  {
    id: "women",
    name: "Women",
    description: "Sculpted fits designed to move with you.",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Bags, bottles, and gear to complete the kit.",
  },
  {
    id: "new-arrivals",
    name: "New Arrivals",
    description: "The latest drops, fresh off the line.",
  },
];

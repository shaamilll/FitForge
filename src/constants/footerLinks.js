// src/constants/footerLinks.js

// Centralized link data for the Footer.
// Keeping data separate from UI (Footer.jsx) makes it easy to update
// links later without touching component logic — and later this can
// be swapped for real route paths once React Router is added.

export const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "FAQs", href: "#" },
  ];
  
  export const shopLinks = [
    { label: "Men", href: "#" },
    { label: "Women", href: "#" },
    { label: "Accessories", href: "#" },
    { label: "New Arrivals", href: "#" },
  ];
  
  export const socialLinks = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ];
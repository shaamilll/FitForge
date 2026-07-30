import React from "react";

/**
 * Button
 * A reusable, styled button used anywhere the site needs a
 * call-to-action (Hero CTAs, product actions, forms, etc).
 *
 * Why it exists:
 * The Hero section needs two CTA buttons ("Shop Men" / "Shop Women")
 * that look different (one solid, one outlined) but share the same
 * size, rounded corners, and hover animation. Every future section
 * that needs a button (Product Card "Add to Cart", Newsletter
 * "Subscribe", etc.) can reuse this instead of writing new button
 * markup each time — this is the "reusable component, no duplicated
 * code" rule from the project.
 *
 * Props:
 * - children: button label/content
 * - variant:  "primary" | "secondary" — controls the visual style
 * - onClick:  optional click handler
 * - as:       "button" | "a" — renders a <button> or an <a>, since
 *             CTAs often need to be links once routing exists
 * - href:     used only when as="a"
 */
const Button = ({
  children,
  variant = "primary",
  onClick,
  as = "button",
  href,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2";

  // Primary = solid black, fills orange on hover (brand accent).
  // Secondary = outlined, fills black on hover. Two clear visual
  // hierarchies: "main action" vs "alternate action".
  const variantClasses =
    variant === "primary"
      ? "bg-black text-white hover:bg-orange-500"
      : "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white";

  const classes = `${baseClasses} ${variantClasses}`;

  if (as === "a") {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;

const FooterColumn = ({ title, links }) => {
  return (
    <nav aria-label={title}>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-forge-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: "#d4d4d8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff5a1f")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#d4d4d8")}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterColumn;

const FooterColumn = ({ title, links }) => {
    return (
      <nav aria-label={title}>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
          {title}
        </h3>
  
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
               className="text-sm text-white transition-colors duration-200 hover:text-orange-500"
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
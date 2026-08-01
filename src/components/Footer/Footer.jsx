// src/components/Footer/Footer.jsx

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import FooterColumn from "./FooterColumn";
import {
  quickLinks,
  shopLinks,
  socialLinks,
} from "../../constants/footerLinks";

// Maps each social link's label to its matching icon component.
const iconMap = {
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  Twitter: FaTwitter,
  YouTube: FaYoutube,
};

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-forge-black border-t border-forge-gray"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top grid: Brand + Link columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand block */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-forge-white">
              FIT<span className="text-orange-500">FORGE</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-forge-gray">
              Premium performance apparel engineered for movement.
              Built for those who train with purpose.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.label];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit FitForge on ${social.label}`}
                   className="flex h-9 w-9 items-center justify-center rounded-full border border-forge-gray text-forge-gray transition-all duration-300 hover:border-forge-accent hover:bg-forge-accent hover:text-forge-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn
            title="Quick Links"
            links={quickLinks}
          />

          {/* Shop Links */}
          <FooterColumn
            title="Shop"
            links={shopLinks}
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row">
          <p className="text-center text-xs text-gray-500 sm:text-left">
            &copy; {new Date().getFullYear()} FitForge. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Designed &amp; built as an independent portfolio project.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
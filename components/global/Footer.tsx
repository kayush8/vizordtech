import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { FOOTER_ROUTES, SOCIAL_ROUTES } from "@data/data";

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">
      <div className="content-wrapper">
        <div className="newsletters">
          <div className="header">
            <h3>Fuel for Thought</h3>
            <p>
              A casual hello from the 9to5Networks Crew filled with insights,
              inspiration, and good vibes only
            </p>
          </div>
          <div className="newletter__image"></div>
          <div className="newletter">
            <input type="text" placeholder="Email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="sitemap">
          {FOOTER_ROUTES.map(({ name, href }) => (
            <Link passHref href="#" key={name}>
              <a className="navigation-link">
                <motion.span initial={{ x: 0 }} whileHover={{ x: 10 }}>
                  {name}
                </motion.span>
              </a>
            </Link>
          ))}
          <div className="social-links">
            {SOCIAL_ROUTES.map(({ name, href, Icon }) => (
              <Link passHref href={href} target="_blank" key={name}>
                <a>
                  <Icon />
                </a>
              </Link>
            ))}
            <span>&copy; 9to5Networks{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

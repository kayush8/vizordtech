import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import navbarRoutes from "@data/routes";
import { circleVariants, navbarNavVariants } from "@animations/preloader";

const Navbar: React.FC = () => {
  return (
    <motion.header
      className="navbar"
      id="navbar"
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <img
          src="/9to5networks.png"
          height="55"
          width="auto"
          alt="9to5networks_logo"
        />
        <div className="navbar_nav">
          {navbarRoutes.map(({ name, href }, index) => (
            <Link href={href} passHref key={index}>
              <motion.a
                variants={navbarNavVariants}
                transition={{ delay: 1 + index * 0.3, duration: 1 }}
              >
                {name}
              </motion.a>
            </Link>
          ))}
          <Link href="/quote" passHref>
            <motion.a
              className="get_in_touch"
              variants={navbarNavVariants}
              transition={{ delay: 2.1, duration: 1 }}
            >
              Get Quotes
            </motion.a>
          </Link>
        </div>
      </div>
      <motion.div
        className="back_circle"
        variants={circleVariants}
        transition={{ stiffness: 120, delay: 1, duration: 0.8 }}
      ></motion.div>
    </motion.header>
  );
};

export default Navbar;

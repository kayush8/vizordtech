import React from "react";
import { motion } from "framer-motion";
import {
  logoContainerVariants,
  logoVariants,
  preloaderVariants,
} from "@animations/preloader";

const PreLoader: React.FC = () => {
  return (
    <motion.div
      className="preloader"
      variants={preloaderVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3 className="logo_text" variants={logoContainerVariants}>
        {["NINE", "TO", "FIVE"].map((word, index) => (
          <div key={index}>
            <motion.span
              variants={logoVariants}
              transition={{ duration: 1, delay: 0.15 * index }}
            >
              {word}
            </motion.span>
          </div>
        ))}
      </motion.h3>
    </motion.div>
  );
};

export default PreLoader;

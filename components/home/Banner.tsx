import React, { useEffect, useRef } from "react";
import styles from "@styles/home/Banner.module.scss";
import {
  StarIcon,
  SVGScrollArrow,
  SVGScrollDownIcon,
  SVGScrollDownText,
} from "@components/utility/Icons";
import { bannerData } from "@data/data";

import { motion, useInView } from "framer-motion";
import {
  bannerHeadingVariants,
  circleVariants,
  scrollArrowVariants,
  scrollCircleVariants,
  textVariants,
} from "@animations/preloader";

const Banner: React.FC = () => {
  const { heading, para1, para2 } = bannerData;
  const bannerRef = useRef<HTMLElement>(null);
  const isInView = useInView(bannerRef);

  return (
    <motion.section
      className={styles.banner}
      initial="hidden"
      animate={isInView && "visible"}
      id="banner"
      ref={bannerRef}
    >
      <div className={styles.container}>
        <div className={styles.heading_wrapper}>
          <div className={styles.row}>
            <motion.h1
              variants={bannerHeadingVariants}
              transition={{ delay: 0.55, duration: 1 }}
            >
              {heading[0]}
            </motion.h1>
            <motion.p transition={{ staggerChildren: 0.2 }}>
              {para1.map((line, index) => (
                <span key={index}>
                  <motion.span
                    variants={textVariants}
                    transition={{ duration: 1, delay: 2 + index * 0.2 }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.p>
            <StarIcon className={styles.star} />
          </div>
          <div className={styles.row}>
            <motion.h1
              variants={bannerHeadingVariants}
              transition={{ delay: 0.6, duration: 1.52 }}
            >
              {heading[1]}
            </motion.h1>
            <motion.h1
              variants={bannerHeadingVariants}
              transition={{ delay: 0.3, duration: 1.12 }}
            >
              {heading[2]}
            </motion.h1>
          </div>
          <div className={styles.row}>
            <motion.h1
              variants={bannerHeadingVariants}
              transition={{ delay: 0.5, duration: 1.23 }}
            >
              {heading[3]}
            </motion.h1>
          </div>
          <div className={styles.row}>
            <StarIcon className={styles.star} />
            <p>
              {para2.map((line, index) => (
                <span key={index}>
                  <motion.span
                    variants={textVariants}
                    transition={{ duration: 1, delay: 2 + index * 0.2 }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </p>
            <motion.h1
              variants={bannerHeadingVariants}
              transition={{ delay: 0.3, duration: 1.4 }}
            >
              {heading[4]}
            </motion.h1>
          </div>
        </div>
        <div className={styles.scroll_down}>
          <motion.div
            className={styles.scroll_circle}
            variants={scrollCircleVariants}
          >
            <SVGScrollDownIcon className={styles.icon_circles} />
            <SVGScrollDownText className="scrollText" />
          </motion.div>
          <motion.div
            className={styles.scroll_arrow}
            variants={scrollArrowVariants}
          >
            <SVGScrollArrow />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={circleVariants}
        transition={{ delay: 2, duration: 1 }}
        className={styles.back_circle}
      ></motion.div>
      <motion.div
        variants={circleVariants}
        transition={{ delay: 3, duration: 1 }}
        className={styles.back_circle}
      ></motion.div>
    </motion.section>
  );
};

export default Banner;

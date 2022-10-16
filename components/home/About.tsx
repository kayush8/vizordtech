import React, { useRef } from "react";
import Link from "next/link";
import ReadMoreBtn from "@components/custom/ReadMoreBtn";

import styles from "@styles/home/About.module.scss";
import { motion, useInView } from "framer-motion";
import {
  staggerChildrenVariants,
  staggerVariants,
} from "@animations/preloader";

const About: React.FC = () => {
  const inViewRef = useRef<HTMLElement>(null);
  const isInView = useInView(inViewRef);
  return (
    <motion.section
      className={styles.about}
      id="about"
      ref={inViewRef}
      initial="hidden"
      animate={isInView && "visible"}
    >
      <div className={styles.container}>
        <motion.div className={styles.about_wrapper} variants={staggerVariants}>
          <motion.h2 variants={staggerChildrenVariants}>
            We are committed to design memorable brands that tell engaging
            stories through concept-driven design solutions
          </motion.h2>
          <div className={styles.para_wrapper}>
            <motion.p variants={staggerChildrenVariants}>
              Have you ever thought about what makes some brands stand out?
              It&apos;s their definite sense of identity that connects perfectly
              with their target audience.
            </motion.p>
            <motion.p variants={staggerChildrenVariants}>
              That&apos;s why we help our clients define their unique identity
              and connect with their target audience in the most memorable way.
              If you want to learn about digital marketing you can also
              checkout:{" "}
              <a
                href="http://koahyn.rf.gd/2022/10/13/digital-marketing/"
                target="_blank"
                rel="noreferrer"
              >
                <a>Koahyn</a>
              </a>
            </motion.p>
          </div>
          <Link href="/" passHref>
            <motion.a variants={staggerChildrenVariants}>
              <ReadMoreBtn />
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

import React, { useRef } from "react";
import Link from "next/link";

import SectionHeading from "@components/custom/SectionHeading";
import { clients_list } from "@data/data";

import styles from "@styles/home/Client.module.scss";
import { motion, useInView } from "framer-motion";
import { staggerChildrenVariants } from "@animations/preloader";

const Clients: React.FC = () => {
  const inViewRef = useRef<HTMLElement>(null);
  const isInView = useInView(inViewRef);

  return (
    <motion.section
      className={styles.clients}
      id="#section"
      variants={staggerChildrenVariants}
      initial="hidden"
      animate={isInView && "visible"}
      ref={inViewRef}
    >
      <div className="container">
        <SectionHeading title1="Selected Clients" />
      </div>
      <div className={styles.clients_wrapper}>
        {clients_list.map(({ name, href, image }) => (
          <Link href={href} passHref key={name}>
            <a title={name}>
              <img src={image} alt={name} />
            </a>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default Clients;

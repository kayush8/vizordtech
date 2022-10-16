import React, { useRef } from "react";
import Link from "next/link";

import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

import styles from "@styles/home/Project.module.scss";
import { projects_list } from "@data/data";
import getRelativeCoordinates from "@components/utility/trackPosition";
import {
  staggerChildrenVariants,
  staggerVariants,
} from "@animations/preloader";

const Projects: React.FC = () => {
  const inViewRef = useRef<HTMLElement>(null);
  const isInView = useInView(inViewRef);
  return (
    <motion.section className={styles.projects} id="projects">
      {/* <div className={styles.circle}></div> */}
      <motion.div
        className="container"
        initial="hidden"
        animate={isInView && "visible"}
      >
        <h2>Selected Works</h2>
        <p>
          We always succeed in creating thousands of quality and innovative
          products every day. And We do what we do because we love it and
          dedicated to creating meaningful work.
        </p>
        <div className={styles.card_container}>
          {projects_list.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className={styles.btn__container}>
          <Link href="/" passHref>
            <motion.a className={styles.all__btn}>
              <span>View All Project</span>
              <span>View All Project</span>
            </motion.a>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

type MousePositionState = {
  x: number;
  y: number;
  centerX: number;
  centerY: number;
  height?: number;
  width?: number;
};

const discoverVariants: Variants = {
  initial: {
    left: "50%",
    top: "50%",
    opacity: 0,
    scale: 1,
  },
};

type CardItemProps = {
  project: typeof projects_list[1];
};

const ProjectCard: React.FC<CardItemProps> = ({ project }) => {
  const [mousePosition, setMousePosition] = React.useState(
    {} as MousePositionState
  );
  const boxRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  return (
    <motion.div
      className={styles.service__card}
      style={{ perspective: 400 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={boxRef}
      onMouseMove={(e) => handleMouseMove(e)}
      animate={{
        rotateX: mousePosition.centerX * 20,
        rotateY: mousePosition.centerY * 20,
      }}
    >
      <motion.div
        className={styles.card}
        style={{ backgroundImage: `url("${project.image}")` }}
      >
        <motion.div
          className={styles.tags}
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        >
          {project.tags.map((tag) => (
            <motion.span key={tag}>{tag}</motion.span>
          ))}
        </motion.div>
        <motion.span
          className={styles.discover}
          variants={discoverVariants}
          animate={
            isHovered
              ? {
                  x: mousePosition.x,
                  y: mousePosition.y,
                  rotate: `${mousePosition.centerX * 10}deg`,
                  scale: 1.2,
                }
              : "initial"
          }
        >
          Discover
        </motion.span>
      </motion.div>
      <motion.div
        className={styles.desc}
        initial={{ padding: "0rem 1rem" }}
        animate={
          isHovered
            ? { padding: "0rem 2rem" }
            : {
                padding: "0rem 1rem",
              }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h4 className={styles.name}>{project.name}</h4>
        <span className={styles.date__year}>{project.year}</span>
      </motion.div>
    </motion.div>
  );
};

export default Projects;

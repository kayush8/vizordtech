import type { Variants } from "framer-motion";

export const navbarNavVariants: Variants = {
  hidden: {
    y: "-150%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const preloaderVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0,
    transition: {
      delay: 2,
      duration: 0.5,
    },
  },
};

export const logoContainerVariants: Variants = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: 0.9,
    transition: {
      delay: 2,
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const logoVariants: Variants = {
  hidden: {
    rotateZ: "20deg",
    y: 30,
    scale: 0.8,
  },
  visible: {
    rotateZ: "0deg",
    y: 0,
    scale: 1,
  },
};

export const bannerHeadingVariants: Variants = {
  hidden: {
    rotateX: "40deg",
    skewX: "30deg",
    y: "100%",
  },
  visible: {
    rotateX: 0,
    skewX: 0,
    y: 0,
  },
};

export const textVariants: Variants = {
  hidden: {
    y: "120%",
    opacity: 0.6,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const circleVariants: Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};

export const scrollCircleVariants: Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      delay: 2.8,
      duration: 1,
      stiffness: 120,
    },
  },
};

export const scrollArrowVariants: Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      delay: 3.4,
      duration: 0.7,
    },
  },
};

export const staggerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

export const staggerChildrenVariants = {
  hidden: {
    y: 70,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
};

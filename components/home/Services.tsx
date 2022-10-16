import { useRef, useState } from "react";
import { motion } from "framer-motion";

import SectionHeading from "@components/custom/SectionHeading";
import { ArrowDownRightIcon } from "@components/utility/Icons";

import { service_list } from "@data/data";
import styles from "@styles/home/Services.module.scss";
import type { MousePositionState } from "@components/utility/trackPosition";
import { useInView } from "framer-motion";
import getRelativeCoordinates from "@components/utility/trackPosition";
import { staggerChildrenVariants } from "@animations/preloader";

const Services: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({} as MousePositionState);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>("");

  const boxRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef<HTMLElement>(null);

  const isInView = useInView(inViewRef);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  return (
    <motion.section
      className={styles.services}
      id="services"
      initial="hidden"
      animate="visible"
    >
      <motion.div className={styles.header} variants={staggerChildrenVariants}>
        <SectionHeading title1="Selected Services" />
      </motion.div>
      <div
        className={styles.services_wrapper}
        ref={boxRef}
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <motion.div
          className={styles.service_pic}
          style={{ backgroundImage: `url("${currentImage}")` }}
          animate={
            isHovered
              ? {
                  x: mousePosition.x,
                  y: mousePosition.y,
                  opacity: 1,
                }
              : { opacity: 0, x: mousePosition.x, y: mousePosition.y }
          }
          transition={{ stiffness: 10, ease: "linear" }}
        ></motion.div>
        <div className="container">
          {service_list.map(({ name, href, image }, index) => (
            <Service
              key={index}
              name={name}
              href={href}
              image={image}
              index={index + 1}
              setCurrentImage={setCurrentImage}
              setIsHovered={setIsHovered}
              currentImage={currentImage}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

type ServiceProps = {
  name: string;
  href: string;
  image: string;
  index: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<string>>;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  currentImage: string;
};

const Service: React.FC<ServiceProps> = ({
  name,
  href,
  image,
  index,
  setCurrentImage,
  setIsHovered,
  currentImage,
}) => {
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef);
  return (
    <motion.div
      ref={inViewRef}
      initial="hidden"
      animate={isInView && "visible"}
      variants={staggerChildrenVariants}
      className={styles.service_card}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => {
        setCurrentImage(image);
        setIsHovered(true);
      }}
    >
      <div className={styles.card_header}>
        <div className={styles.num}>{index < 9 ? `0${index}` : index}</div>
        <h2 className={styles.service_name}>{name}</h2>
        <div className={styles.arrow_container}>
          <span>
            <ArrowDownRightIcon />
          </span>
          <span>
            <ArrowDownRightIcon />
          </span>
        </div>
      </div>
      <motion.div
        className={styles.card_desc}
        animate={
          currentImage === image ? { height: "100%" } : { height: "0px" }
        }
        transition={{ ease: "linear" }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
          perferendis unde pariatur harum praesentium officiis iste molestias
          ipsa ex quia. Voluptas a non iste tenetur sunt obcaecati praesentium
          quod fugit, ipsa cum autem nostrum dolorum aperiam exercitationem
          sapiente. Dolorum eius laboriosam deserunt sunt doloremque quas?
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Services;

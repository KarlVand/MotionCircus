import React from "react";
import { motion } from "framer-motion";
import styles from "./components.module.css";
import PropTypes from "prop-types";

const Navigation = () => {
  return (
    <section className={styles.navbar}>
      <motion.h1
        whileHover={{ rotate: "2deg", color: "darkorange" }}
        whileTap={{ scale: 0.9, rotate: "-2deg", color: "blue" }}>
        KARL.DEV
      </motion.h1>
      <div className={styles.navlinks}>
        <Fliplink href="#">About</Fliplink>
        <Fliplink href="/projects">Projects</Fliplink>
        <Fliplink href="/contact">Contact</Fliplink>
      </div>
    </section>
  );
};

const Fliplink = ({ href, children }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hover"
      href={href}
      transition={{ staggerChildren: 0.1 }}
      className="relative block overflow-hidden whitespace-nowrap font-black uppercase text-4xl mx-32">
      <div>
        {children.split("").map((letter, i) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                  opacity: 1,
                },
                hover: {
                  y: "-100%",
                  opacity: 0,
                },
              }}
              className="inline-block"
              key={`${letter}-${i}`}>
              {letter}
            </motion.span>
          );
        })}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((letter, i) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                  opacity: 0,
                },
                hover: {
                  y: 0,
                  opacity: 1,
                },
              }}
              className="inline-block"
              key={i}>
              {letter}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};
Fliplink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Navigation;

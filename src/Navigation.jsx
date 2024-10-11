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
      className="relative block overflow-hidden whitespace-nowrap font-black uppercase text-4xl">
      <motion.div
        variants={{
          initial: { y: 0, opacity: 1 },
          hover: { y: "-100%", opacity: 0 },
        }}>
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { y: "100%", opacity: 0 },
          hover: { y: 0, opacity: 1 },
        }}>
        {children}
      </motion.div>
    </motion.a>
  );
};
Fliplink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Navigation;

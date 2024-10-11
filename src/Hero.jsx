import { motion } from "framer-motion";
import "./components.module.css";

const Hero = () => {
  return (
    <main className="hero">
      <div className="bg-lime-200 w-screen   h-96 relative mt-16 text-end flex flex-col justify-between m-auto p-9">
        <motion.h1 className="text-orange-600 uppercase cursor-pointer text-8xl font-bold">
          Front-End Developer
        </motion.h1>
        <motion.h2 className="text-white uppercase text-7xl font-bold">
          Visual Arts Enthusiast
        </motion.h2>
        <motion.h3 className="text-orange-400 uppercase text-5xl font-bold;">
          <motion.span>Currently Upskilling in Web</motion.span>
          <motion.button className=" text-white font-bold;">
            @BeCode.org
          </motion.button>
        </motion.h3>
      </div>
    </main>
  );
};

export default Hero;

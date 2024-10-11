import { motion } from "framer-motion";
import "./components.module.css";

const Hero = () => {
  return (
    <main className="relative flex-col h-screen z-0 w-screen  bg-blue-100 bg-opacity-50 mt-36 justify-center align-middle m-auto">
      <div className="w-screen h-96 relative  text-end flex flex-col justify-between  m-auto py-72 px-80">
        <motion.h1
          className="absolute right-96 top-24 text-orange-600 uppercase w-1/2 cursor-pointer text-8xl font-bold "
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "backOut" }}>
          Front-End Developer
        </motion.h1>
        <motion.h2
          className="absolute right-96 text-white w-1/2 uppercase text-7xl font-bold "
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "backOut" }}>
          Visual Arts Enthusiast
        </motion.h2>
        <motion.p className="text-orange-400 w-1/2 uppercase text-5xl font-bold;">
          <motion.span className="font-bold px-8 ">
            Currently Upskilling in Web
          </motion.span>
          <motion.button className=" text-white font-bold;">
            @BeCode.org
          </motion.button>
        </motion.p>
      </div>
    </main>
  );
};

export default Hero;

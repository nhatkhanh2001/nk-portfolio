'use client';

import { Button } from "@/components/ui/button";
import { FaDownload } from 'react-icons/fa';
import { motion } from "framer-motion";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const stats = [
  { label: "Years of experience", value: "1.5+" },
  { label: "Projects completed", value: "6+" },
  { label: "Technologies mastered", value: "8+" },
  { label: "Code commits", value: "500+" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <motion.main
      className="container mx-auto h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-8 xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <motion.div
          className="text-center xl:text-left order-2 xl:order-none"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.p variants={fadeInUp} className="text-xl mb-6 text-white">Front-End Developer</motion.p>
          <motion.h1 variants={fadeInUp} className="text-5xl font-bold mb-4">{"Hello I'm"}<br /><span className="text-gradient">Hong Nhat Khanh</span></motion.h1>
          <motion.p variants={fadeInUp} className="mb-6 text-white/80 text-justify">
            {"I’m a Software Engineer with 1.5 years of experience in Web and App development using React. With my knowledge of web development, I enjoy solving web challenges and creating the best user experiences. I also dedicate time to learning new technologies and best practices to continuously improve as an engineer. My goal is to contribute to the company’s success as a dedicated and enthusiastic Software Engineer."}
          </motion.p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <motion.div variants={fadeInUp}>
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="mr-2 text-white" /><p className="text-white/60">DOWNLOAD CV</p>
              </Button>
            </motion.div>
            <div className="mb-8 xl:mb-0">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-bold text-gradient mb-2">{stat.value}</h2>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
}

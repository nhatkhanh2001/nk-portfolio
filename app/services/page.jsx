'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaCode, FaReact, FaServer } from 'react-icons/fa';

const services = [
    {
        title: "Web Development",
        description: "Full-stack web development using modern technologies and frameworks.",
        icon: <FaCode className="text-4xl mb-4 text-blue-500" />,
        hoverColor: "hover:bg-blue-100",
    },
    {
        title: "Frontend Development",
        description: "Creating responsive and interactive user interfaces with React and Next.js.",
        icon: <FaReact className="text-4xl mb-4 text-green-500" />,
        hoverColor: "hover:bg-green-100",
    },
    {
        title: "Backend Development",
        description: "Building robust and scalable server-side applications and APIs.",
        icon: <FaServer className="text-4xl mb-4 text-purple-500" />,
        hoverColor: "hover:bg-purple-100",
    },
];

const iconVariants = {
    initial: { y: 0 },
    hover: { y: -10, transition: { yoyo: Infinity, duration: 0.6 } }
};

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="container mx-auto px-4 py-20">
            <motion.h1
                className="text-4xl font-bold mb-8 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                My Services
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0 }}
                    >
                        <Card
                            Card
                            className={`h-full transition-all duration-500 ease-in-out transform hover:scale-105 ${service.hoverColor}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <CardHeader>
                                <motion.div
                                    variants={iconVariants}
                                    initial="initial"
                                    animate={hoveredIndex === index ? "hover" : "initial"}
                                >
                                    {service.icon}
                                </motion.div>
                                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">{service.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

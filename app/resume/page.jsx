'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Full-stack Developer",
        company: "Naiscorp Information Technology Service Jsc",
        period: "Apr 2023 - Present",
        line1: "Build resilient web applications leveraging ReactJS and NodeJS, guaranteeing superior performance and dependability.",
        line2: "Create and deploy RESTful APIs for smooth integration with external platforms.",
        line3: "Engage active in Agile ceremonies to propel project advancement and foster continuous enhancement.",
        line4: "Swiftly troubleshoot and resolve technical challenges to mitigate potential disruptions.",
        line5: "Perform thorough code reviews and active participate in architectural discussions to uphold code quality and scalability.",
        line6: "Complete projects and tasks according to requirements and deadlines.",
        line7: "Develop and deploy new products and services.",
    }
];

const education = [
    {
        degree: "Bachelor of Information Technology",
        school: "HO CHI MINH University Of Technology",
        period: "Oct 2019 - Sep 2023",
        description: "Focused on software engineering and web technologies."
    },
];

const skills = [
    { name: "JavaScript", image: "/assets/skills/js.svg" },
    { name: "React", image: "/assets/skills/react.svg" },
    { name: "Next.js", image: "/assets/skills/next.svg" },
    { name: "Tailwind", image: "/assets/skills/tailwind.svg" },
    { name: "CSS", image: "/assets/skills/css.svg" },
    { name: "HTML", image: "/assets/skills/html.svg" }
];

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export default function Resume() {
    const [activeTab, setActiveTab] = useState("experience");

    return (
        <motion.main
            className="container mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.section className="mb-4" {...fadeInUp}>
                <h2 className="text-2xl font-semibold mb-4 text-gradient">Why Hire Me?</h2>
                <p>{"I'm a dedicated and passionate developer with a strong problem-solving mindset. My diverse skill set and experience in both frontend and backend technologies allow me to tackle complex projects efficiently."}</p>
            </motion.section>

            <Tabs defaultValue="experience" className="flex flex-col md:flex-row gap-8" onValueChange={setActiveTab}>
                <TabsList className="flex flex-col w-full md:w-1/4 h-auto space-y-2">
                    {["experience", "education", "skills"].map((tab) => (
                        <TabsTrigger
                            key={tab}
                            value={tab}
                            className={`w-full justify-start p-4 text-left transition-all duration-300 ${activeTab === tab ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <div className="w-full md:w-3/4">
                    <TabsContent value="experience">
                        {experiences.map((exp, index) => (
                            <motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.1 }}>
                                <Card className="mb-4 hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader>
                                        <CardTitle>{exp.title} at {exp.company}</CardTitle>
                                        <p className="text-sm text-gray-500">{exp.period}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc pl-5 space-y-2">
                                            {Object.entries(exp).filter(([key]) => key.startsWith('line')).map(([key, value]) => (
                                                <li key={key} className='text-xs'>{value}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </TabsContent>
                    <TabsContent value="education">
                        {education.map((edu, index) => (
                            <motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.1 }}>
                                <Card className="mb-4 hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader>
                                        <CardTitle>{edu.degree}</CardTitle>
                                        <p className="text-sm text-gray-500">{edu.school}, {edu.period}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{edu.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </TabsContent>
                    <TabsContent value="skills">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {skills.map((skill, index) => (
                                <motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.1 }}>
                                    <Card className="mb-4 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-gray-800 to-gray-900">
                                        <CardHeader>
                                            <Image
                                                src={skill.image}
                                                alt={skill.name}
                                                width={64}
                                                height={64}
                                                className="mx-auto mb-2"
                                            />
                                            <CardTitle className="text-center text-white">{skill.name}</CardTitle>
                                        </CardHeader>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </motion.main >
    );
}
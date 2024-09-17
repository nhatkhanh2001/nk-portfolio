'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BsArrowUpRight, BsGitlab } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import WorkSlideButtons from '@/components/ui/WorkSlideButtons';

const projects = [
    {
        num: "01",
        category: "Fullstack",
        title: "TOGO Noodles Website",
        description: "A full-stack e-commerce solution with React frontend and Node.js backend. This project showcases advanced features like real-time inventory management, secure payment processing, and a responsive design for optimal user experience across all devices.",
        image: "/assets/work/Frame1.png",
        stack: [{ name: "NextJs" }, { name: "AntDesign" }, { name: "Tailwind" }],
        live: "https://togonoodles.com/",
        gitlab: "https://gitlab.com/dev.ezin/togo-noodles-website",
    },
    {
        num: "02",
        category: "Fullstack",
        title: "PVI Digital Infall",
        description: "A responsive web application for managing tasks and projects. Built with Next.js and MongoDB, this app features real-time updates, collaborative tools, and an intuitive interface to boost productivity for individuals and teams.",
        image: "/assets/work/Frame2.png",
        stack: [{ name: "NextJs" }, { name: "AntDesign" }, { name: "Bootstrap" }],
        live: "https://pvi.digital/",
        gitlab: "https://gitlab.com/dev.ezin/infall-website-2",
    },
    {
        num: "03",
        category: "frontend",
        title: "VGC Golf App",
        description: "An intelligent chatbot leveraging natural language processing to provide customer support. Developed using Python and TensorFlow, this project demonstrates the power of machine learning in enhancing user interactions and automating support processes.",
        image: "/assets/work/Frame3.png",
        stack: [{ name: "React Native" }, { name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
        live: "https://vgcgolf.com/",
        gitlab: "https://gitlab.com/dev.ezin/golf-vgc-admin",
    },
];

export default function Work() {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            <div className='text-8xl leading-none font-extrabold text-outline'>{project?.num}</div>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project?.category} project</h2>
                            <p className='text-white/60'>{project?.description}</p>
                            <ul className='flex gap-4'>
                                {project.stack && project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className='text-xl text-accent'>
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className='border border-white/20'></div>
                            <div className='flex items-center gap-4'>
                                <Link href={project.live} target='_blank'>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.gitlab} target='_blank'>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsGitlab className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Gitlab repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
                            {projects.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                                            <div>
                                            </div>
                                            <div className='relative w-full h-full'>
                                                <Image
                                                    src={item.image}
                                                    fill
                                                    className='object-cover'
                                                    alt=''
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slide buttons*/}
                            <WorkSlideButtons
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"

                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
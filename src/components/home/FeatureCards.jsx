"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import moist from "./assets/moist.svg"
import pest from "./assets/pest.svg"
import weather from "./assets/weather.svg"
import analytics from "./assets/analytics.svg"

import { montserrat, raleway } from "@/app/fonts"

export default function FeatureCards() {
    const contents = [
        {
            image: moist,
            heading: 'Moist Control',
            description: 'Assists in notifying the farmer of abnormal moisture levels.'
        },
        {
            image: pest,
            heading: 'Pest Control',
            description: 'Helps with alerting the farmer about the presence of pests.'
        },
        {
            image: weather,
            heading: 'Weather Monitoring',
            description: 'Assists in notifying the farmer of weather fluctuations.'
        },
        {
            image: analytics,
            heading: 'Farm Analytics',
            description: 'Facilitates comprehensive farm analytics to help farmers make informed decisions.'
        },
    ]
    const FadeInAnimationMultiple = {
        initial: {
            opacity: 0,
            y: 30,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.15 * index,
                duration: 0.35,
            }
        }),
    };
    return (
        <div className="flex flex-col gap-6 md:gap-12 my-8 md:my-14 px-4">
            <h3 className={`text-4xl md:text-6xl text-center text-primary-green font-bold ${montserrat.className}`}>Our Features</h3>
            <div className="flex flex-col md:flex-row w-full justify-center items-center md:items-start gap-8 md:gap-20">
                {contents.map((content, index) => {
                    return (
                        <motion.div
                            className="flex flex-col items-center px-4 shadow-lg rounded-2xl w-[280px] md:w-[250px] h-[500px]"
                            key={index}
                            variants={FadeInAnimationMultiple}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.1 }}
                        >
                            <div className="flex items-center h-[60%]">
                                <Image src={content.image} alt="img" className="rounded-[25px]" />
                            </div>
                            <div className="flex items-center h-[5%]">
                                <p className={`text-center text-2xl ${montserrat.className}`}>{content.heading}</p>
                            </div>
                            <div className="flex items-center h-[35%]">
                                <p className={`text-center ${raleway.className}`}>{content.description}</p>
                            </div>
                        </motion.div>
                    )
                })
                }
            </div>
        </div>
    )
}

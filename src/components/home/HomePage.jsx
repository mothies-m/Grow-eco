"use client"

import Image from "next/image"
import heroBg from "./assets/hero_bg.jpg"
import Animation from "../layout/mouseAnimation/Animation"
import { montserrat } from "@/app/fonts"

import { motion } from "framer-motion"

export default function HomePage() {
    return (
        <div className="h-[92vh] w-full">
            <div className="w-full h-full flex items-center justify-center">
                <div className={`absolute text-white z-10 text-3xl lg:text-5xl xl:text-7xl md:w-1/2 text-center font-semibold ${montserrat.className} flex flex-col md:gap-4`}>
                    <p>The Role of Technology</p>
                    <p className="leading-snug">in Revolutionizing Agriculture</p>
                </div>
                <div className="absolute w-full h-[92vh] bg-black opacity-50"></div>
                <Image src={heroBg} alt="img" className="h-[92vh] w-full object-cover" /></div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1, type: "tween" }}
                className="absolute bottom-0 right-[45%] md:right-[50%] pb-4"
            >
                <Animation />
            </motion.div>
        </div>
    )
}

"use client"

import Image from "next/image"
import heroBg from "./assets/hero_bg.jpg"
import Animation from "../layout/mouseAnimation/Animation"
import { montserrat } from "@/app/fonts"

import { motion } from "framer-motion"

export default function HomePage() {
    return (
        <div className="h-[90vh] w-full">
            <div className="w-full h-full flex items-center justify-center">
                <div className={`absolute text-white z-10 text-3xl lg:text-5xl xl:text-7xl md:w-2/3 text-center font-semibold ${montserrat.className} flex flex-col gap-2 md:gap-0 leading-[3rem] md:leading-0`}>
                    <p>The Role of Technology</p>
                    <p className="md:leading-[5rem]">in Revolutionizing Agriculture</p>
                </div>
                <div className="absolute w-full h-[90vh] bg-black opacity-50"></div>
                <Image src={heroBg} alt="img" className="h-[90vh] w-full object-cover" /></div>
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

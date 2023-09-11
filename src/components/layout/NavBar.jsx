'use client'

import logo from './assets/logo.svg'

import Image from "next/image"
import Link from "next/link"

import { inder } from "@/app/fonts"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function NavBar() {
    const router = usePathname();
    const [viewNav, setViewNav] = useState(false);

    const handleViewNav = () => {
        if (viewNav === false) {
            setViewNav(true);
        } else {
            setViewNav(false);
        }
    };
    const navVisibleRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navVisibleRef.current &&
                !navVisibleRef.current.contains(event.target)
            ) {
                setViewNav(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <nav className="fixed flex justify-between items-center h-[8vh] px-8 z-20 bg-primary-green w-full">
            <Link href={"/"}>
                <Image src={logo} alt="logo" className="h-12 md:h-16 w-max" />
            </Link>
            <ul className={`hidden md:flex justify-around text-white font-poppins gap-20 ${inder.className} text-2xl`}>
                <li><Link href={"/"}
                    className={router === "/" ? 'text-[#09F78B]' : ""}>
                    Home
                </Link></li>
                <li><Link href={"/about"}
                    className={router === "/about" ? 'text-[#09F78B]' : ""}>
                    About</Link></li>
                <li><Link href={"/dashboard"}
                    className={router === "/dashboard" ? 'text-[#09F78B]' : ""}>
                    Dashboard</Link></li>
            </ul>
            <button
                className="md:hidden cursor-pointer space-y-[6px]"
                onClick={handleViewNav}
                ref={navVisibleRef}
            >
                <div
                    className={`w-6 h-0.5 bg-white ${viewNav && "rotate-45"
                        } transition-all duration-200`}
                ></div>
                <div
                    className={`w-4 h-0.5 bg-white ml-auto ${viewNav && "hidden"}`}
                ></div>
                <div
                    className={`w-6 h-0.5 bg-white ${viewNav && "-rotate-45 -translate-y-2"
                        } transition-all duration-200`}
                ></div>
            </button>
            {viewNav &&
                <motion.div className="fixed mt-2 py-2 pb-12 right-0 bg-white text-black z-20 shadow-md top-[55px] h-full w-full"
                    variants={{
                        open: {
                            x: "0%",
                        },
                        closed: {
                            x: "100%",
                        },
                    }}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{
                        ease: "easeOut",
                        duration: 0.3,
                    }}
                >
                    <ul className="flex flex-col gap-4 h-full font-medium text-lg py-6 px-4">
                        <li
                            className={`px-4 py-2 border-b-[2px] border-gray-200`}
                        >
                            <Link href="/" className={router === "/" ? 'text-[#35b179]' : ""}>
                                Home
                            </Link>
                        </li>
                        <li
                            className={`px-4 py-2 border-b-[2px] border-gray-200`}
                        >
                            <Link href="/about" className={router === "/about" ? 'text-[#35b179]' : ""}>
                                About
                            </Link>
                        </li>
                        <li
                            className={`px-4 py-2 border-b-[2px] border-gray-200`}
                        >
                            <Link href="/dashboard" className={router === "/dashboard" ? 'text-[#35b179]' : ""}>
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </motion.div>
            }
        </nav>
    )
}

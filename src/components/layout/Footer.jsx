import bg from './assets/footer_bg.svg'
import logo from './assets/logo_notext.svg'

import Image from 'next/image'
import Link from 'next/link'

import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

import { poppinsRegular } from '@/app/fonts';

export default function Footer() {
    return (
        <>
            <div className={`${poppinsRegular.className} absolute text-white z-10 flex flex-col md:flex-row min-h-[50vh] items-center w-full`}>
                <div className='md:w-[30%] pt-8 md:pt-0 flex flex-col gap-4 justify-center items-center'>
                    <Link href={"/"} >
                        <Image src={logo} alt="logo" className="h-20" />
                    </Link>
                    <p className='font-semibold text-2xl'>FarmSense</p>
                </div>
                <div className='bg-white h-[40vh] w-[1px] hidden md:inline-block' />
                <div className='w-[70%] md:w-full flex flex-col justify-between'>
                    <div className='flex gap-4 justify-evenly pt-12 md:pt-0'>
                        <div className='flex flex-col gap-4 md:gap-8 items-start '>
                            <p className='text-xl uppercase text-gray-300 font-semibold hidden md:inline-block'>Contact</p>
                            <Link href={"mailto:farmsense@gmail.com"} className='flex gap-4 justify-center items-center'><FiMail /><p>farmsense@gmail.com</p></Link>
                            <Link href={"tel:+917010537101"} className='flex gap-4 justify-center items-center'><BsFillTelephoneFill /><p>+91 70105 37101</p></Link>
                            <Link href={"https://goo.gl/maps/FEWhmjKYhc565eSY8"} className='flex gap-4 justify-center items-center'><FaLocationDot /><p>Tiruchirappalli, Tamil Nadu</p></Link>
                        </div>
                        <div className='hidden md:flex flex-col gap-8'>
                            <p className='text-xl uppercase text-gray-300 font-semibold'>Additional Links</p>
                            <ul className='flex flex-col justify-center gap-6 text-lg'>
                                <li><Link href={""}>Documentation</Link></li>
                                <li><Link href={""}>Cookies</Link></li>
                                <li><Link href={""}>Privacy & Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 text-sm pt-12'>
                        <p className='hidden md:inline-block text-center md:text-lg text-gray-300'>
                            Copyright © 2023 FarmSense | All Rights Reserved
                        </p>
                        <p className='md:hidden text-center text-gray-300'>
                            Copyright © 2023 FarmSense
                        </p>
                        <p className='md:hidden text-center text-gray-300'>All Rights Reserved</p>
                    </div>
                </div>
            </div>
            <>
                <div className="absolute w-full min-h-[60vh] md:min-h-[50vh] bg-black opacity-60" />
                <Image src={bg} alt='img' className='h-[60vh] md:h-[50vh] w-full object-cover' />
            </>
        </>
    )
}

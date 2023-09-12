import Image from "next/image";
import dash from './assets/dash.png'
import { poppinsRegular } from "../fonts";
import { AiOutlineWarning } from "react-icons/ai";
import Weather from "@/components/dashboard/Weather";


export default function page() {
    return (
        <div className={`flex flex-col items-center gap-6 my-12 px-4`}>
            <p className={`flex items-center gap-2 text-xl text-start font-semibold ${poppinsRegular.className}`}><span className="text-3xl"><AiOutlineWarning /></span> This is a sample dashboard from a Farmer&apos;s perspective, not a live page.</p>
            <Image src={dash} alt="dashboard" />
            <Weather />
        </div>
    )
}

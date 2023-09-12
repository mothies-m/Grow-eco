import Image from "next/image";
import dash from './assets/dash.png'
import { poppinsRegular } from "../fonts";
import Weather from "@/components/dashboard/Weather";


export default function page() {
    return (
        <div className={`flex flex-col gap-6 my-12 px-4`}>
            <p className={`text-xl font-semibold ${poppinsRegular.className}`}>This is a sample page from a Farmer's perspective, not a live page.</p>
            <Image src={dash} alt="dashboard" />
            <Weather />
        </div>
    )
}

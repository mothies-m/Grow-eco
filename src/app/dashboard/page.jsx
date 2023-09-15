import { poppinsRegular } from "../fonts";
import { AiOutlineWarning } from "react-icons/ai";
import Weather from "@/components/dashboard/Weather";
import DashboardGraph from "@/components/dashboard/DashboardGraph";


export default function page() {

    return (
        <div className={`flex flex-col items-center gap-6 my-12 px-4`}>
            <p className={`flex items-center gap-2 text-xl text-start font-semibold ${poppinsRegular.className}`}><span className="text-3xl"></span>This is the dashboard from a Farmer&apos;s perspective.</p>
            <DashboardGraph />
            <Weather />
        </div>
    )
}

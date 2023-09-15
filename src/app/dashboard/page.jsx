'use client'

import { poppinsRegular } from "../fonts";
import Weather from "@/components/dashboard/Weather";
import DashboardGraph from "@/components/dashboard/DashboardGraph";
import DashboardGraphTamil from "@/components/dashboard/DashboardGraphTamil";
import DashboardGraphHindi from "@/components/dashboard/DashboardGraphHindi";
import { BsGlobe } from "react-icons/bs";
import { useState } from "react";

export default function page() {

    const [language, setLanguage] = useState("english");
    const handleChange = (e) => {
        setLanguage(e.target.value);
    }
    return (
        <>
            <label htmlFor="language" className="float-right">
                <BsGlobe />
            </label>
            <select name="language" className="p-2 border-2 border-primary-green text-lg right-0 absolute rounded-md" defaultValue={"english"} onChange={handleChange}>
                <option value="english" >English</option>
                <option value="tamil" >Tamil</option>
                <option value="hindi" >Hindi</option>
            </select >
            <div className={`flex flex-col items-center gap-6 my-12 px-4`}>
                {(language === 'english') && <DashboardGraph />}
                {(language === 'tamil') && <DashboardGraphTamil />}
                {(language === 'hindi') && <DashboardGraphHindi />}
                <Weather />
            </div>
        </>
    )
}

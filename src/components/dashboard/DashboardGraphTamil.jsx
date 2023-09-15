'use client'


import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';



import db from '../../utils/firebase';
import { ref, onValue } from "firebase/database";

import { useState } from "react";

export default function DashboardGraph() {

    const [pumpStatus, setPumpStatus] = useState(false);
    const [moisture, setMoisture] = useState("");
    const [humidity, setHumidity] = useState("");
    const [weather, setWeather] = useState("");

    const db_location = ref(db, '/');

    onValue(db_location, (snapshot) => {
        if (snapshot.val()?.pumpstatus !== pumpStatus) setPumpStatus(snapshot.val()?.pumpstatus);
        if (snapshot.val()?.moisture !== moisture) setMoisture(snapshot.val()?.moisture);
        if (snapshot.val()?.humidity !== humidity) setHumidity(snapshot.val()?.humidity);
    });


    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "மண் ஈரம்",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "ஈரப்பதம்",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
            }
        ]
    };

    return (
        <>
            <p className={`flex items-center gap-2 text-3xl text-start font-semibold `}>இது ஒரு விவசாயியின் புள்ளி விவரம்</p>
            <div className="flex flex-wrap w-3/4 justify-between gap-20 py-8 px-8 border-2 rounded-lg">
                <div className="flex flex-col gap-4">
                    <p className="text-3xl text-center">மண் ஈரம்</p>
                    <div>
                        <CircularProgressbar value={moisture} text={`${moisture}%`} suppressHydrationWarning />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-3xl text-center">ஈரப்பதம்</p>
                    <CircularProgressbar value={humidity} text={`${humidity}%`} suppressHydrationWarning />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-3xl text-center">மோட்டார் நிலை</p>
                    <div className="flex gap-6 py-6">
                        <div className={`flex justify-center items-center w-20 h-20 rounded-full bg-red-400 ${pumpStatus && "opacity-30"} `} >{!pumpStatus && "OFF"}</div>
                        <div className={`flex justify-center items-center w-20 h-20 rounded-full bg-green-400 ${!pumpStatus && "opacity-30"}`}
                        >{pumpStatus && "ON"}</div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-3xl text-center">வானிலை</p>
                    <div>
                        <CircularProgressbar value={moisture} text={`${moisture}°C`} suppressHydrationWarning />
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-1/2">
                    <p className="text-3xl text-center">ஈரப்பதம் மற்றும் நேர வரைபடம்</p>
                    <Line data={data} suppressHydrationWarning />
                </div>
            </div>
            <Toaster />
        </>
    )
}

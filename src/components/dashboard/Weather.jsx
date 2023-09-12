'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function Weather() {

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [address, setAddress] = useState("");
    const [temperature, setTemperature] = useState("");
    const [tempFeelsLike, setTempFeelsLike] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            setLatitude(pos.coords.latitude);
            setLongitude(pos.coords.longitude);
        })
    }, []);

    const displayLocation = async () => {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        try {
            const response = await axios.get(url);
            setAddress(response.data.address);
        }
        catch (err) {
            console.log(err);
            if (err.response.status === 400) {
                alert("Allow persmission to get your coordinates!")
            }
            return;
        }
        await axios.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(result => {
                setTemperature(result.data.main.temp);
                setTempFeelsLike(result.data.main.feels_like);
            })
            .catch(err => alert(err, "Unable to fetch weather!"));
    };

    return (
        <main className="flex flex-col items-center gap-4">
            <button onClick={displayLocation} className="bg-green-700 rounded-md py-1 px-4 text-xl text-white hover:bg-green-800 transition-all">Fetch Weather</button>
            {temperature && (
                <div className="flex gap-1 text-xl">
                    <p>In {address.city || address.city_district},</p>
                    <p>the temperature is <span className=" font-bold ">{temperature || ""} °C</span> </p>
                    <p>but feels like <span className=" font-bold ">{tempFeelsLike || ""} °C</span></p>
                </div>
            )
            }
        </main>
    )
}

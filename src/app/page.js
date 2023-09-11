'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

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
    }
    await axios.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then(result => {
        setTemperature(result.data.main.temp);
        setTempFeelsLike(result.data.main.feels_like);
      })
      .catch(err => alert(err, "Unable to fetch weather!"));
  };

  return (
    <main className="flex flex-col items-center gap-20">
      <button onClick={displayLocation}>Click me</button>
      <p>Hi. You are from {address.city}</p>
      <p>The temperature is {temperature}</p>
      <p>But the temperature feels like {tempFeelsLike}</p>
    </main>
  )
}

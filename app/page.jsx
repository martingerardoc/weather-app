"use client";

import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Forecast from "./components/Forecast";
import Highlights from "./components/Highlights";

import {
  getCurrentWeather,
  getForecast,
  getWeatherByCoords,
  getForecastByCoords,
} from "./services/weatherApi";

export default function Home() {
  const [city, setCity] = useState("San Nicolas,AR");
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [unit, setUnit] = useState("C");

  const convertTemp = (temp) => {
    return unit === "C" ? temp : (temp * 9) / 5 + 32;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const w = await getCurrentWeather(city);
        const f = await getForecast(city);
        setData(w);
        setForecast(f);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [city]);

  const handleLocation = () => {
    if (typeof window === "undefined") return;

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const w = await getWeatherByCoords(latitude, longitude);
      const f = await getForecastByCoords(latitude, longitude);

      setData(w);
      setForecast(f);
    });
  };

  if (!data) return <p className="text-white p-10">Cargando...</p>;

  return (
    <main className="flex min-h-screen bg-[#100e1d] text-white">

      <Sidebar
        data={data}
        onSearch={setCity}
        onLocation={handleLocation}
        unit={unit}
        convertTemp={convertTemp}
      />

      <div className="flex-1 p-10">

        <div className="flex justify-end gap-2">
          <button onClick={() => setUnit("C")}>°C</button>
          <button onClick={() => setUnit("F")}>°F</button>
        </div>

        <Forecast
          forecast={forecast}
          unit={unit}
          convertTemp={convertTemp}
        />

        <Highlights data={data} />

      </div>
    </main>
  );
}
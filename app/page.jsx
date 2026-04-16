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
  const [city, setCity] = useState("San Nicolas");
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [unit, setUnit] = useState("C");

  // CONVERSIÓN
  const convertTemp = (temp) => {
    if (unit === "C") return temp;
    return (temp * 9) / 5 + 32;
  };

  // FETCH POR CIUDAD
  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherRes = await getCurrentWeather(city);
        const forecastRes = await getForecast(city);

        setData(weatherRes);
        setForecast(forecastRes);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [city]);

  // GEOLOCALIZACIÓN (USANDO API PRO)
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const weatherRes = await getWeatherByCoords(latitude, longitude);
        const forecastRes = await getForecastByCoords(latitude, longitude);

        setData(weatherRes);
        setForecast(forecastRes);
      } catch (error) {
        console.error("Error ubicación:", error);
      }
    });
  };

  // LOADING
  if (!data) return <p className="text-white p-10">Cargando...</p>;

  return (
    <main className="min-h-screen bg-[#100e1d] text-white flex">

      {/* SIDEBAR */}
      <Sidebar
        data={data}
        onSearch={setCity}
        onLocation={handleLocation}
        unit={unit}
        convertTemp={convertTemp}
      />

      {/* PANEL DERECHO */}
      <div className="flex-1 p-10 max-w-5xl mx-auto">

        {/* TOGGLE */}
        <div className="flex justify-end gap-4 mb-6">
          <button
            onClick={() => setUnit("C")}
            className={`w-10 h-10 rounded-full ${
              unit === "C" ? "bg-white text-black" : "bg-gray-600"
            }`}
          >
            °C
          </button>

          <button
            onClick={() => setUnit("F")}
            className={`w-10 h-10 rounded-full ${
              unit === "F" ? "bg-white text-black" : "bg-gray-600"
            }`}
          >
            °F
          </button>
        </div>

        {/* FORECAST */}
        <Forecast
          forecast={forecast}
          unit={unit}
          convertTemp={convertTemp}
        />

        {/* HIGHLIGHTS */}
        <Highlights data={data} />

      </div>
    </main>
  );
}
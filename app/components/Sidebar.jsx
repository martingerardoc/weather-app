"use client";

import { useState } from "react";

export default function Sidebar({ data, onSearch, onLocation, unit, convertTemp }) {
  const [city, setCity] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  if (!data) return null;

  return (
    <div className="w-[30%] bg-[#1e213a] p-6 text-white flex flex-col justify-between">

      <div className="flex justify-between">
        <button onClick={() => setShowSearch(true)} className="bg-gray-600 px-4 py-2">
          Search
        </button>

        <button onClick={onLocation} className="bg-gray-600 px-3 py-2 rounded-full">
          📍
        </button>
      </div>

      <div className="text-center">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          className="mx-auto"
        />

        <h1 className="text-6xl">
          {Math.round(convertTemp(data.main.temp))}°{unit}
        </h1>

        <p>{data.weather[0].description}</p>
        <p className="text-gray-400">{data.name}</p>
      </div>

      {showSearch && (
        <div className="absolute inset-0 bg-[#1e213a] p-6">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 bg-black"
          />
          <button onClick={() => onSearch(city)}>Buscar</button>
        </div>
      )}
    </div>
  );
}
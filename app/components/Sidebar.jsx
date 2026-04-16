"use client";

import { useState } from "react";

export default function Sidebar({ data, onSearch, onLocation, unit, convertTemp }) {
  const [city, setCity] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  if (!data) return null;

  return (
    <div className="w-[30%] bg-[#1e213a] text-white flex flex-col justify-between p-6 relative">

      {/* TOP BUTTONS */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setShowSearch(true)}
          className="bg-gray-600 px-4 py-2 text-sm"
        >
          Search for places
        </button>

        <button
          onClick={onLocation}
          className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center"
        >
        </button>
      </div>

      {/* IMAGEN CLIMA */}
      <div className="flex justify-center my-10">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt="weather icon"
          className="w-40"
        />
      </div>

      {/* TEMPERATURA */}
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          {Math.round(convertTemp(data.main.temp))}°
          <span className="text-gray-400 text-4xl">{unit}</span>
        </h1>

        <p className="text-xl mt-4 capitalize text-gray-300">
          {data.weather[0].description}
        </p>
      </div>

      {/* FECHA */}
      <p className="text-center text-gray-400 mt-6">
        Today ·{" "}
        {new Date().toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
        })}
      </p>

      {/* UBICACIÓN */}
      <p className="text-center text-gray-400 mb-6">
         {data.name}
      </p>

      {/* SEARCH MODAL */}
      {showSearch && (
        <div className="absolute inset-0 bg-[#1e213a] p-6 flex flex-col gap-4 z-10">

          {/* CLOSE */}
          <button
            onClick={() => setShowSearch(false)}
            className="self-end text-xl"
          >
            ✖
          </button>

          {/* INPUT */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="search location"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 p-2 bg-[#100e1d] text-white outline-none border border-gray-500"
            />

            <button
              onClick={() => {
                if (!city) return;
                onSearch(city);
                setShowSearch(false);
                setCity("");
              }}
              className="bg-blue-500 px-4"
            >
              Search
            </button>
          </div>

          {/* BOTÓN UBICACIÓN DENTRO DEL MODAL */}
          <button
            onClick={() => {
              onLocation();
              setShowSearch(false);
            }}
            className="bg-gray-600 p-2 mt-2"
          >
            Use my location
          </button>

          {/*SUGERENCIAS */}
          <div className="flex flex-col gap-2 mt-4">
            {["Buenos Aires", "London", "Madrid", "New York"].map((c) => (
              <button
                key={c}
                onClick={() => {
                  onSearch(c);
                  setShowSearch(false);
                }}
                className="border border-gray-600 p-2 text-left hover:bg-gray-700"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
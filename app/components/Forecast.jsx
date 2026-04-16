"use client";

import WeatherCard from "./WeatherCard";

export default function Forecast({ forecast, unit, convertTemp }) {
  if (!forecast) return null;

  const daily = forecast.list.filter((_, i) => i % 8 === 0);

  return (
    <div className="grid grid-cols-5 gap-4 mb-10">
      {daily.map((day, i) => (
        <WeatherCard
          key={i}
          day={day}
          unit={unit}
          convertTemp={convertTemp}
        />
      ))}
    </div>
  );
}
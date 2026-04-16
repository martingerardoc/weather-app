"use client";

export default function WeatherCard({ day, unit, convertTemp }) {
  if (!day) return null;

  return (
    <div className="bg-[#1e213a] p-4 text-center rounded-xl">

      {/* 📅 FECHA */}
      <p className="text-sm text-gray-300">
        {new Date(day.dt_txt).toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
        })}
      </p>

      {/* 🌤️ ICONO */}
      <img
        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
        alt="weather icon"
        className="mx-auto my-2"
      />

      {/* 🌡️ TEMPERATURA */}
      <div className="flex justify-center gap-2 text-lg font-semibold">
        <span>
          {Math.round(convertTemp(day.main.temp_max))}°
        </span>
        <span className="text-gray-400">
          {Math.round(convertTemp(day.main.temp_min))}°
        </span>
      </div>
    </div>
  );
}
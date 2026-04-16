"use client";

export default function WeatherCard({ day, unit, convertTemp }) {
  return (
    <div className="bg-[#1e213a] p-4 text-center rounded-xl">
      <p className="text-sm text-gray-300">
        {new Date(day.dt_txt).toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
        })}
      </p>

      <img
        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
        className="mx-auto my-2"
      />

      <div className="flex justify-center gap-2">
        <span>{Math.round(convertTemp(day.main.temp_max))}°</span>
        <span className="text-gray-400">
          {Math.round(convertTemp(day.main.temp_min))}°
        </span>
      </div>
    </div>
  );
}
"use client";

export default function Forecast({ forecast, unit, convertTemp }) {
  if (!forecast) return null;

  // Tomamos un dato cada 24h (8 registros de 3h)
  const daily = forecast.list.filter((_, index) => index % 8 === 0);

  return (
    <div className="grid grid-cols-5 gap-4 mb-10">
      {daily.map((day, i) => (
        <div
          key={i}
          className="bg-[#1e213a] p-4 text-center rounded-xl"
        >
          {/* FECHA */}
          <p className="text-sm">
            {new Date(day.dt_txt).toLocaleDateString("en-US", {
              weekday: "short",
              day: "numeric",
            })}
          </p>

          {/* ICONO */}
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt="weather icon"
            className="mx-auto my-2"
          />

          {/* TEMP */}
          <p className="text-lg font-semibold">
            {Math.round(convertTemp(day.main.temp))}°
            {unit}
          </p>
        </div>
      ))}
    </div>
  );
}
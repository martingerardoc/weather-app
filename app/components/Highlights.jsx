"use client";

export default function Highlights({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2 className="text-2xl mb-6">Today's Highlights</h2>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-[#1e213a] p-6 rounded-xl text-center">
          <p>Wind Status</p>
          <h2 className="text-3xl">{data.wind.speed} m/s</h2>

          <div
            className="w-8 h-8 bg-gray-600 mx-auto mt-2 flex items-center justify-center rounded-full"
            style={{ transform: `rotate(${data.wind.deg}deg)` }}
          >
            ↑
          </div>
        </div>

        <div className="bg-[#1e213a] p-6 rounded-xl text-center">
          <p>Humidity</p>
          <h2 className="text-3xl">{data.main.humidity}%</h2>

          <div className="w-full bg-gray-600 h-2 mt-2 rounded">
            <div
              className="bg-yellow-400 h-2 rounded"
              style={{ width: `${data.main.humidity}%` }}
            />
          </div>
        </div>

        <div className="bg-[#1e213a] p-6 rounded-xl text-center">
          <p>Visibility</p>
          <h2 className="text-3xl">
            {(data.visibility / 1000).toFixed(1)} km
          </h2>
        </div>

        <div className="bg-[#1e213a] p-6 rounded-xl text-center">
          <p>Air Pressure</p>
          <h2 className="text-3xl">{data.main.pressure} mb</h2>
        </div>

      </div>
    </div>
  );
}
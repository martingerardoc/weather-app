"use client";

export default function Highlights({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2 className="text-2xl mb-6">Today's Highlights</h2>

      <div className="grid grid-cols-2 gap-6">

        {/* 🌬️ WIND */}
        <div className="bg-[#1e213a] p-6 rounded-xl text-center">
          <p className="text-gray-300">Wind Status</p>

          <h2 className="text-3xl font-bold my-2">
            {data.wind.speed} m/s
          </h2>

          <div className="flex justify-center items-center gap-2 mt-2">
            <div
              className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"
              style={{
                transform: `rotate(${data.wind.deg}deg)`
              }}
            >
              ↑
            </div>

            <span>{data.wind.deg}°</span>
          </div>
        </div>

        {/* 💧 HUMIDITY */}
        <div className="bg-[#1e213a] p-6 rounded-xl text-center">
          <p className="text-gray-300">Humidity</p>

          <h2 className="text-3xl font-bold my-2">
            {data.main.humidity}%
          </h2>

          {/* Barra */}
          <div className="w-full bg-gray-600 h-2 rounded-full mt-4">
            <div
              className="bg-yellow-400 h-2 rounded-full"
              style={{ width: `${data.main.humidity}%` }}
            />
          </div>

          <div className="flex justify-between text-xs mt-1 text-gray-400">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
        </div>

        {/* 👁️ VISIBILITY */}
        <div className="bg-[#1e213a] p-6 rounded-xl text-center">
          <p className="text-gray-300">Visibility</p>

          <h2 className="text-3xl font-bold my-2">
            {(data.visibility / 1000).toFixed(1)} km
          </h2>
        </div>

        {/* 📊 PRESSURE */}
        <div className="bg-[#1e213a] p-6 rounded-xl text-center">
          <p className="text-gray-300">Air Pressure</p>

          <h2 className="text-3xl font-bold my-2">
            {data.main.pressure} mb
          </h2>
        </div>

      </div>
    </div>
  );
}
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const fetchWeather = async (url) => {
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Error al obtener datos del clima");
  }

  return res.json();
};

export const getCurrentWeather = async (city) => {
  return fetchWeather(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
};

export const getForecast = async (city) => {
  return fetchWeather(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
};

export const getWeatherByCoords = async (lat, lon) => {
  return fetchWeather(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
};

export const getForecastByCoords = async (lat, lon) => {
  return fetchWeather(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
};
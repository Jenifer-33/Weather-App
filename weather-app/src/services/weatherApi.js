const API_KEY = import.meta.env.VITE_API_KEY;
export const getCurrentWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("City not found. Please enter a valid city.");
    }

    throw new Error("Failed to fetch weather data.");
  }

  return response.json();
};
export const getForecast = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Forecast not found.");
    }

    throw new Error("Failed to fetch forecast.");
  }

  return response.json();
};

import { useState } from "react";
import { getCurrentWeather, getForecast } from "../services/weatherApi";
import getCityImage from "../services/cityImageApi";
const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [cityImage, setCityImage] = useState("");
  const searchWeather = async (city) => {
    try {
      setIsLoading(true);
      setError("");
      const weatherData = await getCurrentWeather(city);
      const forecastData = await getForecast(city);
      setWeather(weatherData);

      const cityImage = await getCityImage(city);
      setCityImage(cityImage);
      const fiveDays = forecastData.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .slice(0, 5)
        .map((item) => ({
          day: new Date(item.dt_txt).toLocaleDateString("en-US", {
            weekday: "short",
          }),
          weatherId: item.weather[0].id,
          tempMax: item.main.temp_max,
          description: item.weather[0].description,
        }));

      setForecast(fiveDays);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast([]);
      setCityImage("");
    } finally {
      setIsLoading(false);
    }
  };
  return {
    weather,
    forecast,
    isLoading,
    error,
    searchWeather,
    cityImage,
  };
};
export default useWeather;

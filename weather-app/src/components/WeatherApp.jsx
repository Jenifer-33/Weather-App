import ForecastList from "../components/ForecastList";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import useWeather from "../hooks/useWeather";
import background from "../assets/background4.jpg";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const WeatherApp = () => {
  const { weather, forecast, isLoading, error, searchWeather, cityImage } = useWeather();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const city = searchParams.get("city");
    if (city) searchWeather(city);
  }, []);

  return (
    <div
      className="app-wrapper"
      style={{ backgroundImage: `url(${cityImage || background})` }}  
    >
      <div className="app-overlay">
        <div className="app-container">
          <div className="top-bar">
            <button className="back-btn  justify-content-end" onClick={() => navigate("/")}>
              ← Back
            </button>
            <SearchBar onSearch={searchWeather} />
          </div>

          {isLoading && <p className="text-white text-center">Loading...</p>}
          {error && <p className="alert alert-danger mt-3 text-center">{error}</p>}
          {weather && <WeatherCard weather={weather} cityImage={cityImage} />}
          {forecast.length > 0 && <ForecastList forecast={forecast} />}

        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
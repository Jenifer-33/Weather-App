const getWeatherEmoji = (id) => {
  if (id >= 200 && id < 300) return "⛈️";
  if (id >= 300 && id < 400) return "🌦️";
  if (id >= 500 && id < 600) return "🌧️";
  if (id >= 600 && id < 700) return "❄️";
  if (id >= 700 && id < 800) return "🌫️";
  if (id === 800) return "☀️";
  if (id === 801) return "🌤️";
  if (id === 802) return "⛅";
  if (id >= 803) return "☁️";
  return "🌡️";
};

const ForecastDay = ({ day, weatherId, tempMax, description, isToday }) => {
  return (
    <div className={`forecast-card ${isToday ? "forecast-card--today" : ""}`}>
      <p className="forecast-day">{isToday ? "Today" : day}</p>
      <div className="forecast-emoji">{getWeatherEmoji(weatherId)}</div>
      <p className="forecast-temp-max">{Math.round(tempMax)}°</p>
      <p className="forecast-desc">{description}</p>
    </div>
  );
};

export default ForecastDay;
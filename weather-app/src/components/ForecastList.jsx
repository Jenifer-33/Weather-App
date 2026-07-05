import ForecastDay from "./ForecastDay";

const ForecastList = ({ forecast }) => {
  return (
    <div className="forecast-section">
      <div className="forecast-divider">
        <hr className="forecast-line" />
        <span className="forecast-title">5 Day Forecast</span>
        <hr className="forecast-line" />
      </div>
      <div className="forecast-row">
        {forecast.map((day, index) => (
          <ForecastDay
            key={day.day}
            day={day.day}
            weatherId={day.weatherId}
            tempMax={day.tempMax}
            tempMin={day.tempMin}
            description={day.description}
            isToday={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
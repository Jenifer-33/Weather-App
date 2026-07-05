import getBackground from "../utils/getBackground";
const WeatherCard = ({ weather, cityImage }) => {
  if (!weather) return null;
  const condition = weather.weather[0].main;
  const textColor =
    condition === "Clear" || condition === "Clouds" || condition === "Snow"
      ? "#1a1a2e"
      : "#ffffff";
  const now = new Date();
  const date = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const time = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const description = weather.weather[0].description;

  const stats = [
    { label: "WIND", value: `${weather.wind.speed} m/s`, emoji: "💨" },
    { label: "HUMIDITY", value: `${weather.main.humidity}%`, emoji: "💧" },
    {
      label: "VISIBILITY",
      value: `${(weather.visibility / 1000).toFixed(1)} km`,
      emoji: "👁️",
    },
    { label: "PRESSURE", value: `${weather.main.pressure} hPa`, emoji: "🌡️" },
  ];
  const tempCardBg = getBackground(weather);
  return (
    <div
      className="weather-outer-card"
      style={{ backgroundImage: `url(${cityImage})` }}
    >
      <div className="weather-overlay">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h2 className="fw-bold text-white mb-0">{weather.name}</h2>
            <p className="text-white-50 mb-0">📍 {weather.sys.country}</p>
          </div>
          <div className="text-end text-white">
            <p className="mb-0 fw-semibold">{date}</p>
            <p className="mb-0 text-white-50">🕐 {time}</p>
          </div>
        </div>

        <div className="d-flex gap-3 mt-4 align-items-stretch">
          <div
            className="temp-card"
            style={{
              backgroundImage: `url(${tempCardBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1
              className="display-2 fw-bold mb-0 position-absolute bottom-0 mb-3"
              style={{ color: textColor, zIndex: 2, position: "absolute" }}
            >
              {Math.round(weather.main.temp)}°
            </h1>
            <div className="temp-card-overlay">
              <p
                className="mb-1 fw-semibold  position-absolute bottom-0 end-0 me-3 mb-5"
                style={{ zIndex: 2, color: textColor, position: "absolute" }}
              >
                {description.charAt(0).toUpperCase() + description.slice(1)}
              </p>
              <p
                className=" position-absolute bottom-0 end-0 me-4 mb-4"
                style={{ color: textColor, zIndex: 2, position: "absolute" }}
              >
                Feels like {Math.round(weather.main.feels_like)}°C
              </p>
            </div>
          </div>

          <div className="stats-card flex-grow-1">
            <div className="row row-cols-3 g-3 h-100 align-items-center">
              {stats.map((stat) => (
                <div className="col text-center" key={stat.label}>
                  <p className="text-white-50 mb-1 small">{stat.emoji}</p>
                  <p className="text-white fw-bold mb-0">{stat.value}</p>
                  <p
                    className="text-white-50 mb-0"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

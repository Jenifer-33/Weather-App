import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import background from "../assets/background4.jpg";
const WelcomeCard = ({ onSearch, error }) => {
  const parameters = [
    "🌡Live Temperature",
    "💧Humidity",
    "🌬 Wind Speed",
    "📅 5-Day Forecast",
  ];
  const cities = ["London", "New York", "Sydney ", "Tokyo ", "Paris"];
  const navigate=useNavigate();
  return (
    <div
      className="welcome container-fluid"
      style={{ backgroundImage: `url(${background})` }}  
    >
      <div className="hero-section">
        <div className="display-2 text-center mb-3">🌤</div>
        <h1 className="fw-bold">Your Daily Weather Companion</h1>
        <h6 className=" mb-3 fw-bold text-center">
          Discover real-time weather updates for cities around the world{" "}
        </h6>
        <SearchBar onSearch={onSearch} />
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <div className="d-inline-flex  mt-2  gap-3 ">
          {parameters.map((parameter, index) => (
            <p key={index}>{parameter}</p>
          ))}
        </div>
        <div className="d-flex align-items-center my-4">
          <hr className="flex-grow-1" />
          <span className="mx-3 fw-semibold">Popular Searches</span>
          <hr className="flex-grow-1" />
        </div>
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
          {cities.map((city, index) => (
            <button
              className=" city-btn btn btn-light rounded-pill px-3 fw-semibold"
              key={index}
               onClick={() => navigate(`/weather?city=${city}`)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WelcomeCard;

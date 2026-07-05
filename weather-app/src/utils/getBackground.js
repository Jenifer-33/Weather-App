import clearSky from "../assets/clearSky.jpg";
import background from "../assets/background4.jpg";
import cloud from "../assets/cloud.jpg";
import rain from "../assets/rain1.jpg";
import fog from "../assets/fog.jpg";
import snow from "../assets/snow.jpg";
import thunder from "../assets/thunder.jpg";
const getBackground = (weather) => {
  if (!weather) return background;
  const condition = weather.weather[0].main;
  switch (condition) {
    case "Clear":
      return clearSky;
    case "Clouds":
      return cloud;
    case "Rain":
      case "Drizzle":
      return rain;
    case "Snow":
      return snow;
    case "Fog":
    case "Mist":
      return fog;
    case "Thunderstorm":
      return thunder;

    default:
      return background;
  }
};
export default getBackground;

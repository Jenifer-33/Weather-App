import WeatherApp from "./components/WeatherApp";
import {Routes,Route} from "react-router-dom"
import WelcomeCard from "./components/WelcomeCard";
function App() {
  return (
    <div>
      <Routes>'
        <Route path="/" element={<WelcomeCard />}/>
        <Route path="/weather" element={<WeatherApp/>}/>
      </Routes>
      
    </div>
  );
}
export default App;

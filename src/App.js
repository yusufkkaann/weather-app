import logo from './logo.svg';
import './App.css';
import { WeatherProvider } from './context/WeatherContext';
import Container from './components/Container';
import { TodayWeatherContextProvider } from './context/TodayWeatherContext';


function App() {
  return (
    <div className="App">
     <WeatherProvider>
      <TodayWeatherContextProvider>
      <Container />
      </TodayWeatherContextProvider>
     </WeatherProvider>
    </div>
  );
}

export default App;

import SearchBar from './components/SearchBar.js';
import MainContent from './components/MainContent.js';
import TodayForecast from './components/TodayForecast.js';
import DaysForecast from './components/DaysForecast.js';
import AirCondition from './components/AirCondition.js';
import './App.css';

function App() {
  return (
    <main className='container'>
      <SearchBar />
      <MainContent />
      <TodayForecast />
      <DaysForecast />
      <AirCondition />
    </main>
  );
}

export default App;

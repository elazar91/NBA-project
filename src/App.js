import './App.css';

import StaticNavBar from './components/staticNavBar/StaticNavBar';
import StatsNavBar from "./components/statsNavBar/StatsNavBar";
import RouteBar from "./components/routeBar/RouteBar";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <div className='fixed'>
        <StaticNavBar />
        <StatsNavBar />
      </div>
      <RouteBar />
      <Main />
    </div>
  );
}

export default App;

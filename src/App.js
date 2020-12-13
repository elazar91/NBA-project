import './App.css';

import StaticNavBar from './components/staticNavBar/StaticNavBar';
import StatsNavBar from "./components/statsNavBar/StatsNavBar";
import RouteBar from "./components/routeBar/RouteBar";

function App() {
  return (
    <div className="App">
      <StaticNavBar />
      <StatsNavBar />
      <RouteBar />
    </div>
  );
}

export default App;

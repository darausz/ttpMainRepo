import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Agents from './components/Agents';
import Maps from "./components/Maps";
import Ranks from "./components/Ranks";
import Weapons from "./components/Weapons";
import Main from './components/Main';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/tiers" element={<Ranks />} />
      <Route path="/weapons" element={<Weapons />} />
    </Routes>
    </>
  );
}

export default App;

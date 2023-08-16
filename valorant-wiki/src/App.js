import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Agents from './components/Agents';
import Maps from "./components/Maps";
import Ranks from "./components/Ranks";
import Weapons from "./components/Weapons";

function scrollLeft(ref, arr) {
  const maxScroll = (ref.current.scrollWidth + ref.current.clientWidth);
  const oneScroll = maxScroll / arr.length - ref.current.clientWidth / arr.length
  console.log(maxScroll, oneScroll)
  if (ref.current.scrollLeft - .5 * oneScroll < 0) {
    ref.current.scrollLeft = maxScroll - oneScroll;
  }
  else {
    ref.current.scrollLeft -= oneScroll - 0.3;
  }
}

function scrollRight(ref, arr) {
  const maxScroll = (ref.current.scrollWidth + ref.current.clientWidth);
  const oneScroll = Math.ceil(maxScroll / arr.length - (ref.current.clientWidth) / (arr.length))
  if (ref.current.scrollLeft + 2.1 * oneScroll > maxScroll) {
    ref.current.scrollLeft = 0;
  }
  else {
    ref.current.scrollLeft += oneScroll + 0.3;
    console.log(maxScroll, oneScroll, ref.current.scrollLeft)

  }
}

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<h1>welcome to the wiki</h1>} />
      <Route path="/agents" element={<Agents scrollLeft={scrollLeft} scrollRight={scrollRight}/>} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/ranks" element={<Ranks />} />
      <Route path="/weapons" element={<Weapons />} />
    </Routes>
    </>
  );
}

export default App;

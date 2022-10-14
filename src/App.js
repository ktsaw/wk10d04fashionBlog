

//import logo from './logo.svg';
import './App.css';

import { Route, Routes } from "react-router-dom";
//import Nav from "./components/Nav";
import Main from "./pages/Main";
import Women from './pages/Women';
import Men from './pages/Men';
import OnTheStreet from './pages/OnTheStreet';
import TheCatWalk from './pages/TheCatWalk';
import AdWatch from './pages/AdWatch';
import About from './pages/About';

export default function App () {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/women" element={<Women/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/onthestreet" element={<OnTheStreet/>}/>
      <Route path="/thecatwalk" element={<TheCatWalk/>}/>
      <Route path="/adwatch" element={<AdWatch/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </div>
  );
}
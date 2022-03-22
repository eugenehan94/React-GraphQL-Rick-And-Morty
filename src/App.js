import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Character from "./pages/Character"
import Locations from "./pages/Locations"
import Location from "./pages/Location"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="character/:characterId" element={<Character/>}/>
        <Route path="locations" element={<Locations/>}/>
        <Route path="/location/:locationId" element={<Location/>}/>
      </Routes>
    </div>
  );
};

export default App;

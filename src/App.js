import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Character from "./pages/Character"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="character/:characterId" element={<Character/>}/>
      </Routes>
    </div>
  );
};

export default App;

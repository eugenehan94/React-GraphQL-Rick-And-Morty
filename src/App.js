import React from "react";
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import { useCharacter } from "./hooks/useCharacter";

const App = () => {
  // const {error, loading, data} = useCharacter();
  const {loading } = useCharacter();
  if (loading) {
    return <></>;
  }

  return (
    <div>
      <Hero/>
      <Cards/>
      <Footer/>
    </div>
  );
};

export default App;

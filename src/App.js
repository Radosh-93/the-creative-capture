import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
        <GlobalStyles/>
        <Nav/>
        <AboutUs/>
    </div>
  );
}

export default App;

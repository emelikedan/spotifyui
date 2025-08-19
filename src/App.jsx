import React from "react"
import Navbar from "./Components/Navbar"
import Library from "./Components/Library"
import Main from "./Components/Albums/Main"
import Footer from "./Components/Footer"



function App() {
  return (
    <div className="grid grid-cols-[100%] grid-rows-[auto_auto_auto] h-[100%] app-container">
      <Navbar />
      <div className="grid grid-cols-[300px_auto] lg:grid-cols-[auto_70%] gap-[8px] h-screen main-content">
        <Library />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App

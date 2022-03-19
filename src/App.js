import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import RootApp from "./components/RootApp";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <RootApp />
      </BrowserRouter>
    </div>
  );
};

export default App;
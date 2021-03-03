import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true
    })
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

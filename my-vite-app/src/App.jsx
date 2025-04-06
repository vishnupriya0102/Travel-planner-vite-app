import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import Login from './pages/Log/Login';
import LoginSignin from './pages/Log/LoginSignin';
import Map from './Components/Map';

function App() {
  return (
    <div className="text-center">
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-signup" element={<LoginSignin/>} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// src/App.js

// import React from 'react';


// const App = () => {
//   return (
//     <div>
//       <h1>My Travel Planner</h1>
//       <Map />
//     </div>
//   );
// };

// export default App;

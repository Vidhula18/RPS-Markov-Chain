import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Header from './components/Header';
import Login from './pages/login'; // Import the Login component



export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to set login status
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path='/rules' element={isLoggedIn ? <Rules /> : <Navigate to="/login" />} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}
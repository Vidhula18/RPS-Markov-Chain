import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok && data.success) { // Check if the response is okay and login was successful
        // Login successful, set isLoggedIn to true
        onLogin();
        navigate('/');
      } else {
        // Handle login error
        alert(data.message); // Display error message
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Background color from the Home component buttons
  const backgroundColor = '#424242';

  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundColor: '#212121' }}>
      <div className="w-full max-w-xs">
        <form className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{ backgroundColor }} onSubmit={handleSubmit}>
          <h2 className="text-center text-xl mb-4 font-serif text-3xl text-white font-bold" style={{fontFamily:"Quicksand"}}>Login</h2> {/* Changed font style to bold */}
          <div className="mb-4">
            <label className="block text-black text-xl font-bold mb-2" htmlFor="username">
              Username:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-black text-xl font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style={{ backgroundColor: '#212121' }}
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

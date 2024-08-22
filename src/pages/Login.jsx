import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/login/login-bg-new-7.jpg'; // Replace with the path to your background image
import CUIMSLogo from '../assets/login/login-logo.png'; // Replace with the path to your CUIMS logo

const LoginPage = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleUserIDChange = (e) => {
    const value = e.target.value;
    setUserID(value);
    setIsButtonEnabled(value === '12021943' && password === '@0929Mlb');
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsButtonEnabled(userID === '12021943' && value === '@0929Mlb');
  };

  const handleLogin = () => {
    if (isButtonEnabled) {
      setIsLoading(true); // Start loading
      setTimeout(() => {
        navigate('/result-12021943');
      }, 3000); // Simulate a 3-second loading time before redirect
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(17, 17, 28, 1) 0%, rgba(255, 154, 47, 0) 70%, rgba(17, 17, 28, 1) 100%),
          url(${bgImage})
        `,
      }}
    >
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <svg
            className="animate-spin h-16 w-16 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}

      <div className="relative w-full h-full flex items-center justify-start ml-80">
        <div className="bg-gray-950 bg-opacity-40 backdrop-blur-md rounded-3xl p-8 shadow-lg max-w-md w-full sm:w-96 lg:w-88">
          <img src={CUIMSLogo} alt="CUIMS Logo" className="h-24 mx-auto mb-8" />

          <div className="text-tertiaryColor text-center mb-10">
            <h1 className='text-4xl font-bold mb-4'>Log In</h1>
            <h4 className='mx-4'>Welcome to University Result Portal System</h4>
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="userID"
              value={userID}
              onChange={handleUserIDChange}
              placeholder='Enter User ID'
              className="w-full p-3 rounded bg-white bg-opacity-30 text-white"
            />
          </div>

          {userID === '12021943' && (
            <div className="mb-6">
              <input
                type="password"
                id="password"
                value={password}
                placeholder='Enter Password'
                onChange={handlePasswordChange}
                className="w-full p-2 rounded bg-white bg-opacity-30 text-white"
              />
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={!isButtonEnabled}
            className={`w-full p-2 rounded-full ${isButtonEnabled ? 'bg-primaryColor' : 'bg-red-300'} text-white`}
          >
            Login
          </button>

          <div className="text-center mt-4">
            <h1 className="mb-2 text-tertiaryColor font-light">OR</h1>
            <h1 className="text-primaryColor font-semibold cursor-pointer">Forgot Password?</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

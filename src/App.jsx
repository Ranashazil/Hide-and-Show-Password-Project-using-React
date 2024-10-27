import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [ispassword, setIspassword] = useState(false);
  const [error, setError] = useState('');


  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    if (newPassword.length <= 8) {
      setPassword(newPassword);
      setError(''); // Clear error message if length is within limit
    } else {
      setError('Password cannot be more than 8 characters.');
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-sm p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Show and Hide Password
        </h2>
        <div className="mb-6">
          <input 
            className="w-full px-5 py-3 text-gray-800 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-lg shadow-inner focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 placeholder-gray-500"
            name="pwd"
            placeholder=" Please Enter your password"
            type={ispassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            // maxLength={9}
          />
           {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <button
          className="w-full px-5 py-3 text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg hover:from-pink-500 hover:to-orange-500 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 transform transition duration-200 hover:scale-105"
          onClick={() => setIspassword((prevState) => !prevState)}
        >
          {ispassword ? 'Hide Password' : 'Show Password'}
        </button>
      </div>
    </div>
  );
}

export default App;

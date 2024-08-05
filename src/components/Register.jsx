import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  
  const registerUser = () => {
    axios.post('http://127.0.0.1:5000/signup', {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response);
      navigate("/");
    })
    .catch(function (error) {
      console.log(error, 'error');
      if (error.response.status === 401) {
        alert("Invalid credentials");
      }
    });
  };
  
  let imgs = [
    'https://as2.ftcdn.net/v2/jpg/03/39/70/91/1000_F_339709132_H9HSSTtTmayePcbARkTSB2qoZTubJ6bR.jpg',
  ];
  
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg">
        <div className="flex-1 p-6 lg:p-12">
          <img src={imgs[0]} alt="Register Illustration" className="w-full h-auto rounded-lg" />
        </div>
        <div className="flex-1 p-6 lg:p-12">
          <h2 className="text-2xl text-black text-center font-bold mb-6">Create Your Account</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border text-black border-gray-300 rounded-lg"
                placeholder="Enter a valid email address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border text-black border-gray-300 rounded-lg"
                placeholder="Enter password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-700 text-sm">Remember me</label>
              </div>
              <a href="#!" className="text-blue-500 text-sm">Forgot password?</a>
            </div>
            <div className="text-center lg:text-left">
              <button
                type="button"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
                onClick={() => registerUser()}
              >
                Sign Up
              </button>
              <p className="mt-4 text-black text-center text-sm">
                Already have an account? <a href="/login" className="text-blue-500">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

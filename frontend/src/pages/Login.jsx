import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { useAuth } from "../context/AuthContext"; // Import the AuthContext for authentication
import { toast } from "react-toastify"; // For displaying toast notifications
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Access the login function from AuthContext
  const navigate = useNavigate(); // Create a navigate instance

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password); // Call the login function with email and password
      toast.success("Logged in successfully!"); // Show success toast
      navigate("/"); // Navigate to the home page after successful login
    } catch (error) {
      toast.error(error.message); // Show error message in toast
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
      {/* Left Image Section */}
      <div className="hidden md:flex w-1/2 h-full items-center justify-center relative overflow-hidden">
        <img
          src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg"
          alt="Login Illustration"
          className="w-full h-auto object-cover z-10"
        />
        <div className="absolute bottom-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#FFC107"
              fillOpacity="1"
              d="M0,128L48,138.7C96,149,192,171,288,197.3C384,224,480,256,576,245.3C672,235,768,181,864,154.7C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold mb-4 text-center bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
          Login
        </h2>
        <p className="text-center font-bold text-md text-gray-600 mb-6">
          Welcome back! Please enter your credentials to log in.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label
                htmlFor="remember"
                className="text-sm text-gray-600 font-semibold"
              >
                Remember me
              </label>
            </div>
            <Link
              to="/forgotpassword"
              className="text-sm text-blue-600 font-semibold hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-yellow-300 py-3 px-6 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm font-bold text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-yellow-500 font-semibold hover:text-yellow-600"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

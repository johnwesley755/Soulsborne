import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/login-image.svg"; // Example image
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // For navigation after login

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    if (email === "test@example.com" && password === "password123") {
      toast.success("Login Successful!", { position: "top-center" }); // Show success notification
      navigate("/profile"); // Navigate to the profile page after login
    } else {
      toast.error("Invalid email or password!", { position: "top-center" }); // Show error notification
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row items-center max-w-3xl w-full">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={loginImage}
            alt="Login"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            Login to your account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
          <p className="mt-4 text-gray-600">
            Forgot your Password?{" "}
            <Link
              to="/forgotpassword"
              className="text-blue-500 hover:underline"
            >
              Forgot password
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

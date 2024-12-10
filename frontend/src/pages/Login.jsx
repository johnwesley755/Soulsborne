import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      toast.error("No account found. Please sign up first.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    // Validate the entered credentials
    if (storedUser.email === email && storedUser.password === password) {
      toast.success("Login successful!", {
        position: toast.POSITION.TOP_CENTER,
      });
      localStorage.setItem("isLoggedIn", true); // Set login status in localStorage
      navigate("/"); // Redirect to the dashboard page
    } else {
      toast.error("Invalid email or password!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
      <div className="hidden md:flex w-1/2 h-full items-center justify-center relative overflow-hidden">
        <img
          src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?t=st=1733843424~exp=1733847024~hmac=e6dee8c0c19932d3fee74c6a241b53846062ca1c56fb2faf411cd2867264847a&w=826"
          alt="Signup Illustration"
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

      <div className="bg-white mt-20 p-16 px-12 py-16 rounded-lg shadow-xl w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto max-md:ml-6 max-md:px-6">
        <h2 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
          Login
        </h2>
        <p className="text-center font-bold text-lg text-gray-600 mb-6">
          Welcome back! Please enter your credentials to log in.
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold text-lg mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold text-lg mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600 font-semibold">
                Remember me
              </label>
            </div>
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 font-semibold hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full font-bold text-lg bg-blue-800 text-yellow-300 py-4 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 font-bold text-gray-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text font-semibold"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

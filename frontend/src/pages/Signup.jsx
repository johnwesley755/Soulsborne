import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are required!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    // Mock backend authentication logic
    setTimeout(() => {
      toast.success("Account created successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
      // Redirect to home page after signup
      navigate("/");
    }, 1000); // Simulate a server delay
  };

  return (
    <div className="relative min-h-screen mt-10 flex items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
      {/* Left Hero Section with Image */}
      <div className="hidden md:flex w-1/2 h-full items-center justify-center relative overflow-hidden">
        <img
          src="https://img.freepik.com/free-vector/share-link-concept-illustration_114360-5438.jpg?t=st=1733841028~exp=1733844628~hmac=2120bc9dcd78efee411b53e0016f36180b26ea4bcbaea6937fb4cafe123cb9e8&w=826"
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

      {/* Signup Form */}
      <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 flex items-center justify-center p-6">
        <div className="bg-white shadow-xl rounded-3xl px-8 py-10 w-full max-w-md">
          <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
            Sign Up
          </h2>
          <p className="text-center text-gray-600 mb-8 font-bold">
            Welcome to <strong>Soulsborne</strong>, the place where limitless
            adventures await. Create an account and begin your journey today!
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600 mb-2 font-bold">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-bold">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-bold">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-purple-700 to-indigo-800 text-yellow-400 font-bold rounded-lg hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-6 text-gray-600 font-bold">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-yellow-500 hover:underline font-bold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

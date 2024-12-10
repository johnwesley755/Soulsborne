import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Import the AuthContext
import { toast } from "react-toastify"; // For displaying toast notifications
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuth(); // Access the resetPassword function from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email); // Use resetPassword from AuthContext
      toast.success("Password reset email sent!"); // Show success toast
    } catch (error) {
      toast.error("Error sending password reset email: " + error.message); // Show error toast
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900">
      {/* Left Image Section */}
      <div className="hidden md:flex w-1/2 h-full items-center justify-center relative overflow-hidden">
        <img
          src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1383.jpg"
          alt="Forgot Password Illustration"
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

      {/* Form Section */}
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold mb-4 text-center bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
          Forgot Password?
        </h2>
        <p className="text-center font-bold text-md text-gray-600 mb-6">
          Enter your email to reset your password.
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

          <button
            type="submit"
            className="w-full bg-blue-800 text-yellow-200 font-bold py-3 px-6 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center mt-4 text-sm font-bold text-gray-600">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-yellow-500 font-semibold hover:text-yellow-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;

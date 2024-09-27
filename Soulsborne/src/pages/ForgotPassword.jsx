import React, { useState } from "react";
import { Link } from "react-router-dom";
import forgotPasswordImage from "../assets/forgot-password.svg"; // Example image
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      // Handle the forgot password logic here (e.g., send password reset link)
      console.log("Password reset link sent to:", email);
      toast.success("Password reset link sent!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row items-center max-w-3xl w-full">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={forgotPasswordImage}
            alt="Forgot Password"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            Forgot your password?
          </h2>
          <p className="text-gray-600 mb-4">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Send Reset Link
            </button>
          </form>
          <p className="mt-4 text-gray-600">
            Remember your password?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Company from "./pages/Company";
import Courses from "./pages/Courses"; // Ensure the correct path
import Course from "./pages/Course"; // Import Course component
import Freelance from "./pages/Freelance";
import JobPost from "./pages/JobPost";

const App = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/company" element={<Company />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<Course />} />{" "}
          <Route path="/freelance" element={<Freelance />} />
          <Route path='/jobpost' element={<JobPost />} />
          {/* Route for course details */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;

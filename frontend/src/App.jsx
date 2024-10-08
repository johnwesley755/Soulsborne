import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';  // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Import toastify CSS
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks"
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Company from "./pages/company";
import Footer from "./components/Footer"
const App = () => {
  return (
    <main className="">
      <BrowserRouter>
        <Header />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path= "/tasks" element={<Tasks />} />
          <Route path= "/company" element={<Company />} />
        </Routes>
        <Footer />  
      </BrowserRouter>
    </main>
  );
};

export default App;

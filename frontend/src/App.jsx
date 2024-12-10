// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Make sure this component exists
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";
import Company from "./pages/Company";
import Courses from "./pages/Courses"; // Ensure the correct path
import Course from "./pages/Course"; // Import Course component
import Freelance from "./pages/Freelance";
import JobPost from "./pages/JobPost";
import BuyerPage from "./pages/BuyerPage";
import SellerPage from "./pages/SellerPage";
import StudentProfilePage from "./pages/StudentProfilePage";
import GigDetailsPage from "./pages/GigDetailsPage";
import { AuthProvider } from "./context/AuthContext";
import StartupDetails from "./pages/StartupDetails";
import { GigProvider } from "./context/GigContext";
import { ProfileProvider } from "./context/ProfileContext";
import CommunityPage from "./pages/CommunityPage";
import StartupPage from "./pages/StartupPage";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <GigProvider>
          <ProfileProvider>
            <Header />
            <Routes>
              {/* Routes for general pages */}
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/company" element={<Company />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<Course />} />
              <Route path="/freelance" element={<Freelance />} />
              <Route path="/jobpost" element={<JobPost />} />
              <Route path="/startup" element={<StartupPage />} />
              <Route path="/startup/:id" element={<StartupDetails />} />
              <Route path="/about" element={<About />} />

              {/* Added StartupDetail route */}
              {/* Routes for freelance-related pages */}
              <Route path="/buyer" element={<BuyerPage />} />
              <Route path="/seller" element={<SellerPage />} />
              <Route path="/student-profile" element={<StudentProfilePage />} />
              <Route path="/gig/:id" element={<GigDetailsPage />} />
              <Route path="/community" element={<CommunityPage />} />
            </Routes>
            <Footer />
          </ProfileProvider>
        </GigProvider>
        <ToastContainer // Toast notifications for user feedback
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthProvider>
    </Router>
  );
};

export default App;

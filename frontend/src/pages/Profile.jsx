import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import illustrationImage from "../assets/illustration-image.svg"; // Your illustration image
import countries from "react-select-country-list"; // Import country list

const Profile = () => {
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [gender, setGender] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const [chatOpen, setChatOpen] = useState(false); // To toggle chat visibility
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Dynamically load country options for react-select with flags
  const countryOptions = countries()
    .getData()
    .map((country) => ({
      value: country.value,
      label: `${country.label}`,
    }));

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption.value);
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle chatbot input
  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: "user" }];
      setMessages(newMessages);
      setInput(""); // Clear input field

      // Simulate bot response after a delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Hello! How can I assist you today?", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  // Animation variants for smooth entry
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="mt-20 flex items-center justify-center bg-gradient-to-b from-blue-600 to-purple-700 max-md:bg-white py-12">
      {/* Profile Container */}
      <motion.div
        className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-6xl lg:p-16 p-10 relative"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Left Side: Illustration & Top Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-4 p-6">
          <motion.h2
            className="text-5xl font-bold text-gray-800 self-start mb-6"
            variants={fadeInUp}
          >
            Tell us more about you!
          </motion.h2>
          <motion.p
            className="text-gray-600 self-start text-xl mb-6"
            variants={fadeInUp}
          >
            Fill out your details to complete your profile.
          </motion.p>
          <motion.img
            src={illustrationImage}
            alt="Illustration"
            className="w-full h-auto md:h-96 mt-20 object-contain"
            variants={fadeInUp}
          />
        </div>

        {/* Right Side: Form */}
        <motion.div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Image Upload */}
          <div className="col-span-full text-center mb-6">
            <label className="block text-gray-600 mb-2">Profile Photo</label>
            <label className="cursor-pointer" htmlFor="file-upload">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </label>
            <input
              type="file"
              accept="image/*"
              id="file-upload"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* Other form fields */}
          <div className="col-span-1">
            <label className="block text-gray-600 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-600 mb-2">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-600 mb-2">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="block text-gray-600 mb-2">Country</label>
            <Select
              options={countryOptions}
              onChange={handleCountryChange}
              value={countryOptions.find(
                (option) => option.value === selectedCountry
              )}
              className="w-full"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-600 mb-2">Phone Number</label>
            <PhoneInput
              country={selectedCountry.toLowerCase()}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputClass="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-600 mb-2">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your city"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-600 mb-2">State</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your state"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-600 mb-2">Postal Code</label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your postal code"
            />
          </div>
          {/* Chat Button */}
          <motion.div
            className="fixed right-10 bottom-10 z-50 flex flex-col items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
              onClick={() => setChatOpen(!chatOpen)}
            >
              {chatOpen ? "Close Chat" : "Chat"}
            </button>

            {/* Chat Box */}
            {chatOpen && (
              <motion.div
                className="bg-white border border-gray-300 rounded-lg shadow-lg w-72 mt-4 p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-64 overflow-y-scroll">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`p-2 my-2 rounded-lg ${
                        msg.sender === "user"
                          ? "bg-blue-100 text-right"
                          : "bg-gray-100 text-left"
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <button
                    className="bg-blue-500 text-white ml-2 px-4 rounded-lg"
                    onClick={handleSendMessage}
                  >
                    Send
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;

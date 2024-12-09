import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import illustrationImage from "../assets/illustration-image.svg"; // Your illustration image
import countries from "react-select-country-list"; // Import country list
import { FaRobot } from "react-icons/fa";

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
      // Add user message to chat
      const newMessages = [...messages, { text: input, sender: "user" }];
      setMessages(newMessages);
      setInput(""); // Clear input field

      // Display "Bot is typing..." message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Bot is typing...", sender: "bot" },
      ]);

      // Simulate bot response after a delay
      setTimeout(() => {
        setMessages((prevMessages) =>
          prevMessages.filter((msg) => msg.text !== "Bot is typing...")
        ); // Remove "Bot is typing..."

        // Generate a bot response based on user input
        const response = generateBotResponse(input);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response, sender: "bot" },
        ]);
      }, 1000);
    } else {
      alert("Please enter a valid message!");
    }
  };

  // Function to generate bot responses
  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Example dynamic responses
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hi there! How can I assist you today?";
    } else if (lowerMessage.includes("help")) {
      return "Sure! Can you please specify what you need help with?";
    } else if (
      lowerMessage.includes("thank you") ||
      lowerMessage.includes("thanks")
    ) {
      return "You're welcome! Is there anything else I can help you with?";
    } else if (lowerMessage.includes("bye")) {
      return "Goodbye! Have a great day!";
    } else if (lowerMessage.length > 200) {
      return "Your message is too long. Can you summarize it for me?";
    } else {
      return "I'm not sure I understand. Can you clarify?";
    }
  };

  // Function to handle profile update
  const handleUpdateProfile = () => {
    const profileData = {
      name,
      email,
      dob,
      gender,
      country: selectedCountry,
      phone,
      city,
      state,
      postalCode,
      profileImage,
    };

    console.log("Profile updated:", profileData);
    // Here, you can implement the logic to send this data to your backend or save it locally
    // For example, you might call an API to update the user profile on your server
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
    <div className="mt-20 flex items-center justify-center bg-gradient-to-b from-indigo-900 to-purple-900 py-12">
      {/* Profile Container */}
      <motion.div
        className="bg-white max-md:bg-gradient-to-b from-indigo-900 to-purple-900 max-md:shadow-none shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-6xl lg:p-16 p-10 relative"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Left Side: Illustration & Top Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-4 p-6">
          <motion.h2
            className="text-5xl font-extrabold max-md:text-white text-gray-800 self-start mb-6"
            variants={fadeInUp}
          >
            Tell us more about you!
          </motion.h2>
          <motion.p
            className="text-gray-600 max-md:text-gray-100 self-start font-bold text-xl mb-6"
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
        <motion.div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 font-semibold">
          {/* Profile Image Upload */}
          <div className="col-span-full text-center mb-6 font-bold">
            <label className="block text-gray-600 mb-2 max-md:text-gray-100">
              Profile Photo
            </label>
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
            <label className="block text-gray-600 mb-2 max-md:text-gray-100">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-600 mb-2 max-md:text-gray-100">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-600 mb-2 max-md:text-gray-100">
              Date of Birth
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-600 mb-2 max-md:text-gray-100">
              Gender
            </label>
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
            <label className="block text-gray-600 mb-2 max-md:text-gray-100">
              Country
            </label>
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
            <label className="block text-gray-600 mb-2 max-md:text-gray-100">
              Phone Number
            </label>
            <PhoneInput
              country={selectedCountry.toLowerCase()}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputClass="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-600 mb-2 max-md:text-gray-100">
              City
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your city"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-600 mb-2 max-md:text-gray-100">
              State
            </label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your state"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-600 mb-2 max-md:text-gray-100">
              Postal Code
            </label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your postal code"
            />
          </div>

          {/* Update Profile Button */}
          <div className="col-span-full">
            <button
              onClick={handleUpdateProfile}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Update Profile
            </button>
          </div>

          {/* Chatbot Section */}
          {/* Chatbot Section */}
  
          <div className="fixed bottom-5 right-5 z-50">
            {/* Robot Icon */}

            <div
              className="flex items-center justify-center w-16 h-16 bg-gradient-to-b from-indigo-900 to-purple-900 border text-white rounded-full shadow-lg cursor-pointer transform hover:scale-110 transition-transform animate-bounce"
              onClick={() => setChatOpen(!chatOpen)}
            >
              <FaRobot className="text-3xl font-extrabold" />
            </div>

            {/* Chat Interface */}
            {chatOpen && (
              <div className="absolute bottom-20 right-0 w-80 border rounded-lg bg-gradient-to-br from-gray-100 to-gray-300 shadow-2xl">
                {/* Chat Header */}
                <div className="flex items-center justify-between p-3 bg-indigo-600 text-white rounded-t-lg">
                  <h3 className="text-lg font-bold">Chatbot</h3>
                  <button
                    className="text-white hover:text-gray-200 transition-colors"
                    onClick={() => setChatOpen(false)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>

                {/* Chat Messages */}
                <div className="h-60 overflow-y-auto p-3 space-y-3 bg-white border-t">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`p-3 rounded-lg shadow-sm ${
                          msg.sender === "user"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        <span className="font-bold">
                          {msg.sender === "user" ? "You: " : "Bot: "}
                        </span>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Section */}
                <div className="flex items-center p-3 border-t bg-gray-50">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Type a message..."
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage();
                      }
                    }}
                  />
                  <button
                    className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition-all"
                    onClick={handleSendMessage}
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;

import React, { useState } from "react";
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
  const [email, setEmail] = useState(""); // New email state
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [gender, setGender] = useState("");
  const [profileImage, setProfileImage] = useState(null);

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

  return (
    <div className="mt-20 flex items-center justify-center bg-blue-100 max-md:bg-white py-12">
      {/* Profile Container */}
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-6xl lg:p-16 p-10">
        {" "}
        {/* Increased padding */}
        {/* Left Side: Illustration & Top Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-4 p-6">
          {/* Top Text (aligned to left) */}
          <h2 className="text-4xl font-bold text-gray-800 self-start mb-6">
            Tell us more about you!
          </h2>
          <p className="text-gray-600 self-start mb-6">
            Fill out your details to complete your profile.
          </p>

          {/* Illustration Image */}
          <img
            src={illustrationImage}
            alt="Illustration"
            className="w-full h-auto md:h-96 mt-20 object-contain" // Adjusted height
          />
        </div>
        {/* Right Side: Form */}
        <div className="w-full md:w-1/2">
          {/* Form Content with Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
                className="hidden" // Hide the file input
              />
            </div>

            {/* Name Input */}
            <div className="col-span-1">
              <label className="block text-gray-600 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" // Added padding
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div className="col-span-1">
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" // Added padding
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Date of Birth Input */}
            <div className="col-span-1">
              <label className="block text-gray-600 mb-2">Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" // Added padding
              />
            </div>

            {/* Gender Input */}
            <div className="col-span-1">
              <label className="block text-gray-600 mb-2">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" // Added padding
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Country Selector with Flags */}
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

            {/* Phone Number Input */}
            <div className="col-span-1">
              <label className="block text-gray-600 mb-2">Phone Number</label>
              <PhoneInput
                country={selectedCountry.toLowerCase()}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputClass="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" // Consistent width and padding
              />
            </div>

            {/* City Input */}
            <div className="col-span-1">
              <label className="block text-gray-600 mb-2">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" // Added padding
                placeholder="Enter your city"
              />
            </div>

            {/* State Input */}
            <div className="col-span-1">
              <label className="block text-gray-600 mb-2">State</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" // Added padding
                placeholder="Enter your state"
              />
            </div>

            {/* Postal Code Input */}
            <div className="col-span-1">
              <label className="block text-gray-600 mb-2">Postal Code</label>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" // Added padding
                placeholder="Enter your postal code"
              />
            </div>
          </div>

          {/* Closing Message */}
          <div className="text-center mt-6">
            <p className="text-gray-700 text-lg">
              Lets start to A.S.C.E.N.D! 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
